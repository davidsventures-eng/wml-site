// Wonderfully Made Labs — Module 2 renderer: "The Guards Who Forgot Their Friends"
// Self-contained compiled React component. Reads window.WML2.
// Reuses Module-1 CSS classes; defines its own helpers (suffixed _2) inside an
// IIFE so nothing collides with app.js (which owns `const D = window.WML`).

(function () {
  const { useState, useEffect, useRef } = React;
  const D2 = window.WML2;

  /* ---- brand logo ---- */
  function Logo2() {
    return /*#__PURE__*/React.createElement("img", {
      className: "brand-mark",
      src: "assets/wml_icon.png",
      alt: "Wonderfully Made Labs"
    });
  }

  function Cite2({ c }) {
    if (!c) return null;
    return /*#__PURE__*/React.createElement("a", {
      className: "cite",
      href: c.u,
      target: "_blank",
      rel: "noopener"
    }, c.t, " \u2197");
  }

  /* ---- scroll reveal hook ---- */
  function useReveal2() {
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
  function track2(name, props) {
    try {
      if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
        window.plausible(name, props ? { props } : undefined);
      }
    } catch (e) {}
  }

  /* ---- a word of hope (shared invitation, closed by default) ---- */
  function WordOfHope2() {
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
        onClick: () => { setOpen(true); track2('Hope Opened', { module: 'guards' }); }
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
  function Gate2({ onPick }) {
    return /*#__PURE__*/React.createElement("section", { className: "gate" },
      /*#__PURE__*/React.createElement("div", { className: "series-tag eyebrow" }, "Wonderfully Made Labs \xB7 Studying His Creation"),
      /*#__PURE__*/React.createElement("p", { className: "verse" }, "\u201CI will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful.\u201D \u2014 from Psalm 139:14 (WEBU)"),
      /*#__PURE__*/React.createElement("h1", { className: "display" }, "The Guards Who Forgot Their Friends"),
      /*#__PURE__*/React.createElement("p", { className: "lede" }, "Solve a real medical mystery the way scientists and doctors do. One walled kingdom. One puzzle \u2014 autoimmunity, when the body's own defenders mistake friend for foe. Three depths of understanding. Choose where you'd like to begin."),
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
          /*#__PURE__*/React.createElement("p", null, "The real science, named plainly: self-tolerance, autoantibodies, inflammation, flares, and how an autoimmune disease unfolds."),
          /*#__PURE__*/React.createElement("span", { className: "pick" }, "Begin as a Scholar \u2192")),
        /*#__PURE__*/React.createElement("div", {
          className: "tier-card", role: "button", tabIndex: 0,
          onClick: () => onPick('researcher'),
          onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick('researcher'); } }
        }, /*#__PURE__*/React.createElement("span", { className: "age" }, "Pre-med \xB7 College"),
          /*#__PURE__*/React.createElement("h3", null, "Researcher"),
          /*#__PURE__*/React.createElement("p", null, "Full mechanism, molecules, and the ACR treatment backbone \u2014 written for future physicians and scientists."),
          /*#__PURE__*/React.createElement("span", { className: "pick" }, "Begin as a Researcher \u2192"))),
      /*#__PURE__*/React.createElement("p", { className: "switch-note" }, "You can switch depth anytime \u2014 the story stays the same, the science gets deeper."));
  }

  /* ---- a story beat ---- */
  function Beat2({ beat, tier }) {
    const ref = useReveal2();
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
        beat.cite && /*#__PURE__*/React.createElement("p", { style: { marginTop: '10px' } }, /*#__PURE__*/React.createElement(Cite2, { c: beat.cite })),
        beat.teach && /*#__PURE__*/React.createElement("div", { className: "teach", dangerouslySetInnerHTML: { __html: beat.teach } }))));
  }

  /* ---- discovery game ---- */
  function Game2() {
    const ref = useReveal2();
    const [chosen, setChosen] = useState(null);
    const q = D2.quiz;
    return /*#__PURE__*/React.createElement("section", { className: "game", ref: ref, id: "game" },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Discovery Game"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "Why Are the Guards Fighting Their Own?"),
          /*#__PURE__*/React.createElement("p", null, "The game is the scientific method in disguise. Real scientists observe, compare, test a model, and confirm \u2014 and so do you.")),
        /*#__PURE__*/React.createElement("div", { className: "steps fade-up" },
          D2.gameSteps.map((s, i) => /*#__PURE__*/React.createElement("div", { className: "step-chip", key: i },
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
  function Careers2() {
    const ref = useReveal2();
    return /*#__PURE__*/React.createElement("section", { className: "beat", ref: ref, id: "careers", style: { paddingTop: '90px' } },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Calling"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "Each Friend Found a Purpose"),
          /*#__PURE__*/React.createElement("p", null, "No one solved it alone. Three ways of thinking, three real careers \u2014 and a learner can see themselves in any one.")),
        /*#__PURE__*/React.createElement("div", { className: "careers-grid" },
          D2.careers.map((c, i) => /*#__PURE__*/React.createElement("div", { className: "career fade-up", key: i },
            /*#__PURE__*/React.createElement("img", { className: "avatar", src: c.avatar, alt: c.name, loading: "lazy" }),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", { className: "role" }, c.role),
              /*#__PURE__*/React.createElement("h3", { className: "display" }, c.name),
              /*#__PURE__*/React.createElement("p", null, c.who),
              /*#__PURE__*/React.createElement("p", { className: "real" },
                /*#__PURE__*/React.createElement("b", null, "In real life:"), " ", c.real, " ",
                /*#__PURE__*/React.createElement(Cite2, { c: c.cite }))))))));
  }

  /* ---- treatments ---- */
  function Treatments2() {
    const ref = useReveal2();
    return /*#__PURE__*/React.createElement("section", { className: "beat treat-band", ref: ref },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "Solving the Problem"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "Helping the Guards Remember Their Friends"),
          /*#__PURE__*/React.createElement("p", null, "Every rescue maps to a real treatment, with the ACR clinical practice guidelines as the backbone. Each metaphor is a doorway into actual medicine.")),
        /*#__PURE__*/React.createElement("div", { className: "treat-grid" },
          D2.treatments.map((t, i) => /*#__PURE__*/React.createElement("div", { className: "treat fade-up", key: i },
            /*#__PURE__*/React.createElement("div", { className: "meta" }, t.meta),
            /*#__PURE__*/React.createElement("div", { className: "real" }, t.real),
            /*#__PURE__*/React.createElement("p", null, t.p))))));
  }

  /* ---- defenses / faith ---- */
  function Defenses2() {
    const ref = useReveal2();
    return /*#__PURE__*/React.createElement("section", { className: "beat defenses", ref: ref },
      /*#__PURE__*/React.createElement("div", { className: "wrap" },
        /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
          /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, "The Wonderful Design"),
          /*#__PURE__*/React.createElement("h2", { className: "display" }, "The Body Was Built to Know Its Own"),
          /*#__PURE__*/React.createElement("p", null, "A defense fierce enough to stop invaders, yet gentle enough to spare every one of your own cells \u2014 built in by design, before any doctor arrives.")),
        /*#__PURE__*/React.createElement("div", { className: "def-grid" },
          D2.defenses.map((d, i) => /*#__PURE__*/React.createElement("div", { className: "def fade-up", key: i },
            /*#__PURE__*/React.createElement("div", { className: "ic" }, d.ic),
            /*#__PURE__*/React.createElement("h4", null, d.h),
            /*#__PURE__*/React.createElement("div", {
              className: "role",
              style: { color: 'var(--gold-deep)', fontFamily: 'var(--font-alt)', fontWeight: 600, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }
            }, d.real),
            /*#__PURE__*/React.createElement("p", null, d.p))))));
  }

  /* ---- top bar + progress ---- */
  function TopBar2({ tier, setTier, onHome, onTestimony }) {
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
        }, /*#__PURE__*/React.createElement(Logo2, null), " Wonderfully Made Labs"),
        /*#__PURE__*/React.createElement("div", { className: "topbar-right" },
          onTestimony && /*#__PURE__*/React.createElement("button", { className: "nav-link", onClick: onTestimony }, "Our Testimony"),
          /*#__PURE__*/React.createElement("div", { className: "tier-switch", role: "tablist", "aria-label": "Reading level" },
            Object.keys(D2.tiers).map(k => /*#__PURE__*/React.createElement("button", {
              key: k, className: tier === k ? "active" : "", onClick: () => setTier(k)
            }, D2.tiers[k].label))))));
  }

  /* ---- scroll-depth tracking ---- */
  function useScrollDepth2(view) {
    useEffect(() => {
      const fired = {};
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (h <= 0) return;
        const pct = window.scrollY / h * 100;
        [25, 50, 75, 100].forEach(m => {
          if (pct >= m && !fired[m]) { fired[m] = true; track2('Scroll Depth', { depth: m + '%', page: view }); }
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [view]);
  }

  /* ---- the module component (top-level view) ---- */
  function StoryModule2({ onHome, onTestimony }) {
    const [tier, setTier] = useState(null);
    useScrollDepth2('story2' + (tier ? ':' + tier : ''));
    useEffect(() => { track2('View', { page: 'story2' + (tier ? ':' + tier : '') }); }, [tier]);

    const start = t => {
      setTier(t);
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      setTimeout(() => { document.getElementById('story2')?.scrollIntoView({ behavior: 'smooth' }); }, 60);
    };

    if (!tier) {
      return /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { className: "story-back" },
          /*#__PURE__*/React.createElement("button", { className: "home-link dark", onClick: onHome }, "\u2190 All Modules"),
          onTestimony && /*#__PURE__*/React.createElement("button", { className: "nav-link dark", onClick: onTestimony }, "Our Testimony")),
        /*#__PURE__*/React.createElement(Gate2, { onPick: start }));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement(TopBar2, { tier: tier, setTier: setTier, onHome: onHome, onTestimony: onTestimony }),
      /*#__PURE__*/React.createElement("div", { style: { height: '62px' } }),
      /*#__PURE__*/React.createElement("div", { id: "story2" },
        D2.beats.map((b, i) => /*#__PURE__*/React.createElement(Beat2, { key: i + tier, beat: b, tier: tier }))),
      /*#__PURE__*/React.createElement(Game2, null),
      /*#__PURE__*/React.createElement(Careers2, null),
      /*#__PURE__*/React.createElement(Treatments2, null),
      /*#__PURE__*/React.createElement(Defenses2, null),
      /*#__PURE__*/React.createElement("section", { className: "close" },
        /*#__PURE__*/React.createElement("p", { className: "verse" }, "\u201CTo study His creation is to honor the One who made it.\u201D"),
        /*#__PURE__*/React.createElement("p", null, "The body was designed to defend itself fiercely and yet to know \u2014 and spare \u2014 its own. Autoimmunity is what happens when that astonishing friend-or-foe wisdom is overwhelmed. The work of the scientist and the physician is to come alongside that design and help the guards remember their friends."),
        /*#__PURE__*/React.createElement("p", null, "These diseases are not anyone's fault, a punishment, or a sign of weakness \u2014 they are a mistake of recognition by a loyal, well-meaning defender. If you live with one, you are seen, and you are not alone. The deepest hope this story points to isn't a body that never falters, but the One who overcame death, so that we need not fear it. To study His creation is to honor the Maker; to know Him is to be made new."),
        /*#__PURE__*/React.createElement("button", { className: "btn", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, "Back to the beginning")),
      /*#__PURE__*/React.createElement(WordOfHope2, null),
      /*#__PURE__*/React.createElement("footer", null,
        /*#__PURE__*/React.createElement("div", { className: "brand" }, /*#__PURE__*/React.createElement(Logo2, null), " Wonderfully Made Labs"),
        /*#__PURE__*/React.createElement("div", null, "Studying His Creation \xB7 Module 2: Autoimmunity"),
        /*#__PURE__*/React.createElement("div", { style: { marginTop: '8px', opacity: .8 } }, "Original character art hand-painted by Cher."),
        /*#__PURE__*/React.createElement("p", { className: "src" }, "Science drawn from peer-reviewed and clinical sources including the American College of Rheumatology clinical practice guidelines, the Cleveland Clinic, Mayo Clinic, JCI, Nature, Frontiers in Immunology, and PMC. This experience is educational and is not medical advice.")));
  }

  window.StoryModule2 = StoryModule2;
})();
