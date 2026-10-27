import other from "./research/other.json" with { type: "json" };
import alexander from "./research/alexander.json" with { type: "json" };
import rome from "./research/rome.json" with { type: "json" };
import napoleon from "./research/napoleon.json" with { type: "json" };
import ww1 from "./research/ww1.json" with { type: "json" };
import serbianFront from "./research/serbian-front.json" with { type: "json" };
import ww2 from "./research/ww2.json" with { type: "json" };
// Studies are authored in per-collection files; consumers validate with researchSchema.
export const research = [
  ...other,
  ...alexander,
  ...rome,
  ...napoleon,
  ...ww1,
  ...serbianFront,
  ...ww2,
];
