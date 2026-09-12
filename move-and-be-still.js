/* Move & Be Still — The Wonderfully Made Reset
   Deterministic date-seeded daily bodyweight flow generator.
   All movement is bodyweight. Every daily flow includes the three
   anchor moves (squats, push-ups, mountain climbers) plus Leo-style
   ground/flow movements, scaled to each age band.
   Same calendar date => same flow for everyone (families can move together).
*/
(function (global) {
  "use strict";

  // ---- Deterministic PRNG seeded by date + age band --------------------
  function hashSeed(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
  function shuffle(rng, arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ---- The three anchor moves, scaled per band -------------------------
  // Each band defines its own version of squat / pushup / climber, so the
  // required moves are ALWAYS present but always age-appropriate.
  var ANCHORS = {
    kids: {
      squat: { name: "Bodyweight Squats", cue: "Sit to an invisible chair, chest tall, then stand." },
      pushup: { name: "Wall Push-ups", cue: "Hands on the wall, lower your nose toward it, push back." },
      climber: { name: "Slow Mountain Climbers", cue: "Hands on the floor, march your knees in one at a time." }
    },
    teen: {
      squat: { name: "Bodyweight Squats", cue: "Feet shoulder-width, sit back and down, drive up tall." },
      pushup: { name: "Push-ups", cue: "Knees or toes, straight line, elbows tracking back." },
      climber: { name: "Mountain Climbers", cue: "Plank position, drive knees to chest, quick but controlled." }
    },
    adult1: {
      squat: { name: "Bodyweight Squats", cue: "Sit back and down, knees tracking over toes, chest up." },
      pushup: { name: "Push-ups", cue: "Toes or knees, brace the core, full range." },
      climber: { name: "Mountain Climbers", cue: "Drive the pace here — knees to chest, hips low." }
    },
    adult2: {
      squat: { name: "Squats to a Chair", cue: "Sit lightly to a chair, stand tall — protects the knees." },
      pushup: { name: "Incline Push-ups", cue: "Hands on a counter or sturdy table, lower with control." },
      climber: { name: "Slow Mountain Climbers", cue: "Hands elevated on a chair if needed; steady knee drives." }
    },
    senior: {
      squat: { name: "Sit-to-Stands", cue: "From a chair, stand and sit with control. Hands ready for support." },
      pushup: { name: "Wall / Counter Push-ups", cue: "Hands on wall or counter, lower and press, no floor needed." },
      climber: { name: "Standing Marching Climbers", cue: "Hold support; march knees up high, one at a time, with intent." }
    }
  };

  // ---- Leo-style flow / ground movements + accessory pool per band -----
  var POOL = {
    kids: [
      { name: "Bear Crawl", cue: "Hands and feet down, knees hovering, crawl forward and back." },
      { name: "Crab Walk", cue: "Sit, hands behind, lift hips, walk like a crab." },
      { name: "Star Jumps", cue: "Jump wide — arms and legs make a star." },
      { name: "Frog Jumps", cue: "Squat low, hop forward like a frog." },
      { name: "Bunny Hops", cue: "Small two-foot hops, soft landings." },
      { name: "Superman Holds", cue: "On your tummy, lift arms and legs, hold, rest." },
      { name: "High Knees", cue: "Run in place, knees up, big arms." }
    ],
    teen: [
      { name: "Bear Crawl", cue: "Knees hovering, crawl forward, back, and side to side." },
      { name: "Crab Reach", cue: "From crab, reach one hand to the opposite foot, open the chest." },
      { name: "Beast Hold", cue: "Bear position, knees an inch off the floor, brace hard, hold." },
      { name: "Squat Jumps", cue: "Squat, then explode up; land soft and quiet." },
      { name: "Reverse Lunges", cue: "Step back, knee gently toward the floor, alternate." },
      { name: "Plank Shoulder Taps", cue: "Plank, tap each shoulder without rocking the hips." },
      { name: "Scorpion Reach", cue: "On your front, reach one heel across toward the far hand." },
      { name: "Broad Jumps", cue: "Jump forward for distance, stick the landing." }
    ],
    adult1: [
      { name: "Bear Crawl Flow", cue: "Crawl forward and back with knees hovering; keep the spine long." },
      { name: "Crab Reach", cue: "Bridge into a crab, reach hand to opposite toe, open the chest — a Leo-style flow." },
      { name: "Beast to Crab Transition", cue: "Flow from beast hold to crab reach and back — smooth, controlled." },
      { name: "Squat Jumps", cue: "Explosive up, quiet landing, reset each rep." },
      { name: "Reverse Lunges", cue: "Alternating; control the descent." },
      { name: "Plank Shoulder Taps", cue: "Slow taps, resist the twist through the core." },
      { name: "Scorpion Reach", cue: "Prone, reach heel across to the opposite side for a spinal twist." },
      { name: "Glute Bridges", cue: "Drive hips up, squeeze, lower slow." },
      { name: "Burpees (step-back option)", cue: "Chest to floor, stand or jump up — step back to scale." },
      { name: "Lateral Bear Steps", cue: "In beast position, travel sideways staying low." }
    ],
    adult2: [
      { name: "Bear Crawl (short range)", cue: "Small forward/back crawls, knees hovering; stop if wrists complain." },
      { name: "Crab Reach", cue: "Gentle bridge and reach; move only as far as feels good." },
      { name: "Step-back Lunges", cue: "Hold a wall for balance; controlled and steady." },
      { name: "Glute Bridges", cue: "Great for hips and lower back; pause at the top." },
      { name: "Standing Fast Feet", cue: "Quick light steps in place for a low-impact aerobic burst." },
      { name: "Plank (knees or toes)", cue: "Hold a straight line, breathe steady." },
      { name: "Bird-Dog", cue: "On all fours, extend opposite arm and leg, hold, switch." },
      { name: "Standing Knee Drives", cue: "Drive one knee up, alternate, brace the core." }
    ],
    senior: [
      { name: "Heel-to-Toe Stand", cue: "Feet in a line, hold 10–20 sec; support nearby. (Balance)" },
      { name: "Standing Heel Raises", cue: "Rise onto toes, lower slow; chair for support. (Balance + calves)" },
      { name: "Single-Leg Stand", cue: "Lift one foot slightly, hold 5–10 sec, switch. (Fall-prevention)" },
      { name: "Seated or Standing Marching", cue: "Knees up, steady rhythm; hold support as needed." },
      { name: "Glute Bridges", cue: "On your back, gently lift hips, squeeze, lower." },
      { name: "Bird-Dog", cue: "On all fours or seated variation, extend opposite arm and leg." },
      { name: "Side Leg Raises", cue: "Hold a chair, lift one leg to the side, lower slow. (Hips + balance)" },
      { name: "Standing Weight Shifts", cue: "Rock gently side to side and front to back to train balance." }
    ]
  };

  // ---- Age bands (breakpoints grounded in ACSM + NSCA research) --------
  var BANDS = [
    { id: "kids",   label: "Explorers (8–12)",      key: "kids",   rounds: 2, work: 30, rest: 15,
      note: "Playful and form-first. An adult nearby is encouraged. This should feel like a game." },
    { id: "teen",   label: "Builders (13–17)",      key: "teen",   rounds: 3, work: 40, rest: 20,
      note: "More intensity, still technique-first. Slow down if form breaks." },
    { id: "adult1", label: "Foundation (18–39)",    key: "adult1", rounds: 3, work: 40, rest: 20,
      note: "Moderate-to-vigorous. Scale reps to your fitness; ease in if new." },
    { id: "adult2", label: "Steady Strength (40–59)",key: "adult2", rounds: 3, work: 35, rest: 25,
      note: "Joint-aware. Choose lower-impact options whenever your body asks." },
    { id: "senior", label: "Enduring Grace (60+)",   key: "senior", rounds: 2, work: 30, rest: 30,
      note: "Balance & fall-prevention woven in. Keep a sturdy chair or wall within reach." }
  ];

  // ---- Warm-up (fixed, gentle, per band) ------------------------------
  var WARMUP = {
    kids:   "March in place, big arm circles, and 5 slow 'reach for the sky, touch the ground.'",
    teen:   "Jog in place, leg swings, arm circles, and 5 bodyweight squats.",
    adult1: "Jog in place, hip circles, arm swings, and 5 slow squats.",
    adult2: "March in place, shoulder rolls, gentle hip circles, ankle circles, 5 slow squats.",
    senior: "Seated or standing marching, shoulder rolls, gentle side-to-side weight shifts, ankle circles."
  };

  // ---- Scripture + teaching resets (rotate by date) -------------------
  var RESETS = [
    { title: "Made on Purpose", ref: "Psalm 139:13–14",
      verse: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made.",
      teaching: "The heart that just carried you through those minutes has been beating since before your first breath — a rhythm you never started. You did not build this body; you were given it. Movement is one way to say thank you for the gift.",
      prayer: "Thank You for this body I did not make. Help me to care for it as Yours." },
    { title: "Strength for the Weary", ref: "Isaiah 40:29–31",
      verse: "He gives power to the faint, and to him who has no might he increases strength… they who wait for the Lord shall renew their strength.",
      teaching: "Some days the movement feels like a lot — that's honest. Physical strength is real and worth building, but Scripture points to a deeper strength that doesn't run out, given to the tired and the faint. Train your body, and lean on a strength beyond it.",
      prayer: "When I am weary, renew me — in body, and in the places training can't reach." },
    { title: "The Temple", ref: "1 Corinthians 6:19–20",
      verse: "Do you not know that your body is a temple of the Holy Spirit within you… So glorify God in your body.",
      teaching: "Caring for your body isn't vanity — it's stewardship. You're tending something entrusted to you. This movement, this breath, is a quiet way of honoring the One who dwells with you.",
      prayer: "Let the way I treat my body be an offering back to You." },
    { title: "Rest for the Restless", ref: "Matthew 11:28–29",
      verse: "Come to me, all who labor and are heavy laden, and I will give you rest… you will find rest for your souls.",
      teaching: "We spend so much of the day pulled at by screens and noise. You just unplugged — that alone is a small rebellion against the hurry. But the deepest rest isn't a break; it's the One who offers rest for the soul itself. Come as you are.",
      prayer: "Quiet the noise in me. I bring You my tired mind and receive Your rest." },
    { title: "Peace That Guards", ref: "Philippians 4:6–7",
      verse: "Do not be anxious about anything, but in everything by prayer… let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds.",
      teaching: "The slow breathing you just did calms the body's alarm system — that's how God wired it. But there's a peace that goes further, one that surpasses understanding and stands guard over an anxious mind. Bring Him the thing you're carrying.",
      prayer: "I give You what I've been carrying. Guard my heart and my mind with Your peace." },
    { title: "Made New", ref: "2 Corinthians 5:17",
      verse: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
      teaching: "Bodies get tired and worn — and so do we, inside. But the promise at the center of everything we do here is that broken people can be made new. Not patched. New. However you came to this reset, you are not beyond restoration.",
      prayer: "Where I am worn and broken, make me new. I come to You just as I am." },
    { title: "Be Still", ref: "Psalm 46:10",
      verse: "Be still, and know that I am God.",
      teaching: "For a moment, nothing is required of you. Not the next task, not the next notification. Just be still, and remember who holds it all — and who holds you.",
      prayer: "Help me to be still, and to trust that You are God." }
  ];

  // ---- Build one day's flow for one band -------------------------------
  function buildFlow(band, dateStr) {
    var seed = hashSeed(dateStr + "|" + band.id);
    var rng = mulberry32(seed);
    var anchors = ANCHORS[band.key];
    var pool = POOL[band.key];

    // Always the three anchors, in a shuffled order, plus 3 flow/accessory moves.
    var core = shuffle(rng, [anchors.squat, anchors.pushup, anchors.climber]);
    var accessories = shuffle(rng, pool).slice(0, 3);

    // Interleave so a Leo-style flow move sits between anchors.
    var moves = [core[0], accessories[0], core[1], accessories[1], core[2], accessories[2]];

    return {
      band: band.label,
      note: band.note,
      warmup: WARMUP[band.key],
      rounds: band.rounds,
      work: band.work,
      rest: band.rest,
      moves: moves
    };
  }

  function resetForDate(dateStr) {
    var seed = hashSeed(dateStr + "|reset");
    var rng = mulberry32(seed);
    return RESETS[Math.floor(rng() * RESETS.length)];
  }

  function todayStr(d) {
    d = d || new Date();
    var y = d.getFullYear();
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    return y + "-" + m + "-" + day;
  }

  global.MoveAndBeStill = {
    BANDS: BANDS,
    RESETS: RESETS,
    buildFlow: buildFlow,
    resetForDate: resetForDate,
    todayStr: todayStr,
    getBand: function (id) { for (var i = 0; i < BANDS.length; i++) if (BANDS[i].id === id) return BANDS[i]; return BANDS[2]; }
  };
})(typeof window !== "undefined" ? window : this);
