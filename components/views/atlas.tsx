import type { Catalog } from "../../lib/types";
import { Heading } from "../ui";
import { Atlas } from "../atlas";
export function AtlasPage({ c }: { c: Catalog }) {
  return (
    <div className="page-container">
      <Heading
        eyebrow="GEOGRAPHY OF COMMAND / 04"
        title="The world is your classroom."
        description="Place each engagement in its geographic context. Select a marker, explore an era, or use the location list below."
      />
      <Atlas battles={c.battles} />
    </div>
  );
}
