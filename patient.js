/* ============================================================
   Wonderfully Made Labs — PATIENT COMPANION components
   Rendered when the visitor chooses "For Patients: Take Heart, Friend".
   Reads content from window.WML_PATIENT (patient-data.js).
   Reuses useReveal, Cite, Logo from app.js (loaded first).
   No monster art. Plain-language, scroll-bar + jump nav, no tiers.
   ============================================================ */
const P = window.WML_PATIENT;

/* ---- top bar (scroll progress, no tier switch) ---- */
function PatientBar({ onHome }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
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
      /*#__PURE__*/React.createElement("div", { className: "brand" }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"),
      /*#__PURE__*/React.createElement("div", { className: "topbar-right" },
        /*#__PURE__*/React.createElement("button", { className: "home-link", onClick: onHome }, "\u2190 All Modules"))));
}

/* ---- hero ---- */
function PatientHero() {
  return /*#__PURE__*/React.createElement("section", { className: "a-hero" },
    /*#__PURE__*/React.createElement("div", { className: "wrap a-hero-inner" },
      /*#__PURE__*/React.createElement("div", { className: "series-tag eyebrow" }, P.hero.eyebrow),
      /*#__PURE__*/React.createElement("h1", { className: "display a-hero-title" }, P.hero.title),
      /*#__PURE__*/React.createElement("p", { className: "a-hero-sub" }, P.hero.sub),
      /*#__PURE__*/React.createElement("p", { className: "a-hero-verse" }, P.hero.verse),
      /*#__PURE__*/React.createElement("button", {
        className: "btn",
        onClick: () => document.getElementById('p-gist')?.scrollIntoView({ behavior: 'smooth' })
      }, P.hero.cta, " \u2193")));
}

/* ---- gist: bottom-line-up-front + jump chips ---- */
function PatientGist() {
  const ref = useReveal();
  const g = P.gist;
  const jump = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return /*#__PURE__*/React.createElement("section", { className: "a-section a-gist", ref: ref, id: "p-gist" },
    /*#__PURE__*/React.createElement("div", { className: "wrap" },
      /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
        /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, g.eyebrow),
        /*#__PURE__*/React.createElement("h2", { className: "display" }, g.title),
        /*#__PURE__*/React.createElement("p", null, g.lead)),
      /*#__PURE__*/React.createElement("ul", { className: "a-gist-points fade-up" },
        g.points.map((p, i) => /*#__PURE__*/React.createElement("li", { key: i }, p))),
      /*#__PURE__*/React.createElement("div", { className: "a-gist-jump fade-up" },
        /*#__PURE__*/React.createElement("div", { className: "a-gist-jump-label" }, g.jumpLabel),
        /*#__PURE__*/React.createElement("div", { className: "a-gist-chips" },
          g.jumps.map((j, i) => /*#__PURE__*/React.createElement("button", { className: "a-chip", key: i, onClick: () => jump(j.to) }, j.label))))));
}

/* ---- one "do now" action footer for a part ---- */
function DoNow({ text }) {
  return /*#__PURE__*/React.createElement("div", { className: "p-donow fade-up" },
    /*#__PURE__*/React.createElement("span", { className: "p-donow-tag" }, "One small thing to do"),
    /*#__PURE__*/React.createElement("p", null, text));
}

/* ---- generic part renderer (handles all the optional shapes) ---- */
function PatientPart({ part, band }) {
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", {
    className: "a-section" + (band ? " a-numbers-band" : ""),
    ref: ref,
    id: part.id
  }, /*#__PURE__*/React.createElement("div", { className: "wrap" },
    /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
      /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, part.num + " \u00B7 " + part.eyebrow),
      /*#__PURE__*/React.createElement("h2", { className: "display" }, part.title),
      part.lead && /*#__PURE__*/React.createElement("p", null, part.lead)),

    /* simple body paragraphs */
    part.body && /*#__PURE__*/React.createElement("div", { className: "p-prose fade-up" },
      part.body.map((t, i) => /*#__PURE__*/React.createElement("p", { key: i }, t))),

    /* labeled blocks (h + p) */
    part.blocks && /*#__PURE__*/React.createElement("div", { className: "a-points fade-up" },
      part.blocks.map((b, i) => /*#__PURE__*/React.createElement("div", { className: "a-point", key: i },
        /*#__PURE__*/React.createElement("h4", null, b.h),
        /*#__PURE__*/React.createElement("p", null, b.p)))),

    /* callout box (h + bullet items) */
    part.callout && /*#__PURE__*/React.createElement("div", { className: "p-callout fade-up" },
      /*#__PURE__*/React.createElement("h4", null, part.callout.h),
      /*#__PURE__*/React.createElement("ul", null,
        part.callout.items.map((it, i) => /*#__PURE__*/React.createElement("li", { key: i }, it)))),

    /* grouped definition lists (tests / treatments / meds) */
    part.groups && part.groups.map((grp, gi) => /*#__PURE__*/React.createElement("div", { className: "p-group fade-up", key: gi },
      /*#__PURE__*/React.createElement("h3", { className: "p-group-h display" }, grp.h),
      grp.note && /*#__PURE__*/React.createElement("p", { className: "p-group-note" }, grp.note),
      /*#__PURE__*/React.createElement("dl", { className: "p-deflist" },
        grp.items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, { key: i },
          /*#__PURE__*/React.createElement("dt", null, it.b),
          /*#__PURE__*/React.createElement("dd", null, it.t)))))),

    /* rehab highlight (recovery part) */
    part.rehab && /*#__PURE__*/React.createElement("div", { className: "p-highlight fade-up" },
      /*#__PURE__*/React.createElement("h4", null, part.rehab.h),
      /*#__PURE__*/React.createElement("p", null, part.rehab.p),
      /*#__PURE__*/React.createElement("p", null, part.rehab.p2)),

    /* daily habits */
    part.habits && /*#__PURE__*/React.createElement("div", { className: "p-group fade-up" },
      /*#__PURE__*/React.createElement("h3", { className: "p-group-h display" }, part.habits.h),
      /*#__PURE__*/React.createElement("dl", { className: "p-deflist" },
        part.habits.items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, { key: i },
          /*#__PURE__*/React.createElement("dt", null, it.b),
          /*#__PURE__*/React.createElement("dd", null, it.t))))),

    /* gentle word */
    part.gentle && /*#__PURE__*/React.createElement("div", { className: "p-soft fade-up" },
      /*#__PURE__*/React.createElement("h4", null, part.gentle.h),
      /*#__PURE__*/React.createElement("p", null, part.gentle.p)),

    /* ways (faith) */
    part.ways && /*#__PURE__*/React.createElement("div", { className: "p-group fade-up" },
      /*#__PURE__*/React.createElement("h3", { className: "p-group-h display" }, part.ways.h),
      /*#__PURE__*/React.createElement("dl", { className: "p-deflist" },
        part.ways.items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, { key: i },
          /*#__PURE__*/React.createElement("dt", null, it.b),
          /*#__PURE__*/React.createElement("dd", null, it.t))))),

    /* age table (family) */
    part.ages && /*#__PURE__*/React.createElement("div", { className: "p-group fade-up" },
      /*#__PURE__*/React.createElement("h3", { className: "p-group-h display" }, part.ages.h),
      /*#__PURE__*/React.createElement("div", { className: "p-agetable" },
        part.ages.rows.map((r, i) => /*#__PURE__*/React.createElement("div", { className: "p-agerow", key: i },
          /*#__PURE__*/React.createElement("div", { className: "p-age" }, r.age),
          /*#__PURE__*/React.createElement("div", { className: "p-agesay" }, r.say))))),

    /* hope (faith) */
    part.hope && /*#__PURE__*/React.createElement("div", { className: "p-highlight fade-up" },
      /*#__PURE__*/React.createElement("h4", null, part.hope.h),
      /*#__PURE__*/React.createElement("p", null, part.hope.p),
      /*#__PURE__*/React.createElement("ul", null, part.hope.items.map((it, i) => /*#__PURE__*/React.createElement("li", { key: i }, it))),
      /*#__PURE__*/React.createElement("p", { className: "p-hope-close" }, part.hope.close)),

    /* a single rule line (family / etc.) */
    part.rule && /*#__PURE__*/React.createElement("p", { className: "p-rule fade-up" }, part.rule),

    /* trailing note */
    part.note && /*#__PURE__*/React.createElement("p", { className: "p-note fade-up" }, part.note),

    /* do-now action */
    part.doNow && /*#__PURE__*/React.createElement(DoNow, { text: part.doNow }),

    /* citation */
    part.cite && /*#__PURE__*/React.createElement("p", { className: "fade-up", style: { textAlign: 'center', marginTop: '18px' } },
      /*#__PURE__*/React.createElement(Cite, { c: part.cite }))));
}

/* ---- emergency band (red, high-visibility) ---- */
function PatientEmergency() {
  const ref = useReveal();
  const e = P.emergency;
  return /*#__PURE__*/React.createElement("section", { className: "p-emergency", ref: ref, id: "p-emergency" },
    /*#__PURE__*/React.createElement("div", { className: "wrap" },
      /*#__PURE__*/React.createElement("div", { className: "eyebrow fade-up" }, e.eyebrow),
      /*#__PURE__*/React.createElement("h2", { className: "display fade-up" }, e.title),
      /*#__PURE__*/React.createElement("p", { className: "fade-up" }, e.lead),
      /*#__PURE__*/React.createElement("div", { className: "p-emergency-box fade-up" },
        /*#__PURE__*/React.createElement("p", { className: "p-emergency-call" }, e.callLabel),
        /*#__PURE__*/React.createElement("ul", null, e.signs.map((s, i) => /*#__PURE__*/React.createElement("li", { key: i }, s))),
        /*#__PURE__*/React.createElement("p", { className: "p-emergency-women" }, e.women),
        /*#__PURE__*/React.createElement("p", { className: "p-emergency-rule" }, e.rule)),
      /*#__PURE__*/React.createElement("p", { className: "fade-up", style: { textAlign: 'center', marginTop: '16px' } },
        /*#__PURE__*/React.createElement(Cite, { c: e.cite }))));
}

/* ---- printable fill-in tools ---- */
function PatientTools() {
  const ref = useReveal();
  const t = P.tools;
  return /*#__PURE__*/React.createElement("section", { className: "a-section a-numbers-band", ref: ref, id: "p-call" },
    /*#__PURE__*/React.createElement("div", { className: "wrap" },
      /*#__PURE__*/React.createElement("div", { className: "section-head fade-up" },
        /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, t.eyebrow),
        /*#__PURE__*/React.createElement("h2", { className: "display" }, t.title),
        /*#__PURE__*/React.createElement("p", null, t.lead)),
      /*#__PURE__*/React.createElement("div", { className: "p-tools fade-up" },
        t.blocks.map((b, i) => /*#__PURE__*/React.createElement("div", { className: "p-tool", key: i },
          /*#__PURE__*/React.createElement("h4", null, b.h),
          b.rows && /*#__PURE__*/React.createElement("ul", { className: "p-fill" },
            b.rows.map((r, j) => /*#__PURE__*/React.createElement("li", { key: j },
              /*#__PURE__*/React.createElement("span", { className: "p-fill-label" }, r),
              /*#__PURE__*/React.createElement("span", { className: "p-fill-line" })))),
          b.cols && /*#__PURE__*/React.createElement("div", { className: "p-fill-grid" },
            /*#__PURE__*/React.createElement("div", { className: "p-fill-head" },
              b.cols.map((c, j) => /*#__PURE__*/React.createElement("span", { key: j }, c))),
            [0, 1, 2, 3].map(rw => /*#__PURE__*/React.createElement("div", { className: "p-fill-grow", key: rw },
              b.cols.map((c, j) => /*#__PURE__*/React.createElement("span", { key: j })))))))),
      /*#__PURE__*/React.createElement("div", { className: "p-print fade-up" },
        /*#__PURE__*/React.createElement("button", { className: "btn", onClick: () => window.print() }, "Print this page \uD83D\uDDA8"))));
}

/* ---- closing ---- */
function PatientClose() {
  const c = P.close;
  return /*#__PURE__*/React.createElement("section", { className: "close" },
    /*#__PURE__*/React.createElement("p", { className: "verse" }, c.verse),
    /*#__PURE__*/React.createElement("p", null, c.body),
    /*#__PURE__*/React.createElement("p", { className: "a-sign" }, c.sign),
    /*#__PURE__*/React.createElement("button", { className: "btn", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, c.cta));
}

/* ---- give hope to the next patient (high-visibility navy call) ---- */
function PatientHopeCall() {
  const h = P.hopeCall;
  const ref = useReveal();
  return /*#__PURE__*/React.createElement("section", { className: "a-section p-hopecall", ref: ref, id: "p-hopecall" },
    /*#__PURE__*/React.createElement("div", { className: "wrap" },
      /*#__PURE__*/React.createElement("div", { className: "section-head" },
        /*#__PURE__*/React.createElement("div", { className: "eyebrow" }, h.eyebrow),
        /*#__PURE__*/React.createElement("h2", { className: "display" }, h.title),
        /*#__PURE__*/React.createElement("p", { className: "p-hopecall-lead" }, h.lead)),
      /*#__PURE__*/React.createElement("div", { className: "p-hopecall-grid" },
        h.items.map((it, i) => /*#__PURE__*/React.createElement("div", { className: "p-hopecall-card", key: i },
          /*#__PURE__*/React.createElement("h4", null, it.b),
          /*#__PURE__*/React.createElement("p", null, it.t)))),
      /*#__PURE__*/React.createElement("p", { className: "p-hopecall-close" }, h.close),
      /*#__PURE__*/React.createElement("p", { className: "p-hopecall-verse" }, h.verse)));
}

/* ---- the patient module shell ---- */
function PatientModule({ onHome }) {
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null,
    /*#__PURE__*/React.createElement(PatientBar, { onHome: onHome }),
    /*#__PURE__*/React.createElement("div", { style: { height: '62px' } }),
    /*#__PURE__*/React.createElement(PatientHero, null),
    /*#__PURE__*/React.createElement(PatientGist, null),
    P.parts.map((part, i) => /*#__PURE__*/React.createElement(PatientPart, { key: part.id, part: part, band: i % 2 === 1 })),
    /*#__PURE__*/React.createElement(PatientEmergency, null),
    /*#__PURE__*/React.createElement(PatientTools, null),
    /*#__PURE__*/React.createElement(PatientHopeCall, null),
    /*#__PURE__*/React.createElement(PatientClose, null),
    /*#__PURE__*/React.createElement("footer", null,
      /*#__PURE__*/React.createElement("div", { className: "brand" }, /*#__PURE__*/React.createElement(Logo, null), " Wonderfully Made Labs"),
      /*#__PURE__*/React.createElement("div", null, "Studying His Creation \u00B7 For Patients: Take Heart, Friend"),
      /*#__PURE__*/React.createElement("div", { style: { marginTop: '8px', opacity: .8 } }, "Free for anyone \u2014 read, print, and share"),
      /*#__PURE__*/React.createElement("p", { className: "src" }, "Clinical guidance drawn from the 2023 AHA/ACC Chronic Coronary Disease Guideline, the 2025 ACC/AHA Acute Coronary Syndromes Guideline, and AHA scientific statements. This companion is educational and is not medical advice \u2014 always follow your own care team's instructions.")));
}
window.PatientModule = PatientModule;
