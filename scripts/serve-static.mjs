// Serves the static export in out/ the way GitHub Pages does: directory paths
// resolve to index.html, paths missing a trailing slash redirect, and unknown
// paths return 404.html with a 404 status. Used by `npm start` and Playwright.
// Set BASE_PATH (as for the build) to preview the project-pages URL layout.
import { createServer } from "node:http";
import { readdir, readFile, stat } from "node:fs/promises";
import {
  basename,
  dirname,
  extname,
  join,
  normalize,
  relative,
  resolve,
  sep,
} from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "127.0.0.1";
const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};
const isFile = (path) =>
  stat(path).then(
    (s) => s.isFile(),
    () => false,
  );

// The router prefetches each route segment from a flat file beside the page,
// such as `__next.battles.$d$slug.__PAGE__.txt`. Next 16 builds that name with
// `/` as the only separator, so an export made on Windows (where the segment
// paths use `\`) writes `__next.battles/$d$slug/__PAGE__.txt` instead. Linux
// builds, including the GitHub Pages deploy, are flat. Map the flat request
// name to the nested file, indexed per directory, so local previews of a
// Windows build do not log a 404 for every prefetched segment.
const nestedSegments = new Map();
async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory()
        ? listFiles(join(dir, entry.name))
        : [join(dir, entry.name)],
    ),
  );
  return nested.flat();
}
async function findNestedSegment(path) {
  const name = basename(path);
  if (!name.startsWith("__next.") || !name.endsWith(".txt")) return null;
  const dir = dirname(path);
  if (!nestedSegments.has(dir)) {
    const index = new Map();
    const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      if (!entry.isDirectory() || !entry.name.startsWith("__next.")) continue;
      for (const file of await listFiles(join(dir, entry.name))) {
        index.set(relative(dir, file).split(sep).join("."), file);
      }
    }
    nestedSegments.set(dir, index);
  }
  return nestedSegments.get(dir).get(name) ?? null;
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  const inBase =
    url.pathname === basePath || url.pathname.startsWith(`${basePath}/`);
  const relative = inBase ? url.pathname.slice(basePath.length) || "/" : null;
  if (relative === null) {
    res.writeHead(404).end();
    return;
  }
  const path = normalize(join(root, decodeURIComponent(relative)));
  if (!path.startsWith(root)) {
    res.writeHead(400).end();
    return;
  }
  let file = url.pathname.endsWith("/") ? join(path, "index.html") : path;
  if (!(await isFile(file))) file = (await findNestedSegment(file)) ?? file;
  if (!(await isFile(file))) {
    if (await isFile(join(path, "index.html"))) {
      res.writeHead(301, { Location: `${url.pathname}/${url.search}` }).end();
      return;
    }
    file = join(root, "404.html");
    res.statusCode = 404;
  }
  const body = await readFile(file);
  res.setHeader(
    "Content-Type",
    types[extname(file)] ?? "application/octet-stream",
  );
  res.end(body);
}).listen(port, host, () => {
  console.log(`Serving out/ at http://${host}:${port}`);
});
