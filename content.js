// Wonderfully Made Labs — "The River Who Forgot How to Flow"
// All narrative content, three tiers, drawn from the story bible.

window.WML = {
  tiers: {
    explorer:  { label: "Explorer", age: "Ages 8–13" },
    scholar:   { label: "Scholar", age: "High school" },
    researcher:{ label: "Researcher", age: "Pre-med · College" }
  },

  // cite helper: {t: text, u: url}
  beats: [
    {
      n: "Beat 1",
      img: { explorer: "assets/scene1_healthy.jpg", scholar: "assets/lvl_scholar_b1.jpg", researcher: "assets/lvl_research_b1.jpg" },
      titles: {
        explorer:  "The Beautiful River",
        scholar:   "A Healthy Artery",
        researcher:"The Healthy Vessel Wall"
      },
      text: {
        explorer:  "Nine friends reach their favorite river. The water runs fast, clear, and straight. The banks are smooth and slippery — so slippery the water just glides — and there's a fresh clean smell that keeps everything calm. And listen: Tempo's drum keeps a steady <i>lub-dub, lub-dub</i>, and every beat sends a fresh surge of water downstream. This is a healthy river.",
        scholar:   "A healthy artery is lined by the <span class='keyword'>endothelium</span>, coated in a slick gel called the <span class='keyword'>glycocalyx</span>. Smooth, fast <span class='keyword'>laminar</span> blood flow keeps it healthy, and the lining releases <span class='keyword'>nitric oxide</span>, which keeps the vessel open and calm. Driving it all is a steady <span class='keyword'>heartbeat</span> that pushes each pulse of blood through.",
        researcher:"The arterial wall is three layers (intima / media / adventitia). The endothelial monolayer, via its glycocalyx, performs <span class='keyword'>mechanotransduction</span>: laminar shear upregulates KLF2/KLF4 and drives eNOS → NO → sGC/cGMP vasodilation. NO is anti-platelet, anti-adhesion (↓VCAM-1/ICAM-1), and anti-proliferative. The cardiac conduction system (SA → AV → His-Purkinje) sets the rhythm that perfuses it."
      }
    },
    {
      n: "Beat 2",
      img: { explorer: "assets/scene2_bend.jpg", scholar: "assets/lvl_scholar_b2.jpg", researcher: "assets/lvl_research_b2.jpg" },
      flip: true,
      titles: {
        explorer:  "The Bend Where the Water Swirls",
        scholar:   "Disturbed Flow at the Bend",
        researcher:"Hemodynamics & Lesion Localization"
      },
      text: {
        explorer:  "Sunny notices something. Where the river curves, and where a little creek joins it, the water doesn't run straight — it swirls and pushes oddly against the bank. Plum writes in her journal: <i>“The bank looks a little tired right here.”</i> Swirly spots are where banks get tired.",
        scholar:   "At <span class='keyword'>bends and branch points</span>, flow becomes disturbed and swirling. This low, oscillatory <span class='keyword'>shear stress</span> stresses the endothelium — and it's exactly where atherosclerosis begins.",
        researcher:"Wall shear stress physics: ~15–70 dyne/cm² is atheroprotective; &lt;10 and oscillatory is atherogenic. Disturbed flow activates NF-κB, raises permeability, and increases intramural proteoglycan synthesis — directly linking hemodynamics to lipoprotein retention. Lesion localization is inversely proportional to WSS."
      },
      cite: {t:"AHA: Laminar flow", u:"https://www.ahajournals.org/doi/10.1161/circulationaha.107.720730"}
    },
    {
      n: "Beat 3",
      img: { explorer: "assets/scene3_rocks.jpg", scholar: "assets/lvl_scholar_b3.jpg", researcher: "assets/lvl_research_b3.jpg" },
      titles: {
        explorer:  "The First Rocks in the Mud",
        scholar:   "LDL Trapped in the Wall",
        researcher:"Response-to-Retention"
      },
      text: {
        explorer:  "On the next hike, Plum looks closely and sees what everyone missed: tiny rocks aren't sitting <i>in</i> the water — they've sunk <b>into the mud behind the bank</b> and gotten stuck there. The water still looks fine. The trouble is hidden <b>under the surface, in the wall</b>. And some of the stuck rocks are starting to look rusty and rotten.",
        scholar:   "<span class='keyword'>LDL cholesterol</span> crosses the lining and gets <b>trapped in the wall beneath the endothelium</b> — the subendothelial space. It is <i>not</i> floating in the blood; it is retained in the wall, where it <span class='keyword'>oxidizes</span> (goes rancid). This retention is the <i>initiating event</i> of the disease.",
        researcher:"The response-to-retention hypothesis (Tabas/Williams/Borén): apoB-100 residues 3359–3369 bind arterial proteoglycans (versican, biglycan). LpL, S-SMase, and sPLA₂ amplify retention; small dense LDL has higher affinity. Oxidation follows retention — not the reverse."
      },
      teach: "<strong>The big idea:</strong> The buildup is in the <i>wall</i> — under the lining, in the “mud” — <b>not</b> in the flowing blood. Almost everyone pictures cholesterol clogging a pipe. It's hiding inside the wall.",
      cite: {t:"Circulation: Retention", u:"https://www.ahajournals.org/doi/10.1161/circulationaha.106.676890"}
    },
    {
      n: "Beat 4",
      img: { explorer: "assets/scene4_cleanup.jpg", scholar: "assets/lvl_scholar_b4.jpg", researcher: "assets/lvl_research_b4.jpg" },
      flip: true,
      titles: {
        explorer:  "Danger Flags & the Cleanup Crews",
        scholar:   "Inflammation & Foam Cells",
        researcher:"Endothelial Activation → Foam Cells"
      },
      text: {
        explorer:  "Hike after hike, the bend changes. Little danger flags pop up along the bank and a faint alarm bell rings. Cleanup helpers arrive to carry the rotten rocks away — but they eat so much they puff up like balloons, get stuck in the mud themselves, and become useless lumps. Now there are rocks <i>and</i> stuck helpers.",
        scholar:   "The stressed endothelium raises <span class='keyword'>adhesion molecules</span> (the “danger flags”) and <span class='keyword'>cytokines</span> (chemical alarm bells). <span class='keyword'>Monocytes</span> stick, enter the wall, become <span class='keyword'>macrophages</span>, gorge on oxidized LDL, and bloat into <span class='keyword'>foam cells</span> — the <span class='keyword'>fatty streak</span>.",
        researcher:"Activation via TLR4/oxidative sensing: VCAM-1, ICAM-1, E-selectin, MCP-1 (CCL2); IL-1β/TNF-α/IL-6; NLRP3 inflammasome. Scavenger receptors SR-A/CD36/LOX-1 aren't downregulated by cholesterol → unlimited uptake → foam cells. <b>CANTOS</b> (canakinumab, anti–IL-1β) cut events with <i>no</i> LDL change — causal proof that inflammation matters."
      },
      cite: {t:"PMC: Macrophages", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3598573/"}
    },
    {
      n: "Beat 5",
      img: { explorer: "assets/scene5_thincrust.jpg", scholar: "assets/lvl_scholar_b5.jpg", researcher: "assets/lvl_research_b5.jpg" },
      titles: {
        explorer:  "The Growing Pile Under a Thin Crust",
        scholar:   "The Vulnerable Plaque",
        researcher:"Necrotic Core & Thin-Cap Fibroatheroma"
      },
      text: {
        explorer:  "Over a year the hidden pile grows large. A crust of packed dirt forms over it, hiding it. From the trail it looks almost normal — but the crust over the biggest pile is dangerously <b>thin</b>. Rex keeps insisting the trail is fine.",
        scholar:   "Foam cells die and form a <span class='keyword'>necrotic core</span>; smooth muscle cells build a <span class='keyword'>fibrous cap</span> over it — a <span class='keyword'>plaque</span>. A thin cap over a big lipid core is a <span class='keyword'>vulnerable plaque</span> — and dangerously, it isn't always the one that narrows the artery the most.",
        researcher:"Necrotic core arises from defective efferocytosis. Cap biology is SMC-driven (PDGF, TCF21); a thin-cap fibroatheroma is &lt;65 µm. MMP-driven thinning weakens the shoulder regions. The <i>stenosis paradox</i>: composition predicts rupture better than luminal narrowing."
      },
      cite: {t:"ATVB: Stable vs unstable", u:"https://www.ahajournals.org/doi/10.1161/ATVBAHA.124.319396"}
    },
    {
      n: "Beat 6",
      img: { explorer: "assets/scene6_avalanche.jpg", scholar: "assets/lvl_scholar_b6.jpg", researcher: "assets/lvl_research_b6.jpg" },
      flip: true,
      titles: {
        explorer:  "The Avalanche",
        scholar:   "Rupture → Heart Attack",
        researcher:"Plaque Rupture, Thrombosis & Ischemia"
      },
      text: {
        explorer:  "One stormy day they arrive to disaster. The thin crust cracked, the whole pile slid into the river in an <b>avalanche</b>, and a dam of rock and mud blocks the water. Below the dam the riverbed is dry, gray, and cracked, and the green plants are dying. And Tempo's steady drum suddenly stumbles and skips — <i>lub… DUB-dub… skip</i> — because the choked river threw off the beat. A wrong beat is a warning signal!",
        scholar:   "The thin cap <span class='keyword'>ruptures</span>. Blood meets the thrombogenic core and <span class='keyword'>clots</span>, blocking the artery. The heart muscle downstream is starved of oxygen — a <span class='keyword'>heart attack (myocardial infarction)</span>. Starved muscle changes the heart's electrical signal, so an <span class='keyword'>EKG</span> shows tell-tale <span class='keyword'>ST-segment changes</span> — often the first proof of a blocked artery.",
        researcher:"Ruptured caps average ~23 µm, usually at the shoulder. Exposed tissue factor triggers the vWF/platelet/coagulation cascade; ~90% of MI is acute thrombus (rupture ~65%, erosion ~30%, calcified nodule ~5%). Ischemic wavefront necrosis follows. EKG: STEMI vs ST-depression/T-inversion (NSTE-ACS); reciprocal changes localize the vessel; troponin confirms."
      },
      cite: {t:"Circ Research: Rupture", u:"https://www.ahajournals.org/doi/10.1161/circresaha.114.302721"}
    },
    {
      n: "Beat 7",
      img: { explorer: "assets/scene2_heartbeat.jpg", scholar: "assets/lvl_scholar_b7.jpg", researcher: "assets/lvl_research_b7.jpg" },
      titles: {
        explorer:  "The Investigation",
        scholar:   "Becoming Investigators",
        researcher:"Three Disciplines, One Diagnosis"
      },
      text: {
        explorer:  "The friends refuse to accept it. They become detectives. Iris lines up all the “selfie” photos they took on every hike and <i>sees</i> the pile grow across time. Sunny builds a tiny model river in a sand tray to test what happened. Echo finds <i>another</i> river starting the very same way. And Tempo writes down the strange new rhythm, so they'll know the warning beat anywhere. It's not an accident — it's a <b>disease</b>, and now they can study it.",
        scholar:   "Investigation takes a team. <b>Radiology</b>: serial imaging (CT calcium, IVUS, OCT) shows change over time. <b>Research science</b>: build models (flow chambers, ApoE−/− mice) to test mechanism. <b>Medicine</b>: recognize the pattern in another patient. <b>Cardiology</b>: an EKG and stethoscope catch the heart's electrical and sound changes — often the fastest signal of all.",
        researcher:"Imaging by resolution (OCT ~10 µm measures cap thickness); biomarkers (LDL-C, apoB, hs-CRP, troponin, Lp(a)); model systems (ApoE−/− vs LDLR−/− tradeoffs; in-vitro flow chambers). Each modality maps to a distinct research or clinical career — and naming the disease requires them working together."
      },
      cite: {t:"AHA: Coronary calcium", u:"https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.010153"}
    },
    {
      n: "Beat 8",
      img: { explorer: "assets/scene7_treatments.jpg", scholar: "assets/lvl_scholar_b8.jpg", researcher: "assets/lvl_research_b8.jpg" },
      flip: true,
      titles: {
        explorer:  "The Fix & the Promise",
        scholar:   "Treatment, Prevention & Design",
        researcher:"Therapeutics & the Designed Defenses"
      },
      text: {
        explorer:  "At the dammed river they try the rescues: move the rocks, cage them back, build a little bypass bridge, dissolve the dam. Then they walk to the <i>new</i> riverbank — the one with only early rocks — and ask the better question: <b>how do we keep this from ever happening here?</b> They discover the river already has its own helpers, built in by God: a clean current, little boats that carry rocks away, and crews that finally clean up when the water runs clear. The bank <i>heals</i>.",
        scholar:   "Acute fixes: <b>angioplasty</b>, <b>stent</b>, <b>CABG</b> (bypass), <b>clot-busters</b>, <b>atherectomy</b>. Prevention: lower <span class='keyword'>LDL</span> (statins, ezetimibe, PCSK9 inhibitors), calm <span class='keyword'>inflammation</span> (colchicine), and support the body's own defenses — nitric oxide and HDL. With aggressive LDL lowering, plaques can actually <span class='keyword'>regress</span>.",
        researcher:"Statin → ↑LDLR; PCSK9i → blocks LDLR degradation; ezetimibe → NPC1L1; colchicine → inflammasome/microtubules. RCT: ABCA1/ABCG1 → apoA-I → LCAT → SR-B1; LXR induction. GLAGOV/ASTEROID show regression. Frontier: restoring efferocytosis (MerTK/TIM4). The system's redundancy and self-repair is a designed defense worth studying with reverence."
      },
      cite: {t:"AHA: 2026 lipid guideline", u:"https://newsroom.heart.org/news/accaha-issue-updated-guideline-for-managing-lipids-cholesterol"}
    }
  ],

  gameSteps: [
    {n:"1", h:"Observe", p:"Tag what changed on the riverbank since last hike."},
    {n:"2", h:"Compare", p:"Line up the photos in order — the pile is growing."},
    {n:"3", h:"Hypothesize", p:"Is the trouble in the water, or under the bank?"},
    {n:"4", h:"Model", p:"Build a sand-tray river and test what happens."},
    {n:"5", h:"Listen", p:"Steady beat or warning beat? How urgent is it?"},
    {n:"6", h:"Name It", p:"Diagnose: coronary atherosclerosis."}
  ],

  quiz: {
    q: "Where is the real trouble building up?",
    sub: "This is the question the whole story turns on. Pick what you think — then see why scientists found the surprising answer.",
    options: [
      {t:"Floating in the river water (the blood)", sub:"Like dirt clogging a pipe", correct:false,
       verdict:"This is what almost everyone guesses — but it's not right. The water can look perfectly clear while the real trouble hides elsewhere."},
      {t:"Stuck in the mud under the bank (the artery wall)", sub:"Hidden beneath the smooth lining", correct:true,
       verdict:"Exactly right. The LDL is <b>retained in the wall, beneath the endothelium</b> — not in the flowing blood. This single fact is the initiating event of atherosclerosis, and it's why a person can feel fine while a plaque quietly grows inside the wall."},
      {t:"On top of the bank, where you can see it", sub:"Out in the open on the trail", correct:false,
       verdict:"Not quite — the danger is hidden. From the trail the bank can look almost normal while a large pile grows underneath a thin crust."}
    ]
  },

  careers: [
    {avatar:"assets/iris.jpeg", name:"Iris", role:"The Radiologist", who:"The one who sees change over time.",
     real:"Reads serial imaging — coronary CT, calcium scoring, IVUS and OCT — to find and measure plaque, often before symptoms.",
     cite:{t:"Coronary calcium", u:"https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.010153"}},
    {avatar:"assets/sunny.jpeg", name:"Sunny", role:"The Scientist", who:"The one who builds a model to ask why.",
     real:"Uses flow chambers and animal models (ApoE−/−, LDLR−/− mice) to test mechanisms and new treatments.",
     cite:{t:"Model systems", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC5001905/"}},
    {avatar:"assets/echo.jpeg", name:"Echo", role:"The Physician", who:"The one who recognizes the pattern in a patient.",
     real:"Recognizes the disease in a new patient, orders the right tests, and chooses treatment.",
     cite:{t:"PCI overview", u:"https://my.clevelandclinic.org/health/treatments/22066-percutaneous-coronary-intervention"}},
    {avatar:"assets/tempo.jpeg", name:"Tempo", role:"The Cardiologist", who:"The one who hears the heartbeat change.",
     real:"Reads the EKG and listens with a stethoscope. A blocked artery changes the heart's electrical signal — the ST-segment changes that diagnose a heart attack.",
     cite:{t:"STEMI / EKG", u:"https://my.clevelandclinic.org/health/diseases/22068-stemi-heart-attack"}}
  ],

  treatments: [
    {meta:"Move the rocks", real:"Angioplasty", p:"A strong balloon pushes the blockage open to restore flow."},
    {meta:"Cage the rocks", real:"Stent (PCI)", p:"A tiny mesh net holds the pile back against the wall; drug-eluting stents re-narrow roughly 5–15% of the time — higher in people with diabetes, long lesions, or small vessels."},
    {meta:"Build a bypass bridge", real:"CABG", p:"A new channel reroutes blood around the dam — preferred for multi-vessel disease."},
    {meta:"Dissolve the dam", real:"Thrombolysis", p:"Clot-busting medicine dissolves a fresh blockage when fast stenting isn't available."},
    {meta:"Grind a stubborn rock", real:"Atherectomy", p:"A small drill grinds down a blockage too hard to move."},
    {meta:"Stop new rocks", real:"LDL-lowering", p:"Statins, ezetimibe, and PCSK9 inhibitors keep new rocks from ever falling in."}
  ],

  defenses: [
    {ic:"🌬️", h:"The clean current", real:"Nitric oxide", p:"Healthy lining gives off nitric oxide that keeps the water moving, calm, and clot-free."},
    {ic:"⛵", h:"Boats to the sea", real:"HDL · reverse transport", p:"The body's built-in export system carries cholesterol back out — ABCA1 → apoA-I → liver."},
    {ic:"🌱", h:"The bank heals", real:"Plaque regression", p:"With sustained, aggressive LDL-lowering, crews can finally clear the old pile and it shrinks — 64% of patients regressed in the GLAGOV statin + PCSK9-inhibitor trial."}
  ],

  // ---- Essays (longform pieces for the Essays hub) ----
  essays: ESSAYS_DATA
};
