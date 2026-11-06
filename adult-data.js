/* ============================================================
   Wonderfully Made Labs — ADULT MODULE content data
   Defines window.WML_ADULT, consumed by adult.js components.
   Loaded BEFORE adult.js in index.html.
   Faith-honest, science-true. Clinical guidance drawn from
   ACC/AHA guidelines, AHA Life's Essential 8, and WHO.
   ============================================================ */
window.WML_ADULT = {

  hero: {
    eyebrow: "For Adults · Take Heart",
    title: "Take Heart",
    sub: "You've been told it's your cholesterol, your weight, your lifestyle — yet heart disease is still the world's #1 killer. Here is the truth cardiologists now tell, the numbers that actually matter, and the part no clinic puts on the wall.",
    verse: "“Cheer up! I have overcome the world.” — from John 16:33 (WEB)",
    cta: "Start here"
  },

  gist: {
    eyebrow: "The bottom line, up front",
    title: "What this page is really about",
    lead: "If you read nothing else, read this. The rest is here when you want it — jump to any part below.",
    points: [
      "Heart disease builds in the artery wall — not as grease floating in the blood. A person can feel perfectly fine while a plaque quietly grows.",
      "Most of your risk is changeable. The body God gave you is remarkably willing to heal when you tend it — plaques can even regress.",
      "A handful of numbers tell you most of what you need to know. Knowing them is an act of stewardship, not fear.",
      "And the deepest comfort here isn't a perfect heart. It's that you are held — in this life, and beyond it."
    ],
    jumpLabel: "Jump to",
    jumps: [
      { label: "The reframe", to: "a-reframe" },
      { label: "How it really works", to: "a-mechanism" },
      { label: "Your numbers", to: "a-numbers" },
      { label: "The 8 essentials", to: "a-essentials" },
      { label: "Warning signs", to: "a-emergency" }
    ]
  },

  reframe: {
    eyebrow: "The reframe",
    title: "Most of this is in your hands — and that is good news",
    lead: "Heart disease can feel like a sentence handed down at random. It isn't. The great majority of cardiovascular risk is shaped by things that can be measured, watched, and changed. That doesn't make it your fault — it makes it your <strong>opportunity to steward</strong> the body you were given.",
    stats: [
      { big: "~80%", small: "of premature heart disease and stroke is considered preventable through known, modifiable factors.", cite: { t: "WHO: CVD", u: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)" } },
      { big: "#1", small: "Cardiovascular disease remains the leading cause of death worldwide.", cite: { t: "WHO: CVD", u: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)" } },
      { big: "Reversible", small: "With aggressive risk-factor control, plaque can stabilize and even regress.", cite: { t: "AHA: lipid guideline", u: "https://newsroom.heart.org/news/accaha-issue-updated-guideline-for-managing-lipids-cholesterol" } }
    ],
    turn: "So we hold two truths at once: do the work — and do not carry the fear alone."
  },

  testimony: {
    eyebrow: "Why I can say “take heart”",
    title: "I'm not speaking to you from the outside",
    body: [
      "The heart was part of my story before I was born. My father had open-heart surgery; as a teenager I watched him through a heart attack and a triple bypass. An anxiety I couldn't name followed me for decades — and later I faced heart and stroke symptoms of my own.",
      "I spent over twenty years as a molecular pathologist studying exactly how this disease takes hold. I know the science cold. And I will tell you plainly: the science never made the fear go away on its own. What changed was coming to the Lord — going to Him with nothing, and being given everything. My old self died, and I was made new.",
      "So when I say take heart, I don't mean ignore your numbers or pray instead of seeing your doctor. I mean: do the work of caring for this body — and let yourself be held while you do it."
    ],
    verse: "“Casting all your worries on him, because he cares for you.” — 1 Peter 5:7 (WEB)",
    close: "I died with my old self, and I was made new. Praise God in the highest."
  },

  twoHands: {
    eyebrow: "Two hands",
    title: "Release what you can't carry; tend what you've been given",
    lead: "Faith and responsibility are not rivals. Picture two open hands. One releases the fear you were never meant to carry alone. The other tends, faithfully, the body you were entrusted with.",
    hands: [
      { h: "The releasing hand", ref: "1 Peter 5:7", p: "“Casting all your worries on him.” This is not a command to stop feeling afraid — it's permission to stop carrying the fear by yourself." },
      { h: "The tending hand", ref: "1 Corinthians 6:19–20", p: "Your body is a temple. Honoring God with it means knowing your numbers, moving, resting, and seeking good care — not out of fear, but out of gratitude." }
    ],
    turn: "Not “Jesus, take the wheel.” More like: He steadies you, and you still tend the road."
  },

  mechanism: {
    eyebrow: "How it really works",
    title: "The buildup is in the wall — not the blood",
    lead: "Almost everyone pictures cholesterol as grease clogging a pipe. The truth is more wonderful and more hopeful: LDL cholesterol crosses the artery's smooth lining and gets <strong>trapped in the wall beneath it</strong>, where it oxidizes and triggers inflammation. The blood can look perfectly clear while the real trouble hides under the surface — which is exactly why knowing your numbers matters before you ever feel a symptom.",
    points: [
      { h: "It starts silently", p: "Retention of LDL in the wall is the initiating event — long before any chest pain. This is why prevention works and why screening matters." },
      { h: "Inflammation drives it", p: "The wall recruits cleanup cells that bloat into foam cells. Calming inflammation, not just lowering cholesterol, reduces events." },
      { h: "The danger isn't always the biggest blockage", p: "A thin-capped plaque that ruptures can cause a heart attack even when it never narrowed the artery much. Composition matters more than size." }
    ],
    cite: { t: "Circulation: LDL retention", u: "https://www.ahajournals.org/doi/10.1161/circulationaha.106.676890" }
  },

  numbersIntro: {
    eyebrow: "Know your numbers",
    title: "A handful of numbers tell most of the story",
    lead: "You don't need to memorize cardiology. You need to know — and track — a few key numbers, and bring them to your own clinician. Knowing them is stewardship, not worry."
  },

  numbers: [
    { ic: "🩸", name: "LDL cholesterol", target: "Lower is better", detail: "The cholesterol that gets trapped in the wall. For most adults, lower LDL means lower risk; your target depends on your overall risk.", reflect: "Ask your clinician what your personal LDL goal is.", cite: { t: "ACC/AHA cholesterol", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625" } },
    { ic: "🫀", name: "Blood pressure", target: "< 120/80 mmHg", detail: "High pressure stresses the artery lining at bends and branch points — exactly where disease begins.", reflect: "Check it more than once; a single reading isn't the whole picture.", cite: { t: "ACC/AHA BP 2025", u: "https://www.heart.org/en/health-topics/high-blood-pressure" } },
    { ic: "🍬", name: "Blood sugar (A1c)", target: "< 5.7%", detail: "Elevated glucose damages vessels and accelerates plaque. It often rises quietly for years.", reflect: "Ask whether you should be screened, even if you feel fine.", cite: { t: "AHA Life's Essential 8", u: "https://www.heart.org/en/healthy-living/healthy-lifestyle/lifes-essential-8" } },
    { ic: "⚖️", name: "Lp(a) — once in life", target: "Know it once", detail: "An inherited risk factor most people are never tested for. A one-time test can reveal hidden risk.", reflect: "Ask if a single Lp(a) test is right for you.", cite: { t: "AHA: Lp(a)", u: "https://www.heart.org/en/health-topics/cholesterol/genetic-conditions/lipoproteina" } }
  ],

  essentialsIntro: {
    eyebrow: "The 8 essentials",
    title: "The daily work, named plainly",
    lead: "The American Heart Association calls these Life's Essential 8 — the foundation of cardiovascular health. None of them require fear. All of them are ways of tending what you were given."
  },

  essentials: [
    { ic: "🥗", h: "Eat well", p: "More whole foods, plants, and fiber; less ultra-processed food and added sugar." },
    { ic: "🏃", h: "Move", p: "Aim for regular activity — even a daily walk meaningfully lowers risk." },
    { ic: "🚭", h: "Avoid nicotine", p: "Smoking and vaping injure the artery lining directly. Quitting begins healing within weeks." },
    { ic: "😴", h: "Sleep", p: "7–9 hours. Poor sleep raises blood pressure and inflammation." },
    { ic: "⚖️", h: "Healthy weight", p: "Even modest, sustained change improves blood pressure, sugar, and lipids." },
    { ic: "🩸", h: "Manage cholesterol", p: "Know your LDL; treat it with your clinician when needed." },
    { ic: "🫀", h: "Manage blood pressure", p: "Keep it in range — the single biggest lever for stroke risk." },
    { ic: "🍬", h: "Manage blood sugar", p: "Catch and treat high glucose early, before it harms vessels." }
  ],

  emergency: {
    eyebrow: "Know the signs",
    title: "When to call 911 — without hesitation",
    lead: "If you or someone near you has these signs, <strong>call emergency services immediately</strong>. Minutes of heart muscle are saved by minutes of action. Do not drive yourself; do not wait to “see if it passes.”",
    signs: [
      "Chest pressure, tightness, squeezing, or pain — especially lasting more than a few minutes",
      "Pain spreading to the arm, jaw, neck, back, or stomach",
      "Shortness of breath, with or without chest discomfort",
      "Cold sweat, nausea, lightheadedness, or sudden unexplained fatigue (more common in women)"
    ],
    action: "Call 911 immediately. While waiting, chew one regular aspirin (325 mg) unless you're allergic or your doctor told you not to. Every minute matters.",
    cite: { t: "AHA: Heart attack warning signs", u: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack" }
  },

  defenses: {
    eyebrow: "The wonderful design",
    title: "Your body is already fighting for you",
    lead: "Before any doctor arrives, the body is already defending itself — with systems built into its very design. To study them is to glimpse the care of the One who made them.",
    items: [
      { h: "The clean current", p: "A healthy artery lining releases nitric oxide that keeps blood moving, calm, and clot-free." },
      { h: "Boats to the sea", p: "Your body's own export system (HDL, reverse cholesterol transport) carries cholesterol back out to the liver." },
      { h: "The bank heals", p: "When the conditions are right, the body can slow new buildup and the wall begins to stabilize — and with sustained, aggressive LDL-lowering (usually including medication), plaque can even regress. It was made to heal." }
    ]
  },

  close: {
    verse: "“Cheer up! I have overcome the world.” — from John 16:33 (WEB)",
    body: "Tend this body well — know your numbers, do the daily work, and lean on good care. But hold one more truth gently: the most wonderfully made heart still wears out one day. That is true for every one of us. The hope this page finally points to isn't a perfect heart — it's the One who overcame death, so that we don't have to face it alone or afraid.",
    sign: "— Molecular pathologist, husband, and the one writing these stories",
    cta: "↑ Back to the top"
  }
};
