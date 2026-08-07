// Wonderfully Made Labs — Module 2: "The Guards Who Forgot Their Friends"
// Autoimmunity (when the body's defenders mistake friend for foe).
// All narrative content, three tiers, drawn from the Module 2 story bible.
// Treatment backbone: American College of Rheumatology clinical practice guidelines.

window.WML2 = {
  meta: {
    title: "The Guards Who Forgot Their Friends",
    subtitle: "Autoimmunity — when the body's own defenders mistake friend for foe",
    verse: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. — Psalm 139:14",
    backbone: { t: "ACR Clinical Practice Guidelines", u: "https://rheumatology.org/clinical-practice-guidelines" }
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
      img: { explorer: "assets/guards_scene1_kingdom.jpg", scholar: "assets/guards_sch_scene1.jpg", researcher: "assets/guards_res_scene1.jpg" },
      titles: {
        explorer:  "The Kingdom That Knows Its Own",
        scholar:   "A Healthy, Tolerant Immune System",
        researcher:"Self-Tolerance: Central & Peripheral"
      },
      text: {
        explorer:  "Eight friends reach their favorite walled kingdom. Citizens bustle in the streets, and strong guards watch from the walls. At the gate, bandits are turned away — but every citizen, no matter how odd-looking, is waved through with a smile. The guards have a secret: at <b>Guard School</b> they learn every friendly face by heart, so they defend the kingdom <i>fiercely</i> without ever hurting a friend. There are even gentle <b>peace-keepers</b> to calm any guard who gets too jumpy. (Big word: <b>guards = the immune system</b>.)",
        scholar:   "A healthy <span class='keyword'>immune system</span> defends the body fiercely yet spares its own cells — this is <span class='keyword'>self-tolerance</span>. Developing T cells are screened in the <span class='keyword'>thymus</span> against the body's own proteins (<span class='keyword'>central tolerance</span>); self-attacking ones are removed. <span class='keyword'>Regulatory T cells (Tregs)</span> then patrol the body to suppress any that escape (<span class='keyword'>peripheral tolerance</span>).",
        researcher:"Central tolerance: thymic positive/negative selection, with <span class='keyword'>AIRE</span>-driven promiscuous expression of tissue-specific antigens in mTECs enabling clonal deletion and Treg diversion. Peripheral tolerance: anergy, receptor editing, clonal diversion, and FoxP3⁺ Treg suppression. Because the TCR repertoire arises from stochastic V(D)J recombination, self-reactivity is statistically inevitable — so tolerance is the body's engineered safeguard, not an accident."
      },
      cite: {t:"Cold Spring Harbor: T-Cell Tolerance", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3367546/"}
    },
    {
      n: "Beat 2",
      img: { explorer: "assets/guards_scene2_coat.jpg", scholar: "assets/guards_sch_scene2.jpg", researcher: "assets/guards_res_scene2.jpg" },
      flip: true,
      titles: {
        explorer:  "The Coat That Looked Like a Friend's",
        scholar:   "A Trigger & Molecular Mimicry",
        researcher:"Genetics + Environment + Mimicry"
      },
      text: {
        explorer:  "A hard season comes — a fever sweeps the kingdom and bandits press at the gates. The guards fight bravely and win. But Sunny notices something odd: one bandit wore a coat almost exactly like the <b>bakers'</b> coats. Plum writes in her journal: <i>“The guards remember that coat now. I hope they don't get confused.”</i> Some families' guards, the friends learn, are born a little quicker to suspect — it runs in the family. (Big word: <b>trigger = the thing that starts the mix-up</b>.)",
        scholar:   "Triggers can tip a susceptible person. In <span class='keyword'>molecular mimicry</span>, a microbe carries a fragment that resembles one of the body's own proteins, so immune cells trained on the microbe later <span class='keyword'>cross-react</span> with the body itself. Risk genes — especially <span class='keyword'>HLA</span> — make some people more susceptible, and triggers like infections, stress, and smoking matter. Autoimmune disease affects women far more (≈63–78% of patients).",
        researcher:"A threshold model: <span class='keyword'>genetics + environment + immune dysregulation</span>. HLA class II (the HLA-DRB1 \"shared epitope\" in RA; HLA-DR3/DR4 and DQ8 in type 1 diabetes) shapes which self-peptides are presented. Mechanisms include molecular mimicry, bystander activation, and epitope spreading; triggers include EBV and other infections, smoking, the microbiome, and hormones. The striking ~78% female predominance implicates sex hormones and X-linked gene dosage."
      },
      cite: {t:"PMC: Molecular Mimicry", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3266166/"}
    },
    {
      n: "Beat 3",
      img: { explorer: "assets/guards_scene3_poster.jpg", scholar: "assets/guards_sch_scene3.jpg", researcher: "assets/guards_res_scene3.jpg" },
      titles: {
        explorer:  "The First WANTED Poster of a Friend",
        scholar:   "Tolerance Breaks Down",
        researcher:"Loss of Tolerance & Autoantibodies"
      },
      text: {
        explorer:  "On the next visit, Plum looks closely and sees what everyone missed: a guard is nailing up a <b>WANTED poster</b> — but the face on it is a <i>baker</i>, a loyal citizen, not a bandit! The streets still look calm. The whole trouble is hidden in <b>one mistaken poster</b>. And the peace-keeper who should have torn it down is nowhere in sight. (Big word: <b>autoimmune = your own guards turning on a friend by mistake</b>.)",
        scholar:   "Self-tolerance breaks down. Self-reactive lymphocytes escape, and <span class='keyword'>autoantibodies</span> — antibodies aimed at the body's own proteins (like <span class='keyword'>ANA</span> in lupus or <span class='keyword'>anti-CCP</span> in rheumatoid arthritis) — appear, sometimes <i>years</i> before any symptoms. The target is <i>self</i>: the enemy is a mistake about a friend, not a real invader.",
        researcher:"Loss of tolerance: failure to clear apoptotic debris, inflammation-driven modification of self-antigens (neo-antigens), and TLR-driven activation of autoreactive B cells whose BCRs bind nucleic-acid–associated self-antigens. Autoantibodies (ANA, anti-dsDNA, anti-Sm in SLE; ACPA/anti-CCP and RF in RA) are often somatically mutated IgG — implying T-cell help — and frequently precede clinical disease by years."
      },
      teach: "<strong>The big idea:</strong> Autoimmunity is <i>friendly fire, not invasion</i>. The problem is not a weak immune system or an outside enemy that won't quit — it is the body's own guards, strong and loyal, <b>mistaking the kingdom's own citizens for invaders</b>.",
      cite: {t:"JCI: Autoantibodies in autoimmune disease", u:"https://www.jci.org/articles/view/78084"}
    },
    {
      n: "Beat 4",
      img: { explorer: "assets/guards_scene4_alarm.jpg", scholar: "assets/guards_sch_scene4.jpg", researcher: "assets/guards_res_scene4.jpg" },
      flip: true,
      titles: {
        explorer:  "Alarm Bells & the Gathering Guards",
        scholar:   "Autoantibodies & Inflammation",
        researcher:"Effector Mechanisms: B–T Help & Cytokines"
      },
      text: {
        explorer:  "Visit after visit, it spreads. The poster-makers and the sword-bearers egg each other on — more posters, more anger. Someone rings the great <b>alarm bell</b>, and guards come running from everywhere, sure there's an invasion. But there is no bandit. They're crowding around the <b>bakers</b>! (Big word: <b>inflammation = the angry crowd of guards</b>.)",
        scholar:   "<span class='keyword'>B cells</span> present self-antigen and make autoantibodies; <span class='keyword'>T cells</span> help and direct the attack. <span class='keyword'>Cytokines</span> — TNF-α, IL-6, IL-1, and type I interferon — ring the alarm, recruiting more immune cells and driving <span class='keyword'>inflammation</span> aimed at the body's own tissue.",
        researcher:"Effector mechanisms reach beyond antibody: B cells also present antigen, secrete cytokines, and seed ectopic germinal centers. CD40L–CD40 T–B help, immune-complex deposition, complement activation, and FcγR-mediated injury drive damage. Cytokine networks (TNF-α, IL-6, IL-1β) amplify it, with <span class='keyword'>type I interferon</span> a central hub in systemic lupus."
      },
      cite: {t:"PMC: B Cells in Autoimmune Diseases", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3692299/"}
    },
    {
      n: "Beat 5",
      img: { explorer: "assets/guards_scene5_workshops.jpg", scholar: "assets/guards_sch_scene5.jpg", researcher: "assets/guards_res_scene5.jpg" },
      titles: {
        explorer:  "One Workshop, or the Whole Town",
        scholar:   "Organ-Specific vs. Systemic — and Flares",
        researcher:"T1D, SLE & Relapsing-Remitting Dynamics"
      },
      text: {
        explorer:  "The friends notice two patterns. At <i>this</i> kingdom, the guards have boarded up a single building — the <b>insulin workshop</b> — so the town can't sweeten its bread. At a kingdom down the road, the guards are raiding the <i>whole town</i> at once. And strangest of all: some weeks the guards storm the streets, and other weeks everything goes quiet, like a storm that comes and goes. Rex insists the guards must know what they're doing. (Big word: <b>flare = a stormy week</b>.)",
        scholar:   "Autoimmunity can be <span class='keyword'>organ-specific</span> (e.g., <span class='keyword'>type 1 diabetes</span> — T cells destroy the insulin-making <span class='keyword'>beta cells</span>) or <span class='keyword'>systemic</span> (e.g., <span class='keyword'>lupus</span> — skin, joints, kidneys; <span class='keyword'>rheumatoid arthritis</span> — the joint lining; <span class='keyword'>Sjögren's</span> — tear and saliva glands). It typically <span class='keyword'>flares and remits</span> rather than progressing in a steady line.",
        researcher:"Organ-specific T1D: CD4/CD8 infiltration (insulitis); HLA-I hyperexpression on beta cells → CD8 CTL killing via perforin/granzyme and Fas/FasL → caspase-mediated apoptosis — the beta cell an active participant, not a passive target. Systemic SLE: multi-organ immune-complex disease. Flare/remission behaves like an excitable, relapsing dynamical system rather than monotonic progression."
      },
      cite: {t:"Frontiers: T cells & beta-cell destruction", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC5723426/"}
    },
    {
      n: "Beat 6",
      img: { explorer: "assets/guards_scene6_siege.jpg", scholar: "assets/guards_sch_scene6.jpg", researcher: "assets/guards_res_scene6.jpg" },
      flip: true,
      titles: {
        explorer:  "The Long Siege and Its Cost",
        scholar:   "Cumulative, Often Irreversible Damage",
        researcher:"Chronicity, Damage Accrual & Treat-to-Target"
      },
      text: {
        explorer:  "Seasons pass. Because no one ever called the guards off, the damage shows: the insulin workshop stands empty and cold, the door-hinges have swelled until the doors won't open, and the gardens have gone dry. It wasn't one big crash like an avalanche — the kingdom was worn down, little by little, by its own protectors who never got the all-clear.",
        scholar:   "Unchecked, repeated attacks cause <span class='keyword'>cumulative, often irreversible damage</span> — destroyed beta cells, eroded joints, scarred organs. This is exactly why <span class='keyword'>early diagnosis and treatment</span> matter so much: the goal is to stop the raids before the damage becomes permanent.",
        researcher:"Chronicity arises from self-sustaining autoreactive loops with tissue-specific endpoints: beta-cell mass loss in T1D, pannus and joint erosion in RA, glomerulonephritis in lupus nephritis. This is the rationale for <span class='keyword'>treat-to-target</span> strategies and early DMARD initiation — to prevent irreversible structural damage rather than merely chase symptoms."
      },
      cite: {t:"ACR: Rheumatoid Arthritis Guideline", u:"https://rheumatology.org/rheumatoid-arthritis-guideline"}
    },
    {
      n: "Beat 7",
      img: { explorer: "assets/guards_scene7_investigation.jpg", scholar: "assets/guards_sch_scene7.jpg", researcher: "assets/guards_res_scene7.jpg" },
      titles: {
        explorer:  "The Investigation",
        scholar:   "Becoming Investigators",
        researcher:"Three Disciplines, One Diagnosis"
      },
      text: {
        explorer:  "The friends refuse to accept it. They become <b>detectives</b>. Iris lines up all the kingdom portraits they drew on every visit and <i>sees</i> the slow change — the hinges swelling, the workshop emptying. Sunny builds a tiny model kingdom to watch how one wrong poster starts a riot. Echo travels to <i>another</i> kingdom and finds the very same trouble. It's not an accident — it's a <b>kind of sickness</b>, and now they can study it!",
        scholar:   "Investigation takes three disciplines. <b>Radiology / imaging</b>: serial X-ray, ultrasound, and MRI track joint and organ change. <b>Immunology research</b>: model systems (like NOD mice) reveal how tolerance fails. <b>Rheumatology / medicine</b>: recognize the pattern, order the right <span class='keyword'>autoantibody labs</span> (ANA, anti-CCP, anti-dsDNA), and treat. Diagnosis needs all three working together.",
        researcher:"Diagnostics: imaging (radiographic erosions, ultrasound synovitis, MRI), serology (ANA patterns, anti-CCP, anti-dsDNA, complement), and inflammatory markers (CRP/ESR). Discovery: model systems (NOD mouse for T1D; induced and spontaneous lupus models). Each modality maps to a distinct research or clinical career — and the collaboration itself is the point."
      },
      cite: {t:"ACR Clinical Practice Guidelines", u:"https://rheumatology.org/clinical-practice-guidelines"}
    },
    {
      n: "Beat 8",
      img: { explorer: "assets/guards_scene8_remember.jpg", scholar: "assets/guards_sch_scene8.jpg", researcher: "assets/guards_res_scene8.jpg" },
      flip: true,
      titles: {
        explorer:  "Helping the Guards Remember",
        scholar:   "Treatment, Prevention & the Body's Design",
        researcher:"Therapeutics & the Tolerance Frontier"
      },
      text: {
        explorer:  "Now the friends help. Captain Cole sends a <b>wise teacher</b> to retrain the jumpiest guards. They muffle the <b>alarm bells</b> so fewer guards come running, and gently retire the busiest poster-makers. In an emergency, they calm the whole town for a little while. For the boarded-up insulin workshop, they bring in sweet bread from outside until it can be helped. Best of all, they discover the kingdom <i>already had</i> peace-keepers built in — and the real hope is to make those peace-keepers strong, so the guards <b>remember their friends</b> on their own. The body was <i>designed</i> to know its own.",
        scholar:   "Treatment follows the <span class='keyword'>ACR guidelines</span>. For RA, <span class='keyword'>methotrexate</span> (a <span class='keyword'>DMARD</span>) is first-line; <span class='keyword'>biologics</span> block specific cytokines (TNF, IL-6); <span class='keyword'>B-cell therapy</span> (rituximab) removes autoantibody-makers; <span class='keyword'>corticosteroids</span> calm crises short-term; and <span class='keyword'>replacement therapy</span> restores what's lost (insulin in type 1 diabetes). The frontier — and the deepest hope — is <span class='keyword'>restoring tolerance</span> by strengthening the body's own Tregs.",
        researcher:"Therapeutic mechanisms: <span class='keyword'>methotrexate</span> (antifolate, AICAR/adenosine, anti-inflammatory; ACR first-line for moderate-high RA); TNF inhibitors, IL-6 receptor blockade (tocilizumab), JAK inhibitors; B-cell depletion (rituximab/anti-CD20); belimumab (anti-BAFF) in SLE; targeted type I IFN agents; judicious corticosteroids; replacement (insulin, levothyroxine). <b>Tolerance-restoring frontier:</b> antigen-specific tolerance, Treg expansion and adoptive Treg therapy, peripheral-tolerance checkpoint targeting. That a defense this fierce can be this gentle to its own is a designed safeguard worth studying with reverence."
      },
      cite: {t:"ACR: RA Guideline 2021", u:"https://rheumatology.org/rheumatoid-arthritis-guideline"}
    }
  ],

  gameSteps: [
    {n:"1", h:"Observe", p:"Tag what changed in the kingdom since last visit — the WANTED poster, the gathering guards, the boarded workshop."},
    {n:"2", h:"Compare", p:"Line up the kingdom portraits in time order — the slow change becomes undeniable."},
    {n:"3", h:"Hypothesize", p:"Is the kingdom being invaded from outside, or are its own guards making a mistake?"},
    {n:"4", h:"Model", p:"Build the tiny model kingdom: what happens if one wrong poster goes up and no peace-keeper tears it down?"},
    {n:"5", h:"Confirm", p:"Echo finds a second kingdom with the same pattern — it's a repeatable kind of trouble, not one accident."},
    {n:"6", h:"Name It", p:"Diagnose: autoimmune disease (e.g., RA, lupus, type 1 diabetes)."}
  ],

  quiz: {
    q: "Why are the guards fighting their own citizens?",
    sub: "This is the question the whole story turns on. Pick what you think — then see why scientists found the surprising answer.",
    options: [
      {t:"The kingdom is being invaded from outside", sub:"An enemy that just won't quit", correct:false,
       verdict:"This is what almost everyone guesses — but it's not right. There is no invader. The guards are reacting to an enemy that isn't really there."},
      {t:"The guards are mistaking their own citizens for invaders", sub:"Friendly fire, not invasion", correct:true,
       verdict:"Exactly right. Autoimmunity is <b>friendly fire, not invasion</b>: strong, loyal guards mistake the kingdom's own citizens for the enemy. This single, counter-intuitive fact is the heart of every autoimmune disease — and it's why the body was built with a Guard School and peace-keepers to prevent it."},
      {t:"The guards have grown too weak to fight", sub:"A weak immune system", correct:false,
       verdict:"Not quite — the trouble isn't weakness. The guards are <i>strong</i> and well-meaning; they've simply gotten confused about who is a friend."}
    ]
  },

  careers: [
    {avatar:"assets/iris.jpeg", name:"Iris", role:"The Radiologist / Imager", who:"The one who sees change over time.",
     real:"Reads serial imaging — X-ray, ultrasound, MRI — to detect and measure joint and organ damage in autoimmune disease, often tracking it over years.",
     cite:{t:"ACR Guidelines", u:"https://rheumatology.org/clinical-practice-guidelines"}},
    {avatar:"assets/sunny.jpeg", name:"Sunny", role:"The Immunologist / Scientist", who:"The one who builds a model to ask why.",
     real:"Uses cell and animal models (e.g., NOD mice) to learn how self-tolerance fails — and how it might be restored.",
     cite:{t:"Beta-cell & T1D models", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC5723426/"}},
    {avatar:"assets/echo.jpeg", name:"Echo", role:"The Physician / Rheumatologist", who:"The one who recognizes the pattern in a patient.",
     real:"Recognizes the disease pattern, orders the right autoantibody labs, and chooses treatment following ACR guidelines.",
     cite:{t:"ACR: RA Guideline", u:"https://rheumatology.org/rheumatoid-arthritis-guideline"}}
  ],

  treatments: [
    {meta:"Retrain the jumpiest guards", real:"DMARDs (methotrexate)", p:"A wise teacher retrains over-eager guards. For RA, the ACR strongly recommends methotrexate as first-line therapy."},
    {meta:"Muffle the alarm bells", real:"Anti-cytokine biologics", p:"Quiet the alarm so fewer guards come running — TNF inhibitors, IL-6 blockade, and JAK inhibitors."},
    {meta:"Retire the poster-makers", real:"B-cell therapy", p:"Gently retire the busiest poster-makers — B-cell–targeted therapy like rituximab."},
    {meta:"Calm the whole town briefly", real:"Corticosteroids", p:"A short, careful dose calms a crisis — used short-term where possible, per ACR guidance."},
    {meta:"Bring in what's missing", real:"Replacement therapy", p:"Bring in from outside what a boarded-up workshop can't make — insulin in type 1 diabetes, thyroid hormone in thyroiditis."},
    {meta:"Catch it early", real:"Treat-to-target", p:"Help the next kingdom before a single friend gets hurt — treat early, before irreversible damage sets in."}
  ],

  defenses: [
    {ic:"🎓", h:"The Guard School", real:"Central tolerance · AIRE", p:"The body teaches every defender to know its own — developing immune cells are screened against 'self' in the thymus, guided by AIRE."},
    {ic:"🕊️", h:"The peace-keepers", real:"Regulatory T cells", p:"A built-in brake on overzealous defense: Tregs patrol the body and calm any cell that turns on a friend."},
    {ic:"🌱", h:"The guards remember", real:"Restoring tolerance", p:"The research frontier — and the deepest hope: strengthen the body's own peace-keepers so the guards remember their friends on their own."}
  ]
};
