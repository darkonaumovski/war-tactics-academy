# Leadership Lessons: template for a new volume

This template describes how to write the next volume of Leadership Lessons, drawn from the Napoleon volume (`data/leadership/napoleon.ts`, prompt in `docs/LEADERSHIP_LESSONS_PROMPT.md`). It covers method, structure and checks. It does not choose the next commander; that waits for approval.

## Before writing

1. **Pick a commander with a record that can be tested.** The catalog should already hold their profile and at least eight engagement studies, so lessons link to studies instead of retelling them. A commander who wrote their own record, as Napoleon did, needs an orientation lesson on that first.
2. **Ask one question for the whole volume.** Napoleon's was "Did he get worse, or did the problem get harder?". Each lesson ends with a paragraph on it, and the last lesson answers it and invites the reader to argue the opposite.
3. **Run an evidence pass before any lesson** (see `docs/LEADERSHIP_EVIDENCE.md`). Grade each planned lesson strong, adequate or thin on its history and its psychology, trace every famous saying to a named origin, and list what has and has not been read. Drop or merge thin lessons instead of padding them.
4. **Agree the curriculum.** Parts that move from orientation to judgement, people, organisation, the limits of the self and what remains have worked well. Plan batches of two to four lessons.

## Data

- One file per volume in `data/leadership/<commander-slug>.ts`, exported as a `LeadershipVolume` and added to `leadershipVolumes` in `data/leadership/index.ts`. Nothing else needs registering: routes, sitemap, search, profile and study links and the progress keys all derive from that list.
- Sources are keyed in a `const s = { … } satisfies Record<string, Source>` block at the top of the file, and each lesson lists the ones it uses. `refs` index into that lesson's own list. A small script that numbers the refs from keys avoids index mistakes.
- `leadershipVolumeSchema` in `lib/validation.ts` enforces conditional claims, two to four episodes with at least one linked study, a psychologist `limit` and `base`, ref ranges, banned untraced sayings, diagnostic labels and casualty figures. Add a banned saying to it when one comes up.
- Give every lesson an `inBrief` strength and shadow, one short line each, for the volume page's table.
- Remove `inProgress` from the volume when the last lesson is written.

## A lesson

Use the anatomy in the Napoleon prompt: the moment, the claim under test, what happened, who says so, the strategist, the psychologist, the shadow, the counter-case, the cost, carrying it forward, what it adds to the volume's question, then three quiz questions, an optional source check and a seminar prompt. About 1,400–1,600 words of body text.

Rules that held throughout the Napoleon volume:

- **Cite only what was opened in the session.** Never cite from memory or a search snippet, and never guess a URL. Abstract-only research is cited for what the abstract says, and the audit says "abstract only".
- **Every claim is conditional**, with its scope, and every lesson shows where the same behaviour failed.
- **Judge decisions without hindsight**: what the commander knew, what alternatives existed, what the enemy could do.
- **Psychology is always interpretation**, with a stated base and limit. No retrospective diagnosis. Use `base: "none"` when no reliable mechanism exists, and say so.
- **Keep the human cost in view**, without casualty figures, which the sources rarely agree on.
- **No invented quotations.** Translate in your own words without quotation marks. Keep quotations from modern copyrighted works very short, or paraphrase.
- **Be even-handed.** Admiring and hostile witnesses side by side, each with their stake.
- **No management-book voice.** Conditions and questions, not instructions.
- **Counter-cases come from the catalog.** Do not add engagements or commanders inside a batch; propose them.

## Each batch

1. Read every source cited, then draft.
2. Run a source check of the draft against what was read, and correct overreach (dates, superlatives, attributions).
3. Add a `docs/SOURCE_AUDIT.md` section listing every source, how it was read, its language, and the gaps closed or left open.
4. Update the curriculum-order test in `tests/unit/leadership.test.ts`, the lesson count in the end-to-end test, the prompt status and `docs/PRODUCT_ROADMAP.md`.
5. Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run db:seed`, `npm run build` and `npm run test:e2e:chromium`, and a link check on new URLs.
6. Confirm the built sizes of `/battles`, the home page and `/commanders` are unchanged, and check two new lessons at 375px.
7. Show the diff summary and wait for approval before committing. Push only on an explicit go-ahead. The README release row for each commit goes in the next commit.

## After the last lesson

Integration needs no new code for a second volume: the hub lists it, its volume page builds the strength-and-shadow table, studies and profiles link its lessons, and search and the sitemap include it. Check those pages in the browser, add a README feature line, and update the About page only if the method has changed.
