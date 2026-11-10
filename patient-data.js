/* ============================================================
   Wonderfully Made Labs — PATIENT COMPANION content data
   Defines window.WML_PATIENT, consumed by patient.js components.
   Loaded BEFORE patient.js in index.html.
   A free, plain-language (5th-grade) companion for someone newly
   diagnosed with coronary artery disease or recovering from a
   heart attack. NO monster art. Faith last, never preachy.
   Illness is NEVER framed as fault, punishment, or weakness.
   Clinical guidance drawn from the 2023 AHA/ACC Chronic Coronary
   Disease Guideline, the 2025 ACC/AHA Acute Coronary Syndromes
   Guideline, and AHA scientific statements. Educational only.
   ============================================================ */
window.WML_PATIENT = {

  hero: {
    eyebrow: "For Patients · Take Heart, Friend",
    title: "Take Heart, Friend",
    sub: "If you were just told you have coronary artery disease, or you are healing after a heart attack, this is for you. Plain words, small steps, and real hope \u2014 written to be easy to read on purpose, because fear and big words do not help you heal.",
    verse: "\u201Ccheer up! I have overcome the world.\u201D \u2014 from John 16:33 (WEBU)",
    cta: "Start here"
  },

  gist: {
    eyebrow: "Read this first",
    title: "You are not alone, and you have more power than you think",
    lead: "You do not have to read it all at once. Read one part. Set it down. Come back. Each part ends with one small thing you can do.",
    points: [
      "Feeling scared or shaken is normal. A sick heart is not a punishment, and it is not your fault.",
      "People recover from this every day. Small steps, taken one at a time, add up to a strong recovery.",
      "This page explains what is happening, what to do now, and what comes next \u2014 in plain words.",
      "It is free for anyone. Read it here, or print it and share it with someone who needs it."
    ],
    jumpLabel: "Jump to",
    jumps: [
      { label: "What's happening", to: "p-whats" },
      { label: "What to do now", to: "p-now" },
      { label: "What happens next", to: "p-next" },
      { label: "Recovery", to: "p-recovery" },
      { label: "Your feelings", to: "p-feelings" },
      { label: "Your family", to: "p-family" },
      { label: "Faith & hope", to: "p-faith" },
      { label: "Who to call", to: "p-call" }
    ]
  },

  /* Each "part" renders as a clean text section (no monster art). */
  parts: [
    {
      id: "p-whats",
      num: "Part 2",
      eyebrow: "What is happening",
      title: "What is happening in your heart?",
      lead: "Let's keep this simple.",
      body: [
        "Your heart is a muscle about the size of your fist. It is a pump. Day and night, it pushes blood through your body. That blood carries oxygen, like fuel, to every part of you.",
        "The heart needs fuel too. Small blood vessels wrap around it and feed it. These are your coronary arteries. Think of them as the supply roads to the pump.",
        "Coronary artery disease (CAD) means those roads have gotten narrow. Over many years, a sticky buildup called plaque collects inside the artery walls. The road gets tight. Less fuel gets through.",
        "When the heart muscle does not get enough blood, you may feel chest pressure or pain, often when you move or feel stress. Doctors call this angina. It usually eases with rest.",
        "A heart attack is more sudden. A plaque cracks open. Your body forms a clot that can block the road completely. When blood stops, that part of the heart starts to get hurt. That is why a heart attack is always an emergency \u2014 the faster blood flow comes back, the less harm is done."
      ],
      callout: {
        h: "The simple picture",
        items: [
          "Heart = the pump",
          "Arteries = the supply roads",
          "Plaque = roads getting narrow",
          "Heart attack = a road suddenly blocked"
        ]
      },
      doNow: "Say it back in your own words: \u201CMy heart is a pump. The roads that feed it got narrow.\u201D If you can explain it simply, you understand it.",
      cite: { t: "ACC CardioSmart \u00B7 Coronary Artery Disease", u: "https://www.cardiosmart.org/topics/coronary-artery-disease" }
    },
    {
      id: "p-now",
      num: "Part 3",
      eyebrow: "What to do right now",
      title: "What to do right now",
      lead: "This is the most important part. A few simple habits protect your heart.",
      blocks: [
        { h: "Take your medicines every day", p: "After CAD or a heart attack, you will likely take several medicines. Together they are called \u201Cguideline-directed medical therapy\u201D \u2014 a long name for the medicines proven to help your heart. Take them every day, just as prescribed, even on days you feel fine. Do not stop any medicine on your own. If one bothers you, call your care team. There is almost always a fix." },
        { h: "Go to every follow-up visit", p: "Your first check-up is usually about 4 to 6 weeks after you go home. Write the date down and keep it." },
        { h: "Know the warning signs", p: "Some feelings mean you should call 911 right away. They are listed in the red box below \u2014 please read them and keep them close." }
      ],
      doNow: "Put your pills where you will see them at the same time each day. Write your next appointment on your calendar.",
      cite: { t: "2023 AHA/ACC Chronic Coronary Disease Guideline", u: "https://professional.heart.org/en/guidelines-statements/2023-ahaaccaccpaspcnlapcna-guideline-for-the-management-of-patients-withcir0000000000001168" }
    },
    {
      id: "p-next",
      num: "Part 4",
      eyebrow: "What happens next, and why",
      title: "What happens next, and why",
      lead: "It helps to know what the tests and treatments are for. You may not need all of these.",
      groups: [
        {
          h: "Tests that look at your heart",
          items: [
            { b: "EKG (or ECG)", t: "Stickers on your chest read your heart's signals. Painless. Takes minutes." },
            { b: "Troponin blood test", t: "A protein that leaks into your blood when heart muscle is hurt. Helps confirm a heart attack." },
            { b: "Echo (ultrasound)", t: "Sound waves make a picture of your heart pumping. Shows how strong the pump is." },
            { b: "Stress test", t: "You walk on a treadmill (or get medicine that acts like exercise) while the team watches your heart work harder." },
            { b: "Angiogram (\u201Ccath\u201D)", t: "The clearest look at your arteries. A thin tube goes in, usually at your wrist, and dye lets X-rays show exactly where a road is blocked." }
          ]
        },
        {
          h: "Treatments that open the road",
          items: [
            { b: "Stent (PCI / angioplasty)", t: "A tiny balloon opens the narrow spot, and a small metal mesh tube (a stent) stays behind to hold it open. In a heart attack, this is done fast." },
            { b: "Bypass surgery (CABG)", t: "A surgeon builds a new road around the blockage using a vessel from your leg or chest. For more serious blockages. Healing takes about 6 to 12 weeks." }
          ]
        },
        {
          h: "Your medicines \u2014 what each one is for",
          note: "You do not need to memorize these. Just know each one has a job.",
          items: [
            { b: "Aspirin (low dose)", t: "Makes blood cells less sticky so clots are less likely. Often taken for life." },
            { b: "A second blood thinner", t: "Like clopidogrel or ticagrelor. Added to aspirin to protect a new stent while it heals. Usually 6 to 12 months." },
            { b: "Statin", t: "Lowers \u201Cbad\u201D cholesterol and calms the plaque so it is less likely to crack. One of the most proven heart medicines there is." },
            { b: "Beta-blocker", t: "Slows the heart a little and lowers its workload. Most helpful in the first year after a heart attack." },
            { b: "ACE inhibitor or ARB", t: "Eases strain on the heart and protects the muscle." },
            { b: "Newer medicines", t: "SGLT2 or GLP-1 types, often added if you have diabetes or a weaker pump. They protect the heart and kidneys." }
          ]
        }
      ],
      note: "Many people with stable CAD do well with medicines alone and never need a procedure. And the guidelines say fish oil and most supplements have not been shown to prevent heart events \u2014 save your money for real food.",
      doNow: "Make a simple list of your medicines and what each is for. Keep it in your wallet.",
      cite: { t: "2025 ACC/AHA Acute Coronary Syndromes Guideline", u: "https://www.acc.org/about-acc/press-releases/2025/02/28/17/51/acc-aha-issue-new-acute-coronary-syndromes-guideline" }
    },
    {
      id: "p-recovery",
      num: "Part 5",
      eyebrow: "What recovery looks like",
      title: "Your body is healing",
      lead: "Healing takes time. Be patient with yourself. Here is what is normal.",
      blocks: [
        { h: "The first week or two", p: "Take it easy. Feeling tired and weak is normal as your heart heals. Light things are fine \u2014 bathing, dressing, walking around the house, light cooking. Skip heavy lifting and anything that leaves you out of breath or causes chest pain." },
        { h: "Driving", p: "After an uncomplicated heart attack, many people wait about 1 to 2 weeks before driving. After bypass surgery, about 4 weeks. Always ask your doctor first." },
        { h: "Weeks two to six", p: "Walk a little more each week. Start with 5 to 10 minutes a day and add a few minutes as you go. Most people slowly return to normal life." },
        { h: "Going back to work", p: "Desk jobs often around 1 to 2 weeks after a simple stent. Heavy, physical jobs may need 4 weeks or more. Ask your cardiologist." },
        { h: "Six to twelve weeks", p: "Most heart attack recovery takes about 2 weeks to 3 months. The heart muscle itself heals over roughly 2 months." }
      ],
      rehab: {
        h: "Cardiac rehab \u2014 please say yes to this",
        p: "Cardiac rehab is a guided program that helps you get strong again. It includes safe, watched exercise, classes about your heart and food, and support for stress.",
        p2: "Why it matters: people who do cardiac rehab can lower their risk of dying by up to about a third compared to those who skip it. Doctors give it their strongest recommendation. Yet only about 1 in 4 eligible people go. Be the one who goes. Sign up early \u2014 even before you leave the hospital if you can."
      },
      habits: {
        h: "Daily habits that protect your heart",
        items: [
          { b: "Move", t: "Work toward about 150 minutes of easy activity a week, like brisk walking." },
          { b: "Eat well", t: "More vegetables, fruit, whole grains, beans, fish, and olive oil. Less salt, sugar, fried and processed food, and red meat." },
          { b: "If you smoke, quitting is the single biggest gift you can give your heart", t: "Your team can help with medicine and coaching." },
          { b: "Blood pressure", t: "The goal for most heart patients is below 130/80." }
        ]
      },
      gentle: {
        h: "A gentle word about intimacy in marriage",
        p: "Many married people worry about being intimate with their husband or wife after a heart event. God made marriage, and intimacy within it is a good and holy gift \u2014 so this is a fair thing to ask about. The risk is actually low: for most people it is about as hard on the heart as climbing two flights of stairs. If your heart is stable and mild activity does not cause symptoms, it is generally safe to be intimate with your husband or wife again \u2014 ask your doctor at your first follow-up. One safety rule: never mix erection medicines (like Viagra) with nitrate heart medicines (like nitroglycerin). Together they can drop your blood pressure dangerously."
      },
      doNow: "Ask your team for a cardiac rehab referral. Take a 5-minute walk if you feel up to it.",
      cite: { t: "ACC \u00B7 Cardiac Rehabilitation Key Points (2024)", u: "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/02/29/16/28/cardiac-rehabilitation-challenges" }
    },
    {
      id: "p-feelings",
      num: "Part 6",
      eyebrow: "Your feelings matter",
      title: "Your feelings matter",
      lead: "This part is not \u201Csoft.\u201D It is part of healing your heart.",
      body: [
        "After a heart attack, big feelings are common and normal. About 1 in 3 survivors goes through depression. Up to half feel real anxiety. You might feel sad, afraid it will happen again, jumpy, or just not like yourself. None of this means you are weak.",
        "It also matters for your body. Feeling depressed after a heart attack is linked to a higher risk of another heart problem. So caring for your mind is caring for your heart.",
        "The good news: help works. Talking therapy, certain safe medicines, calm breathing, and the exercise in cardiac rehab all help."
      ],
      callout: {
        h: "Tell your care team if you feel",
        items: [
          "Sad or hopeless most days",
          "Worried or panicky a lot",
          "Unable to sleep",
          "Pulled away from people or things you used to enjoy"
        ]
      },
      doNow: "Tell one person how you really feel. Just one. You do not have to carry this alone.",
      cite: { t: "AHA Scientific Statement \u00B7 Psychological Distress After a Heart Attack (2025)", u: "https://newsroom.heart.org/news/psychological-distress-common-after-a-heart-attack-may-lead-to-future-heart-conditions" }
    },
    {
      id: "p-family",
      num: "Part 7",
      eyebrow: "Talking to your family",
      title: "Talking to your family and your kids",
      lead: "Your heart news touches the people who love you. Letting them in helps everyone \u2014 and it helps you stick to your plan.",
      blocks: [
        { h: "Talking with your husband or wife", p: "Get on the same page first. Decide together what you will share and how. Frame their job as helpful, not fearful: \u201CHere is how you can help me.\u201D Invite them to your appointments. Two sets of ears are better than one." },
        { h: "Talking with your children", p: "Kids almost always sense when something is wrong. Honest, gentle, age-right words calm them more than silence does. Plan first. Be honest and comforting. Keep their routine. And keep checking in \u2014 this is an ongoing chat, not one big talk." }
      ],
      ages: {
        h: "Words that fit their age",
        rows: [
          { age: "Under 5", say: "\u201CDaddy's heart got sick. The doctors are helping it get better.\u201D Keep it short. Lots of hugs." },
          { age: "5 to 11", say: "Name it simply. \u201CIt's not like a cold \u2014 you can't catch it. And you didn't cause it.\u201D A simple picture can help." },
          { age: "Teens", say: "Give fuller, honest information. Let them help in small ways (rides, scheduling). Respect their space, but keep checking in." }
        ]
      },
      rule: "One important rule: do not share adult worries \u2014 money, job fears, scary \u201Cwhat ifs\u201D \u2014 with kids of any age. It frightens them and they cannot fix it.",
      doNow: "Decide with your husband or wife the one simple sentence you will tell the kids. Keep it warm and short.",
      cite: { t: "University of Ottawa Heart Institute \u00B7 Talking to Your Child", u: "https://www.ottawaheart.ca/the-beat/news/ten-tips-discussing-your-heart-condition-your-child" }
    },
    {
      id: "p-faith",
      num: "Part 8",
      eyebrow: "Faith, hope, and the next person",
      title: "Faith, hope, and the next person",
      lead: "A heart scare makes many people ask the big questions. Why did this happen? What is my life for? You are not strange for asking.",
      body: [
        "You do not have to have it all figured out. Faith does not ask you to pretend you are not afraid. It offers you a Presence in the middle of the fear.",
        "Faith and good medicine are not enemies. Take your medicines, go to rehab, eat well \u2014 and also pray. Caring for the body you were given is its own kind of worship."
      ],
      ways: {
        h: "Gentle ways people find or strengthen that connection",
        items: [
          { b: "Be honest", t: "You can tell God exactly how scared or angry you feel. He can take it." },
          { b: "Start small", t: "A single sentence prayer counts. \u201CHelp me.\u201D \u201CThank you for this breath.\u201D" },
          { b: "Lean on others", t: "A church, a small group, a chaplain, or one praying friend can carry you when you are weak. We were never meant to suffer alone." },
          { b: "Rest in being held", t: "\u201CI will give thanks to you, for I am fearfully and wonderfully made\u201D (from Psalm 139:14, WEBU). The same care that knit you together is with you now." }
        ]
      },
      hope: {
        h: "Giving hope to the next person",
        p: "One day, you will not be the newest patient anymore. You will be the one who has been through it. That makes you a gift to the next frightened person sitting where you sit today.",
        items: [
          "Tell your story simply and honestly \u2014 the fear and the hope both.",
          "Sit with someone who just got the news. You do not need answers. Just be there.",
          "Share what helped you: rehab, a habit, a verse, a friend."
        ],
        close: "The hardest road you walk can become the very thing that lights the way for someone else."
      },
      doNow: "Write down one thing that gave you hope this week. Someday you may share it with someone who needs it."
    }
  ],

  emergency: {
    eyebrow: "Keep this close",
    title: "When to call 911",
    lead: "The first weeks after a heart attack carry the highest risk. Knowing when to act fast can save your life.",
    callLabel: "Call 911 right away if you have:",
    signs: [
      "Chest pressure, squeezing, or pain that lasts more than a few minutes, or comes and goes",
      "Pain spreading to an arm, the back, neck, jaw, or stomach",
      "Shortness of breath",
      "A cold sweat",
      "Nausea or feeling sick to your stomach",
      "Feeling dizzy or faint"
    ],
    women: "Women may also feel very tired, short of breath, or sick to the stomach \u2014 sometimes without strong chest pain.",
    rule: "Do not drive yourself. Do not wait to see if it passes. Call 911. Help can start before you even reach the hospital.",
    cite: { t: "AHA \u00B7 Warning Signs of a Heart Attack", u: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack" }
  },

  tools: {
    eyebrow: "Take it with you",
    title: "Simple tools you can print and fill in",
    lead: "Print this page, or copy these onto paper. Keep them somewhere easy to find.",
    blocks: [
      {
        h: "Who to call",
        rows: ["My cardiologist", "My primary doctor", "Cardiac rehab program", "Pharmacy", "A person I can call when I feel low"]
      },
      {
        h: "My medicine list",
        cols: ["Medicine", "What it's for", "When I take it"]
      },
      {
        h: "Questions to ask my doctor",
        rows: ["1.", "2.", "3.", "4."]
      }
    ]
  },

  hopeCall: {
    eyebrow: "Pass it on",
    title: "Give hope to the next patient",
    lead: "You will not always be the newest, most frightened person in the room. One day you will be the one who has walked this road \u2014 and that makes you a gift to the next person sitting where you sit today.",
    items: [
      { b: "Tell your story", t: "Simply and honestly \u2014 the fear and the hope both. Your real story helps more than a perfect one." },
      { b: "Just show up", t: "Sit with someone who just got the news. You do not need answers. Being there is the gift." },
      { b: "Share what helped", t: "A rehab tip, a small habit, a verse, a friend, a prayer \u2014 hand it forward." }
    ],
    close: "The hardest road you walk can become the very thing that lights the way for someone else. That is how hope keeps moving \u2014 from one healing heart to the next. To pass it on is to be a good and faithful servant with what you were given (Matthew 25:21).",
    verse: "\u201CBlessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, that we may be able to comfort those who are in any affliction, through the comfort with which we ourselves are comforted by God.\u201D \u2014 2 Corinthians 1:3\u20134 (WEBU)"
  },

  close: {
    verse: "\u201CHe heals the broken in heart, and binds up their wounds.\u201D \u2014 Psalm 147:3 (WEBU)",
    body: "Take it one small step at a time. You are healing, you are held, and you are not alone.",
    sign: "\u2014 With you on the road, Wonderfully Made Labs",
    cta: "Back to top \u2191"
  }
};
