/* ============================================================
   Wonderfully Made Labs — ADULT MODULE components
   Rendered when the visitor chooses "For Adults: Take Heart".
   Reads content from window.WML_ADULT (adult.js).
   Reuses useReveal, Cite, Logo from app.jsx (loaded first).
   ============================================================ */
const A = window.WML_ADULT;

/* ---- adult top bar (simple, no tier switch) ---- */
function AdultBar({
  onHome,
  onTestimony
}) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
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
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"), /*#__PURE__*/React.createElement("div", {
    className: "topbar-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    onClick: onTestimony
  }, "Our Testimony"), /*#__PURE__*/React.createElement("button", {
    className: "home-link",
    onClick: onHome
  }, "\u2190 All Modules"))));
}

/* ---- gist: bottom-line-up-front summary + jump nav ---- */
function AdultGist() {
  const ref = useReveal();
  const g = A.gist;
  const jump = id => document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "a-gist",
    ref: ref,
    id: "a-gist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap a-gist-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, g.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, g.title), /*#__PURE__*/React.createElement("p", null, g.lead)), /*#__PURE__*/React.createElement("ul", {
    className: "a-gist-points fade-up"
  }, g.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "a-gist-jump fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-gist-jump-label"
  }, g.jumpLabel), /*#__PURE__*/React.createElement("div", {
    className: "a-gist-chips"
  }, g.jumps.map((j, i) => /*#__PURE__*/React.createElement("button", {
    className: "a-chip",
    key: i,
    onClick: () => jump(j.to)
  }, j.label))))));
}

/* ---- hero ---- */
function AdultHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "a-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap a-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "series-tag eyebrow"
  }, A.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "display a-hero-title"
  }, A.hero.title), /*#__PURE__*/React.createElement("p", {
    className: "a-hero-sub"
  }, A.hero.sub), /*#__PURE__*/React.createElement("p", {
    className: "a-hero-verse"
  }, A.hero.verse), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => document.getElementById('a-gist')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, A.hero.cta, " \u2193")));
}

/* ---- reframe + stats ---- */
function AdultReframe() {
  const ref = useReveal();
  const r = A.reframe;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section",
    ref: ref,
    id: "a-reframe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, r.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, r.title)), /*#__PURE__*/React.createElement("p", {
    className: "a-lead fade-up",
    dangerouslySetInnerHTML: {
      __html: r.lead
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "a-stats fade-up"
  }, r.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "a-stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-stat-big"
  }, s.big), /*#__PURE__*/React.createElement("p", null, s.small), /*#__PURE__*/React.createElement(Cite, {
    c: s.cite
  })))), /*#__PURE__*/React.createElement("div", {
    className: "a-turn fade-up"
  }, r.turn)));
}

/* ---- testimony ---- */
function AdultTestimony() {
  const ref = useReveal();
  const t = A.testimony;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-testimony",
    ref: ref,
    id: "a-testimony"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap a-testimony-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow fade-up",
    style: {
      color: 'var(--gold)'
    }
  }, t.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display fade-up"
  }, t.title), /*#__PURE__*/React.createElement("div", {
    className: "a-testimony-body"
  }, t.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    className: "fade-up",
    key: i
  }, p))), /*#__PURE__*/React.createElement("p", {
    className: "a-testimony-verse fade-up"
  }, t.verse), /*#__PURE__*/React.createElement("p", {
    className: "a-testimony-close fade-up"
  }, t.close)));
}

/* ---- two hands ---- */
function AdultTwoHands() {
  const ref = useReveal();
  const t = A.twoHands;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section a-hands-band",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, t.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, t.title), /*#__PURE__*/React.createElement("p", null, t.lead)), /*#__PURE__*/React.createElement("figure", {
    className: "a-hands-figure fade-up"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/dx_hands.jpg",
    alt: "Two open hands cupped beneath a warm light \u2014 a picture of releasing what we cannot carry while tending what we have been given.",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "a-hands"
  }, t.hands.map((h, i) => /*#__PURE__*/React.createElement("div", {
    className: "a-hand fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, h.h), /*#__PURE__*/React.createElement("div", {
    className: "a-hand-ref"
  }, h.ref), /*#__PURE__*/React.createElement("p", null, h.p)))), /*#__PURE__*/React.createElement("div", {
    className: "a-turn fade-up"
  }, t.turn)));
}

/* ---- mechanism ---- */
function AdultMechanism() {
  const ref = useReveal();
  const m = A.mechanism;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section",
    ref: ref,
    id: "a-mechanism"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, m.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, m.title)), /*#__PURE__*/React.createElement("p", {
    className: "a-lead fade-up",
    dangerouslySetInnerHTML: {
      __html: m.lead
    }
  }), /*#__PURE__*/React.createElement("figure", {
    className: "a-figure fade-up"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/dx_artery.jpg",
    alt: "Three cross-sections of a coronary artery: a healthy open vessel; fatty plaque building up underneath the inner lining; and a ruptured plaque cap with a clot blocking the channel.",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("figcaption", {
    className: "a-fig-stages"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "1 \xB7 Healthy"), " Smooth lining, open channel."), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "2 \xB7 Plaque builds"), " Fat collects in the wall, beneath the lining \u2014 not in the blood."), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "3 \xB7 Rupture"), " The thin cap tears, a clot forms, flow stops."))), /*#__PURE__*/React.createElement("div", {
    className: "a-points fade-up"
  }, m.points.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "a-point",
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, p.h), /*#__PURE__*/React.createElement("p", null, p.p)))), /*#__PURE__*/React.createElement("p", {
    className: "fade-up",
    style: {
      textAlign: 'center',
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Cite, {
    c: m.cite
  }))));
}

/* ---- know your numbers ---- */
function AdultNumbers() {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section a-numbers-band",
    ref: ref,
    id: "a-numbers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, A.numbersIntro.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, A.numbersIntro.title), /*#__PURE__*/React.createElement("p", null, A.numbersIntro.lead)), /*#__PURE__*/React.createElement("div", {
    className: "a-num-grid"
  }, A.numbers.map((n, i) => /*#__PURE__*/React.createElement("div", {
    className: "a-num fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-num-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a-num-ic",
    "aria-hidden": "true"
  }, n.ic), /*#__PURE__*/React.createElement("div", {
    className: "a-num-name"
  }, n.name)), /*#__PURE__*/React.createElement("div", {
    className: "a-num-target"
  }, n.target), /*#__PURE__*/React.createElement("p", {
    className: "a-num-detail"
  }, n.detail), /*#__PURE__*/React.createElement("p", {
    className: "a-num-reflect"
  }, n.reflect), /*#__PURE__*/React.createElement(Cite, {
    c: n.cite
  }))))));
}

/* ---- essentials 8 ---- */
function AdultEssentials() {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section",
    ref: ref,
    id: "a-essentials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, A.essentialsIntro.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, A.essentialsIntro.title), /*#__PURE__*/React.createElement("p", null, A.essentialsIntro.lead)), /*#__PURE__*/React.createElement("div", {
    className: "a-ess-grid"
  }, A.essentials.map((e, i) => /*#__PURE__*/React.createElement("div", {
    className: "a-ess fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-ess-ic"
  }, e.ic), /*#__PURE__*/React.createElement("h4", null, e.h), /*#__PURE__*/React.createElement("p", null, e.p)))), /*#__PURE__*/React.createElement("p", {
    className: "fade-up",
    style: {
      textAlign: 'center',
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(Cite, {
    c: {
      t: "AHA Life's Essential 8",
      u: "https://www.heart.org/en/healthy-living/healthy-lifestyle/lifes-essential-8"
    }
  }))));
}

/* ---- emergency ---- */
function AdultEmergency() {
  const ref = useReveal();
  const e = A.emergency;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-emergency",
    ref: ref,
    id: "a-emergency"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--rust-soft)'
    }
  }, e.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      color: '#fff'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#f3dccf'
    },
    dangerouslySetInnerHTML: {
      __html: e.lead
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "a-emerg-card fade-up"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "a-signs"
  }, e.signs.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "a-action"
  }, e.action), /*#__PURE__*/React.createElement(Cite, {
    c: e.cite
  }))));
}

/* ---- designed defenses ---- */
function AdultDefenses() {
  const ref = useReveal();
  const d = A.defenses;
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section defenses",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head fade-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, d.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, d.title), /*#__PURE__*/React.createElement("p", null, d.lead)), /*#__PURE__*/React.createElement("div", {
    className: "def-grid"
  }, d.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "def fade-up",
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, it.h), /*#__PURE__*/React.createElement("p", null, it.p))))));
}

/* ---- close ---- */
function AdultClose({
  onHome
}) {
  const c = A.close;
  return /*#__PURE__*/React.createElement("section", {
    className: "close"
  }, /*#__PURE__*/React.createElement("p", {
    className: "verse"
  }, c.verse), /*#__PURE__*/React.createElement("p", null, c.body), /*#__PURE__*/React.createElement("p", {
    className: "a-sign"
  }, c.sign), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, c.cta), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-keepsake",
    href: "https://wonderfullymadelabs.gumroad.com/l/hfzhmn",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginLeft: '12px'
    }
  }, "Get the keepsake edition \u2192"));
}

/* ---- the adult module shell ---- */
function AdultModule({
  onHome,
  onTestimony
}) {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AdultBar, {
    onHome: onHome,
    onTestimony: onTestimony
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '62px'
    }
  }), /*#__PURE__*/React.createElement(AdultHero, null), /*#__PURE__*/React.createElement(AdultGist, null), /*#__PURE__*/React.createElement(AdultReframe, null), /*#__PURE__*/React.createElement(AdultTestimony, null), /*#__PURE__*/React.createElement(AdultTwoHands, null), /*#__PURE__*/React.createElement(AdultMechanism, null), /*#__PURE__*/React.createElement(AdultNumbers, null), /*#__PURE__*/React.createElement(AdultEssentials, null), /*#__PURE__*/React.createElement(AdultEmergency, null), /*#__PURE__*/React.createElement(AdultDefenses, null), /*#__PURE__*/React.createElement(AdultClose, {
    onHome: onHome
  }), /*#__PURE__*/React.createElement(WordOfHope, null), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"), /*#__PURE__*/React.createElement("div", null, "Studying His Creation \xB7 For Adults: Take Heart"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      opacity: .8
    }
  }, "In His Glory \u2014 Resources for the Journey"), /*#__PURE__*/React.createElement("p", {
    className: "src"
  }, "Clinical guidance drawn from the 2019 ACC/AHA Primary Prevention Guideline, the 2018 ACC/AHA Blood Cholesterol Guideline, the 2025 ACC/AHA High Blood Pressure Guideline (JACC), the 2025 ACC/AHA Acute Coronary Syndromes Guideline, AHA Life's Essential 8, and the World Health Organization. This experience is educational and is not medical advice \u2014 bring your numbers and questions to your own clinician.")));
}
window.AdultModule = AdultModule;