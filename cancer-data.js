/* ============================================================
   Wonderfully Made Labs — CANCER COMPANION content data
   Defines window.WML_CANCER, consumed by cancer.js components.
   Loaded BEFORE cancer.js in index.html.
   A free, plain-language (5th-grade) companion for someone newly
   diagnosed with cancer or walking through treatment. NO monster
   art. Faith last, never preachy. Illness is NEVER framed as
   fault, punishment, or weakness. Clinical guidance drawn from the
   ASCO Clinical Practice Guidelines (ascopubs.org) and Cancer.Net
   as the backbone of evidence, with ACS and NCI for plain-language
   patient education. Educational only.
   ============================================================ */
window.WML_CANCER = {

  hero: {
    eyebrow: "For Patients \u00B7 Take Heart, Friend \u2014 Cancer",
    title: "Take Heart, Friend",
    sub: "If you were just told you have cancer, or you are walking through treatment now, this is for you. Plain words, small steps, and real hope \u2014 written to be easy to read on purpose, because fear and big words do not help you heal.",
    verse: "\u201Ccheer up! I have overcome the world.\u201D \u2014 from John 16:33 (WEBU)",
    cta: "Start here"
  },

  gist: {
    eyebrow: "Read this first",
    title: "You are not alone, and there is real hope",
    lead: "You do not have to read it all at once. Read one part. Set it down. Come back. Each part ends with one small thing you can do.",
    points: [
      "Feeling scared or shaken is normal. Cancer is not a punishment, and it is not your fault.",
      "Cancer care has come a long way. More people are living full lives after cancer than ever before.",
      "This page explains what is happening, what to do now, and what comes next \u2014 in plain words.",
      "It is free for anyone. Read it here, or print it and share it with someone who needs it."
    ],
    jumpLabel: "Jump to",
    jumps: [
      { label: "What's happening", to: "c-whats" },
      { label: "What to do now", to: "c-now" },
      { label: "What happens next", to: "c-next" },
      { label: "Recovery", to: "c-recovery" },
      { label: "Your feelings", to: "c-feelings" },
      { label: "Your family", to: "c-family" },
      { label: "Faith & hope", to: "c-faith" },
      { label: "Who to call", to: "c-call" }
    ]
  },

  parts: [
    {
      id: "c-whats",
      num: "Part 2",
      eyebrow: "What is happening",
      title: "What is happening in your body?",
      lead: "Let's keep this simple.",
      body: [
        "Your body is built from tiny living building blocks called cells. You have trillions of them. Normally, cells grow, do their job, get old, and then quietly die so new cells can take their place \u2014 in an orderly way, every day.",
        "Every cell carries a set of instructions, like a tiny instruction manual, that tells it when to grow and when to stop. Cancer starts when something goes wrong in those instructions. A change (called a mutation) makes a cell stop following the rules. Most damaged cells simply die. But once in a while, a cell keeps the change, keeps growing, and makes more cells just like it.",
        "Cancer is the name for a group of diseases where these abnormal cells grow out of control and crowd out the healthy cells around them. They can pile up into a lump (a tumor), invade nearby tissue, and sometimes travel to other parts of the body.",
        "A benign tumor is a lump that is not cancer and does not spread. A malignant tumor is cancer \u2014 it can grow into nearby tissue and spread. When cancer spreads to a new place it is called metastatic, but it keeps its first name (breast cancer in the lung is still breast cancer). And not all cancers form a lump \u2014 blood cancers like leukemia usually do not.",
        "You may also hear the words stage and grade. Stage tells how much cancer there is and whether it has spread. Grade tells how abnormal the cells look under a microscope. Your team uses both to choose the best plan for you."
      ],
      callout: {
        h: "The simple picture",
        items: [
          "Cells = the body's building blocks",
          "Instructions = the rules each cell follows",
          "Cancer = a few cells that stopped following the rules",
          "It grows out of control and can crowd out healthy cells"
        ]
      },
      doNow: "Say it back in your own words: \u201CCancer is some of my cells growing out of control.\u201D If you can explain it simply, you understand it.",
      cite: { t: "National Cancer Institute \u00B7 What Is Cancer", u: "https://www.cancer.gov/about-cancer/understanding/what-is-cancer" }
    },
    {
      id: "c-now",
      num: "Part 3",
      eyebrow: "What to do right now",
      title: "What to do right now",
      lead: "This is one of the most important parts. In the early days, a few simple habits help most.",
      blocks: [
        { h: "Build your team and your plan", p: "Right after diagnosis, your doctors study your cancer carefully \u2014 its exact type, where it is, and whether it has spread. Then they build a written treatment plan just for you. Many cancer centers use a tumor board, where several experts review your case together. Your team may include surgeons, cancer doctors (oncologists), nurses, pharmacists, dietitians, and social workers." },
        { h: "Ask questions \u2014 and write down the answers", p: "It is hard to remember everything. Write your questions down before each visit. Bring a family member or friend to take notes. Ask if you can record the conversation. Speak up if you do not understand \u2014 ask them to say it again in plain words. It is also fine, and common, to ask for a second opinion." },
        { h: "Get your emergency number now", p: "Before treatment starts, ask your team: \u201CWhat number do I call at night or on the weekend? At what temperature should I call? What signs are an emergency?\u201D Write the answers down and keep them by the phone. Please read the red box near the end of this page \u2014 during some treatments, a fever can be a true emergency." }
      ],
      doNow: "Start one notebook (or a notes app) just for cancer. Write your team's phone number on the first page.",
      cite: { t: "American Cancer Society \u00B7 Treatment Planning", u: "https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions/planning-scheduling-treatment.html" }
    },
    {
      id: "c-next",
      num: "Part 4",
      eyebrow: "What happens next, and why",
      title: "What happens next, and why",
      lead: "It helps to know what the tests and treatments are for. You will not need all of these \u2014 your plan depends on your kind of cancer.",
      groups: [
        {
          h: "Tests that look at your cancer",
          items: [
            { b: "Biopsy", t: "A small sample of the lump or tissue is taken and studied under a microscope. This is how doctors learn the exact type of cancer." },
            { b: "Imaging", t: "Scans such as CT, MRI, PET, or X-ray show how big the cancer is and whether it has spread." },
            { b: "Blood & biomarker tests", t: "These check your health and sometimes look for specific changes in the cancer that help pick the right medicine." }
          ]
        },
        {
          h: "The main kinds of treatment",
          note: "You may have one of these, or a few of them together. The team chooses based on your cancer type, stage, and overall health.",
          items: [
            { b: "Surgery", t: "Removes the cancer from the body. Often the first step for solid tumors." },
            { b: "Chemotherapy (\u201Cchemo\u201D)", t: "Medicines that travel through the blood to destroy fast-growing cancer cells anywhere in the body. Side effects usually get better after treatment." },
            { b: "Radiation therapy", t: "High-energy rays aimed at the cancer to damage it so it cannot grow. Usually pointed at just one area." },
            { b: "Immunotherapy", t: "Medicines that help your own immune system find and fight the cancer." },
            { b: "Targeted therapy", t: "Medicines that aim at a specific change inside the cancer cell. Your cancer is tested first \u2014 these drugs are not used if your cancer does not have the change they target." },
            { b: "Hormone therapy", t: "For some cancers (like many breast and prostate cancers) that need certain hormones to grow, these medicines block or lower those hormones." }
          ]
        }
      ],
      gentle: {
        h: "What treatment is trying to do",
        p: "Your doctor will tell you the goal of your treatment. It may be to cure the cancer, to control it so you live longer and feel well, or to relieve symptoms and keep you comfortable. All three are real, good goals. It is fair to ask, \u201CWhat is the goal of my treatment?\u201D And remember: many side effects can be prevented or eased. The nausea some chemo causes can be greatly reduced for most patients with medicine given before each session — tell your team right away if it isn't controlled, because they can adjust it — and tiredness responds to gentle exercise, good sleep, and counseling. Always tell your team about a side effect \u2014 there is almost always something they can do."
      },
      doNow: "Write down one question about your treatment to ask at your next visit \u2014 for example, \u201CWhat is the goal of my treatment?\u201D",
      cite: { t: "Cancer.Net (ASCO) \u00B7 How Cancer Is Treated", u: "https://www.cancer.net/navigating-cancer-care/how-cancer-treated" }
    },
    {
      id: "c-recovery",
      num: "Part 5",
      eyebrow: "What recovery looks like",
      title: "Recovery and survivorship",
      lead: "You are a survivor from the day you are diagnosed, all the way through life. Recovery is not a single finish line. It is a road, and it takes time.",
      blocks: [
        { h: "When active treatment ends", p: "The end of treatment can feel strange. Many people expect pure relief, and instead feel a mix \u2014 happy, but also tired, anxious, or even lost without their regular hospital visits. That is normal. As one cancer center puts it, it is not so much getting back to normal as finding out what is normal for you now." },
        { h: "Follow-up care \u2014 please keep these visits", p: "After treatment you will have regular check-ups, and sometimes blood tests or scans. They look for any sign that cancer has come back, catch new problems early, and help manage side effects. Do not skip them. If cancer ever does return, finding it early means more options." },
        { h: "Ask for a survivorship care plan", p: "A survivorship care plan is a simple written summary of the treatment you had and what to watch for next. Experts recommend every survivor have one. Ask your team: \u201CCan I have a written survivorship plan?\u201D" },
        { h: "Late effects", p: "Some treatments can cause health changes that show up months or years later, like bone thinning or nerve changes. The good news: catching them early makes them easier to manage. Tell your doctor about any new or lasting symptom." }
      ],
      habits: {
        h: "Daily habits that help you heal",
        items: [
          { b: "Move a little", t: "Gentle, regular activity \u2014 even short walks \u2014 lowers fatigue, anxiety, and low mood." },
          { b: "Eat well", t: "A dietitian on your team can help you find what is right for you." },
          { b: "Protect your sleep", t: "Good sleep is part of healing." },
          { b: "Keep appointments and insurance", t: "Follow-up care is needed for years." }
        ]
      },
      gentle: {
        h: "A gentle word about intimacy in marriage",
        p: "Cancer and its treatments can change how your body feels, your energy, and your interest in closeness. Many married people worry about being intimate with their husband or wife again. God made marriage, and intimacy within it is a good and holy gift \u2014 so this is a fair thing to bring up. Talk openly with your husband or wife, be patient with each other, and ask your care team what is safe and when. They have heard this question many times, and they can help."
      },
      doNow: "Ask your team for a written survivorship plan, or take a 5-minute walk if you feel up to it.",
      cite: { t: "MASCC\u2013ASCO Survivorship Standards (2024)", u: "https://ascopubs.org/doi/10.1200/OP.23.00716" }
    },
    {
      id: "c-feelings",
      num: "Part 6",
      eyebrow: "Your feelings matter",
      title: "Your feelings matter",
      lead: "This part is not \u201Csoft.\u201D It is part of healing.",
      body: [
        "Big feelings are common and normal with cancer \u2014 at every stage. Fear, worry, sadness, anger, numbness, trouble concentrating: all expected. Doctors who study this found that about one in three people feels significant distress between diagnosis and the start of treatment, and that worry and low mood often come together. Feeling this way does not mean you are weak.",
        "It also matters for your healing, because feeling well in your mind helps you keep going with your plan. The good news: help works, and some of it is simple.",
        "The guidelines list several first-line options that work — talking therapy (like CBT), gentle exercise, and mindfulness — for worry and low mood. Gentle exercise lowers anxiety, sadness, and fatigue. Mindfulness, calm breathing, and relaxation ease stress. Support groups help some people feel less alone. Medicines can help too, usually added when symptoms are more severe."
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
      rule: "If you ever have thoughts of harming yourself, tell someone right away and call or text 988 (the Suicide and Crisis Lifeline). Help is there for you now.",
      doNow: "Tell one person how you really feel. Just one. You do not have to carry this alone.",
      cite: { t: "ASCO Guideline \u00B7 Anxiety and Depression in Adults With Cancer (2023)", u: "https://ascopubs.org/doi/10.1200/JCO.23.00293" }
    },
    {
      id: "c-family",
      num: "Part 7",
      eyebrow: "Talking to your family",
      title: "Talking to your family and your kids",
      lead: "Your news touches the people who love you. Letting them in helps everyone \u2014 including you.",
      blocks: [
        { h: "Talking with your husband or wife", p: "Get on the same page first. Decide together what you will share and how. Frame their job as helpful, not fearful: \u201CHere is how you can help me.\u201D Invite them to your appointments. Two sets of ears are better than one." },
        { h: "Talking with your children", p: "Children almost always sense when something is wrong. Honest, gentle, age-right words calm them more than silence does. Tell the truth in small pieces, and check what they understood. Whatever their age, most children need to hear three things: you did not cause this; you cannot catch it (cancer is not contagious); and someone will always take care of you." }
      ],
      ages: {
        h: "Words that fit their age",
        rows: [
          { age: "Under 5", say: "\u201CMommy is sick, and the doctors are helping her get better.\u201D Keep it short. Keep their routine. Lots of hugs." },
          { age: "5 to 11", say: "Name it simply. \u201CIt's called cancer. It's not like a cold \u2014 you can't catch it, and you didn't cause it.\u201D Let them ask questions. A simple picture can help." },
          { age: "Teens", say: "Give fuller, honest information. Let them help in small ways. Remind them it's okay to still have fun and see friends. Keep checking in." }
        ]
      },
      rule: "One important rule: do not share adult worries \u2014 money, scary \u201Cwhat ifs\u201D \u2014 with kids of any age. It frightens them and they cannot fix it.",
      doNow: "Decide with your husband or wife the one simple sentence you will tell the kids. Keep it warm and short.",
      cite: { t: "American Cancer Society \u00B7 Helping Children When a Family Member Has Cancer", u: "https://www.cancer.org/cancer/caregivers/helping-children-when-a-family-member-has-cancer.html" }
    },
    {
      id: "c-faith",
      num: "Part 8",
      eyebrow: "Faith, hope, and the next person",
      title: "Faith, hope, and the next person",
      lead: "A cancer diagnosis makes many people ask the big questions. Why did this happen? What is my life for? You are not strange for asking.",
      body: [
        "You do not have to have it all figured out. Faith does not ask you to pretend you are not afraid. It offers you a Presence in the middle of the fear.",
        "Faith and good medicine are not enemies. Take your treatment, keep your appointments, eat well, rest \u2014 and also pray. Caring for the body you were given is its own kind of worship."
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
          "Share what helped you: a habit, a verse, a friend, a question that got you good answers."
        ],
        close: "The hardest road you walk can become the very thing that lights the way for someone else."
      },
      doNow: "Write down one thing that gave you hope this week. Someday you may share it with someone who needs it."
    }
  ],

  emergency: {
    eyebrow: "Keep this close",
    title: "When a fever is an emergency",
    lead: "During some cancer treatments (especially chemo), your body's germ-fighting cells can drop very low. When that happens, a fever can be a true emergency \u2014 even if you feel okay otherwise.",
    callLabel: "Call your cancer team right away, day or night, or go to the ER if you have:",
    signs: [
      "A temperature of 100.4\u00B0F (38\u00B0C) or higher \u2014 even with no other symptoms",
      "Shaking chills",
      "Trouble breathing or shortness of breath",
      "Chest pain or pressure",
      "Confusion or a sudden change in how you are thinking",
      "Uncontrolled bleeding",
      "Severe vomiting or diarrhea, or not being able to keep fluids down",
      "A bad reaction during or right after an infusion (hives, throat tightening, trouble breathing)"
    ],
    women: "When your germ-fighting cells are low, a fever may be the ONLY sign of a serious infection. Infections can turn dangerous fast \u2014 do not wait.",
    rule: "Do NOT take Tylenol or other fever reducers without asking your team first \u2014 they can hide a fever your team needs to know about. Ask before treatment starts: \u201CAt what temperature should I call? What number do I call after hours?\u201D Keep a thermometer at home.",
    cite: { t: "ASCO/IDSA \u00B7 Fever and Neutropenia Guideline (2018)", u: "https://ascopubs.org/doi/10.1200/JCO.2017.77.6211" }
  },

  tools: {
    eyebrow: "Take it with you",
    title: "Simple tools you can print and fill in",
    lead: "Print this page, or copy these onto paper. Keep them somewhere easy to find.",
    blocks: [
      {
        h: "Who to call",
        rows: ["My oncologist", "After-hours / on-call number", "My primary doctor", "Cancer center / infusion center", "Pharmacy", "A person I can call when I feel low"]
      },
      {
        h: "My treatment list",
        cols: ["Treatment", "What it's for", "When / how often"]
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
      { b: "Share what helped", t: "A small habit, a verse, a friend, a prayer, a good question \u2014 hand it forward." }
    ],
    close: "The hardest road you walk can become the very thing that lights the way for someone else. That is how hope keeps moving \u2014 from one healing life to the next. To pass it on is to be a good and faithful servant with what you were given (Matthew 25:21). Through our own struggles and pain, we are blessed \u2014 and what we are given was never meant to be kept.",
    verse: "\u201CBlessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, that we may be able to comfort those who are in any affliction, through the comfort with which we ourselves are comforted by God.\u201D \u2014 2 Corinthians 1:3\u20134 (WEBU)"
  },

  close: {
    verse: "\u201CHe heals the broken in heart, and binds up their wounds.\u201D \u2014 Psalm 147:3 (WEBU)",
    body: "Take it one small step at a time. You are healing, you are held, and you are not alone.",
    sign: "\u2014 With you on the road, Wonderfully Made Labs",
    cta: "Back to top \u2191"
  }
};
