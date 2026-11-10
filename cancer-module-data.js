// Wonderfully Made Labs — Module 4: "The Worker Who Forgot the Rule"
// Cancer biology, told with wonder. Backbone: the Workshop-Garden of the body.
// Spiritual backbone: the body is so wonderfully made that billions of workers follow the rules
// perfectly every day. Cancer is what rarely happens when one worker's Rule Book (DNA) gets a
// smudge (mutation) NO ONE CAUSED — never a punishment, never a fault, never weakness.
// The heroes are the body's Guards (checkpoints, p53, DNA repair, immune cells) AND the human doctors.
// Explorer tier = monster/story art (the sad little worker who can't read "stop");
// Scholar = friendly real medical illustration; Researcher = clinical/scientific illustration.
// Guideline + evidence backbone: National Cancer Institute (cancer.gov), Dana-Farber, MedlinePlus/NIH,
// NIH NIGMS, Ludwig Cancer Research / Johns Hopkins (Vogelstein random-error study), ASCO Post,
// PubMed/PMC (Hanahan & Weinberg, Hallmarks of Cancer). Educational only; not medical advice.
// Reuses the existing cast (Plum, Sunny, Iris, Echo) and Module-1 CSS classes.

window.WML4 = {
  meta: {
    title: "The Worker Who Forgot the Rule",
    subtitle: "What cancer really is — and why it is never your fault",
    verse: "I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well. — Psalm 139:14",
    backbone: { t: "National Cancer Institute — What Is Cancer", u: "https://www.cancer.gov/about-cancer/understanding/what-is-cancer" }
  },

  tiers: {
    explorer:  { label: "Explorer", age: "Ages 8–13" },
    scholar:   { label: "Scholar", age: "High school" },
    researcher:{ label: "Researcher", age: "Pre-med · College" }
  },

  // cite helper: {t: text, u: url}
  beats: [
    {
      n: "Beat 1",
      img: { explorer: "assets/cancer_b1_explorer.jpg", scholar: "assets/cancer_b1_scholar.jpg", researcher: "assets/cancer_b1_researcher.jpg" },
      titles: {
        explorer:  "The Workshop That Almost Never Fails",
        scholar:   "The Cell and the Cell Cycle",
        researcher:"Cellular Turnover and the Cell Cycle"
      },
      text: {
        explorer:  "Imagine your body as a giant, glowing workshop with <b>trillions</b> of tiny workers, each doing one careful job. Every single day, about <b>330 billion</b> worn-out workers gently lay themselves down, and 330 billion brand-new ones step in to take their place. And here is the wonder: almost <i>every single time</i>, it happens perfectly. This is a body that is wonderfully made.",
        scholar:   "Your body is built from roughly <b>30–36 trillion cells</b>, and about <b>330 billion are replaced every day</b>. When a cell divides, it follows a careful sequence called the <span class='keyword'>cell cycle</span> — it rests (G0), grows (G1), copies all of its DNA (S), double-checks its work (G2), and finally divides (M). Most cells finish one full cycle in about a day.",
        researcher:"The human body comprises ~30–36 × 10¹² cells with a daily turnover near 3.3 × 10¹¹. Mitotic cells progress through the <span class='keyword'>cell cycle</span> (G0/G1/S/G2/M); ~90% of the cycle is interphase. DNA replication fidelity is extraordinary — on the order of fewer than one uncorrected error per 10⁹ bases — owing to polymerase proofreading and mismatch repair. This precision, sustained across a lifetime of divisions, is the baseline against which malignancy must be understood."
      },
      cite: {t:"NIH NIGMS · Cells by the Numbers", u:"https://nigms.nih.gov/biobeat/2024/09/cells-by-the-numbers-2"}
    },
    {
      n: "Beat 2",
      img: { explorer: "assets/cancer_b2_explorer.jpg", scholar: "assets/cancer_b2_scholar.jpg", researcher: "assets/cancer_b2_researcher.jpg" },
      flip: true,
      titles: {
        explorer:  "The Three Good Rules",
        scholar:   "How Healthy Cells Behave",
        researcher:"Growth Control, Contact Inhibition & Apoptosis"
      },
      text: {
        explorer:  "Every worker carries a little <b>Rule Book</b>, and it holds three good rules: <b>1.</b> Grow only in your own spot. <b>2.</b> Rest when the workshop is full. <b>3.</b> When you are worn out, lay yourself down gently so a fresh worker can take your place. That last rule isn't sad — it's a quiet, brave gift the worker gives so the whole body stays healthy.",
        scholar:   "Healthy cells obey their <span class='keyword'>DNA</span> — their instruction book. They only divide when growth signals tell them to, they stop dividing when they touch their neighbors (<span class='keyword'>contact inhibition</span>), and when they are too damaged to repair, they trigger their own clean self-shutdown called <span class='keyword'>apoptosis</span>. Apoptosis is not a failure — it is the system working exactly as designed.",
        researcher:"Normal somatic cells proliferate only in response to mitogenic signaling, exhibit <span class='keyword'>contact inhibition</span>, and remain anchorage-dependent. Irreparable genomic damage triggers <span class='keyword'>apoptosis</span> — caspase-mediated programmed cell death that dismantles the cell without inflammatory spillover. These behaviors are not incidental; they are the regulatory contract that allows trillions of cells to cooperate as one organism."
      },
      cite: {t:"NCI · What Is Cancer", u:"https://www.cancer.gov/about-cancer/understanding/what-is-cancer"}
    },
    {
      n: "Beat 3",
      img: { explorer: "assets/cancer_b3_explorer.jpg", scholar: "assets/cancer_b3_scholar.jpg", researcher: "assets/cancer_b3_researcher.jpg" },
      titles: {
        explorer:  "The Inspectors and the Guardian",
        scholar:   "Checkpoints and p53",
        researcher:"Cell-Cycle Checkpoints & the p53 Network"
      },
      text: {
        explorer:  "The workshop has faithful <b>Inspectors</b> who stand at every stage and ask, <i>“Is everything okay before we go on?”</i> And there is one great Guardian — the wisest of them all — who checks every Rule Book for smudges. If a book can be fixed, the Guardian fixes it. If it can't, the Guardian gently asks that worker to lay himself down. Most smudges never get past the Guardian. That is the wonder.",
        scholar:   "The cell cycle has built-in <span class='keyword'>checkpoints</span> (G1, G2, and the spindle checkpoint) that halt division if something is wrong. The most important guard is a protein called <span class='keyword'>p53</span>, nicknamed <i>“the guardian of the genome.”</i> When DNA is damaged, p53 pauses the cell, calls in repairs, or — if the damage is too great — orders apoptosis. It prevents damaged cells from ever dividing.",
        researcher:"Checkpoint surveillance (G1/S, intra-S, G2/M, spindle assembly) integrates DNA-damage signaling via ATM/ATR → CHK1/CHK2. The <span class='keyword'>TP53</span> tumor-suppressor — the guardian of the genome — induces p21-mediated arrest, transactivates repair genes, or commits the cell to apoptosis via PUMA/BAX. TP53 is the most frequently mutated gene in human cancer, altered in roughly half of all malignancies."
      },
      cite: {t:"MedlinePlus / NIH · TP53", u:"https://medlineplus.gov/genetics/gene/tp53/"}
    },
    {
      n: "Beat 4",
      img: { explorer: "assets/cancer_b4_explorer.jpg", scholar: "assets/cancer_b4_scholar.jpg", researcher: "assets/cancer_b4_researcher.jpg" },
      titles: {
        explorer:  "The Smudge No One Caused",
        scholar:   "Mutations: A Typo in the Instructions",
        researcher:"Somatic Mutation and Stochastic Replication Error"
      },
      text: {
        explorer:  "Here is the most important part of the whole story. The Rule Book is copied <b>billions and billions</b> of times. Once in a great while, purely by chance, a single word gets a tiny <b>smudge</b> — like a typo that slips past every spell-checker. <b>Nobody caused it.</b> Not the worker. Not anything anyone did or thought or felt. It is not a punishment, and it is not anyone's fault. It is simply what can happen when something is copied so many times.",
        scholar:   "A change to a cell's DNA is called a <span class='keyword'>mutation</span> — a typo in a three-billion-letter instruction manual. Most mutations are harmless. It usually takes <i>several</i> mutations, built up over many years, before a cell turns cancerous — which is why cancer is mostly a disease of older age. About <b>two-thirds of cancer mutations come from random copying errors</b>, not from anything a person did.",
        researcher:"Carcinogenesis is a multistep somatic-evolution process requiring sequential driver mutations in oncogenes, tumor-suppressors, and repair genes. Tomasetti & Vogelstein (Science, 2017) attribute ≈66% of driver mutations across 32 cancer types to stochastic DNA-replication errors, ~29% to environmental exposure, and ~5% to heredity — with random error exceeding 95% in brain, prostate, and bone cancers. The clinical and ethical corollary is explicit: a large fraction of cancer is unavoidable and attributable to chance."
      },
      teach: "<strong>The most important page in this whole story:</strong> the smudge is <b>no one's fault</b>. As cancer scientist Dr. Bert Vogelstein put it, <i>“We don't want people to feel guilty if they do develop cancer.”</i> Choosing healthy habits can lower one kind of risk — but even people who do everything right can still get cancer, through no fault of their own.",
      cite: {t:"Ludwig / Johns Hopkins · random copying errors", u:"https://www.ludwigcancerresearch.org/news-releases/new-study-finds-that-most-cancer-mutations-are-due-to-random-dna-copying-errors/"}
    },
    {
      n: "Beat 5",
      img: { explorer: "assets/cancer_b5_explorer.jpg", scholar: "assets/cancer_b5_scholar.jpg", researcher: "assets/cancer_b5_researcher.jpg" },
      flip: true,
      titles: {
        explorer:  "The Worker Who Forgot the Rule",
        scholar:   "When a Cell Ignores the Rules",
        researcher:"Oncogenes, Failed Suppressors & Death Resistance"
      },
      text: {
        explorer:  "Now meet him. He is not a villain, and he is not an invader — he is one of the body's <b>own good workers</b>. But his Rule Book got smudged on the rule that says <i>stop</i>, and now his book just reads <b>“grow.”</b> He isn't bad. He simply can't read the rule anymore. So he keeps building when he should rest, and he makes copies of himself who can't read it either. He looks more lost than scary.",
        scholar:   "A cancer cell breaks the three rules at once. Its <span class='keyword'>accelerator gets stuck on</span> (a mutated growth gene called an <span class='keyword'>oncogene</span>), its <span class='keyword'>brakes stop working</span> (a damaged tumor-suppressor gene), and its <span class='keyword'>self-destruct button breaks</span> (it resists apoptosis). So it grows when it shouldn't, ignores stop signals, and refuses to die — piling over its neighbors.",
        researcher:"Malignant transformation reflects several of the Hanahan–Weinberg hallmarks: sustained proliferative signaling (activated <span class='keyword'>oncogenes</span>, e.g. constitutively active KRAS), evasion of growth suppressors (loss of RB/p53 function), and resistance to apoptosis (e.g. BCL-2 upregulation). The accelerator is jammed, the brakes are cut, and the programmed-death failsafe is disabled — the cell now proliferates autonomously."
      },
      cite: {t:"PubMed · Hanahan & Weinberg, Hallmarks", u:"https://pubmed.ncbi.nlm.nih.gov/21376230/"}
    },
    {
      n: "Beat 6",
      img: { explorer: "assets/cancer_b6_explorer.jpg", scholar: "assets/cancer_b6_scholar.jpg", researcher: "assets/cancer_b6_researcher.jpg" },
      titles: {
        explorer:  "The Pile That Calls for Supplies",
        scholar:   "Blood Supply and Spreading",
        researcher:"Angiogenesis & Metastasis"
      },
      text: {
        explorer:  "The growing pile gets hungry. So it does something clever and a little sad: it calls for a <b>construction crew</b> to build brand-new supply pipes straight to itself, stealing food and water from the good workers. And worst of all, a few copies sometimes break away and <b>wander off to other rooms</b> of the workshop to start new piles. That wandering is the hardest part of the whole problem.",
        scholar:   "A tumor quickly outgrows its food supply, so it releases signals (like <span class='keyword'>VEGF</span>) that trick the body into building new blood vessels right into the tumor — this is called <span class='keyword'>angiogenesis</span>. Then some cancer cells learn to break away, travel through the blood or lymph, and start new tumors elsewhere. That spreading is called <span class='keyword'>metastasis</span>, and it is what makes cancer most dangerous.",
        researcher:"To overcome diffusion limits, tumors induce <span class='keyword'>angiogenesis</span> via VEGF/HIF-1α signaling, co-opting wound-healing programs to vascularize the tumor mass. <span class='keyword'>Metastasis</span> — the invasion–intravasation–survival–extravasation–colonization cascade, often involving epithelial–mesenchymal transition — accounts for the majority of cancer mortality and underlies the complexity of systemic disease management."
      },
      cite: {t:"Rockland · Hallmarks of Cancer", u:"https://www.rockland.com/resources/hallmarks-of-cancer/"}
    },
    {
      n: "Beat 7",
      img: { explorer: "assets/cancer_b7_explorer.jpg", scholar: "assets/cancer_b7_scholar.jpg", researcher: "assets/cancer_b7_researcher.jpg" },
      flip: true,
      titles: {
        explorer:  "The Guards Fight Back",
        scholar:   "The Immune System on Patrol",
        researcher:"Cancer Immunosurveillance & Immune Evasion"
      },
      text: {
        explorer:  "Your body is not helpless — it has brave <b>Hunters</b> who patrol every room, looking for workers who have forgotten the rules. Most of the time, the Hunters find the lost worker early and gently stop him before any pile can grow. But a clever pile learns to <b>hide its smudge</b> and even wave a fake flag that says <i>“nothing to see here.”</i> That trick is how some cancers slip past the Guards.",
        scholar:   "Your <span class='keyword'>immune system</span> doesn't just fight germs — it hunts abnormal cells too, a job called <span class='keyword'>immunosurveillance</span>. <span class='keyword'>Natural killer cells</span> and <span class='keyword'>T cells</span> find and destroy early cancer cells. But cancer hides by lowering its “I'm abnormal” flags and displaying a false <span class='keyword'>“don't-attack-me” signal (PD-L1)</span> that tells the immune cells to stand down.",
        researcher:"Endogenous <span class='keyword'>immunosurveillance</span> — NK-cell recognition of missing-self and CD8⁺ cytotoxic T-lymphocyte recognition of tumor antigens (primed by dendritic cells) — eliminates nascent transformed clones; tumor-infiltrating lymphocyte density correlates with prognosis. Tumors evade via antigen/MHC-I downregulation and immune-checkpoint ligands such as <span class='keyword'>PD-L1</span>, which engage inhibitory receptors to suppress T-cell effector function."
      },
      cite: {t:"NCI · Immunotherapy", u:"https://www.cancer.gov/about-cancer/treatment/types/immunotherapy"}
    },
    {
      n: "Beat 8",
      img: { explorer: "assets/cancer_b8_explorer.jpg", scholar: "assets/cancer_b8_scholar.jpg", researcher: "assets/cancer_b8_researcher.jpg" },
      titles: {
        explorer:  "The Guards and the Doctors, Together",
        scholar:   "How Doctors Help the Body Fight",
        researcher:"Therapeutic Strategies Aligned to Mechanism"
      },
      text: {
        explorer:  "Here is the hopeful part. When the body's own Guards need help, the <b>human doctors</b> come and work right alongside them. Some doctors gently <b>lift the pile out</b>. Some bring medicine that tells the over-builders to <b>stop</b>. Some <b>fix the stuck accelerator</b>. And some <b>pull off the fake flag</b> so the Hunters can finally see the lost worker again. The body and the doctors, side by side.",
        scholar:   "Doctors come alongside the body's defenses with four main tools: <b>surgery</b> removes the tumor; <b>chemotherapy and radiation</b> stop fast-dividing cells; <b>targeted therapy</b> jams the specific stuck “accelerator”; and <b>immunotherapy</b> (checkpoint inhibitors) pulls off cancer's false “don't-attack-me” flag so the immune system can see and destroy it again.",
        researcher:"Modern oncology maps therapy to mechanism: cytoreductive <b>surgery</b>; <b>cytotoxic chemotherapy / radiotherapy</b> exploiting proliferative and DNA-damage vulnerabilities; <b>targeted agents</b> against driver lesions (tyrosine-kinase inhibitors, KRAS-G12C inhibitors); and <b>immune-checkpoint blockade</b> (anti-PD-1/PD-L1, anti-CTLA-4) that restores endogenous T-cell–mediated tumor clearance — medicine coming alongside the body's own design."
      },
      cite: {t:"NCI · Immunotherapy / checkpoint inhibitors", u:"https://www.cancer.gov/about-cancer/treatment/types/immunotherapy"}
    }
  ],

  gameSteps: [
    {n:"1", h:"Observe", p:"Look closely at one worker — is he following the three rules, or only the word “grow”?"},
    {n:"2", h:"Compare", p:"Line up the cells: a healthy patch versus a piled-up patch. What's different?"},
    {n:"3", h:"Hypothesize", p:"Is the trouble something from outside — or a smudge in this worker's own Rule Book?"},
    {n:"4", h:"Model", p:"Watch how one rule-breaker becomes two, then four. How fast does an unread rule add up?"},
    {n:"5", h:"Look Inside", p:"Use the imagers' scans to see where the pile is and whether it has wandered."},
    {n:"6", h:"Name It", p:"Diagnose: a tumor caused by a random change in the cell's DNA — no one's fault."}
  ],

  quiz: {
    q: "Whose fault is the smudge that starts a cancer?",
    sub: "This is the question the whole story turns on. Pick what you think — then see what scientists actually found.",
    options: [
      {t:"Something the person did or didn't do", sub:"A punishment or a failure", correct:false,
       verdict:"This is what many people fear — but it's not true, and believing it only adds pain. Cancer is <b>not</b> a punishment and not a sign of weakness. Even people who do everything right can still get cancer."},
      {t:"No one's — it's a random copying error", sub:"A typo no one caused", correct:true,
       verdict:"Exactly right. About <b>two-thirds of cancer mutations are random copying errors</b> made as cells divide — what scientists call “bad luck.” As Dr. Bert Vogelstein said, <i>“We don't want people to feel guilty if they do develop cancer.”</i> No one is to blame."},
      {t:"An invader that attacked from outside", sub:"Like a germ breaking in", correct:false,
       verdict:"Not quite. Cancer isn't an outside invader — it begins as one of the body's <b>own</b> good cells whose instruction book got a smudge it can no longer read."}
    ]
  },

  careers: [
    {avatar:"assets/iris.jpeg", name:"Iris", role:"The Radiologist", who:"The one who sees the pile and watches it over time.",
     real:"Uses CT, MRI, PET, and ultrasound to find tumors, measure them, and check whether cancer has spread — often guiding the whole treatment plan.",
     cite:{t:"NCI · Cancer imaging", u:"https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis"}},
    {avatar:"assets/sunny.jpeg", name:"Sunny", role:"The Cancer Biologist", who:"The one who builds models to ask why a rule got forgotten.",
     real:"Studies the genes and pathways that drive cancer, and tests new treatments in cell and animal models — the science behind every therapy.",
     cite:{t:"PubMed · Hallmarks of Cancer", u:"https://pubmed.ncbi.nlm.nih.gov/21376230/"}},
    {avatar:"assets/echo.jpeg", name:"Echo", role:"The Oncologist", who:"The one who recognizes the pattern and walks with the patient.",
     real:"Diagnoses cancer, chooses chemotherapy, targeted therapy, or immunotherapy, and cares for the whole person through treatment and recovery.",
     cite:{t:"NCI · Cancer treatment", u:"https://www.cancer.gov/about-cancer/treatment/types"}},
    {avatar:"assets/tempo.jpeg", name:"Tempo", role:"The Pathologist", who:"The one who names the cells under the microscope.",
     real:"Examines a biopsy under the microscope and runs molecular tests to identify exactly which cells forgot the rules — the diagnosis everything depends on.",
     cite:{t:"NCI · Diagnosis & pathology", u:"https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis"}}
  ],

  treatments: [
    {meta:"Lift the pile out", real:"Surgery", p:"A surgeon carefully removes the tumor — often the first and most direct step when cancer is caught early."},
    {meta:"Stop the over-builders", real:"Chemotherapy", p:"Medicine that targets fast-dividing cells throughout the body, slowing or stopping the cells that won't stop on their own."},
    {meta:"Aim a steady light", real:"Radiation therapy", p:"Focused energy damages cancer cells' DNA in one spot so they can no longer divide."},
    {meta:"Fix the stuck accelerator", real:"Targeted therapy", p:"Drugs designed for a specific broken gene — they jam the exact “accelerator” that's stuck on."},
    {meta:"Pull off the false flag", real:"Immunotherapy", p:"Checkpoint inhibitors remove cancer's fake “don't-attack-me” signal so the immune system can see and fight it again."},
    {meta:"Watch and wait, wisely", real:"Active surveillance", p:"For some slow, low-risk cancers, doctors monitor closely instead of treating right away — sparing harm when it's safe to wait."}
  ],

  defenses: [
    {ic:"📖", h:"The Guardian of the Book", real:"p53 · checkpoints", p:"A protein called p53 stops damaged cells from dividing and fixes or retires them — guarding the genome before any tumor can form."},
    {ic:"✏️", h:"The Proofreaders", real:"DNA repair", p:"Repair enzymes scan every freshly copied strand of DNA and quietly correct the typos before a cell ever divides."},
    {ic:"🛡️", h:"The Hunters", real:"Immune surveillance", p:"Natural killer cells and T cells patrol every tissue, finding and destroying abnormal cells — most threats are stopped before we ever know."}
  ]
};
