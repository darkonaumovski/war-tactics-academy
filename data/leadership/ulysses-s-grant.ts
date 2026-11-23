import type { LeadershipVolume } from "../../lib/types";
// Volume 8, shared by Grant and Lee. Lessons are added in reviewed batches;
// docs/LEADERSHIP_EVIDENCE_GRANT_LEE.md records which sources can carry each
// one, and docs/SOURCE_AUDIT.md how each was read. Not yet listed in
// `leadershipVolumes`, so no route goes live until the pilot ships.
export const grantLeeVolume: LeadershipVolume = {
  commanderSlug: "ulysses-s-grant",
  alsoCommanderSlugs: ["robert-e-lee"],
  title:
    "Leadership Lessons from Grant and Lee: the American Civil War, 1861–1865",
  summary:
    "What a person who leads others can take from Ulysses S. Grant and Robert E. Lee, the opposing commanders of the American Civil War’s last year, read by a historian, a strategist and a psychologist, with the costs left in.",
  introduction:
    "In February 1862 Ulysses S. Grant, a little-known Union brigadier, took Forts Henry and Donelson and demanded unconditional surrender; at Shiloh two months later his army was attacked in its camps and held on; in 1863 he took Vicksburg. In March 1864 Lincoln brought him east as general-in-chief of all the Union armies, and for a year he fought Robert E. Lee, who had beaten a larger army at Chancellorsville and lost at Gettysburg, through the Wilderness, Spotsylvania and the siege of Petersburg, until Lee surrendered at Appomattox on 9 April 1865. The Confederacy Lee served was founded to keep slavery, as its own states’ declarations of secession say. The record is unequal. Grant wrote his memoirs twenty years later, finishing them days before he died of cancer; Lee wrote none, and after his death former Confederates made him the Confederacy’s stainless hero and blamed others for his defeats. Each lesson here tests one claim about leading people against that record: what happened, who says so and why they might shade it, how the decision looks without hindsight, and what research on human behaviour can and cannot add. The costs stay in view: the enslaved people the Confederacy fought to keep and those who freed themselves, the soldiers of both armies, the Black soldiers of the Union army, prisoners on both sides, the civilians of Vicksburg and Petersburg, and the wounded left between the lines. One war cannot prove a rule, so every lesson also shows where the same behaviour failed.",
  question:
    "Why did Grant win: persistence, the Union’s resources, Lee’s own choices, or does the record decide what we see?",
  parts: [
    "Orientation",
    "Grant in the West",
    "Lee in Virginia",
    "Grant against Lee",
    "The end and after",
  ],
  lessons: [],
  inProgress:
    "This volume is being written. Its lessons are added in reviewed batches.",
};
