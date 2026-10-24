import { z } from "zod";
import records from "../data/media.json";
const https = z.url().refine((url) => url.startsWith("https://"));
export const mediaSchema = z.array(
  z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    kind: z.enum(["video", "portrait", "map", "document"]),
    publisher: z.string().min(1),
    description: z.string().min(1),
    url: https,
    eraId: z.string(),
    battleSlugs: z.array(z.string()),
    commanderSlugs: z.array(z.string()),
    license: z.string().min(1),
    attribution: z.string().min(1),
    verifiedOn: z.iso.date(),
    embedUrl: z
      .url()
      .regex(/^https:\/\/www\.youtube-nocookie\.com\/embed\/[A-Za-z0-9_-]{11}$/)
      .optional(),
    imageUrl: https.optional(),
  }),
);
export type Media = z.infer<typeof mediaSchema>[number];
export const media = mediaSchema.parse(records);
