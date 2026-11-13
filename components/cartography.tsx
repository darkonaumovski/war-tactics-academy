import { useId } from "react";
// One path per layer rather than one element per stroke: the battle catalog
// draws this map once per card, and separate elements add thousands of nodes.
const contours = Array.from(
  { length: 24 },
  (_, n) =>
    `M ${-100 + n * 3} ${60 + n * 21} C ${100 + n * 8} ${-120 + n * 24}, ${190 + n * 14} ${340 + n * 4}, ${420 + n * 8} ${190 + n * 14} S ${790 + n * 6} ${140 + n * 18}, 1050 ${390 + n * 12}`,
).join(" ");
const trees = Array.from(
  { length: 90 },
  (_, i) => `M${70 + ((i * 47) % 780)} ${70 + ((i * 71) % 460)}l-4 10h8z`,
).join("");
export function Cartography({ variant = "waterloo" }: { variant?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className="cartography"
      viewBox="0 0 900 600"
      role="img"
      aria-label={`Decorative cartographic study inspired by ${variant}; not a historical survey`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={`grid${id}`}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M60 0H0V60"
            fill="none"
            stroke="#c2a46b"
            strokeOpacity=".1"
          />
        </pattern>
        <radialGradient id={`wash${id}`}>
          <stop stopColor="#31433f" />
          <stop offset="1" stopColor="#16272b" />
        </radialGradient>
        <filter id={`texture${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".12" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" mode="soft-light" />
        </filter>
      </defs>
      <rect width="900" height="600" fill={`url(#wash${id})`} />
      <rect width="900" height="600" fill={`url(#grid${id})`} />
      <g fill="none" stroke="#a8af81" strokeWidth="1" opacity=".3">
        <path d={contours} />
      </g>
      <g fill="none" stroke="#c5b58d" opacity=".45">
        <path
          strokeWidth="6"
          strokeOpacity=".15"
          d="M540 -30 Q400 190 480 280 T700 630"
        />
        <path strokeWidth="1.8" d="M540 -30 Q400 190 480 280 T700 630" />
        <path strokeDasharray="7 5" d="M-40 460 Q250 310 470 280 T950 60" />
        <path d="M100 0Q160 230 310 300T370 650" />
      </g>
      <path
        d="M800 0 Q570 170 700 260 T790 600"
        stroke="#789b9c"
        strokeWidth="3"
        fill="none"
        opacity=".35"
      />
      <g fill="#75806a" opacity=".3">
        <path d={trees} />
      </g>
      <Labels variant={variant} fontSize={17} />
      <g transform="translate(470 282)">
        <circle r="65" fill="#c2a46b" opacity=".04" />
        <circle r="39" fill="none" stroke="#c2a46b" strokeOpacity=".2" />
        <circle r="17" fill="#19282b" stroke="#cfb47b" strokeWidth="1.5" />
        <path d="m-6 6 12-12M-6-6 12 12" stroke="#e9dfcb" strokeWidth="2" />
        <circle r="4" fill="#c2a46b" />
      </g>
      <g
        transform="translate(790 485)"
        stroke="#c2a46b"
        fill="none"
        opacity=".65"
      >
        <path d="M0-40V40M-40 0H40m-28-28 56 56m0-56-56 56" />
        <path d="m0-33 9 33-9 33-9-33z" />
        <circle r="26" />
        <text
          x="-5"
          y="-48"
          stroke="none"
          fill="#d7c291"
          fontFamily="serif"
          fontSize="14"
        >
          N
        </text>
      </g>
      <rect
        width="900"
        height="600"
        filter={`url(#texture${id})`}
        opacity=".24"
      />
    </svg>
  );
}
function Labels({ variant, fontSize }: { variant: string; fontSize: number }) {
  return (
    <g
      fill="#ddd0a8"
      fontFamily="Georgia, serif"
      fontSize={fontSize}
      fontStyle="italic"
      opacity=".7"
    >
      {variant.toLowerCase() === "waterloo" ? (
        <>
          <text x="390" y="140">
            Mont-Saint-Jean
          </text>
          <text x="240" y="390">
            Hougoumont
          </text>
          <text x="530" y="420">
            La Belle Alliance
          </text>
          <text x="700" y="200" transform="rotate(-26 700 200)">
            Bois de Paris
          </text>
        </>
      ) : (
        <>
          <text x="390" y="140">
            {variant}
          </text>
          <text x="530" y="420">
            Cartographic study
          </text>
        </>
      )}
    </g>
  );
}
// The battle cards' version. Every card shares the same artwork, so it is
// drawn once, as a background in the stylesheet (`.card-map` in globals.css,
// built from the layers above), and each card writes only its place labels.
// Drawn inline, the artwork added about 7 KB per card, twice over: in the HTML
// and again in the page data.
export function CardMap({ variant }: { variant: string }) {
  return (
    <div
      className="cartography card-map"
      role="img"
      aria-label={`Decorative cartographic study inspired by ${variant}; not a historical survey`}
    >
      <svg
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <Labels variant={variant} fontSize={22} />
      </svg>
    </div>
  );
}
