// Wonderfully Made Labs — Module 3: "The Furnace Friend"
// Preventive health — why our moms bug us to eat our vegetables and move our bodies.
// Spiritual backbone: God's perfect design — when what comes IN (fuel/nourishment) and what
// goes OUT (fire/movement) are in balance, the body burns clean and works as wonderfully made.
// Metaphor: a lovable monster whose belly is a glowing furnace. Food = fuel in; movement = fire out.
// Balance = clean warm glow. Imbalance = soot and clog. Restored balance = burns clean again.
// Explorer tier = monster art; Scholar = friendly real medical scans; Researcher = clinical imaging.
// Three trajectories, each cited: PREVENTION (balance keeps disease away), PROGRESSION (imbalance → disease),
// REGRESSION (restored balance → healing / reversal).
// Guidelines backbone: ACSM, WHO, AHA/ACC, ASPC, DGA 2020–2025, plus plant-based evidence.
// Reuses the existing cast.

window.WML3 = {
  meta: {
    title: "The Furnace Friend",
    subtitle: "Preventive health — why our moms bug us to eat our vegetables and move our bodies",
    verse: "I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well. — Psalm 139:14",
    backbone: { t: "ACSM Physical Activity Guidelines", u: "https://acsm.org/physical-activity-guidelines-faqs/" }
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
      img: { explorer: "assets/furnace_scene1.jpg", scholar: "assets/furnace_sch_scene1.jpg", researcher: "assets/furnace_res_scene1.jpg" },
      titles: {
        explorer:  "The Friend with a Furnace Inside",
        scholar:   "The Body Runs on Fuel In, Fire Out",
        researcher:"Energy Homeostasis & Metabolic Set-Points"
      },
      text: {
        explorer:  "The eight friends meet a big, gentle monster with a warm <b>furnace</b> glowing softly in its belly. The furnace is what keeps it strong and happy. It runs on two simple things: <b>fuel</b> shoveled <i>in</i> (the food it eats) and <b>fire</b> that burns it up <i>out</i> (all the running and playing it does). When the fuel coming in matches the fire going out, the furnace glows a clean, cozy gold. Plum writes in her journal: <i>“It isn't magic — it's <b>balance</b>. Maybe that's why Mom talks about vegetables and going outside.”</i> (Big idea: <b>fuel in should match fire out</b>.)",
        scholar:   "Your body is a bit like a <span class='keyword'>furnace</span>. The fuel comes <i>in</i> as food; the fire burns <i>out</i> as movement, repair, and growth. A healthy body keeps these in <span class='keyword'>balance</span> — part of <span class='keyword'>homeostasis</span>, the body's self-correcting design. The <i>quality</i> of the fuel matters as much as the amount: fiber, potassium, healthy fats, and protein each have a job. When intake and output match, blood sugar, blood pressure, and cholesterol all settle into their healthy ranges.",
        researcher:"The body is a tightly regulated homeostatic system: energy intake is balanced against total daily energy expenditure (resting metabolic rate + thermic effect of food + activity), with leptin, insulin, ghrelin, and hypothalamic circuits defending set-points. Fuel quality — macronutrient and micronutrient composition — modulates insulin sensitivity, endothelial function, lipid handling, and inflammatory tone. The 2020–2025 Dietary Guidelines and ACSM/WHO activity guidance describe the two halves of this same balance: a designed system that 'burns clean' when both fuel and fire are honored."
      },
      cite: {t:"Dietary Guidelines for Americans 2020–2025", u:"https://www.dietaryguidelines.gov/sites/default/files/2021-03/Dietary_Guidelines_for_Americans-2020-2025.pdf"}
    },
    {
      n: "Beat 2",
      img: { explorer: "assets/furnace_scene2.jpg", scholar: "assets/furnace_sch_scene2.jpg", researcher: "assets/furnace_res_scene2.jpg" },
      flip: true,
      titles: {
        explorer:  "Why the Green Fuel Burns Best",
        scholar:   "What Vegetables Actually Do",
        researcher:"Phytonutrients, Fiber & Cardiometabolic Signaling"
      },
      text: {
        explorer:  "Sunny inspects the fuel pile. Some fuel is <b>clean</b> and some is <b>sooty</b>. The cleanest fuel of all is the <b>green fuel</b> — vegetables and fruit. It comes with its own little chimney-sweeps: <b>fiber</b> that keeps the furnace from flaring too fast, <b>potassium</b> that keeps the heat calm, and bright-colored <b>helpers</b> that scrub soot off the walls before it builds up. The best fuel mix is about <b>two fruits and three vegetables a day</b>. Plum smiles: <i>“So that's what Mom means by ‘eat your vegetables’ — she's loading the clean fuel.”</i> (Big word: <b>nutrients = the helpers inside food</b>.)",
        scholar:   "Vegetables and fruit are the <span class='keyword'>cleanest fuel</span>. They deliver <span class='keyword'>fiber</span> (slows sugar, lowers LDL, feeds gut bacteria), <span class='keyword'>potassium</span> (lowers blood pressure), and <span class='keyword'>polyphenols/antioxidants</span> that protect blood-vessel linings — the chimney-sweeps that scrub the soot. Research points to roughly <b>two servings of fruit and three of vegetables a day</b> — five total. The American Heart Association's 2021 dietary guidance centers the whole eating <i>pattern</i>: plenty of vegetables, fruit, whole grains, legumes, nuts, and healthy oils.",
        researcher:"Plant foods supply soluble/insoluble fiber (↓LDL via bile-acid sequestration, improved glycemic response, SCFA production by colonic microbiota), potassium and nitrate (vasodilation, ↓BP), and polyphenols/carotenoids that reduce oxidative stress and improve endothelial nitric-oxide bioavailability — the molecular 'soot-scrubbers.' Pooled cohort data indicate ~5 servings/day (≈2 fruit + 3 vegetable) associate with the lowest mortality; the AHA 2021 guidance frames diet quality as a dietary pattern rather than single nutrients."
      },
      teach: "<strong>Why moms nag, in one line:</strong> ‘Eat your vegetables’ is shorthand for ‘load your furnace with the clean fuel that burns bright and keeps the chimney clear.’",
      cite: {t:"AHA: the right 5-a-day mix is 2 fruit + 3 vegetables", u:"https://newsroom.heart.org/news/the-right-5-a-day-mix-is-2-fruit-and-3-vegetable-servings-for-longer-life"}
    },
    {
      n: "Beat 3",
      img: { explorer: "assets/furnace_scene3.jpg", scholar: "assets/furnace_sch_scene3.jpg", researcher: "assets/furnace_res_scene3.jpg" },
      titles: {
        explorer:  "Why Moving Stokes the Fire",
        scholar:   "What Movement Actually Does",
        researcher:"Exercise as a Multisystem Stimulus"
      },
      text: {
        explorer:  "Now Echo watches what happens when the monster <i>moves</i>. Running and playing aren't just for fun — they <b>stoke the fire</b>, and a well-stoked fire burns the fuel <i>cleaner</i>. Every time the monster plays, the furnace pipes widen, special little <b>fuel-doors</b> open so sugar can leave the blood and feed the flame, and the whole furnace runs warmer and calmer. Kids need to move and play hard <b>about an hour every day</b>; grown-ups need real activity most days. Plum writes: <i>“Mom says ‘go outside and play’ — turns out playing is how you stoke the fire.”</i> (Big idea: <b>moving burns the fuel clean</b>.)",
        scholar:   "Movement <i>stokes the fire</i> and makes the whole furnace work better. Exercise raises <span class='keyword'>HDL</span> ('good' cholesterol), lowers <span class='keyword'>triglycerides</span>, sends <span class='keyword'>GLUT4</span> transporters (the fuel-doors) to muscle membranes so sugar leaves the blood, and lowers inflammation. The guidelines: kids 6–17 need <b>~60 minutes a day</b> of moderate-to-vigorous activity; adults need <b>150–300 min/week</b> of moderate (or 75–150 vigorous) <i>plus</i> muscle-strengthening <b>2+ days/week</b>.",
        researcher:"Exercise is a pleiotropic stimulus: skeletal-muscle contraction drives insulin-independent GLUT4 translocation (AMPK-mediated), improves mitochondrial biogenesis (PGC-1α) — literally upgrading the cell's furnaces — raises HDL ~5–10%, can substantially lower triglycerides, enhances endothelial function, and reduces systemic inflammation. The European Society of Cardiology notes regular activity associates with ~27% lower cardiovascular mortality. ACSM/WHO/PAG quantify the dose: adults 150–300 min/wk moderate or 75–150 vigorous aerobic + resistance ≥2 d/wk; youth ~60 min/day with vigorous activity ≥3 d/wk."
      },
      cite: {t:"WHO: Physical activity fact sheet", u:"https://www.who.int/news-room/fact-sheets/detail/physical-activity"}
    },
    {
      n: "Beat 4",
      img: { explorer: "assets/furnace_scene4.jpg", scholar: "assets/furnace_sch_scene4.jpg", researcher: "assets/furnace_res_scene4.jpg" },
      flip: true,
      titles: {
        explorer:  "The Furnace That Stayed Clean (Prevention)",
        scholar:   "Prevention: Soot That Never Builds",
        researcher:"Primary Prevention & Risk-Factor Control"
      },
      text: {
        explorer:  "The friends visit a monster that has kept its furnace balanced for years — clean fuel in, good fire out. Iris lines up all the peeks they've taken inside over time and finds something wonderful: the furnace is <b>spotless</b>. No soot, no clogged pipes, no warning glow. It's almost boring — and that's exactly the point. The clog this furnace avoided is a clog you never even see. <i>“The best cleanup,”</i> Plum writes, <i>“is the one nobody ever has to do.”</i> (Big word: <b>prevention = stopping trouble before it starts</b>.)",
        scholar:   "This is the <span class='keyword'>prevention</span> path — <span class='keyword'>primary prevention</span>. When fuel and fire stay balanced, the soot — the risk factors that lead to disease — mostly never builds up. Active people have markedly lower rates of heart disease, type 2 diabetes, and several cancers. Inactivity, by contrast, is estimated to drive about <b>6% of coronary heart disease, 7% of type 2 diabetes, and 10% of breast and colon cancer</b> burden worldwide — much of it avoidable.",
        researcher:"Primary prevention: maintaining energy balance and meeting activity targets keeps upstream risk factors (dyslipidemia, hypertension, insulin resistance, adiposity, inflammation) from crossing pathologic thresholds — the soot never accumulates. The Exercise is Medicine evidence base attributes ~6% of CHD, 7% of T2D, and ~10% of breast/colon cancer globally to physical inactivity; WHO estimates insufficiently active adults carry a 20–30% higher all-cause mortality risk. The ASPC frames preventive cardiology around modifiable risk factors — most of them diet- and activity-responsive."
      },
      cite: {t:"Exercise is Medicine — Fact Sheet (PMC)", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC7444006/"}
    },
    {
      n: "Beat 5",
      img: { explorer: "assets/furnace_scene5.jpg", scholar: "assets/furnace_sch_scene5.jpg", researcher: "assets/furnace_res_scene5.jpg" },
      titles: {
        explorer:  "When the Furnace Clogs (Progression)",
        scholar:   "Imbalance Begins: Soot, Clog & Drift",
        researcher:"Progression: From Risk Factors to Disease"
      },
      text: {
        explorer:  "But the friends find a monster in trouble. Too much heavy, sooty fuel keeps getting shoveled in — almost no green fuel — and the fire has gone low because the monster stopped playing. Slowly, the furnace changes: greasy soot cakes the pipes, the fuel-doors rust shut so sugar piles up unburned, and the once-bright glow turns dim and smoky. Nothing exploded in a single day. It <b>clogged</b>, one lazy afternoon at a time, until the furnace was sick. (Big word: <b>progression = trouble building up little by little</b>.)",
        scholar:   "When fuel in outpaces fire out — too much processed food, too little movement — the furnace <span class='keyword'>clogs</span>: rising LDL, blood pressure, blood sugar, and waistline. This is <span class='keyword'>progression</span>. Cells become <span class='keyword'>insulin resistant</span> (the rusted fuel-doors), fat accumulates, arteries stiffen with plaque (the caked soot), and low-grade inflammation smolders. WHO links physical inactivity to a 20–30% higher death risk, at a level it compares to smoking.",
        researcher:"Progression follows a graded path: chronic positive energy balance and sedentariness → visceral adiposity, hepatic and skeletal-muscle insulin resistance, atherogenic dyslipidemia, endothelial dysfunction, and chronic low-grade inflammation (↑hs-CRP, IL-6) → hypertension, type 2 diabetes, and atherosclerotic cardiovascular disease (the soot hardening into plaque). The ASPC 'ten things to know about ten CVD risk factors' maps this clustering. Critically, this is not moral failure — it is a predictable physiological response to sustained imbalance, and the next beat shows the same furnace can be cleaned."
      },
      teach: "<strong>Not anyone's fault:</strong> a clogging furnace is doing exactly what a furnace does under those conditions — it is physics and biology, not blame. And the same furnace can be cleaned and run bright again.",
      cite: {t:"ASPC: Ten things to know about ten CVD risk factors (PMC)", u:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8315386/"}
    },
    {
      n: "Beat 6",
      img: { explorer: "assets/furnace_scene6.jpg", scholar: "assets/furnace_sch_scene6.jpg", researcher: "assets/furnace_res_scene6.jpg" },
      flip: true,
      titles: {
        explorer:  "The Furnace Burns Clean Again (Regression)",
        scholar:   "Healing: When Balance Is Restored",
        researcher:"Regression: Reversibility of Cardiometabolic Disease"
      },
      text: {
        explorer:  "Then the friends watch something hopeful. The sick monster starts loading green fuel again and gets moving — and the furnace begins to <i>clean itself</i>. Peek by peek, the soot loosens, the rusty fuel-doors creak back open, and the dim glow brightens back toward gold. It doesn't happen overnight, but visit after visit, the furnace climbs back toward burning clean. <i>“It can come back,”</i> Plum writes, eyes wide. <i>“The furnace knows how to clear when we give it the right fuel and stoke the fire.”</i> (Big word: <b>regression = trouble shrinking back</b>.)",
        scholar:   "Here is the hope: much of this is <span class='keyword'>reversible</span> — <span class='keyword'>regression</span>. Loading clean fuel and stoking the fire again lowers blood pressure, blood sugar, and LDL, and can shrink the disease itself. The Diabetes Prevention Program showed lifestyle change cut type 2 diabetes risk by <b>58%</b> (71% in adults over 60). A plant-centered eating pattern is tied to meaningfully lower cardiovascular risk — most reviews show roughly <b>15–25% lower</b>, with up to <b>52% lower</b> in one young-adult cohort followed over decades, and intensive lifestyle programs have shown actual regression of coronary artery disease — the soot clearing from the pipes.",
        researcher:"Regression is well documented: lifestyle intervention in the DPP reduced T2D incidence 58% (71% in >60 y); intensive plant-based lifestyle programs (Ornish, Esselstyn) have demonstrated angiographic regression of coronary atherosclerosis. A plant-centered diet across 30 years associates with ~52% lower CVD risk, and healthful plant-based patterns with 17–24% lower mortality in cardiometabolic patients. Mechanistically: improved insulin sensitivity, LDL reduction, lower BP, reduced inflammation, restored endothelial function — the progression cascade run backward, the furnace burning clean once more."
      },
      cite: {t:"AHA: a plant-based diet at any age may lower CVD risk", u:"https://www.heart.org/en/news/2021/08/04/eating-a-plant-based-diet-at-any-age-may-lower-cardiovascular-risk"}
    },
    {
      n: "Beat 7",
      img: { explorer: "assets/furnace_scene7.jpg", scholar: "assets/furnace_sch_scene7.jpg", researcher: "assets/furnace_res_scene7.jpg" },
      titles: {
        explorer:  "The Investigation",
        scholar:   "Becoming Investigators",
        researcher:"Three Disciplines, One Conclusion"
      },
      text: {
        explorer:  "The friends become <b>detectives</b> of the three furnaces. Iris lines up all the peeks-inside and <i>sees</i> the three stories side by side: the furnace that stayed clean, the one that clogged, and the one that cleared. Sunny runs careful tests, changing one thing at a time — more green fuel, more fire — to prove which choices made the difference. Echo checks more monsters and finds the very same pattern everywhere. It isn't luck or magic — it's a <b>rule of the design</b>, and now they can prove it.",
        scholar:   "Three disciplines confirm it. <b>Radiology / imaging</b>: real scans show pipes (arteries) clean, or clogging, or clearing — over time. <b>Exercise & nutrition science</b>: controlled studies measure how fuel and fire change the blood markers. <b>Preventive medicine</b>: physicians track risk factors over time and prescribe lifestyle first. The conclusion is the same across all three: <span class='keyword'>balanced fuel and fire keeps the furnace clean — preventing, and even reversing, the clog</span>.",
        researcher:"Convergent evidence: imaging (CIMT, coronary angiography/CT showing plaque stabilization or regression — the literal soot), interventional exercise/nutrition physiology (RCTs on lipids, glycemia, BP, endothelial function), and epidemiology/preventive cardiology (cohort and guideline syntheses from ACSM, AHA/ACC, ASPC, WHO). Each maps to a distinct career; together they establish lifestyle as foundational, guideline-recommended therapy — first-line, not an afterthought."
      },
      cite: {t:"ACC: 2021 Dietary Guidance to Improve Cardiovascular Health", u:"https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2021/11/23/19/45/2021-dietary-guidance-to-improve"}
    },
    {
      n: "Beat 8",
      img: { explorer: "assets/furnace_scene8.jpg", scholar: "assets/furnace_sch_scene8.jpg", researcher: "assets/furnace_res_scene8.jpg" },
      flip: true,
      titles: {
        explorer:  "Keeping the Furnace Bright",
        scholar:   "Prevention, Stewardship & the Body's Design",
        researcher:"Lifestyle as First-Line, Guideline-Based Therapy"
      },
      text: {
        explorer:  "Now the friends know how to help any furnace stay bright. Captain Cole writes down a simple daily rhythm: <b>more green fuel in, more fire out</b> — an hour of play for kids, real activity for grown-ups, and good sleep so the furnace can clean itself at night. It turns out Mom was a wise <b>furnace-keeper</b> all along. The body was <i>designed</i> to burn clean when we tend it — and that warm, steady glow is a gift worth caring for. (Big idea: <b>small daily choices keep the fire bright</b>.)",
        scholar:   "Prevention is the plan, and it follows the guidelines. <span class='keyword'>ACSM/WHO</span>: 150–300 min/week activity + strength training for adults, ~60 min/day for kids. <span class='keyword'>AHA/DGA</span>: a diet rich in vegetables, fruit, whole grains, and legumes. <span class='keyword'>ASPC</span>: address the modifiable risk factors early. This is <span class='keyword'>stewardship</span> — tending a furnace we were given. The deepest hope isn't a body that never wears out, but the One who made it, and who makes us new.",
        researcher:"Synthesis: every major body — ACSM, WHO, AHA/ACC, ASPC, and the 2020–2025 Dietary Guidelines — places balanced nutrition and regular activity as foundational, first-line interventions for preventing and treating cardiometabolic disease, with plant-forward patterns strongly supported for both prevention and regression. This is responsible stewardship of the body, held in tension with grace: we tend the furnace with discipline and gratitude, giving the glory to the One who lit it."
      },
      cite: {t:"ACSM Physical Activity Guidelines FAQ", u:"https://acsm.org/physical-activity-guidelines-faqs/"}
    }
  ],

  gameSteps: [
    {n:"1", h:"Observe", p:"Watch each furnace over time — how much fuel goes in (food), how much fire goes out (movement)?"},
    {n:"2", h:"Compare", p:"Line up the three furnaces: one that stayed clean, one that clogged, one that cleared."},
    {n:"3", h:"Hypothesize", p:"Is a bright furnace luck — or does it follow the balance between fuel in and fire out?"},
    {n:"4", h:"Model", p:"Test it: pile sooty fuel in and let the fire die — then reverse it. What happens to the furnace each way?"},
    {n:"5", h:"Confirm", p:"Echo checks more monsters and finds the same three paths — clean, clogged, cleared — every time."},
    {n:"6", h:"Name It", p:"Conclude: balanced fuel and fire prevents the clog, imbalance causes it, and restored balance can clear it."}
  ],

  quiz: {
    q: "Why does your mom bug you to eat your vegetables and go play outside?",
    sub: "This is the question the whole story turns on. Pick what you think — then see what the science says.",
    options: [
      {t:"Just to boss you around / because she has to", sub:"It's only a rule", correct:false,
       verdict:"Not really — it only feels like a rule. Underneath, she's loading your furnace with clean fuel (vegetables) and stoking your fire (movement). It's love wearing the costume of a chore."},
      {t:"To keep the fuel coming IN balanced with the fire going OUT", sub:"Clean fuel + a stoked fire = a furnace that burns bright", correct:true,
       verdict:"Exactly right. Your body was <b>designed</b> to burn clean when the fuel coming in matches the fire going out. Vegetables are the cleanest fuel — fiber, potassium, and soot-scrubbers; movement stokes the fire so the fuel burns clean. Keep both in balance and you walk the <i>prevention</i> path — the clog you never even have to clean."},
      {t:"Because vegetables and exercise burn calories, and that's all", sub:"It's only about weight", correct:false,
       verdict:"That's a small part — but it misses the wonder. Movement doesn't just burn fuel; it widens the pipes, opens the fuel-doors, and clears the soot. Vegetables don't just fill you up; they scrub and protect. It's about how the whole furnace runs, not just the scale."}
    ]
  },

  careers: [
    {avatar:"assets/iris.jpeg", name:"Iris", role:"The Radiologist / Imager", who:"The one who peeks inside the furnace over time.",
     real:"Reads serial imaging — artery scans, CIMT, coronary CT — to see the pipes stay clean, clog, or clear as lifestyle changes.",
     cite:{t:"AHA: plant-based diet & CVD risk", u:"https://www.heart.org/en/news/2021/08/04/eating-a-plant-based-diet-at-any-age-may-lower-cardiovascular-risk"}},
    {avatar:"assets/sunny.jpeg", name:"Sunny", role:"The Exercise & Nutrition Scientist", who:"The one who tests the fuel and the fire to ask why.",
     real:"Runs studies measuring how activity and diet change cholesterol, blood sugar, blood pressure, and inflammation.",
     cite:{t:"ESC: Physical activity for CV prevention", u:"https://www.escardio.org/communities/councils/cardiology-practice/education/cardiopractice/physical-activity-for-cardiovascular-prevention/"}},
    {avatar:"assets/echo.jpeg", name:"Echo", role:"The Preventive Medicine Physician", who:"The one who prescribes clean fuel and fire first.",
     real:"Tracks risk factors over time and prescribes nutrition and activity as first-line care, following ACSM, AHA, and ASPC guidelines.",
     cite:{t:"ASPC Guidelines", u:"https://www.aspconline.org/guidelines"}}
  ],

  treatments: [
    {meta:"Load the clean fuel", real:"≈2 fruit + 3 vegetable servings/day", p:"Fiber, potassium, and protective polyphenols, per the AHA's 5-a-day pattern — the furnace's cleanest, soot-scrubbing fuel."},
    {meta:"Stoke the fire daily", real:"Aerobic activity", p:"150–300 min/week moderate for adults, ~60 min/day for kids (ACSM/WHO) — movement that widens the pipes and burns fuel clean."},
    {meta:"Build a stronger flame", real:"Resistance training 2+ days/week", p:"Muscle-strengthening for all major muscle groups improves glucose handling and metabolic health (ACSM)."},
    {meta:"Favor plant-forward fuel", real:"Plant-centered eating pattern", p:"Tied to roughly 15–25% lower CVD risk in most studies (up to 52% in one young-adult cohort) and used in programs that have actually cleared the soot — reversing coronary disease."},
    {meta:"Let the furnace clean at night", real:"Sleep & recovery", p:"Adequate sleep supports the repair, hormone balance, and appetite regulation that keep fuel and fire in balance."},
    {meta:"Catch the soot early", real:"Primary prevention", p:"Address rising blood pressure, sugar, and cholesterol before the clog sets in — the ASPC preventive approach."}
  ],

  defenses: [
    {ic:"🥦", h:"The clean fuel", real:"Fiber, potassium & polyphenols", p:"Built right into plants: chimney-sweeps and soot-scrubbers the furnace uses every day to keep its pipes clear."},
    {ic:"🔥", h:"The stoked fire", real:"Movement burns fuel clean", p:"Every bout of activity widens the pipes, opens GLUT4 fuel-doors, raises HDL, and clears soot — a designed upgrade."},
    {ic:"✨", h:"The furnace clears", real:"Regression / reversibility", p:"The deepest hope of the design: restored balance can clear the soot and let the furnace burn bright again."}
  ]
};
