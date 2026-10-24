# Curated media provenance

Verified on 2026-10-24. The catalog is `data/media.json`: two official videos, two public-domain portrait records, two historical maps, and three primary-document resources. All descriptions are original short editorial introductions. This is a curated starting collection, not comprehensive visual coverage of all eras.

## Videos

The [National Archives UK Archives Live page](https://www.nationalarchives.gov.uk/education/about/archives-live/) explicitly links both **Archives Live: D-Day** (`bSR7mho-XZY`) and **Archives Live: D-Day - Extended Q&A** (`GwomhQ5eYig`). The companion [educational resource page](https://www.nationalarchives.gov.uk/education/resources/archives-live-d-day/) identifies the original event as June 3, 2024.

Both IDs were checked against YouTube's public oEmbed endpoint. Each returned the matching title, the author `The National Archives UK`, its official channel URL, and a YouTube player iframe. The catalog uses the equivalent YouTube privacy-enhanced `youtube-nocookie.com/embed/` URLs. These checks verify identity and that YouTube supplies an embed; they are not a guarantee of future playback in every region or browser. Retain the direct watch link and an unavailable-media fallback. Do not autoplay. Do not imply an open video license or download/rehost the films.

The two videos are complementary parts of one D-Day broadcast, not independent scholarly accounts. Their inclusion must not imply that all academy engagements have verified video coverage.

## Portraits

The Harry S. Truman Library item pages explicitly mark both selected objects as public domain:

- [Ulysses S. Grant, accession 60-261](https://www.trumanlibrary.gov/photograph-records/60-261), circa 1865, NAID 348099879.
- [Dwight D. Eisenhower, accession 60-326](https://www.trumanlibrary.gov/photograph-records/60-326), February 1960, NAID 348100501.

Current image URLs were extracted from the institution's actual `<img>` elements; no file paths were guessed. The old Grant S3 URL in an indexed page returned an error, so the catalog uses the current `catalog.archives.gov/medialz/` URL from the live institutional page. No remote image was downloaded. The later Eisenhower portrait is explicitly dated to avoid presenting it as wartime photography. Creator identity is not invented when the item page does not supply one.

Both current portrait endpoints returned HTTP 200 and `image/jpeg` to HEAD requests during verification.

## Maps

- [Bachelder's Gettysburg map](https://www.loc.gov/resource/g3824g.cw0325000c): the Library of Congress record describes the detailed postwar survey and reconstructed positions. Its rights section permits reuse unless a contrary item advisory applies; none appears on the selected record. The record has inconsistent publication dates across display metadata and auto-generated citations, so the catalog does not assert a single publication year. Source-page access was verified through the indexed institutional record; a direct fetch later returned HTTP 403. No image URL is supplied.
- [Craan's Waterloo map](https://bibliotecavirtual.defensa.gob.es/BVMDefensa/en/consulta/registro.do?id=101352): the Spanish Ministry of Defence's institutional catalog identifies the 1816 map and gives CC BY 4.0 for the digital copy. The exact requested institutional credit appears in the attribution field. No direct image URL is supplied because the archival image endpoint was not verified. The linked resource permits inspection of the original map without pretending the academy's simplified map is a historical reproduction.

## Primary documents

- [Eisenhower's D-Day Order of the Day](https://www.archives.gov/milestone-documents/general-eisenhowers-order-of-the-day): institutional scan, transcript, archival citation and context.
- [Eisenhower's contingency note](https://www.eisenhowerlibrary.gov/research/online-documents/world-war-ii-d-day-invasion-normandy): the library's collection page links the note and its transcript and explains the erroneous handwritten month. The catalog records NAID 186470 so the exact item is identifiable within the collection.
- [Appomattox implementation agreement](https://www.archives.gov/milestone-documents/articles-of-agreement-of-surrender): the April 10, 1865 agreement is distinct from the preceding April 9 exchange between Grant and Lee. The catalog does not claim that this single surrender immediately ended all fighting.

These are linked archival resources; complete third-party pages and modern editorial prose are not copied. No invented quotation, portrait attribution, video ID, or unrestricted reuse claim is included. Local availability of core lessons must not depend on external media loading.
