const {
  useState,
  useEffect,
  useRef
} = React;
const D = window.WML;

/* ---- support the mission (Stripe pay-what-you-want) ---- */
const ETSY_URL = "https://www.etsy.com/shop/WonderfullyMadeLab";
const SUPPORT_URL = "https://buy.stripe.com/9B600ka9p5aiddBcX39Zm00";

/* ---- brand logo (cross & crown) ---- */
function Logo() {
  return /*#__PURE__*/React.createElement("img", {
    className: "brand-mark",
    src: "assets/wml_icon.png",
    alt: "Wonderfully Made Labs"
  });
}
function Cite({
  c
}) {
  if (!c) return null;
  return /*#__PURE__*/React.createElement("a", {
    className: "cite",
    href: c.u,
    target: "_blank",
    rel: "noopener"
  }, c.t, " \u2197");
}

/* ---- scroll reveal hook ---- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll('.fade-up');
    // Failsafe: if IntersectionObserver is unsupported, just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach(n => n.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px -8% 0px'
    });
    nodes.forEach(n => io.observe(n));
    // Safety net: reveal anything already in/near the viewport on mount, and
    // force-reveal everything after a short delay so nothing can get stuck invisible
    // (covers tall sections, odd scroll timing, slow devices, or no scroll event).
    const revealInView = () => {
      nodes.forEach(n => {
        const r = n.getBoundingClientRect();
        if (r.top < (window.innerHeight || document.documentElement.clientHeight) + 80) {
          n.classList.add('in');
        }
      });
    };
    revealInView();
    requestAnimationFrame(revealInView);
    const failsafe = setTimeout(() => {
      nodes.forEach(n => n.classList.add('in'));
    }, 1400);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, []);
  return ref;
}

/* ---- analytics helper (Plausible custom events; no-op if blocked) ---- */
function track(name, props) {
  try {
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(name, props ? {
        props
      } : undefined);
    }
  } catch (e) {}
}

/* ---- a word of hope: optional invitation to receive Christ ---- */
/* Recurring across spoke pages. Closed by default; opens for those who want it. */
function WordOfHope() {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "hope",
    id: "word-of-hope"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hope-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hope-card" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hope-eyebrow eyebrow"
  }, "A Word of Hope \xB7 For anyone who wants it"), /*#__PURE__*/React.createElement("h2", {
    className: "display hope-title"
  }, "There is a hope no clinic can put on the wall."), /*#__PURE__*/React.createElement("p", {
    className: "hope-lede"
  }, "I've spent my life studying disease, and one thing I know is true: we will all get sick, and one day every body wears out. I'm not here to frighten you with that \u2014 I'm here because I found a hope that outlasts it. Not by being strong. By being held."), !open && /*#__PURE__*/React.createElement("button", {
    className: "hope-toggle",
    type: "button",
    "aria-expanded": false,
    onClick: () => {
      setOpen(true);
      track('Word of Hope Opened');
    }
  }, "I'd like to know more \u2192"), open && /*#__PURE__*/React.createElement("div", {
    className: "hope-more"
  }, /*#__PURE__*/React.createElement("p", null, "For most of my life I kept God at arm's length \u2014 through pride, through anger, through the belief that I'd built my success on my own. The turning point came in a hospital, with heart and stroke symptoms, when a friend asked me to read the Gospel of John. Back in the hotel room I opened it, and before I got through the first few verses I was on my knees. I didn't see or hear anything. But I felt a peace I had never known \u2014 no judgment, only love. I went to the Lord with nothing, and He gave me everything. My old self died, and I was made new."), /*#__PURE__*/React.createElement("blockquote", {
    className: "hope-verse"
  }, "\u201CFor God so loved the world, that he gave his only born Son, that whoever believes in him should not perish, but have eternal life.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 John 3:16 (WEBU)")), /*#__PURE__*/React.createElement("p", null, "That is the gift on offer to you, too \u2014 eternal life, freely given by grace, not earned. If something in you is stirring tonight, you don't have to clean yourself up first, and you don't have to have the right words. You can simply turn to Him."), /*#__PURE__*/React.createElement("div", {
    className: "hope-steps"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display hope-steps-title"
  }, "If you want to take a step"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Be honest with God."), " Tell Him where you really are \u2014 the fear, the failure, all of it. He already knows, and He loves you."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Ask Jesus to be your Lord and Savior."), " Believe that He died for you and rose again, and ask Him to forgive you and make you new."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Read the Gospel of John."), " Start where I started. Read it slowly, and ask God to meet you in it."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Don't walk it alone."), " Find a Bible-believing church or a Christian friend who can walk with you."))), /*#__PURE__*/React.createElement("div", {
    className: "hope-prayer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hope-prayer-label"
  }, "A prayer, if you'd like the words"), /*#__PURE__*/React.createElement("p", null, "\u201CLord Jesus, I can't carry this alone, and I don't want to anymore. I believe You died for me and rose again. Forgive me. Be my Lord and my Savior. Make me new, and walk with me from here. Amen.\u201D")), /*#__PURE__*/React.createElement("p", {
    className: "hope-after"
  }, "If you prayed that, and meant it \u2014 welcome. You are not alone, and you never were. I'd love to know; reach me any time, and please find a church family near you. To God be the glory."), /*#__PURE__*/React.createElement("button", {
    className: "hope-toggle",
    type: "button",
    "aria-expanded": true,
    onClick: () => setOpen(false)
  }, "Show less \u2191")))));
}

/* ---- core mission statement (critical component, high visibility) ---- */
function MissionStatement() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mission"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap mission-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mission-eyebrow eyebrow"
  }, "Our Mission"), /*#__PURE__*/React.createElement("blockquote", {
    className: "mission-verse"
  }, "\u201CWell done, good and faithful servant.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 Matthew 25:21")), /*#__PURE__*/React.createElement("p", {
    className: "mission-body"
  }, "Our mission is to become good and faithful servants. Through our own struggles and pain, we have been blessed \u2014 and what we were given was never meant to be kept. We make this work to hand that blessing on: faith-filled, scientifically true, and free for anyone who needs it."), /*#__PURE__*/React.createElement("p", {
    className: "mission-sign"
  }, "All glory to God.")));
}

/* ---- free gift + email signup (top-of-funnel: capture email, deliver the 31-Day Prayer Companion) ---- */
function FreeGiftSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  function submit(e) {
    e.preventDefault();
    setErr("");
    const clean = email.trim();
    if (!clean || clean.indexOf("@") < 1) { setErr("Please enter a valid email so I can send it to you."); return; }
    setBusy(true);
    track('Free Gift Signup');
    /* Signups land directly in the inbox via Formspree (no secret keys, no external account).
       The visitor gets the Prayer Companion instantly on the thank-you screen below. */
    var payload = {
      email: clean,
      name: name.trim(),
      _subject: "New signup (Free Prayer Companion) via wonderfullymadelabs.com",
      message: "New email signup for the free 31-Day Prayer Companion.\nName: " + (name.trim() || "(not given)") + "\nEmail: " + clean
    };
    fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(r => {
      if (r.ok) { setSent(true); } else { setErr("Something went wrong. Please try again in a moment."); }
      setBusy(false);
    }).catch(() => { setErr("Something went wrong. Please try again in a moment."); setBusy(false); });
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "gift fade-up",
    id: "free-gift",
    "aria-label": "Free gift and email signup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gift-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gift-eyebrow eyebrow"
  }, "A free gift for you"), /*#__PURE__*/React.createElement("h2", {
    className: "display gift-title"
  }, "Start with 31 days of prayer \u2014 free."), /*#__PURE__*/React.createElement("p", {
    className: "gift-lede"
  }, "Get the 31-Day Prayer Companion \u2014 written by a scientist who found peace on his knees. For anyone carrying fear, illness, or a heavy season. From time to time I may share a note of hope; no schedule, no pressure, and you can opt out any time."),
  sent
    ? /*#__PURE__*/React.createElement("div", { className: "gift-sent" },
        /*#__PURE__*/React.createElement("p", { className: "gift-sent-head" }, "You're all set \u2014 welcome."),
        /*#__PURE__*/React.createElement("p", null, "Thank you for joining. Your 31-Day Prayer Companion is ready right now \u2014 open it below. From time to time I may share a note of hope, but there's no schedule and no pressure."),
        /*#__PURE__*/React.createElement("a", { className: "gift-cta", href: "/prayer" }, "Open the Prayer Companion \u2192"))
    : /*#__PURE__*/React.createElement("form", { className: "gift-form", onSubmit: submit },
        /*#__PURE__*/React.createElement("input", {
          className: "gift-input", type: "text", placeholder: "First name (optional)",
          value: name, onChange: e => setName(e.target.value), "aria-label": "First name"
        }),
        /*#__PURE__*/React.createElement("input", {
          className: "gift-input", type: "email", placeholder: "Your email", required: true,
          value: email, onChange: e => setEmail(e.target.value), "aria-label": "Your email"
        }),
        /*#__PURE__*/React.createElement("button", { className: "gift-submit", type: "submit", disabled: busy },
          busy ? "Sending\u2026" : "Send me the free companion"),
        err && /*#__PURE__*/React.createElement("p", { className: "gift-error" }, err)),
  /*#__PURE__*/React.createElement("p", { className: "gift-fine" }, "We'll never share your email. All glory to God.")));
}

/* ---- contact / prayer modal ---- */
/* Set CONTACT_ENDPOINT to a Formspree URL (e.g. https://formspree.io/f/xxxxxxx) to have
   messages land directly in the inbox with no email app required. Until then, it falls
   back to a mailto so nothing is ever lost. The destination address is never shown on the page. */
var CONTACT_ENDPOINT = "https://formspree.io/f/xljrewag";
var CONTACT_TO = "davidsventures@gmail.com";
function ContactModal({
  mode,
  onClose
}) {
  const isPrayer = mode === 'prayer';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const heading = isPrayer ? 'Let us pray for you' : 'Reach out to us';
  const intro = isPrayer ? "Share whatever is on your heart \u2014 a request, a burden, a name. We would be honored to lift it up in prayer. Nothing you write is shared publicly." : "We'd love to hear from you \u2014 a question, a word of encouragement, or just to say hello. We read every message.";
  const subject = (isPrayer ? 'Prayer request' : 'Message') + ' via wonderfullymadelabs.com';
  const submit = e => {
    e.preventDefault();
    if (!msg.trim()) return;
    setStatus('sending');
    const body = 'From: ' + (name || 'A friend') + '\n' + (email ? 'Email: ' + email + '\n' : '') + '\n' + msg;
    if (CONTACT_ENDPOINT) {
      fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: name, email: email, message: msg, _subject: subject })
      }).then(r => {
        setStatus(r.ok ? 'sent' : 'error');
        if (r.ok) track('Contact', { mode: mode });
      }).catch(() => setStatus('error'));
    } else {
      window.location.href = 'mailto:' + CONTACT_TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      track('Contact', { mode: mode });
      setStatus('sent');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": heading,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "contact-close",
    "aria-label": "Close",
    onClick: onClose
  }, "\u00D7"), status === 'sent' ? /*#__PURE__*/React.createElement("div", {
    className: "contact-sent"
  }, /*#__PURE__*/React.createElement("img", {
    className: "contact-logo",
    src: "assets/wml_icon.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, isPrayer ? 'Thank you \u2014 we will pray.' : 'Thank you \u2014 message on its way.'), /*#__PURE__*/React.createElement("p", null, isPrayer ? "Your request has reached us, and we will bring it to the Lord. You are not carrying it alone." : "We've received your note and will get back to you soon. Grace and peace to you."), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("img", {
    className: "contact-logo",
    src: "assets/wml_icon.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", {
    className: "display contact-heading"
  }, heading), /*#__PURE__*/React.createElement("p", {
    className: "contact-intro"
  }, intro), /*#__PURE__*/React.createElement("label", {
    className: "contact-label"
  }, "Your name (optional)", /*#__PURE__*/React.createElement("input", {
    className: "contact-input",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "First name is fine"
  })), /*#__PURE__*/React.createElement("label", {
    className: "contact-label"
  }, "Your email (optional \u2014 if you'd like a reply)", /*#__PURE__*/React.createElement("input", {
    className: "contact-input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("label", {
    className: "contact-label"
  }, isPrayer ? 'Your prayer request' : 'Your message', /*#__PURE__*/React.createElement("textarea", {
    className: "contact-input contact-textarea",
    value: msg,
    required: true,
    rows: 5,
    onChange: e => setMsg(e.target.value),
    placeholder: isPrayer ? 'Whatever is on your heart\u2026' : 'Write your message here\u2026'
  })), status === 'error' ? /*#__PURE__*/React.createElement("p", {
    className: "contact-error"
  }, "Something went wrong sending that. Please try again in a moment.") : null, /*#__PURE__*/React.createElement("button", {
    className: "btn contact-submit",
    type: "submit",
    disabled: status === 'sending'
  }, status === 'sending' ? 'Sending\u2026' : isPrayer ? 'Send my request' : 'Send message'))));
}

/* ---- home hub (theme cards route to spoke pages) ---- */
function Home({
  onChoose,
  onTestimony
}) {
  const [oddsOpen, setOddsOpen] = useState(false);
  const [contact, setContact] = useState(null); // null | 'prayer' | 'contact'
  const reveal = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "home",
    ref: reveal
  }, /*#__PURE__*/React.createElement("a", {
    href: "/river-detective.html",
    className: "home-game-pill",
    style: {
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: 50,
      background: '#e8b04b',
      color: '#23344a',
      fontWeight: 600,
      textDecoration: 'none',
      padding: '10px 18px',
      borderRadius: '999px',
      fontSize: '.92rem',
      boxShadow: '0 4px 16px rgba(35,52,74,.25)'
    }
  }, "\uD83D\uDD0E Play the Game"), /*#__PURE__*/React.createElement("div", {
    className: "home-contact-row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "home-contact-btn primary",
    onClick: () => setContact('prayer')
  }, "\uD83D\uDE4F Let us pray for you"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "home-contact-btn",
    onClick: () => setContact('contact')
  }, "\u2709 Reach out to us")), contact ? /*#__PURE__*/React.createElement(ContactModal, {
    mode: contact,
    onClose: () => setContact(null)
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "wrap home-inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "home-logo",
    src: "assets/wml_icon.png",
    alt: "Wonderfully Made Labs cross-and-crown emblem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, "Wonderfully Made Labs \xB7 In His Glory"), /*#__PURE__*/React.createElement("p", {
    className: "verse home-verse"
  }, "\u201CI will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful.\u201D \u2014 from Psalm 139:14 (WEBU)"), /*#__PURE__*/React.createElement("h1", {
    className: "display home-title"
  }, "Studying His Creation"), /*#__PURE__*/React.createElement("p", {
    className: "home-lede"
  }, "Real science, told with wonder \u2014 so you can see the Maker in what He made. Take it one wonder at a time. Start wherever you'd like."), /*#__PURE__*/React.createElement(MissionStatement, null), /*#__PURE__*/React.createElement(FreeGiftSignup, null), /*#__PURE__*/React.createElement("div", {
    className: "help-finder fade-up",
    "aria-label": "Find what you need"
  }, /*#__PURE__*/React.createElement("div", {
    className: "help-finder-eyebrow eyebrow"
  }, "Looking for something in particular?"), /*#__PURE__*/React.createElement("h2", {
    className: "display help-finder-title"
  }, "Find the help you're seeking"), /*#__PURE__*/React.createElement("p", {
    className: "help-finder-lede"
  }, "Wherever you are today, there's a place to start. Pick what fits, and we'll take you straight there."), /*#__PURE__*/React.createElement("div", {
    className: "help-finder-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "help-finder-card help-finder-card-still",
    style: {
      gridColumn: "1 / -1",
      cursor: "default",
      borderTop: "3px solid var(--gold, #e8b04b)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-title"
  }, "Where are you today?"), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-desc"
  }, "Name what you\u2019re carrying, and we\u2019ll meet you there \u2014 what\u2019s happening in your body, honest Scripture, and a ninety-second way back to stillness. Tap a feeling to begin."), /*#__PURE__*/React.createElement("div", {
    className: "still-emotion-chips",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      margin: "14px 0 6px"
    }
  }, [['noise', 'The Noise'], ['anger', 'The Anger'], ['impatience', 'The Impatience'], ['work', 'The Work'], ['return', 'The Return'], ['stillness', 'The Stillness']].map(pair => /*#__PURE__*/React.createElement("a", {
    key: pair[0],
    className: "still-chip",
    href: "/still-tool.html#" + pair[0],
    style: {
      display: "inline-block",
      padding: "8px 14px",
      borderRadius: "999px",
      border: "1.5px solid var(--gold, #e8b04b)",
      background: "transparent",
      color: "var(--navy, #23344a)",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "0.92rem"
    },
    onClick: () => track('Still Tool Open', {
      source: 'help finder',
      emotion: pair[0]
    })
  }, pair[1]))), /*#__PURE__*/React.createElement("a", {
    className: "help-finder-card-go",
    href: "/still-tool.html",
    style: {
      textDecoration: "none"
    },
    onClick: () => track('Still Tool Open', {
      source: 'help finder',
      emotion: 'begin'
    })
  }, "Or just begin \u2192")), [["I just got a diagnosis", "Plain answers about what's happening in the body \u2014 and real hope alongside them.", "adult"], ["I'm caring for someone who is sick", "Honest writing for caregivers, for the long and tiring days.", "essays"], ["I'm scared or anxious", "A Christian journal that gives fear words, with a calming Prayer Breath.", "journals"], ["I'm grieving or worn down", "A companion that sits with grief and walks the slow road back to faith.", "journals"], ["Someone I love has cancer", "A tender, wonder-filled way to understand cancer \u2014 and why it is never your fault.", "cancer"], ["I want to learn with my kids", "Painted story-mysteries about the body, for ages 8 to pre-med.", "story"]].map(item => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "help-finder-card",
    key: item[2] + item[0],
    onClick: () => onChoose(item[2]),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose(item[2]);
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-title"
  }, item[0]), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-desc"
  }, item[1]), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-go"
  }, "Take me there \u2192"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "help-finder-card help-finder-card-faith",
    key: "our-story",
    onClick: () => onTestimony && onTestimony(),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onTestimony && onTestimony();
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-title"
  }, "Our Story"), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-desc"
  }, "The despair I came from, and the hope that found me. I was made new \u2014 and I want that for you too."), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-go"
  }, "Read our testimony \u2192")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "help-finder-card help-finder-card-faith",
    key: "know-god",
    onClick: () => {
      const el = document.getElementById('word-of-hope');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const el = document.getElementById('word-of-hope');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-title"
  }, "I just want to know God"), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-desc"
  }, "Whatever brought you here, there's a hope no clinic can put on the wall. Come as you are."), /*#__PURE__*/React.createElement("span", {
    className: "help-finder-card-go"
  }, "Take me there \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "odds-card" + (oddsOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "odds-eyebrow eyebrow"
  }, "Start Here \xB7 The Odds of You"), /*#__PURE__*/React.createElement("h3", {
    className: "display odds-title"
  }, "Just being born defeats impossible odds."), /*#__PURE__*/React.createElement("p", {
    className: "odds-lede"
  }, "One sperm out of ", /*#__PURE__*/React.createElement("strong", null, "trillions"), ", one egg out of ", /*#__PURE__*/React.createElement("strong", null, "millions"), ", an unbroken chain of ancestors who each had to meet at exactly the right moment \u2014 or you're never born. The odds against you are almost beyond words. And yet, here you are."), oddsOpen && /*#__PURE__*/React.createElement("div", {
    className: "odds-more"
  }, /*#__PURE__*/React.createElement("p", {
    className: "odds-lede"
  }, "You woke up today in a body you did not build \u2014 one that has been keeping you alive since before you took your first breath, your heart keeping a rhythm you never started."), /*#__PURE__*/React.createElement("blockquote", {
    className: "odds-verse"
  }, "\u201CFor you formed my inmost being. You knit me together in my mother’s womb. I will give thanks to you, for I am fearfully and wonderfully made.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 from Psalm 139:13\u201314 (WEBU)")), /*#__PURE__*/React.createElement("p", {
    className: "odds-close"
  }, "You weren't a long shot that happened to land. You were ", /*#__PURE__*/React.createElement("strong", null, "knitted together"), " \u2014 chosen, intended, made on purpose. That is the wonder we begin with. You don't have to share our faith to be welcome here. You just have to be willing to be amazed.")), /*#__PURE__*/React.createElement("button", {
    className: "odds-toggle",
    type: "button",
    "aria-expanded": oddsOpen,
    onClick: () => {
      const n = !oddsOpen;
      setOddsOpen(n);
      if (n) track('Odds Expanded');
    }
  }, oddsOpen ? "Show less ↑" : "Read more →")), /*#__PURE__*/React.createElement("div", {
    className: "hub-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Where to begin"), /*#__PURE__*/React.createElement("h2", {
    className: "display hub-head-title"
  }, "Doors into the wonder"), /*#__PURE__*/React.createElement("p", {
    className: "hub-head-lede"
  }, "Comfort pages for patients and caregivers are free to read, with no sign-up. The learning modules are our members' classroom. Our books, printables, and merch are available in the Store and help keep the mission going. Start anywhere that speaks to where you are today.")), /*#__PURE__*/React.createElement("div", {
    className: "hub-sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'For Patients \xB7 Free to Read'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Our comfort lane \u2014 free for anyone, no sign-up, ever. Just diagnosed, or healing after a heart attack? A gentle, plain-language companion to sit with you.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card adult",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('patient'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('patient');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_patient.jpg",
    alt: "Two open hands cupping a warm light",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Patients"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Take Heart, Friend"), /*#__PURE__*/React.createElement("p", null, "If you were just told you have coronary artery disease, or you are healing after a heart attack \u2014 here is what is happening, what to do now, what comes next, and real hope. Written in plain words, free to read, print, and share."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Open the companion \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hub-card adult",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('cancer'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('cancer');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_cancer_patient.jpg",
    alt: "A cell monster reading with a child",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Patients"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Take Heart, Friend \u2014 Cancer"), /*#__PURE__*/React.createElement("p", null, "If you were just told you have cancer, or you are walking through treatment \u2014 here is what is happening, what to do now, what comes next, and real hope. Plain words, backed by ASCO guidelines, free to read, print, and share."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Open the companion \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'Journals & Essays \xB7 Free to Read'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Our comfort lane \u2014 free to read, print, and share, with no sign-up. Faith and real science at the same table through hard seasons.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card essays",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('essays'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('essays');
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Essays \xB7 Faith & Medicine"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "For the Journey"), /*#__PURE__*/React.createElement("p", null, "Honest writing for the hard seasons \u2014 caregiving, fear, illness, and faith. The science is real, and so is the hope. We don't make you choose between them."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Read the essays \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hub-card journals",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('journals'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('journals');
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Free Guided Journals"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Take One Home"), /*#__PURE__*/React.createElement("p", null, "Guided journals that put Scripture next to the real science of fear and grief \u2014 for kids and for grown-ups. Free to download, print, and share with anyone who needs them."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Get the free journals \u2192")), /*#__PURE__*/React.createElement("a", {
    className: "hub-card journals",
    href: "/prayer",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "31-Day Prayer \xB7 Free to Read"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Finding Christ in the Darkness"), /*#__PURE__*/React.createElement("p", null, "A 31-day prayer & meditation companion for the soul that feels lost \u2014 a Psalm or Gospel word, an honest reflection, a written prayer, and one small doable step each day. Read it here or download the free PDF."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Begin the 31 days \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'Play & Learn \xB7 Free'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Solve a real medical mystery the way scientists and doctors do \u2014 or read the whole story across three reading levels. Gather the clues, crack the case, and see the wonder in how you\u2019re made. No sign-up.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hub-card journals",
    href: "/river-detective.html",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/scene1_healthy.jpg",
    alt: "The River \u2014 play the detective mystery game",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Interactive Game \xB7 Ages 8+"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "River Detective"), /*#__PURE__*/React.createElement("p", null, "A river forgot how to flow \u2014 and something is hiding under the bank. Become the detective: examine each clue, listen to the heartbeat change, and diagnose the disease yourself. Free, works on any phone."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "\uD83D\uDD0E Play the mystery \u2192")), /*#__PURE__*/React.createElement("a", {
    className: "hub-card journals",
    href: "/move-and-be-still.html",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Move & Be Still \xB7 Free \xB7 All Ages 8+"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Move & Be Still"), /*#__PURE__*/React.createElement("p", null, "We spend so much of the day on screens. Every 90 minutes, unplug: a 10-minute bodyweight movement flow for your age \u2014 it changes every day \u2014 then a breathing reset and a word of Scripture. Body, mind, and soul, cared for together. Free, works on any phone."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Start the reset \u2192")), /*#__PURE__*/React.createElement("a", {
    className: "hub-card journals",
    href: "/heart",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/scene3_rocks.jpg",
    alt: "The hidden rocks in the river bank \u2014 read how heart disease begins",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Read the Story \xB7 Ages 8 to Pre-Med"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The Story Behind the Mystery"), /*#__PURE__*/React.createElement("p", null, "The same river mystery, told in three reading levels \u2014 for an 8-year-old, a high schooler, and a pre-med student. How a plaque really forms, why it ruptures, and how the body is built to heal. Free, no sign-up."), /*#__PURE__*/React.createElement("div", {
    className: "hub-pick"
  }, "Start the journey \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'The Store'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Printed books, printable downloads, and original-character merch. Every purchase helps us create and share more resources.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card journals"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb hub-thumb-store",
    src: "assets/thumb_store.jpg",
    alt: "Discover, Treat and Serve monster art for keepsake books and merch",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "Books & Merch \xB7 The Store"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The Wonder, To Keep"), /*#__PURE__*/React.createElement("p", null, "Beautiful printed editions of the stories and journals, plus original-character merch built around our painted friends \u2014 Discover, Treat, Serve, and the \u201CFearfully and Wonderfully Made\u201D comfort line. Printable coloring pages and journals are now on Etsy, and printed editions are on Amazon."), /*#__PURE__*/React.createElement("a", {
    className: "hub-pick",
    href: "/news/fearfully-and-wonderfully-made.html",
    style: { display: "block", marginBottom: "8px" },
    onClick: () => track('News Click', {
      source: 'Home Store Card'
    })
  }, "New: our first paperback is on Amazon \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "hub-pick",
    href: "/news/when-im-scared.html",
    style: { display: "block", marginBottom: "8px" },
    onClick: () => track('News Click', {
      source: 'Home Store Card Journal'
    })
  }, "New: When I'm Scared, God Is With Me journal \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "hub-pick",
    href: "/news/the-light-has-come.html",
    style: { display: "block", marginBottom: "8px" },
    onClick: () => track('News Click', {
      source: 'Home Store Card Advent'
    })
  }, "New for Advent: The Light Has Come paperback \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "hub-pick",
    href: ETSY_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    style: { display: "block", marginBottom: "8px" },
    onClick: () => track('Etsy Click', {
      source: 'Home Store Card'
    })
  }, "Shop printables on Etsy \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "hub-pick",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'Home Store Card'
    })
  }, "Support the mission \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'The Classroom \xB7 Members'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Our members\u2019 classroom \u2014 illustrated story-mysteries of the body, same painted friends, three reading tiers from ages 8 to pre-med. Free to join; open to everyone right now as we build the membership home.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card story",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('story'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('story');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_river.jpg",
    alt: "Tempo the heartbeat monster drumming by a river",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Families, Kids & Students"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The River That Forgot How to Flow"), /*#__PURE__*/React.createElement("p", null, "A painted story-mystery about coronary heart disease, told three ways \u2014 simple enough for an 8-year-old, deep enough for a pre-med student. Hand-painted characters, a discovery game, and a look at real careers in medicine."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Enter the story \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hub-card story",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('story2'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('story2');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_guards.jpg",
    alt: "A friendly guard monster with doctors",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Families, Kids & Students"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The Guards Who Forgot Their Friends"), /*#__PURE__*/React.createElement("p", null, "An illustrated story-mystery about autoimmune disease \u2014 when the body's own defenders mistake friend for foe. Told three ways, ages 8 to pre-med, with the same hand-painted friends, a discovery game, and real careers in medicine."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Enter the story \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hub-card story",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('story3'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('story3');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_furnace.jpg",
    alt: "The purple furnace monster with a glowing belly",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Families, Kids & Students"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The Furnace Friend"), /*#__PURE__*/React.createElement("p", null, "An illustrated story-mystery about preventive health \u2014 why our moms bug us to eat our vegetables and move our bodies. Meet a gentle monster with a glowing furnace in its belly: fuel in, fire out, kept in balance so it burns clean. Told three ways, ages 8 to pre-med, with the same hand-painted friends, a discovery game, and real careers in medicine."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Enter the story \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hub-card story",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('story4'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('story4');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_cancer_kids.jpg",
    alt: "Gentle cell monsters in a meadow",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Families, Kids & Students"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "The Worker Who Forgot the Rule"), /*#__PURE__*/React.createElement("p", null, "A gentle, wonder-filled story about what cancer really is \u2014 and why it is never your fault. Meet one of the body's own good little workers whose Rule Book got a smudge no one caused, and the faithful Guards and human doctors who come to help. Told three ways, ages 8 to pre-med, with hand-painted friends, glowing medical art, a discovery game, and real careers in medicine."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Enter the story \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hub-section-label display"
  }, 'The Classroom \xB7 For Adults'), /*#__PURE__*/React.createElement("p", {
    className: "hub-section-lede"
  }, 'Part of the members\u2019 classroom \u2014 the plain truth, the numbers that matter, and the part no clinic puts on the wall.')), /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-card adult",
    role: "button",
    tabIndex: 0,
    onClick: () => onChoose('adult'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onChoose('adult');
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "hub-thumb",
    src: "assets/thumb_takeheart.jpg",
    alt: "Cross-sections of healthy and narrowing arteries",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-card-tag"
  }, "For Adults"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Take Heart"), /*#__PURE__*/React.createElement("p", null, "You've been told it's your cholesterol, your weight, your lifestyle \u2014 yet heart disease is still the #1 killer. The truth cardiologists now tell, the numbers that matter, and the part no clinic puts on the wall."), /*#__PURE__*/React.createElement("span", {
    className: "hub-pick"
  }, "Begin the module \u2192")))))), /*#__PURE__*/React.createElement("div", {
    className: "support-card fade-up",
    style: {
      marginTop: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "support-tag"
  }, "Support the Mission"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "If this gave you something, help us give it to someone else"), /*#__PURE__*/React.createElement("p", null, "Many of our stories, journals, and the prayer companion are free to read here. If a page met you in a hard moment and you'd like to help us reach the next family, you can give whatever it's worth to you. Every bit goes straight back into making and sharing more."), /*#__PURE__*/React.createElement("a", {
    className: "support-btn",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'Home Support Section'
    })
  }, "Support the Mission \u2661"), /*#__PURE__*/React.createElement("p", {
    className: "support-fine"
  }, "Give what you like, or nothing at all \u2014 you're welcome here either way.")), /*#__PURE__*/React.createElement(WordOfHope, null));
}

/* ---- free journals page (spoke) ---- */
function Journals({
  onHome
}) {
  const ref = useReveal();
  const [kidsJournalOpen, setKidsJournalOpen] = useState(false);
  const [adultJournalOpen, setAdultJournalOpen] = useState(false);
  const [stillJournalOpen, setStillJournalOpen] = useState(false);
  const [devotionalOpen, setDevotionalOpen] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "spoke-page resources-page",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "spoke-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-link dark",
    onClick: onHome
  }, "\u2190 Home")), /*#__PURE__*/React.createElement("div", {
    className: "wrap resources",
    id: "resources"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, "Free Guided Journals"), /*#__PURE__*/React.createElement("h1", {
    className: "display res-title"
  }, "Take One Home \u2014 Freely"), /*#__PURE__*/React.createElement("p", {
    className: "res-lede"
  }, "These guided journals are free to download here. They pair Scripture with the real science of fear and grief, so hearts can understand what their bodies feel and find God's peace. Download, print, and share with anyone who needs them.")), /*#__PURE__*/React.createElement("div", {
    className: "res-cards fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-card kids" + (kidsJournalOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-tag"
  }, "For Kids \xB7 Ages 4\u201311"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "When I'm Scared: A Christian Anxiety Journal for Kids"), /*#__PURE__*/React.createElement("p", null, "A Christian journal that gives anxious children words for their fear \u2014 with a calming Prayer Breath and the reminder that they are fearfully and wonderfully made."), kidsJournalOpen && /*#__PURE__*/React.createElement("div", {
    className: "res-more"
  }, /*#__PURE__*/React.createElement("p", null, "When a child is afraid, their heart races, their tummy tightens, and their breath goes quick and shallow. That isn't a child being \u201Cbad\u201D or \u201Cweak\u201D \u2014 it's a wonderfully made body doing exactly what God designed it to do to keep them safe. This journal gently names what fear feels like inside, so a frightened child finally has words for it."), /*#__PURE__*/React.createElement("p", null, "Page by page, it pairs that real science with God's promises \u2014 a calming Prayer Breath to slow a racing heart, gentle prompts to draw and talk about big feelings, and the quiet, steady reminder that they are never alone and are fearfully and wonderfully made. It's made to be read together, at bedtime or in a hard moment, by anyone who loves a child through their fear.")), /*#__PURE__*/React.createElement("button", {
    className: "res-toggle",
    type: "button",
    "aria-expanded": kidsJournalOpen,
    onClick: () => setKidsJournalOpen(v => !v)
  }, kidsJournalOpen ? "Show less ↑" : "Read more →"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-link",
    href: "assets/When_Im_Scared_God_Is_With_Me.pdf",
    download: true,
    onClick: () => track('Journal Download', {
      journal: 'When Im Scared'
    })
  }, "Download the free PDF \u2193"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-support",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'When Im Scared'
    })
  }, "Support the mission \u2661")), /*#__PURE__*/React.createElement("div", {
    className: "res-card adult" + (adultJournalOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-tag"
  }, "For Adults"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "We Do Not Suffer Alone: A Faith Journal for Grief & Anxiety"), /*#__PURE__*/React.createElement("p", null, "A faith-centered companion for grief, anxiety, anger, and surrender \u2014 a journey back to steadfast faith that sits with you until the words come back."), adultJournalOpen && /*#__PURE__*/React.createElement("div", {
    className: "res-more"
  }, /*#__PURE__*/React.createElement("p", null, "Grief and fear are not only felt in the heart \u2014 they're felt in the body. The chest goes heavy, sleep comes apart, the mind won't rest. None of that means your faith has failed; it means you are human, and wonderfully made, carrying something heavy. This companion sits with that honestly, naming what grief, anger, and exhaustion actually do to us, and refusing to rush you past them."), /*#__PURE__*/React.createElement("p", null, "It walks the slow road back to steadfast faith \u2014 pairing Scripture with space to be honest with God, even when the only prayer left is anger or silence. There are no tidy answers here, only the truth that we do not suffer alone: God sits with us in it, and stays until the words come back. Take it for yourself, or give it to someone in the middle of a hard season.")), /*#__PURE__*/React.createElement("button", {
    className: "res-toggle",
    type: "button",
    "aria-expanded": adultJournalOpen,
    onClick: () => setAdultJournalOpen(v => !v)
  }, adultJournalOpen ? "Show less ↑" : "Read more →"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-link",
    href: "assets/We_Do_Not_Suffer_Alone.pdf",
    download: true,
    onClick: () => track('Journal Download', {
      journal: 'We Do Not Suffer Alone'
    })
  }, "Download the free PDF \u2193"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-support",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'We Do Not Suffer Alone'
    })
  }, "Support the mission \u2661")), /*#__PURE__*/React.createElement("div", {
    className: "res-card adult" + (stillJournalOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-tag"
  }, "For Adults"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Still: Finding Peace in a Restless, Noisy World"), /*#__PURE__*/React.createElement("p", null, "A guided faith journal for anger, frustration, impatience, and the weariness of the digital age \u2014 a way back to the stillness God promises: \u201CBe still, and know that I am God.\u201D"), stillJournalOpen && /*#__PURE__*/React.createElement("div", {
    className: "res-more"
  }, /*#__PURE__*/React.createElement("p", null, "So much of modern restlessness is quiet and constant \u2014 the low-grade anger, the impatience, the dread on a Sunday evening, the phone we reach for to unwind and set down more restless than before. It is not a personal failing. It is what happens to people made for stillness who are living in a world built to keep them from it."), /*#__PURE__*/React.createElement("p", null, "Across six short parts \u2014 The Noise, The Anger, The Impatience, The Work, The Return, and The Stillness \u2014 this journal pairs honest Scripture with space to write, and a simple ninety-second Stillness Practice. Its through-line is the oldest promise there is: worn, restless people who turn to the Lord empty-handed are restored and made new. Take it for yourself, or share it with anyone carrying the noise.")), /*#__PURE__*/React.createElement("button", {
    className: "res-toggle",
    type: "button",
    "aria-expanded": stillJournalOpen,
    onClick: () => setStillJournalOpen(v => !v)
  }, stillJournalOpen ? "Show less ↑" : "Read more →"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-link",
    href: "assets/wml_still_journal.pdf",
    download: true,
    onClick: () => track('Journal Download', {
      journal: 'Still'
    })
  }, "Download the free PDF \u2193"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-link",
    href: "/still-tool.html",
    style: {
      marginTop: "8px",
      background: "transparent",
      border: "1.5px solid var(--gold, #e8b04b)",
      color: "var(--navy, #23344a)"
    },
    onClick: () => track('Still Tool Open', {
      source: 'journals'
    })
  }, "Try the interactive tool \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "res-card devotional" + (devotionalOpen ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-tag"
  }, "For Adults \xB7 Heart Patients"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Heart & Soul: A 30-Day Devotional"), /*#__PURE__*/React.createElement("p", null, "A companion for the days between appointments \u2014 pairing daily Scripture from 1 Peter, the Psalms, and the Gospels with one small, doable act of care for your heart."), devotionalOpen && /*#__PURE__*/React.createElement("div", {
    className: "res-more"
  }, /*#__PURE__*/React.createElement("p", null, "A diagnosis touches everything \u2014 the heart on the monitor and the heart that hopes and fears are the very same heart. Over 30 days, this journal joins Scripture with the heart-health guidance cardiologists actually use (the AHA's Life's Essential 8 and the 2025 AHA/ACC Blood Pressure Guideline). Each day is one printable page: read a verse, reflect, take one small heart step, and write one honest line about surrendering your anxiety to Christ."), /*#__PURE__*/React.createElement("p", null, "Four gentle weeks \u2014 Be Still, Tend the Temple, Numbers in His Hands, and Walk It Out \u2014 plus a 30-day habit tracker and a \u201CMy Numbers\u201D log to fill in with your care team. It is not medical advice and never replaces your cardiology team; it walks beside them. A companion to Module A: The River (Heart Disease).")), /*#__PURE__*/React.createElement("button", {
    className: "res-toggle",
    type: "button",
    "aria-expanded": devotionalOpen,
    onClick: () => setDevotionalOpen(v => !v)
  }, devotionalOpen ? "Show less \u2191" : "Read more \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "res-get res-get-support",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'Heart and Soul Devotional'
    })
  }, "Support the mission \u2661"))), /*#__PURE__*/React.createElement("p", {
    className: "res-gift fade-up"
  }, "These journals are free to read here, with no sign-up. If one blessed you and you'd like to help us reach more families, you can support the work below \u2014 give whatever it's worth to you, or nothing at all. But please, never feel you have to. Take it, and be blessed."), /*#__PURE__*/React.createElement("div", {
    className: "res-print fade-up"
  }, /*#__PURE__*/React.createElement("p", {
    className: "res-print-lede"
  }, "Prefer a printed copy to hold, gift, or keep by the bedside? Paperback editions and printable downloads are available in our Store on Amazon and Etsy."), /*#__PURE__*/React.createElement("a", {
    className: "res-print-soon",
    href: "/shop.html",
    onClick: function () { track('Shop Link', { from: 'resources' }); }
  }, "Visit the Shop \xB7 Printables on Etsy, paperbacks on Amazon \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "support-card fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "support-tag"
  }, "Support the Mission"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "If this gave you something, help us give it to someone else"), /*#__PURE__*/React.createElement("p", null, "Many of our stories, journals, and the prayer companion are free to read here. If a page met you in a hard moment and you'd like to help us reach the next family, you can give whatever it's worth to you. Every bit goes straight back into making and sharing more."), /*#__PURE__*/React.createElement("a", {
    className: "support-btn",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'Journals Support Card'
    })
  }, "Support the Mission \u2661"), /*#__PURE__*/React.createElement("p", {
    className: "support-fine"
  }, "Give what you like, or nothing at all \u2014 you're welcome here either way."))), /*#__PURE__*/React.createElement(WordOfHope, null));
}

/* ---- essays hub (spoke) ---- */
function EssaysHub({
  onHome,
  onOpen
}) {
  const ref = useReveal();
  const essays = D.essays || [];
  return /*#__PURE__*/React.createElement("section", {
    className: "spoke-page essays-hub",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "spoke-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-link dark",
    onClick: onHome
  }, "\u2190 Home")), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "essays-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, "Essays \xB7 Faith & Medicine"), /*#__PURE__*/React.createElement("h1", {
    className: "display essays-title"
  }, "For the Journey"), /*#__PURE__*/React.createElement("p", {
    className: "essays-lede"
  }, "Honest, carefully sourced writing for the hard seasons \u2014 caregiving, fear, illness, and faith. The science is real, and so is the hope. You don't have to pick one.")), /*#__PURE__*/React.createElement("div", {
    className: "essays-list fade-up"
  }, essays.map(e => /*#__PURE__*/React.createElement("div", {
    className: "essay-card",
    key: e.slug,
    role: "button",
    tabIndex: 0,
    onClick: () => onOpen(e.slug),
    onKeyDown: ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        onOpen(e.slug);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "essay-card-tag"
  }, e.tag), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, e.title), /*#__PURE__*/React.createElement("p", {
    className: "essay-card-sub"
  }, e.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "essay-card-excerpt"
  }, e.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "essay-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "essay-card-time"
  }, e.readingTime), /*#__PURE__*/React.createElement("span", {
    className: "essay-card-link"
  }, "Read the essay \u2192")))))), /*#__PURE__*/React.createElement(WordOfHope, null));
}

/* ---- single essay page with in-page TOC (spoke) ---- */
function EssayPage({
  slug,
  onHome,
  onBack
}) {
  const ref = useReveal();
  const essay = (D.essays || []).find(e => e.slug === slug);
  const [active, setActive] = useState(essay && essay.sections[0] ? essay.sections[0].id : null);
  useEffect(() => {
    if (!essay) return;
    const ids = essay.sections.map(s => s.id);
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          setActive(en.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });
    ids.forEach(id => {
      const el = document.getElementById('sec-' + id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [slug]);
  if (!essay) {
    return /*#__PURE__*/React.createElement("section", {
      className: "spoke-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "spoke-back"
    }, /*#__PURE__*/React.createElement("button", {
      className: "home-link dark",
      onClick: onHome
    }, "\u2190 Home")), /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        padding: '80px 0'
      }
    }, /*#__PURE__*/React.createElement("p", null, "Essay not found.")));
  }
  const jump = id => {
    const el = document.getElementById('sec-' + id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "spoke-page essay-page",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "spoke-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-link dark",
    onClick: onBack
  }, "\u2190 All Essays"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link dark",
    onClick: onHome
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    className: "wrap essay-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "essay-header fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, essay.tag), /*#__PURE__*/React.createElement("h1", {
    className: "display essay-title"
  }, essay.title), /*#__PURE__*/React.createElement("p", {
    className: "essay-subtitle"
  }, essay.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "essay-meta"
  }, /*#__PURE__*/React.createElement("span", null, essay.readingTime), /*#__PURE__*/React.createElement("span", {
    className: "essay-meta-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "David")), essay.epigraph && /*#__PURE__*/React.createElement("blockquote", {
    className: "essay-epigraph"
  }, essay.epigraph.quote, /*#__PURE__*/React.createElement("cite", null, essay.epigraph.cite))), /*#__PURE__*/React.createElement("div", {
    className: "essay-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "essay-toc",
    "aria-label": "On this page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "essay-toc-label"
  }, "On this page"), /*#__PURE__*/React.createElement("ul", null, essay.sections.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, /*#__PURE__*/React.createElement("button", {
    className: active === s.id ? 'toc-active' : '',
    onClick: () => jump(s.id)
  }, s.toc))))), /*#__PURE__*/React.createElement("article", {
    className: "essay-body"
  }, essay.sections.map(s => /*#__PURE__*/React.createElement("div", {
    className: "essay-section fade-up",
    id: 'sec-' + s.id,
    key: s.id,
    dangerouslySetInnerHTML: {
      __html: s.html
    }
  })), essay.footnote && /*#__PURE__*/React.createElement("p", {
    className: "essay-footnote"
  }, essay.footnote), /*#__PURE__*/React.createElement("div", {
    className: "essay-cta fade-up"
  }, /*#__PURE__*/React.createElement("p", {
    className: "essay-cta-lede"
  }, "If this met you where you are, there are free guided journals for the hard seasons \u2014 including one for grief."), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => onHome()
  }, "Explore the free journals \u2192"))))), /*#__PURE__*/React.createElement(WordOfHope, null));
}

/* ---- our testimony page ---- */
function Testimony({
  onHome
}) {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "testimony-page",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimony-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-link dark",
    onClick: onHome
  }, "\u2190 All Modules")), /*#__PURE__*/React.createElement("div", {
    className: "wrap tp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tp-head fade-up"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tp-logo",
    src: "assets/wml_icon.png",
    alt: "Wonderfully Made Labs cross-and-crown emblem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, "Our Testimony \xB7 Why we exist"), /*#__PURE__*/React.createElement("h1", {
    className: "display tp-title"
  }, "A River, and the One Who Made It Flow Again"), /*#__PURE__*/React.createElement("blockquote", {
    className: "tp-epigraph"
  }, "\u201CBut may the God of all grace, who called you to his eternal glory by Christ Jesus, after you have suffered a little while, perfect, establish, strengthen, and settle you.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 1 Peter 5:10 (WEBU)"))), /*#__PURE__*/React.createElement("div", {
    className: "tp-body fade-up"
  }, /*#__PURE__*/React.createElement("p", null, "For most of my life, I looked like a man who had it together. Over twenty years as a molecular pathologist, a marriage, children, a career built on my own two hands. But underneath, I carried an anxiety I could never quite name, and a quiet pride that kept God at arm's length. I grew up in the church \u2014 I had the foundation \u2014 but somewhere along the way I decided I could do life on my own. And I did. It just cost me more than I understood at the time."), /*#__PURE__*/React.createElement("p", null, "When my father passed \u2014 while I was away at a heart conference, of all places \u2014 something in me went quiet. I did what I always did: squared my shoulders and pushed on. But you can only outrun your own heart for so long. Mine finally caught up with me in a hospital, with symptoms I spent my whole career studying in other people. I was scared, and for once I couldn't fix it myself."), /*#__PURE__*/React.createElement("p", null, "Beside me was a colleague \u2014 a good man, a believer \u2014 who did a simple thing. He picked up my phone, put a Bible on it, and asked me to read the Gospel of John that night. Back in the hotel room, I opened it. I'd read John many times before. But this time I couldn't get past the first few verses before I was on my knees. I didn't see anything. I didn't hear anything. What I felt was a peace I had never known in my life \u2014 no judgment, only love. I came to Him with empty hands, and He gave me everything. That night, the man who had to carry it all finally got to set it down."), /*#__PURE__*/React.createElement("p", null, "I won't pretend every day since has been easy. I still have hard ones. The difference is that I don't face them alone anymore \u2014 I bring them to Him, and He carries what I can't. And I've come to see what my wife has seen all along: God's fingerprints on truly everything, from the galaxies down to a single cell dividing under a microscope. We really are fearfully and wonderfully made. I have never been more grateful for anything in my life, and I want that same hope for you more than I know how to say."), /*#__PURE__*/React.createElement("p", null, "That's the only reason this exists. I'm not speaking to you from the outside \u2014 I've known the fear and the grief, and I've struggled to hold faith and science in the same two hands. So to anyone who thinks they have to choose between God and science: you don't. God is the science. I count it one of the great honors of my life that I got to study His work up close. Wonderfully Made Labs is for the families living what I lived \u2014 frightened, worn down, and quietly hoping for something both true and kind. None of this is about me. The glory is His. I'm just here to walk alongside you, and to let the wonder of how you're made point you home to the One who made you.")), /*#__PURE__*/React.createElement("blockquote", {
    className: "tp-pull fade-up"
  }, "\u201CI died with my old self, and I was made new. Praise God in the highest.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 Molecular pathologist, husband, and the one writing these stories")), /*#__PURE__*/React.createElement("div", {
    className: "tp-foot fade-up"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onHome
  }, "\u2190 Back to all modules"))));
}

/* ---- gate ---- */
function Gate({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "gate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, "Wonderfully Made Labs \xB7 Studying His Creation"), /*#__PURE__*/React.createElement("p", {
    className: "verse"
  }, "\u201CI will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful.\u201D \u2014 from Psalm 139:14 (WEBU)"), /*#__PURE__*/React.createElement("h1", {
    className: "display"
  }, "The River That Forgot How to Flow"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Solve a real medical mystery the way scientists and doctors do. One river. One disease \u2014 coronary heart disease. Three depths of understanding. Choose where you'd like to begin."), /*#__PURE__*/React.createElement("div", {
    className: "tier-cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tier-card",
    role: "button",
    tabIndex: 0,
    onClick: () => onPick('explorer'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPick('explorer');
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "age"
  }, "Ages 8\u201313"), /*#__PURE__*/React.createElement("h3", null, "Explorer"), /*#__PURE__*/React.createElement("p", null, "Story-first and wonder-first. Big ideas in friendly words \u2014 perfect for younger learners and families."), /*#__PURE__*/React.createElement("span", {
    className: "pick"
  }, "Begin as an Explorer \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "tier-card",
    role: "button",
    tabIndex: 0,
    onClick: () => onPick('scholar'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPick('scholar');
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "age"
  }, "High school"), /*#__PURE__*/React.createElement("h3", null, "Scholar"), /*#__PURE__*/React.createElement("p", null, "The real science, named plainly: endothelium, LDL, shear stress, plaque, and how a heart attack happens."), /*#__PURE__*/React.createElement("span", {
    className: "pick"
  }, "Begin as a Scholar \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "tier-card",
    role: "button",
    tabIndex: 0,
    onClick: () => onPick('researcher'),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPick('researcher');
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "age"
  }, "Pre-med \xB7 College"), /*#__PURE__*/React.createElement("h3", null, "Researcher"), /*#__PURE__*/React.createElement("p", null, "Full mechanism, molecules, and landmark trials \u2014 written for future physicians and scientists."), /*#__PURE__*/React.createElement("span", {
    className: "pick"
  }, "Begin as a Researcher \u2192"))), /*#__PURE__*/React.createElement("p", {
    className: "switch-note"
  }, "You can switch depth anytime \u2014 the story stays the same, the science gets deeper."));
}

/* ---- a story beat ---- */
function Beat({
  beat,
  tier
}) {
  const ref = useReveal();
  const _rawImg = beat.img && typeof beat.img === 'object' ? beat.img[tier] || beat.img.explorer : beat.img;
  const imgSrc = _rawImg ? _rawImg + '?v=20260613e' : _rawImg;
  return /*#__PURE__*/React.createElement("section", {
    className: "beat" + (beat.flip ? " flip" : ""),
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap beat-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "beat-art fade-up"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: beat.titles[tier],
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "frame"
  })), /*#__PURE__*/React.createElement("div", {
    className: "beat-text fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "beat-num"
  }, beat.n), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, beat.titles[tier]), /*#__PURE__*/React.createElement("p", {
    className: "body " + tier,
    dangerouslySetInnerHTML: {
      __html: beat.text[tier]
    }
  }), beat.cite && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement(Cite, {
    c: beat.cite
  })), beat.teach && /*#__PURE__*/React.createElement("div", {
    className: "teach",
    dangerouslySetInnerHTML: {
      __html: beat.teach
    }
  }))));
}

/* ---- discovery game ---- */
function Game() {
  const ref = useReveal();
  const [chosen, setChosen] = useState(null);
  const q = D.quiz;
  return /*#__PURE__*/React.createElement("section", {
    className: "game",
    ref: ref,
    id: "game"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "The Discovery Game"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "What Is This River Telling Us?"), /*#__PURE__*/React.createElement("p", null, "The game is the scientific method in disguise. Real scientists observe, compare, test a model, and confirm \u2014 and so do you.")), /*#__PURE__*/React.createElement("div", {
    className: "steps fade-up"
  }, D.gameSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step-chip",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))), /*#__PURE__*/React.createElement("div", {
    className: "quiz fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, q.q), /*#__PURE__*/React.createElement("div", {
    className: "qsub"
  }, q.sub), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, q.options.map((o, i) => {
    let cls = "opt";
    if (chosen !== null) {
      if (o.correct) cls += " correct";else if (i === chosen) cls += " wrong";
    }
    return /*#__PURE__*/React.createElement("button", {
      className: cls,
      key: i,
      onClick: () => setChosen(i)
    }, o.t, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, o.sub));
  })), chosen !== null && /*#__PURE__*/React.createElement("div", {
    className: "verdict " + (q.options[chosen].correct ? "ok" : "no"),
    dangerouslySetInnerHTML: {
      __html: q.options[chosen].verdict
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "game-cta fade-up",
    style: {
      marginTop: '34px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      color: '#3a3226',
      fontSize: '1.02rem'
    }
  }, "Want to crack the whole case yourself? Play the full interactive mystery \u2014 gather every clue, listen to the heartbeat, and make the diagnosis."), /*#__PURE__*/React.createElement("a", {
    href: "/river-detective.html",
    className: "btn-game",
    style: {
      display: 'inline-block',
      background: '#e8b04b',
      color: '#23344a',
      fontWeight: 600,
      textDecoration: 'none',
      padding: '14px 30px',
      borderRadius: '999px',
      fontSize: '1.04rem',
      boxShadow: '0 6px 20px rgba(232,176,75,.4)'
    }
  }, "\uD83D\uDD0E Play River Detective \u2192"))));
}

/* ---- careers ---- */
function Careers() {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "beat",
    ref: ref,
    id: "careers",
    style: {
      paddingTop: '90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "The Calling"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Each Friend Found a Purpose"), /*#__PURE__*/React.createElement("p", null, "No one solved it alone. Four ways of thinking, four real careers \u2014 and a learner can see themselves in any one.")), /*#__PURE__*/React.createElement("div", {
    className: "careers-grid"
  }, D.careers.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "career fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    src: c.avatar,
    alt: c.name,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, c.role), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, c.name), /*#__PURE__*/React.createElement("p", null, c.who), /*#__PURE__*/React.createElement("p", {
    className: "real"
  }, /*#__PURE__*/React.createElement("b", null, "In real life:"), " ", c.real, " ", /*#__PURE__*/React.createElement(Cite, {
    c: c.cite
  }))))))));
}

/* ---- treatments ---- */
function Treatments() {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "beat treat-band",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Solving the Problem"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "How the River Gets Flowing Again"), /*#__PURE__*/React.createElement("p", null, "Every rescue maps to a real treatment. Each metaphor is a doorway into actual medicine.")), /*#__PURE__*/React.createElement("div", {
    className: "treat-grid"
  }, D.treatments.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "treat fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, t.meta), /*#__PURE__*/React.createElement("div", {
    className: "real"
  }, t.real), /*#__PURE__*/React.createElement("p", null, t.p))))));
}

/* ---- defenses / faith ---- */
function Defenses() {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "beat defenses",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "The Wonderful Design"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "The River Defends Itself"), /*#__PURE__*/React.createElement("p", null, "Before any doctor arrives, the body is already fighting back \u2014 with defenses built into its very design.")), /*#__PURE__*/React.createElement("div", {
    className: "def-grid"
  }, D.defenses.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "def fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, d.ic), /*#__PURE__*/React.createElement("h4", null, d.h), /*#__PURE__*/React.createElement("div", {
    className: "role",
    style: {
      color: 'var(--gold-deep)',
      fontFamily: 'var(--font-alt)',
      fontWeight: 600,
      fontSize: '.82rem',
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      marginBottom: '6px'
    }
  }, d.real), /*#__PURE__*/React.createElement("p", null, d.p))))));
}

/* ---- top bar + progress ---- */
function TopBar({
  tier,
  setTier,
  onHome,
  onTestimony
}) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? window.scrollY / h * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      width: w + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand brand-clickable",
    onClick: onHome,
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onHome && onHome();
      }
    },
    title: "Back to all modules"
  }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"), /*#__PURE__*/React.createElement("div", {
    className: "topbar-right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "/river-detective.html",
    style: { textDecoration: 'none' }
  }, "\uD83D\uDD0E Play the Game"), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: onTestimony
  }, "Our Testimony"), /*#__PURE__*/React.createElement("div", {
    className: "tier-switch",
    role: "tablist",
    "aria-label": "Reading level"
  }, Object.keys(D.tiers).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: tier === k ? "active" : "",
    onClick: () => setTier(k)
  }, D.tiers[k].label))))));
}

/* ---- scroll-depth tracking (fires Plausible events at 25/50/75/100%) ---- */
function useScrollDepth(view) {
  useEffect(() => {
    const fired = {};
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return;
      const pct = window.scrollY / h * 100;
      [25, 50, 75, 100].forEach(m => {
        if (pct >= m && !fired[m]) {
          fired[m] = true;
          track('Scroll Depth', {
            depth: m + '%',
            page: view
          });
        }
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [view]);
}

/* ---- app ---- */
function App() {
  const initialView = typeof window !== 'undefined' && (window.location.hash === '#adult' || window.location.hash === '#story' || window.location.hash === '#story2' || window.location.hash === '#testimony' || window.location.hash === '#essays' || window.location.hash === '#journals' || window.location.hash === '#patient' || window.location.hash === '#cancer' || window.location.hash === '#story4' || window.location.hash === '#story3') ? window.location.hash.slice(1) : 'home';
  const [view, setView] = useState(initialView); // 'home' | 'story' | 'adult' | 'testimony' | 'journals' | 'essays' | 'essay'
  /* Header menu links (e.g. /learn/#essays) switch views without a reload */
  useEffect(() => {
    const VIEWS = ['adult', 'story', 'story2', 'story3', 'story4', 'testimony', 'essays', 'journals', 'patient', 'cancer'];
    const onHash = () => {
      const h = window.location.hash.slice(1);
      if (VIEWS.indexOf(h) > -1) { setView(h); setTier(null); setEssaySlug(null); window.scrollTo({ top: 0, behavior: 'instant' }); }
      else if (!h) { setView('home'); setTier(null); setEssaySlug(null); }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const [tier, setTier] = useState(null);
  const [essaySlug, setEssaySlug] = useState(null);
  useScrollDepth(view + (essaySlug ? ':' + essaySlug : ''));

  // fire a Plausible pageview-style event whenever the in-app view changes
  useEffect(() => {
    track('View', {
      page: view + (essaySlug ? ':' + essaySlug : '')
    });
  }, [view, essaySlug]);
  const goHome = () => {
    setView('home');
    setTier(null);
    setEssaySlug(null);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const choose = v => {
    setView(v);
    if (v === 'story') {
      setTier(null);
    }
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const openEssay = slug => {
    setEssaySlug(slug);
    setView('essay');
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const start = t => {
    setTier(t);
    requestAnimationFrame(() => window.scrollTo({
      top: window.innerHeight * 0.0,
      behavior: 'instant'
    }));
    setTimeout(() => {
      document.getElementById('story')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 60);
  };
  if (view === 'home') {
    return /*#__PURE__*/React.createElement(Home, {
      onChoose: choose,
      onTestimony: () => choose('testimony')
    });
  }
  if (view === 'testimony') {
    return /*#__PURE__*/React.createElement(Testimony, {
      onHome: goHome
    });
  }
  if (view === 'journals') {
    return /*#__PURE__*/React.createElement(Journals, {
      onHome: goHome
    });
  }
  if (view === 'essays') {
    return /*#__PURE__*/React.createElement(EssaysHub, {
      onHome: goHome,
      onOpen: openEssay
    });
  }
  if (view === 'essay') {
    return /*#__PURE__*/React.createElement(EssayPage, {
      slug: essaySlug,
      onHome: goHome,
      onBack: () => choose('essays')
    });
  }
  if (view === 'adult') {
    return /*#__PURE__*/React.createElement(AdultModule, {
      onHome: goHome,
      onTestimony: () => choose('testimony')
    });
  }
  if (view === 'patient') {
    return /*#__PURE__*/React.createElement(window.PatientModule, {
      onHome: goHome
    });
  }
  if (view === 'cancer') {
    return /*#__PURE__*/React.createElement(window.CancerCompanion, {
      onHome: goHome
    });
  }
  if (view === 'story2') {
    return /*#__PURE__*/React.createElement(window.StoryModule2, {
      onHome: goHome,
      onTestimony: () => choose('testimony')
    });
  }
  if (view === 'story3') {
    return /*#__PURE__*/React.createElement(window.StoryModule3, {
      onHome: goHome,
      onTestimony: () => choose('testimony')
    });
  }
  if (view === 'story4') {
    return /*#__PURE__*/React.createElement(window.StoryModule4, {
      onHome: goHome,
      onTestimony: () => choose('testimony')
    });
  }

  // story view
  if (!tier) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "story-back"
    }, /*#__PURE__*/React.createElement("button", {
      className: "home-link dark",
      onClick: goHome
    }, "\u2190 All Modules"), /*#__PURE__*/React.createElement("button", {
      className: "nav-link dark",
      onClick: () => choose('testimony')
    }, "Our Testimony")), /*#__PURE__*/React.createElement(Gate, {
      onPick: start
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    tier: tier,
    setTier: setTier,
    onHome: goHome,
    onTestimony: () => choose('testimony')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '62px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "story"
  }, D.beats.map((b, i) => /*#__PURE__*/React.createElement(Beat, {
    key: i + tier,
    beat: b,
    tier: tier
  }))), /*#__PURE__*/React.createElement(Game, null), /*#__PURE__*/React.createElement(Careers, null), /*#__PURE__*/React.createElement(Treatments, null), /*#__PURE__*/React.createElement(Defenses, null), /*#__PURE__*/React.createElement("section", {
    className: "close"
  }, /*#__PURE__*/React.createElement("p", {
    className: "verse"
  }, "\u201CTo study His creation is to honor the One who made it.\u201D"), /*#__PURE__*/React.createElement("p", null, "The body was designed with defenses, redundancy, and the capacity to heal. The work of the scientist and the physician is to come alongside that design and help it. That is the calling this series exists to inspire."), /*#__PURE__*/React.createElement("p", null, "And yet every river runs to the sea. The most wonderfully made body still wears out one day \u2014 that is true for all of us. The deepest hope this story points to isn't a perfect heart, but the One who overcame death, so that we need not fear it. To study His creation is to honor the Maker; to know Him is to be made new."), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, "Back to the beginning"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-keepsake",
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginLeft: '12px'
    },
    onClick: () => track('Support Click', {
      source: 'River Story Close'
    })
  }, "Support the mission \u2661")), /*#__PURE__*/React.createElement(WordOfHope, null), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"), /*#__PURE__*/React.createElement("div", null, "Studying His Creation \u2014 wonder first, faith stated plainly, never preachy. All glory to God."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      opacity: .8
    }
  }, "Books on Amazon. Printables on ", /*#__PURE__*/React.createElement("a", {
    href: ETSY_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Etsy"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      opacity: .8
    }
  }, "Original character art hand-painted by Cher."), /*#__PURE__*/React.createElement("div", {
    className: "footer-connect",
    style: {
      marginTop: '18px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 18px',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85,
      fontWeight: 600
    }
  }, "Walk with us:"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@WonderfullyMadeLabs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "YouTube"), /*#__PURE__*/React.createElement("a", {
    href: "https://inhisglorypsalms13914.substack.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Substack"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/wonderfullymadelabs/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.tiktok.com/@wonderfullymadelabs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "TikTok"), /*#__PURE__*/React.createElement("a", {
    href: SUPPORT_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => track('Support Click', {
      source: 'Footer'
    })
  }, "Support the mission \u2661")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://inhisglorypsalms13914.substack.com/subscribe",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontWeight: 700
    }
  }, "\u2709 Get new stories by email \u2014 subscribe free")), /*#__PURE__*/React.createElement("p", {
    className: "src"
  }, "Science drawn from peer-reviewed and clinical sources including Circulation, AHA/ATVB, the European Heart Journal, NEJM/CANTOS, the Cleveland Clinic, and the 2026 ACC/AHA lipid guideline. This experience is educational and is not medical advice.")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));