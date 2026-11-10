// Wonderfully Made Labs — Module 4 renderer: "The Worker Who Forgot the Rule" (cancer biology)
// Self-contained compiled React component. Reads window.WML4. Cloned from module3.js with all
// IIFE-internal helpers suffixed _4 and the data source set to window.WML4 so nothing collides
// with app.js or the other modules. Reuses Module-1 CSS classes.

(function () {
  const { useState, useEffect, useRef } = React;
  const D4 = window.WML4;

  /* ---- brand logo ---- */
  function Logo4() {
    return /*#__PURE__*/React.createElement("img", {
      className: "brand-mark",
      src: "assets/wml_icon.png",
      alt: "Wonderfully Made Labs"
    });
  }

  function Cite4({ c }) {
    if (!c) return null;
    return /*#__PURE__*/React.createElement("a", {
      className: "cite",
      href: c.u,
      target: "_blank",
      rel: "noopener"
    }, c.t, " \u2197");
  }

  /* ---- scroll reveal hook ---- */
  function useReveal4() {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: .18 });
      el.querySelectorAll('.fade-up').forEach(n => io.observe(n));
      return () => io.disconnect();
    }, []);
    return ref;
  }

  /* ---- analytics helper ---- */
  function track4(name, props) {
    try {
      if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
        window.plausible(name, props ? { props } : undefined);
      }
    } catch (e) {}
  }

  /* ---- a word of hope (shared invitation, closed by default) ---- */
  function WordOfHope4() {
    const [open, setOpen] = useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "hope-band"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap hope-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow hope-eyebrow"
    }, "A Word of Hope \xB7 For anyone who wants it"),
      /*#__PURE__*/React.createElement("h2", { className: "display hope-title" },
        "There is a hope no clinic can put on the wall."),
      /*#__PURE__*/React.createElement("p", { className: "hope-lede" },
        "I've spent my life studying disease, and one thing I know is true: we will all get sick, and one day every body wears out. I'm not here to frighten you with that \u2014 I'm here because I found a hope that outlasts it. Not by being strong. By being held."),
      !open && /*#__PURE__*/React.createElement("button", {
        className: "btn hope-open",
        onClick: () => { setOpen(true); track4('Hope Opened', { module: 'cancer' }); }
      }, "I'd like to know more \u2192"),
      open && /*#__PURE__*/React.createElement("div", { className: "hope-more" },
        /*#__PURE__*/React.createElement("p", null, "For most of my life I kept God at arm's length \u2014 through pride, through anger, through the belief that I'd built my success on my own. The turning point came in a hospital, with heart and stroke symptoms, when a friend asked me to read the Gospel of John. Back in the hotel room I opened it, and before I got through the first few verses I was on my knees. I didn't see or hear anything. But I felt a peace I had never known \u2014 no judgment, only love. I went to the Lord with nothing, and He gave me everything. My old self died, and I was made new."),
        /*#__PURE__*/React.createElement("blockquote", { className: "hope-verse" }, "\u201CFor God so loved the world, that he gave his only born Son, that whoever believes in him should not perish, but have eternal life.\u201D", /*#__PURE__*/React.createElement("cite", null, "\u2014 John 3:16 (WEBU)")),
        /*#__PURE__*/React.createElement("p", null, "That is the gift on offer to you, too \u2014 eternal life, freely given by grace, not earned. If something in you is stirring tonight, you don't have to clean yourself up first, and you don't have to have the right words. You can simply turn to Him."),
        /*#__PURE__*/React.createElement("div", { className: "hope-steps" },
          /*#__PURE__*/React.createElement("h3", { className: "display" }, "If you want to take a step"),
          /*#__PURE__*/React.createElement("ol", null,
            /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Be honest with God."), " Tell Him where you really are \u2014 the fear, the failure, all of it. He already knows, and He loves you."),
            /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Ask Jesus to be your Lord and Savior."), " Believe that He died for you and rose again, and ask Him to forgive you and make you new."),
            /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Read the Gospel of John."), " Start where I started. Read it slowly, and ask God to meet you in it."),
            /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Don't walk it alone."), " Find a Bible-believing church or a Christian friend who can walk with you."))),
        /*#__PURE__*/React.createElement("div", { className: "hope-prayer" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "A prayer, if you'd like the words"),
          /*#__PURE__*/React.createElement("p", null, "\u201CLord Jesus, I can't carry this alone, and I don't want to anymore. I believe You died for me and rose again. Forgive me. Be my Lord and my Savior. Make me new, and walk with me from here. Amen.\u201D")),
        /*#__PURE__*/React.createElement("p", { className: "hope-close" }, "If you prayed that, and meant it \u2014 welcome. You are not alone, and you never were. I'd love to know; reach me any time, and please find a church family near you. To God be the glory."),
        /*#__PURE__*/React.createElement("button", { className: "btn-ghost hope-collapse", onClick: () => setOpen(false) }, "Show less \u2191"))));
  }

  /* ---- gate / tier picker ---- */
  function Gate4({ onPick }) {
    return /*#__PURE__*/React.createElement("section", { className: "gate" },
      /*#__PURE__*/React.createElement("div", { className: "series-tag eyebrow" }, "Wonderfully Made Labs \xB7 Studying His Creation"),
      /*#__PURE__*/React.createElement("p", { className: "verse" }, "\u201CI will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful.\u201D \u2014 from Psalm 139:14 (WEBU)"),
      /*#__PURE__*/React.createElement("h1", { className: "display" }, "The Worker Who Forgot the Rule"),
      /*#__PURE__*/React.createElement("p", { className: "lede" }, "Solve a real medical mystery the way scientists and doctors do. One question \u2014 what is cancer, really? The answer is a story about a body so wonderfully made that billions of tiny workers follow the rules perfectly every day \u2014 and what rarely happens when one worker's rule book gets a smudge no one caused. It is never a punishment, and never anyone's fault. Three depths of understanding. Choose where you'd like to begin."),
      /*#__PURE__*/React.createElement("div", { className: "tier-cards" },
        /*#__PURE__*/React.createElement("div", {
          className: "tier-card", role: "button", tabIndex: 0,
          onClick: () => onPick('explorer'),
          onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick('explorer'); } }
        }, /*#__PURE__*/React.createElement("span", { className: "age" }, "Ages 8\u201313"),
          /*#__PURE__*/React.createElement("h3", null, "Explorer"),
          /*#__PURE__*/React.createElement("p", null, "Story-first and wonder-first. Big ideas in friendly words \u2014 perfect for younger learners and families."),
          /*#__PURE__*/React.createElement("span", { className: "pick" }, "Begin as an Explorer \u2192")),
        /*#__PURE__*/React.createElement("div", {
          className: "tier-card", role: "button", tabIndex: 0,
          onClick: () => onPick('scholar'),
          onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick('scholar'); } }
        }, /*#__PURE__*/React.createElement("span", { className: "age" }, "High school"),
          /*#__PURE__*/React.createElement("h3", null, "Scholar"),
          /*#__PURE__*/React.createElement("p", null, "The real science, named plainly: how healthy cells follow the rules, what a mutation actually is, and how the body's guards \u2014 and human doctors \u2014 fight cancer."),
          /*#__PURE__*/React.createElement("span", { className: "pick" }, "Begin as a Scholar \u2192")),
        /*#__PURE__*/React.createElement("div", {
          className: "tier-card", role: "button", tabIndex: 0,
          onClick: () => onPick('researcher'),
          onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick('researcher'); } }
        }, /*#__PURE__*/React.createElement("span", { className: "age" }, "Pre-med \xB7 College"),
          /*#__PURE__*/React.createElement("h3", null, "Researcher"),
          /*#__PURE__*/React.createElement("p", null, "Full mechanism, molecules, and the hallmarks-of-cancer framework on an NCI and peer-reviewed backbone \u2014 written for future physicians and scientists."),
          /*#__PURE__*/React.createElement("span", { className: "pick" }, "Begin as a Researcher \u2192"))),
      /*#__PURE__*/React.createElement("p", { className: "switch-note" }, "You can switch depth anytime \u2014 the story stays the same, the science gets deeper."));
  }

  /* ---- a story beat ---- */
  function Beat4({ beat, tier }) {
    const ref = useReveal4();
    const imgSrc = beat.img && typeof beat.img === 'object' ? (beat.img[tier] || beat.img.explorer) : beat.img;
    return /*#__PURE__*/React.createElement("section", {
      className: "beat" + (beat.flip ? " flip" : ""), ref: ref
    }, /*#__PURE__*/React.createElement("div", { className: "wrap beat-inner" },
      /*#__PURE__*/React.createElement("div", { className: "beat-art fade-up" },
        /*#__PURE__*/React.createElement("img", { src: imgSrc, alt: beat.titles[tier], loading: "lazy" }),
        /*#__PURE__*/React.createElement("span", { className: "frame" })),
      /*#__PURE__*/React.createElement("div", { className: "beat-text fade-up" },
        /*#__PURE__*/React.createElement("div", { className: "beat-num" }, beat.n),
        /*#__PURE__*/React.createElement("h2", { className: "display" }, beat.titles[tier]),
        /*#__PURE__*/React.createElement("p", { className: "body " + tier, dangerouslySetInnerHTML: { __html: beat.text[tier] } }),
        beat.cite && /*#__PURE__*/React.createElement("p", { style: { marginTop: '10px' } }, /*#__PURE__*/React.createElement(Cite4, { c: beat.cite })),
        beat.teach && /*#__PURE__*/React.createElement("div", { className: "teach", dangerouslySetInnerHTML: { __html: beat.teach } }))));
  }

  /* ---- discovery game ---- */
  function Game4() {
    const ref = useReveal4();
    const [chosen, setChosen] = useState(null);
    const q = D4.quiz;
    return /*#__PURE__*/React.createElement("section", { className: "game", ref: ref, id: "game" },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Discovery Game"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "How Do We Know What Cancer Really Is?"),
          /*#__PURE__*/React.createElement("p", null, "The game is the scientific method in disguise. Real scientists observe, compare, test a model, and confirm \u2014 and so do you.")),
        /*#__PURE__*/React.createElement("div", { className: "steps fade-up" },
          D4.gameSteps.map((s, i) => /*#__PURE__*/React.createElement("div", { className: "step-chip", key: i },
            /*#__PURE__*/React.createElement("span", { className: "n" }, s.n),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("h4", null, s.h),
              /*#__PURE__*/React.createElement("p", null, s.p))))),
        /*#__PURE__*/React.createElement("div", { className: "quiz fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "q" }, q.q),
          /*#__PURE__*/React.createElement("div", { className: "qsub" }, q.sub),
          /*#__PURE__*/React.createElement("div", { className: "opts" },
            q.options.map((o, i) => {
              let cls = "opt";
              if (chosen !== null) { if (o.correct) cls += " correct"; else if (i === chosen) cls += " wrong"; }
              return /*#__PURE__*/React.createElement("button", { className: cls, key: i, onClick: () => setChosen(i) },
                o.t, /*#__PURE__*/React.createElement("span", { className: "tag" }, o.sub));
            })),
          chosen !== null && /*#__PURE__*/React.createElement("div", {
            className: "verdict " + (q.options[chosen].correct ? "ok" : "no"),
            dangerouslySetInnerHTML: { __html: q.options[chosen].verdict }
          }))));
  }

  /* ---- careers ---- */
  function Careers4() {
    const ref = useReveal4();
    return /*#__PURE__*/React.createElement("section", { className: "beat", ref: ref, id: "careers", style: { paddingTop: '90px' } },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Calling"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "Each Friend Found a Purpose"),
          /*#__PURE__*/React.createElement("p", null, "No one solved it alone. Three ways of thinking, three real careers \u2014 and a learner can see themselves in any one.")),
        /*#__PURE__*/React.createElement("div", { className: "careers-grid" },
          D4.careers.map((c, i) => /*#__PURE__*/React.createElement("div", { className: "career fade-up", key: i },
            /*#__PURE__*/React.createElement("img", { className: "avatar", src: c.avatar, alt: c.name, loading: "lazy" }),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", { className: "role" }, c.role),
              /*#__PURE__*/React.createElement("h3", { className: "display" }, c.name),
              /*#__PURE__*/React.createElement("p", null, c.who),
              /*#__PURE__*/React.createElement("p", { className: "real" },
                /*#__PURE__*/React.createElement("b", null, "In real life:"), " ", c.real, " ",
                /*#__PURE__*/React.createElement(Cite4, { c: c.cite }))))))));
  }

  /* ---- treatments ---- */
  function Treatments4() {
    const ref = useReveal4();
    return /*#__PURE__*/React.createElement("section", { className: "beat treat-band", ref: ref },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "Solving the Problem"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "How Doctors Come Alongside the Body"),
          /*#__PURE__*/React.createElement("p", null, "Every story-name maps to real, modern cancer medicine. Each one is a doorway into how treatment actually works \u2014 always alongside the body's own defenses.")),
        /*#__PURE__*/React.createElement("div", { className: "treat-grid" },
          D4.treatments.map((t, i) => /*#__PURE__*/React.createElement("div", { className: "treat fade-up", key: i },
            /*#__PURE__*/React.createElement("div", { className: "meta" }, t.meta),
            /*#__PURE__*/React.createElement("div", { className: "real" }, t.real),
            /*#__PURE__*/React.createElement("p", null, t.p))))));
  }

  /* ---- defenses / faith ---- */
  function Defenses4() {
    const ref = useReveal4();
    return /*#__PURE__*/React.createElement("section", { className: "beat defenses", ref: ref },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Wonderful Design"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "The Guards Built Into Every Body"),
          /*#__PURE__*/React.createElement("p", null, "Layers of protection woven right into your cells \u2014 proofreaders, a guardian, and hunters that stop most threats before we ever know, built in by design, before any doctor arrives.")),
        /*#__PURE__*/React.createElement("div", { className: "def-grid" },
          D4.defenses.map((d, i) => /*#__PURE__*/React.createElement("div", { className: "def fade-up", key: i },
            /*#__PURE__*/React.createElement("div", { className: "ic" }, d.ic),
            /*#__PURE__*/React.createElement("h4", null, d.h),
            /*#__PURE__*/React.createElement("div", {
              className: "role",
              style: { color: 'var(--gold-deep)', fontFamily: 'var(--font-alt)', fontWeight: 600, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }
            }, d.real),
            /*#__PURE__*/React.createElement("p", null, d.p))))));
  }

  /* ---- top bar + progress ---- */
  function TopBar4({ tier, setTier, onHome, onTestimony }) {
    const [w, setW] = useState(0);
    useEffect(() => {
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setW(h > 0 ? window.scrollY / h * 100 : 0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement("div", { className: "progress", style: { width: w + '%' } }),
      /*#__PURE__*/React.createElement("div", { className: "topbar" },
        /*#__PURE__*/React.createElement("div", {
          className: "brand brand-clickable", onClick: onHome, role: "button", tabIndex: 0,
          onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onHome && onHome(); } },
          title: "Back to all modules"
        }, /*#__PURE__*/React.createElement(Logo4, null), " Wonderfully Made Labs"),
        /*#__PURE__*/React.createElement("div", { className: "topbar-right" },
          onTestimony && /*#__PURE__*/React.createElement("button", { className: "nav-link", onClick: onTestimony }, "Our Testimony"),
          /*#__PURE__*/React.createElement("div", { className: "tier-switch", role: "tablist", "aria-label": "Reading level" },
            Object.keys(D4.tiers).map(k => /*#__PURE__*/React.createElement("button", {
              key: k, className: tier === k ? "active" : "", onClick: () => setTier(k)
            }, D4.tiers[k].label))))));
  }

  /* ---- scroll-depth tracking ---- */
  function useScrollDepth4(view) {
    useEffect(() => {
      const fired = {};
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (h <= 0) return;
        const pct = window.scrollY / h * 100;
        [25, 50, 75, 100].forEach(m => {
          if (pct >= m && !fired[m]) { fired[m] = true; track4('Scroll Depth', { depth: m + '%', page: view }); }
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [view]);
  }

  /* ---- the module component (top-level view) ---- */
  function StoryModule4({ onHome, onTestimony }) {
    const [tier, setTier] = useState(null);
    useScrollDepth4('story4' + (tier ? ':' + tier : ''));
    useEffect(() => { track4('View', { page: 'story4' + (tier ? ':' + tier : '') }); }, [tier]);

    const start = t => {
      setTier(t);
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      setTimeout(() => { document.getElementById('story4')?.scrollIntoView({ behavior: 'smooth' }); }, 60);
    };

    if (!tier) {
      return /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { className: "story-back" },
          /*#__PURE__*/React.createElement("button", { className: "home-link dark", onClick: onHome }, "\u2190 All Modules"),
          onTestimony && /*#__PURE__*/React.createElement("button", { className: "nav-link dark", onClick: onTestimony }, "Our Testimony")),
        /*#__PURE__*/React.createElement(Gate4, { onPick: start }));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement(TopBar4, { tier: tier, setTier: setTier, onHome: onHome, onTestimony: onTestimony }),
      /*#__PURE__*/React.createElement("div", { style: { height: '62px' } }),
      /*#__PURE__*/React.createElement("div", { id: "story4" },
        D4.beats.map((b, i) => /*#__PURE__*/React.createElement(Beat4, { key: i + tier, beat: b, tier: tier }))),
      /*#__PURE__*/React.createElement(Game4, null),
      /*#__PURE__*/React.createElement(Careers4, null),
      /*#__PURE__*/React.createElement(Treatments4, null),
      /*#__PURE__*/React.createElement(Defenses4, null),
      /*#__PURE__*/React.createElement("section", { className: "close" },
        /*#__PURE__*/React.createElement("p", { className: "verse" }, "\u201CTo study His creation is to honor the One who made it.\u201D"),
        /*#__PURE__*/React.createElement("p", null, "The body is so wonderfully made that it gets the rules right billions of times a day. Cancer is not a punishment and it is not a weakness \u2014 it is what rarely happens when a single copy, out of trillions, carries a smudge no one caused. The work of the scientist and the doctor is to come alongside that beautiful design and help the body's own guards do what they were made to do."),
        /*#__PURE__*/React.createElement("p", null, "If you or someone you love is walking through cancer right now: you did nothing to cause this, and you are not alone. Wherever you are on the path, you are seen. The deepest hope this story points to isn't a body that never wears out, but the One who overcame death, so that we need not fear it. Through our struggles and our pain we are being made into good and faithful servants \u2014 and even there, we are blessed (Matthew 25:21). To study His creation is to honor the Maker; to know Him is to be made new."),
        /*#__PURE__*/React.createElement("button", { className: "btn", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, "Back to the beginning")),
      /*#__PURE__*/React.createElement(WordOfHope4, null),
      /*#__PURE__*/React.createElement("footer", null,
        /*#__PURE__*/React.createElement("div", { className: "brand" }, /*#__PURE__*/React.createElement(Logo4, null), " Wonderfully Made Labs"),
        /*#__PURE__*/React.createElement("div", null, "Studying His Creation \xB7 Module 4: Cancer Biology"),
        /*#__PURE__*/React.createElement("div", { style: { marginTop: '8px', opacity: .8 } }, "Original character art hand-painted by Cher."),
        /*#__PURE__*/React.createElement("p", { className: "src" }, "Science drawn from peer-reviewed and clinical sources including the National Cancer Institute, Dana-Farber Cancer Institute, MedlinePlus / NIH, NIH NIGMS, Ludwig Cancer Research / Johns Hopkins, the ASCO Post, and PubMed / PMC (Hanahan & Weinberg, The Hallmarks of Cancer). This experience is educational and is not medical advice.")));
  }

  window.StoryModule4 = StoryModule4;
})();
