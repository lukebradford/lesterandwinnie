# Research log

Every fact on the site should trace back to a source listed here. Mark facts **[verified]** when a source states them, **[inferred]** when we deduced them, and **[open]** when they still need checking. Do not add private details about living family members (birth dates, addresses, etc.). Children are mentioned only as "five children".

## Primary sources (best first)
1. ***A Life Remembered: Memoirs of Dr. Winifred Bradford*** (as told to Peggy Alessandri, 2011). 210-page scanned PDF, publicly shared on Google Drive: https://drive.google.com/file/d/1LC9_7HQXvQqN3VLS2Lo_WY1yWoOWgZ2F/view
   - It has no text layer. To re-OCR: download it, render pages with PyMuPDF (`fitz`) and OCR them with macOS Vision or tesseract. Do **not** commit the OCR text: it contains private details about living people.
   - Page numbers below are PDF page numbers.
   - Photos already extracted to `assets-src/photos/memoir-*.jpg`:
     - p3: Lester and Winnie in Enid, 1951
     - p35: at Yale, 1950 (the scan is dithered; `crops.json` descreens it with a 1.6 px blur, then unsharp-masks it after resizing)
     - p60: wedding, the Rotifunk church
     - p64: Kayima home, 1953
     - p79: Manjama Health Center
     - p118: the MV Birth Center house, the "Babies her specialty" clipping
     - p147: Lester in a poppy field
     - p158: Khunjerab 1987, El Obeid 1989
     - p193, p208: later portraits
     - p1: cover photo of Winnie aboard the Queen Elizabeth, 1951
     - p80: "Nubian goat with twin kids in Sierra Leone" (Heifer Project goats). The burned-in label runs off the photo's edge ("Sierra Leon"); the missing "e" is not in the scan. Removing the label by inpainting looked worse, so the family asked to keep it as is. Only the scan's uneven left/top edge is trimmed. The page caption: "Initially, the project was promising, but over the years, the goats did not adapt to the local forage and very few survived." The second photo on that page names a child: not used.
     - p143: newspaper notice "ATTENTION": a young child clinic opening "On Wednesday, January 16" at Juba Regional Hospital on the Midwifery School Compound, birth to age 5, a service of the provincial health office, "supervised by Dr. Wirifred Bradfrrad" (sic) with Sister Magdalema, health visitor, Wednesdays 8 a.m. to 2 p.m. Jan 16 fell on a Wednesday in 1980 and in no other year of their Juba posting (1979–84), so Jan 1980 **[inferred; the site states it plainly at the family's request]**. Newspaper not named. The memoir's scan cuts off the right edge of the clipping; the site's copy restores the lost letters ("at", "5", "for", "will", "Sister", "from") in Times New Roman (24.5 px, light stroke, ink matched to the scan); the last line ("8. a.m. to 2 p.m.") is left exactly as scanned (a redraw was tried and rejected), and the thin frame line on the left is trimmed. The caption credit line says "text at right edge restored". The same page's "Ready for Ribbon Cutting" photo of the Kator Birthing House is not yet used.
     - p154: "Having lunch with Kurshid, while on trek in Pakistan" (Winnie with a group on a terraced hillside). Undated; it sits among the 1984–87 Tarbela pages (p151 photos are dated 1986), so Which person is Kurshid is not stated. **Who is Kurshid [verified, p153]:** Winnie's March 1987 letter: "Last Wednesday I took a trip with Lester to the Swat side of the project where Kurshid, the agricultural officer in that area, had invited the two of us for lunch. The A.O. there is quite a remarkable man. He is an avid reader who keeps well informed on national and international issues..." Lunch was prepared by the women of his family, whom Winnie met but Lester could not. The photo faces this letter, so it is very likely that lunch **[inferred]**.
   - Scanner borders and black edge lines on the memoir scans are trimmed via `assets-src/crops.json` (pixels per edge), applied by `tools/photos.py`. Add an entry there rather than editing the source JPEG.
   - Unused photo-rich pages: 16, 21–23, 27, 31, 41–49, 54, 61, 63, 66, 69, 72–76, 84–90, 92–96, 98, 104–106, 115, 125–126, 135–136, 139, 144, 151, 160, 162–165, 169–171, 174, 182, 189.
2. **"A Life in Tropical Agroforestry"** by Lester and Winnie Bradford, Lester's first-person account: https://docs.google.com/document/d/1vLC6nuOByEyWmUHOXaU20hyTkzMpssLaI8dbWa1lN1s/edit
3. **Lester's family biography** (Google Sites): https://sites.google.com/view/lesterezrabradford. Winnie's: https://sites.google.com/view/WinifredBradford (not yet read directly). The page names no author; the family (site owner, Nov 2026) says it was created and is maintained by Ethan Bradford, and the page itself refers to "a story Lester related to Ethan" and links to his blog. The site credits him on that basis.
4. **Ethan Bradford's memorial pages.**
   - Lester: https://ethanbradford.blogspot.com/2019/03/lester-ezra-bradford-information.html
   - Winnie: https://ethanbradford.blogspot.com/2020/07/winifred-ruth-smith-bradford-information.html
   - Memorial videos: https://www.youtube.com/watch?v=vqD-tCwK3lg, https://www.youtube.com/watch?v=90sVO44m0BQ, https://youtu.be/gQIzrbeNmNU, https://youtu.be/QLZ68Bc5WpY
   - Shared remembrances doc: https://docs.google.com/document/d/1vFiGjbxdD_WY4O8aPyyhF4knqzrog5EsL-4E17ixTpA/edit
5. **Meyer Sign**, "Tales From the Magic Skagit: A World Without Walls — The Legacy of Winifred Ruth Smith Bradford" (2020). Quotes: "Her compassionate approach to birthing revolutionized the whole birth industry in Skagit County." / "The Skagit Valley is a poorer place for her absence, but enriched by her legacy."
6. **Sherbro Foundation**, "Celebrating a Life of Service" (Aug 1, 2020). Covers the scholarships and has photos. Its caption "El Obeid, Pakistan" is wrong: El Obeid is in Sudan.
7. **NSA smokejumper obituary**: https://dc.ewu.edu/smokejumper_bios/506
8. **Yale Alumni Magazine**: https://yalealumnimagazine.org/obituaries/4810-lester-ezra-bradford-49-50-51mf
9. **LSU dissertation (EdD 1971)**: https://repository.lsu.edu/gradschool_disstheses/2029
10. **2007 holiday letter**: https://docs.google.com/document/d/13Ws_nsPZtgbeN_CDue1AucBG6bv_OxWB/
11. **Skagit Valley Herald obituaries on Legacy.com.** Lester: id=10774537. Winnie: July 27, 2020. Legacy returns 403 to scripted fetches.
12. **Farrell Lines (Wikipedia)** and the **MARAD card for *African Dawn*** (built 1942, renamed *African Lake* in 1965).

## Key verified facts (with memoir page)
### Winnie
- Born Oct 20, 1922, in Enid OK, sixth of eight children (p7–13).
- BS, York College, York NE, 1944 (p24–26).
- University of Nebraska College of Medicine, entered Sept 1944, "one of four women in a class of 92" (p28). MD Apr 3, 1948 (p32). Internship in Omaha, 1948–49.
- Red Bird Mission KY: summers during med school, then a stint covering for its doctor; KY license Jan 1950. Patient quote: "If I'd o knowed you was a woman I wouldn't have come." (p38)
- Studied Mandarin at the Yale Institute of Far Eastern Languages (p29/36). Met Lester at the Wesley Foundation and tossed him over her head (p36).
- London School of Hygiene & Tropical Medicine, Feb–Jul 1951. Sang in the Festival of Britain choir (p42–47).
- Sailed from Liverpool on the M.V. Accra Aug 2, 1951. Landed Freetown Aug 11, 1951 (p48).
- Rotifunk: the only doctor while Dr. Silver was on furlough; usually over 200 at clinic each day; "I can't do this anymore" (p50). Leprosy clinic with 296 registered patients (p55).
- Kayima 1953–55. Manjama from Sept 1956. Manjama Health Center opened April 1961 (p89). Medical Board secretary from 1967 (p107).
- 1968–69 Bogalusa; pediatric residency at Earl K. Long, Baton Rouge, 1969–71.
- Mount Vernon Birth Center opened **January 1975** with Beth Marvin (p117). "Nearly 200 babies" by c.1976 (p120). Disciplinary hearing and the "caring, warm, Christian physician" note (p121). Ruth Halvorson took over in 1979.
- Juba: volunteered at Juba Regional Hospital and its midwifery school. Three birthing houses funded by the Netherlands Embassy; Kator was the first (p129–144). AID office in Khartoum from 1984.
- Pakistan 1984–87: trained an Afghan refugee medical team (p149–150). 1993: Bach Christian Hospital, Qalandarabad.
- Hospice volunteer from 1994 (p189). Helped found Skagit Adult Day Care (1992), dedicated "The Bradford House" in 2005 (p171–181).
- Died at home July 19, 2020.

### Lester
- Born Jan 20, 1926, on a farm on Mt. Abram near Locke Mills (Greenwood), Maine. One of nine children of Everett and Fannie (Hersey) Bradford.
- Hebron Academy, class of 1943. Then a year at UMaine in an Army program and tail-gunner training. "Just as he was deemed ready for service, the war ended."
- Yale: BS in natural sciences 1950 and MF 1951 (YAM lists '49 '50 '51MF). Cornell: two semesters of tropical agriculture.
- Four USFS summers, two of them smokejumping out of Missoula MT and Cave Junction OR.
- Sailed on the S.S. Ferngulf and reached the Freetown mission house about 6 p.m. on Sun Dec 21, 1952. Took the Monday 12:45 train to Rotifunk. Married Tue Dec 23 (p57–61). The NSA and Google bio say Dec 20. Honeymoon at Shenge.
- **Which cover crop? [open, dead end Nov 2026]** No public source names it. Checked: full OCR of the memoir (all 210 pp.; the only Kayima farming passage, p66, mentions just rice), every letter on Lester's Google Site (incl. the 1953 Kayima letter), the agroforestry essay ("I found a cover crop that helped maintain soil fertility without forest fallow"), the smokejumper obituary, web searches. Possible offline lead: Methodist mission board reports or *World Outlook*, c. 1953–56 (GCAH archives).
- Kayima (Kono) projects: ox-plowing, cover crop, Rhode Island Reds, wells, gravity-feed water, adult literacy. Manjama (Mende) projects: pigs, rabbits, eggs, gardens, grafted citrus, swamp rice (3× yield), rat-proof granary, teak, tilapia, Nubian goats via Heifer Project, apprentices and youth clubs.
- 1968 LSU Extension; EdD LSU 1971, "A Comparison of Knowledge of Forestry Concepts With the Adoption of Forest Practices in Two Louisiana Parishes".
- 1971–79: WSU county agent in Mount Vernon (4-H, education, forestry; Skagit & Island counties).
- DAI (USAID contractor) in Juba from Oct 1979: "to work in agroforestry in Southern Sudan". Later DAI Head of Mission, Khartoum.
- Tarbela, Pakistan 1984–87: poppy replacement, and a nursery of up to 1M seedlings a year. Quote: "And now," he said, "We are just poor." **[inferred]** Probably the USAID NWFP Area Development Project.
- El Obeid 1989: anti-desertification, "adopt a tree".
- "We retired in 1991." Volunteered with VOCA/CIPCA in Ukraine, Zimbabwe, Mauritania, Bolivia, Brazil, Indonesia, the Philippines, South Africa and Haiti. Taught a class in Russia.
- Languages: French, Spanish, Latin, German, Kono, Mende, Krio, Russian.
- Died at home Mar 3, 2019, after 2 years of Parkinson's. Memorial gifts went to the Sherbro Foundation.

## Conflicts and how we resolved them
- **Arrival in Sierra Leone:** Sherbro says 1950; the memoir says Aug 1951. We use 1951.
- **Years in Sierra Leone:** sources say 16 or 17. We use 17, which is Winnie's own figure.
- **Lester's arrival:** Dec 20 or 21. We use 21, from Winnie's letter, and note the other date.
- **Tail gunner:** trained only; never deployed. The family bio says Army Specialized Reserve Program at UMaine, planning to be a pilot; the NSA says he joined the Army in June 1944 and trained as a tail gunner.
- **Khunjerab Pass altitude:** the memoir's photo caption (p158) says "17,000 ft."; the pass is actually about 4,693 m / 15,400 ft. At the family's request (Nov 2026) the site no longer mentions the altitude, and the Wikipedia source was dropped.
- **Departure for Sudan:** Lester's Nov 1979 letter (memoir) says they left Mt. Vernon in September 1979, reached Khartoum by Sept 24 and Juba on Oct 24. Lester's agroforestry essay says "In 1980". The site says "In October 1979". Winnie's letter also says "the four youngest are in school in various places", so "with the children grown" is loose.
- **Mount Vernon move:** family bio says the WSU job offer came in 1971; the memoir's chapter heading says "Mt. Vernon 1972–1979" and the 1979 letter says "severing ties of 10 years". Winnie's residency ran to July 30, 1971.
- **Pakistan base:** the memoir letters are headed "Tarbela, Pakistan"; the family bio says Peshawar.
- **Order of Sudan/Pakistan postings:** Lester's essay narrates El Obeid before Pakistan; the memoir dates El Obeid 1989 (after Pakistan 1984–87). We follow the memoir.
- **Yale studies:** Lester's essay says "three years of botany and two years in the Forestry School"; the family bio says BS in natural sciences (1950). Both are used on the site.
- **"Paid her own way":** supported — at York College an uncle sent $10 a month and she earned the rest babysitting, clerking at Woolworth's, egg candling and washing dishes (memoir, York College chapter).
- **"Expanded building" (Bradford House):** memoir only says the day care facility "was renamed The Bradford House" (Dec 2005 letter) with a dedication open house. "Expanded" is unverified.

## Home movies (family collection)
- Panama file 0:00–15:15 is Panama 1955. This is NOT the Bradfords. From 15:15 on it is Bradford footage. The *African Dawn* sendoff is at 24:37–25:31.
- Fitzgerald file: 1970s canoe trips and gatherings.
- The ship footage itself starts at 24:39.0 (scene cut found with ffmpeg's scene filter). The `african-dawn.mp4` reel now runs 24:39.1–25:31 (52 s); the previous cut opened with ~4 s of the preceding lawn scene.
- **Where was "Gathered on the lawn"? [superseded, see "Dating the 1964 departure" below]** No source says. Clues: the lawn scene runs straight into the *African Dawn* sendoff on the reel (the trimmed 4 s are its tail), and Lester's parents appear in it, so it may well be a family visit during the same furlough, before sailing from the East Coast. Mid-1950s cars, a white rail fence, a clapboard house and deciduous woods fit New England (Maine?) but prove nothing. Not on the site.
- The family close-up within the *African Dawn* sendoff runs 25:20.6–25:30.8 (`site/media/reels/hero-dawn.mp4`, used in the hero).
- **Only clips that clearly show Lester and/or Winnie are published** (Nov 2026 decision): the *African Dawn* sendoff and "Gathered on the lawn". The other 2021 clips (meadow, picnic, snow, wagon, lake, reunion, canoe, river) were removed because nobody can confirm they appear in them. Captions never name individuals, with one exception from the family (Nov 2026): the "Gathered on the lawn" clip shows Lester's parents, Fannie and Everett, from 0:06, with several of Lester's siblings. This is family knowledge, not a public source, so it carries no citation.

## Verified against the memoir OCR (Nov 2026)
Checked directly in the memoir text: 22 missionaries overnight; the 12:45 train and the 6 p.m. phone call; the District Commissioner amending the licence; Shenge honeymoon; "four of our five children were born there"; "home to us for seventeen years"; Yale Institute of Far Eastern Languages 1950 and the tumbling story; Festival of Britain choir; 296 leprosy patients; Medical Board secretary from March 1967; Beth Marvin "a nurse practitioner"; the Birth Center "on Division Street not far from Skagit Valley Hospital"; "Nearly 200 babies ... since January, 1975"; the Disciplinary Board hearing and crowded waiting room; Juba government hospital and its midwife school; Netherlands Embassy grant for three birthing centers; Afghan medical team training at Tarbela; pediatrics residency at Earl K. Long July 1969–July 1971; hospice volunteering; the Bradford House renaming (Dec 2005 letter).

## Letters chapter (Nov 2026)
Excerpts on the site, checked against the page scans (PDF page numbers): London May 28, 1951 (p46); Rotifunk Dec 1952 wedding letter (p57–61; the shopping list is p61); Rotifunk Mar 1953, written by Lester (p62–63); Kayima Nov 1953 (p66); Kayima Feb 1955 (p69); Manjama Jul 1956, written by Lester (p73–75); Manjama Oct 1965 (p101); Juba Nov 1979, Lester then Winnie (p129); Tarbela Mar 1985 (p149); El Obeid Mar 1989 (p156–157). Letters not marked "(Written by Lester)" are Winnie's. Excerpts were chosen to avoid naming the children. Photo p65 (volunteers thatching the Kayima kitchen, 1953) is now used.
Other good letters not yet used: Rotifunk May 1, 1952 (Christmas callers, "no roads into Rotifunk"); Kayima Aug 1953 snakes (Lester); Kayima May 1954 (prenatal clinic of 15 women); Manjama Dec 1964 (death of chief Alimany); Juba Sept 1979 (packing into four categories — names family); Tarbela Nov 1984 and Nov 1985 (village visit with the Pushto teacher).

## Bogalusa and Baton Rouge (Nov 2026)
- Family bio (source 3): "In 1968, the family moved to Bogalusa, Louisiana, where Lester worked for the Louisiana State University (LSU) extension service. For the following two years, they lived in Baton Rouge, where Lester earned his Doctorate of Education." NSA obituary (source 7) also says the family moved to Bogalusa in 1968. **[verified]**
- Family bio: year-long furloughs in New York 1955–56, Maine 1959–60, Oklahoma 1963–64. **[verified]** (The "back to Africa, 1960" photo turned out to be 1964; see below.)
- NSA obituary: smokejumping jumps in 1950 (7 training, 2 fire) and 1951 (2 refresher, 5 fire). The smokejumper photo is captioned "1950 or 1951". **[verified]**

## Family photos (added at the family's request, Nov 2026)
The spec now allows photos the family specifically asks for. They come from two shared Google Photos albums (links are in the Nov 2026 session request; do NOT publish the album links: they hold hundreds of photos of living relatives). Filenames were read from the download's Content-Disposition header. Captions credit "Bradford family collection" and never name children.
- `family-bradfords-maine-farm` = FB_IMG_1552249350268.jpg. Family-confirmed (Nov 2026): Everett and Fannie Bradford with eight of their nine children; Lester is the fourth child standing, in white shorts. Family knowledge, no public citation.
- `family-lester-hebron-1943` = LesterHighschoolGrad.jpg; `family-lester-army` = 20190315_102656.jpg; `family-lester-smokejumper` = 20190315_102729.jpg.
- `family-wedding-party-1952` = LesterWinnieWeddingParty3.JPG + LesterWinnieWeddingParty2.JPG, stitched with OpenCV (same slide scanned twice; Party2 supplies the right edge).
- `family-kayima-oxen` = LesterInKayima.jpg; `family-back-to-africa-1960` = "Lester Family Off to Africa 1960.jpg"; `family-bo-pickup` = "…VBW Double-cab Pickup, Bo, Sierra Leone].jpg" (filename names three children; not published).
- `family-winifred-toddler` = "Winifred toddler.jpg"; `family-red-bird-jeep` = "Winifred and jeep at Red Bird Mission.jpg".
- Not used: 20190315_102643.jpg (a photographed book page about 1946 Yale freshmen; unclear which is Lester, and the text is someone else's book); LesterWinnieInEnid1949.JPG (its 1949 date conflicts with the memoir's 1950 meeting).
- Removed again at the family's request (Nov 2026): the Hebron graduation and Army portraits, the Red Bird jeep photo, and the memoir's Enid 1951 photo. The ox photo was brightened (levels 14–178, gamma 0.8).
- `family-lester-brazil-1997` = "Lester Bradford & Roberto de Mattos.  Extrema, Rodonia, Brazil.  November 1997.jpg" (filename spells Rondônia "Rodonia"). Fits the post-1991 volunteer assignments (Brazil is on the family bio's list). Roberto de Mattos is named from the filename only.
- `family-golden-anniversary-2002` = "LesterWinnieGoldenAnniversary.jpg" (married Dec 23, 1952, so 2002). Brightened (partial gray-world white balance, levels, gamma 0.85) and the sides cropped. Replaced "Lester Winnie 50th, maybe.jpg" (cake iced "Best Wishes Lester & Winnie"; they look younger there, so probably not the 50th; not used).
- `family-winnie-qalandarabad-1993` = "Winifred and baby Qualandrabad, MV BS, 1976is.jpg". The filename's "MV BS 1976" is wrong: the same photo is in the memoir (PDF p165, book p158) captioned "A delivery at Qalandarabad", in the 1993 chapter.
- **Qalandarabad 1993 [verified, memoir PDF p165–170]:** Dr. Ada Helleloid (TEAM, Bach Christian Hospital) asked Winnie to help during a staff shortage. Diary: left Mount Vernon May 12, 1993; arrived at the hospital May 15; prenatal clinic, nights on call, breech and forceps deliveries, a fetal arm presenting beside the head (May 19); left Qalandarabad Aug 6, home Aug 10. She wrote of "the periods of time I spent working at that hospital" (plural).
- Nov 2026 album sweep: both albums (about 660 photos) can be paged past the first ~300 through the share page's `snAcKc` batchexecute call. Worth a later look: "Lester Bradford and guide. Valley where tectonic plates of Asia & sub-continent meet" (Pakistan); clippings "Bradford heading for Africa" (Skagit Extension agent, 1979) and "Council confers on food bank needs" (need paper names and dates); BC Logging joke T-shirts and card (1970s; family asked not to use).
- `family-together-2012` = P1030349.JPG (family album, chosen by the family Nov 2026). EXIF: Panasonic DMC-FH20, 2012-12-23 15:21, exactly sixty years after the Dec 23, 1952 wedding; name tags suggest a party. Caption says "at their 60th anniversary" (family-confirmed wording, Nov 2026). Top 760px cropped to drop guests in the background. Replaced `memoir-together-late` as the photo above "My first impressions…".
- `winnie-kator-juba`: the K of "Kator" was cut off in the Sherbro original itself. The label was shifted 6px right and the K's stem redrawn; the image size and border are unchanged.

## Open questions
- Which Sudan USAID project? (DAI; "manpower development"; Juba ag and forestry colleges.)
- Lester's PhD/EdD PDF returned 403. Its vita may have more detail.
- Can we find a public photo of the Martyrs Memorial Church today?
- The memoir does not give the June 22, 1968 departure date in the OCR text; confirm which page it comes from.

## Next ideas
- ~~A "Letters" chapter from the memoir's letters~~ — done Nov 2026 (chapter viii). Could grow into its own page with more letters.
- Use more memoir photos: ~~Manjama goats~~ (done Nov 2026), the Kator opening invitation (p136) and "Ready for Ribbon Cutting" photo (p143), the Manjama maternity center under construction (p75), the 1968 farewell address, the Birth Center clippings.
- Short separate pages for each of them (better for SEO), plus a printable one-page obituary.
- Transcribed newspaper clippings with alt text.
- A "then and now" for Rotifunk (Commons aerial of the hospital, CC BY-SA 4.0).
- Dark mode. More reels with better color restoration.

## Dating the 1964 departure (Nov 2026)
- Ethan Bradford (family) pointed out that the "Lester Family Off to Africa 1960" photo shows five children, so it must be the 1964 departure after the Oklahoma furlough. Checked against the memoir: its 1959 Maine photo (p82) is captioned with four children; the only US-born child was born during the 1955–56 New York furlough, not in Maine (p70); the fifth child was born at Manjama after the 1960 return (p91). **[verified]** Site caption now reads 1964, Oklahoma, and notes the 1960 label.
- Voyages: May 29, 1960, freighter from Portland, Maine, via the Azores (p82, p84). 1964: left Enid July 1, drove to Hebron, Maine, stayed with "Grandpa and Grandma Bradford"; sailing slipped from Aug 26 to Sept 9; boarded in New York Sept 9, sailed Sept 11, calling at Las Palmas, Dakar and Conakry (Dec 1964 letter, p99; p96). That fits Farrell Lines and the *African Dawn* (renamed 1965). **[inferred, very likely]** The film's close-up clearly shows at least four children; not used as evidence.
- Same summer (p99): "the whole nine of the Bradford children, with parents and wives and children, got together for a second time in a year." The cousin who shared the films remembers "Gathered on the lawn" as Waterford, Maine, "around 1965". Waterford is near Hebron (both Oxford County). Caption: very likely summer 1964, family memory says Waterford. **[inferred]**
- Family anecdote (Lester's sister, via the family, Nov 2026; no public source, so no citation): Lester lost his wallet just before the trip and the siblings took up a collection so the family had money for expenses. On the *African Dawn* caption.
