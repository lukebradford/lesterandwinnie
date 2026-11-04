# Research log

Every fact on the site should trace back to a source listed here. Mark facts **[verified]** when a source states them, **[inferred]** when we deduced them, and **[open]** when they still need checking. Do not add private details about living family members (birth dates, addresses, etc.). Children are mentioned only as "five children".

## Primary sources (best first)
1. ***A Life Remembered: Memoirs of Dr. Winifred Bradford*** (as told to Peggy Alessandri, 2011). 210-page scanned PDF, publicly shared on Google Drive: https://drive.google.com/file/d/1LC9_7HQXvQqN3VLS2Lo_WY1yWoOWgZ2F/view
   - It has no text layer. To re-OCR: download it, render pages with PyMuPDF (`fitz`) and OCR them with macOS Vision or tesseract. Do **not** commit the OCR text: it contains private details about living people.
   - Page numbers below are PDF page numbers.
   - Photos already extracted to `assets-src/photos/memoir-*.jpg`:
     - p3: Lester and Winnie in Enid, 1951
     - p35: at Yale, 1950
     - p60: wedding, the Rotifunk church
     - p64: Kayima home, 1953
     - p79: Manjama Health Center
     - p118: the MV Birth Center house, the "Babies her specialty" clipping
     - p147: Lester in a poppy field
     - p158: Khunjerab 1987, El Obeid 1989
     - p193, p208: later portraits
     - p1: cover photo of Winnie aboard the Queen Elizabeth, 1951
   - Scanner borders and black edge lines on the memoir scans are trimmed via `assets-src/crops.json` (pixels per edge), applied by `tools/photos.py`. Add an entry there rather than editing the source JPEG.
   - Unused photo-rich pages: 16, 21–23, 27, 31, 41–49, 54, 61, 63, 66, 69, 72–76, 80, 84–90, 92–96, 98, 104–106, 115, 125–126, 135–136, 139, 143–144, 151, 154, 160, 162–165, 169–171, 174, 182, 189.
2. **"A Life in Tropical Agroforestry"** by Lester and Winnie Bradford, Lester's first-person account: https://docs.google.com/document/d/1vLC6nuOByEyWmUHOXaU20hyTkzMpssLaI8dbWa1lN1s/edit
3. **Lester's family biography** (Google Sites): https://sites.google.com/view/lesterezrabradford. Winnie's: https://sites.google.com/view/WinifredBradford (not yet read directly).
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
- **Tail gunner:** trained only; never deployed.

## Home movies (family collection)
- Panama file 0:00–15:15 is Panama 1955. This is NOT the Bradfords. From 15:15 on it is Bradford footage. The *African Dawn* send-off is at 24:37–25:31.
- Fitzgerald file: 1970s canoe trips and gatherings.
- The family close-up within the *African Dawn* send-off runs 25:20.6–25:30.8 (`site/media/reels/hero-dawn.mp4`, used in the hero).
- **Only clips that clearly show Lester and/or Winnie are published** (Nov 2026 decision): the *African Dawn* send-off and "Gathered on the lawn". The other 2021 clips (meadow, picnic, snow, wagon, lake, reunion, canoe, river) were removed because nobody can confirm they appear in them. Captions still never name individuals.

## Open questions
- Which Sudan USAID project? (DAI; "manpower development"; Juba ag and forestry colleges.)
- Lester's PhD/EdD PDF returned 403. Its vita may have more detail.
- Can we find a public photo of the Martyrs Memorial Church today?

## Next ideas
- A "Letters" page built from short excerpts of the memoir's 1951–1989 letters, each with its date and place.
- Use more memoir photos: Manjama goats, the Kator opening invitation, the 1968 farewell address, the Birth Center clippings.
- Short separate pages for each of them (better for SEO), plus a printable one-page obituary.
- Transcribed newspaper clippings with alt text.
- A "then and now" for Rotifunk (Commons aerial of the hospital, CC BY-SA 4.0).
- Dark mode. More reels with better color restoration.
