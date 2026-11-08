(() => {
  'use strict';
  const PUZZLES = [1, 8, 12];
  const $ = (id) => document.getElementById(id);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };
  const track = (ev, props) => { try { window.plausible && window.plausible(ev, props ? { props } : undefined); } catch (e) {} };
  const cache = {};

  async function load(n) {
    if (cache[n]) return cache[n];
    const r = await fetch(`data/p${String(n).padStart(2, '0')}.json`);
    const p = await r.json();
    p.ng = p.num.length;
    p.G = Int32Array.from(p.G);
    const bytes = Uint8Array.from(atob(p.x), (c) => c.charCodeAt(0));
    p.secret = JSON.parse(new TextDecoder().decode(bytes));
    p.rgb = {}; p.colors.forEach((c) => (p.rgb[c.n] = c.rgb));
    p.segs = buildSegs(p);
    p.filled = new Uint8Array(p.ng);
    const saved = store.get(key(n));
    if (saved) {
      try {
        const b = Uint8Array.from(atob(saved), (c) => c.charCodeAt(0));
        for (let g = 0; g < p.ng; g++) p.filled[g] = (b[g >> 3] >> (g & 7)) & 1;
      } catch (e) {}
    }
    cache[n] = p;
    return p;
  }
  const key = (n) => `wml-seek-p${n}`;
  function save(p) {
    const b = new Uint8Array((p.ng + 7) >> 3);
    for (let g = 0; g < p.ng; g++) if (p.filled[g]) b[g >> 3] |= 1 << (g & 7);
    let s = ''; b.forEach((v) => (s += String.fromCharCode(v)));
    store.set(key(p.n), btoa(s));
  }
  const count = (p) => p.filled.reduce((a, v) => a + v, 0);

  // quarters: 0=N 1=E 2=S 3=W
  const gq = (p, r, c, k) => p.G[(r * p.cols + c) * 4 + k];
  function buildSegs(p) {
    const s = []; const { rows, cols } = p;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const g0 = gq(p, r, c, 0), g1 = gq(p, r, c, 1), g2 = gq(p, r, c, 2), g3 = gq(p, r, c, 3);
      const cx = c + 0.5, cy = r + 0.5;
      if (g0 !== g1) s.push(cx, cy, c + 1, r);
      if (g1 !== g2) s.push(cx, cy, c + 1, r + 1);
      if (g2 !== g3) s.push(cx, cy, c, r + 1);
      if (g3 !== g0) s.push(cx, cy, c, r);
      if (r === 0 || gq(p, r - 1, c, 2) !== g0) s.push(c, r, c + 1, r);
      if (c === 0 || gq(p, r, c - 1, 1) !== g3) s.push(c, r, c, r + 1);
      if (r === rows - 1) s.push(c, r + 1, c + 1, r + 1);
      if (c === cols - 1) s.push(c + 1, r, c + 1, r + 1);
    }
    return Float32Array.from(s);
  }

  // ---------- home ----------
  async function renderList() {
    const list = $('list'); list.innerHTML = '';
    for (const n of PUZZLES) {
      const p = await load(n);
      const done = count(p);
      const b = document.createElement('button');
      b.className = 'pz'; b.type = 'button';
      b.setAttribute('aria-label', `Puzzle ${n}, ${p.level}, ${p.ng} pieces, ${done ? Math.round((done / p.ng) * 100) + '% colored' : 'not started'}`);
      const c = document.createElement('canvas'); c.width = 168; c.height = 184;
      thumb(p, c);
      const d = document.createElement('div');
      d.innerHTML = `<h3>Puzzle ${n}</h3><div class="meta">${p.level} · ${p.ng.toLocaleString()} pieces · ${p.colors.length} colors</div>` +
        `<div class="meta">${done === p.ng ? 'Finished' : done ? `${Math.round((done / p.ng) * 100)}% colored` : 'Not started'}</div><div class="bar"><i style="width:${(done / p.ng) * 100}%"></i></div>`;
      b.append(c, d);
      b.addEventListener('click', () => openPuzzle(n));
      list.append(b);
    }
  }
  function thumb(p, c) {
    const x = c.getContext('2d');
    const s = Math.min(c.width / p.cols, c.height / p.rows);
    x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
    x.save(); x.translate((c.width - p.cols * s) / 2, (c.height - p.rows * s) / 2); x.scale(s, s);
    drawFills(x, p, 0, 0, p.cols, p.rows);
    x.strokeStyle = '#8a8478'; x.lineWidth = 0.6 / s; strokeSegs(x, p, -1, -1, 1e9, 1e9);
    x.restore();
  }

  // ---------- drawing ----------
  function drawFills(x, p, c0, r0, c1, r1) {
    const by = {};
    const add = (col, f) => { (by[col] || (by[col] = [])).push(f); };
    for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) {
      const g = [gq(p, r, c, 0), gq(p, r, c, 1), gq(p, r, c, 2), gq(p, r, c, 3)];
      if (g[0] === g[1] && g[1] === g[2] && g[2] === g[3]) {
        if (p.filled[g[0]]) add(p.rgb[p.num[g[0]]], [0, r, c]);
        continue;
      }
      for (let k = 0; k < 4; k++) if (p.filled[g[k]]) add(p.rgb[p.num[g[k]]], [1, r, c, k]);
    }
    for (const col in by) {
      x.fillStyle = col; x.beginPath();
      for (const f of by[col]) {
        const r = f[1], c = f[2];
        if (f[0] === 0) { x.rect(c - 0.01, r - 0.01, 1.02, 1.02); continue; }
        const k = f[3], cx = c + 0.5, cy = r + 0.5;
        const pts = [[c, r, c + 1, r], [c + 1, r, c + 1, r + 1], [c + 1, r + 1, c, r + 1], [c, r + 1, c, r]][k];
        x.moveTo(pts[0], pts[1]); x.lineTo(pts[2], pts[3]); x.lineTo(cx, cy); x.closePath();
      }
      x.fill();
      x.strokeStyle = col; x.lineWidth = 0.03; x.stroke();
    }
  }
  function strokeSegs(x, p, c0, r0, c1, r1) {
    const s = p.segs; x.beginPath();
    for (let i = 0; i < s.length; i += 4) {
      const ax = s[i], ay = s[i + 1], bx = s[i + 2], by = s[i + 3];
      if (Math.max(ax, bx) < c0 || Math.min(ax, bx) > c1 || Math.max(ay, by) < r0 || Math.min(ay, by) > r1) continue;
      x.moveTo(ax, ay); x.lineTo(bx, by);
    }
    x.stroke();
  }

  // ---------- play ----------
  const cv = $('cv'), ctx = cv.getContext('2d'), stage = $('stage');
  let P = null, sel = 0, view = { s: 10, tx: 0, ty: 0 }, dpr = 1, W = 0, H = 0, raf = 0, flash = null;
  const NUM_MIN = 15; // css px per cell needed to show numbers

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    W = stage.clientWidth; H = stage.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    draw();
  }
  function fitView() {
    const s = Math.min((W - 16) / P.cols, (H - 16) / P.rows);
    view = { s, tx: (W - P.cols * s) / 2, ty: (H - P.rows * s) / 2 };
  }
  function clampView() {
    const minS = Math.min((W - 16) / P.cols, (H - 16) / P.rows) * 0.8;
    view.s = Math.max(minS, Math.min(view.s, 90));
    const pw = P.cols * view.s, ph = P.rows * view.s, m = 60;
    view.tx = pw + 2 * m < W ? (W - pw) / 2 : Math.min(m, Math.max(W - pw - m, view.tx));
    view.ty = ph + 2 * m < H ? (H - ph) / 2 : Math.min(m, Math.max(H - ph - m, view.ty));
  }
  function zoomAt(f, sx, sy) {
    const ns = view.s * f;
    view.tx = sx - (sx - view.tx) * (ns / view.s);
    view.ty = sy - (sy - view.ty) * (ns / view.s);
    view.s = ns; clampView(); draw();
  }
  function draw() {
    if (raf || !P) return;
    raf = requestAnimationFrame(() => { raf = 0; paint(); });
  }
  function paint() {
    const { s, tx, ty } = view;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#efe8d8'; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * tx, dpr * ty);
    const c0 = Math.max(0, Math.floor(-tx / s)), r0 = Math.max(0, Math.floor(-ty / s));
    const c1 = Math.min(P.cols, Math.ceil((W - tx) / s)), r1 = Math.min(P.rows, Math.ceil((H - ty) / s));
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, P.cols, P.rows);
    drawFills(ctx, P, c0, r0, c1, r1);
    ctx.strokeStyle = '#6f6a60'; ctx.lineWidth = Math.max(0.6, Math.min(1.2, s / 30)) / s;
    ctx.lineCap = 'round';
    strokeSegs(ctx, P, c0 - 1, r0 - 1, c1 + 1, r1 + 1);
    // numbers in screen space
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const show = s >= NUM_MIN;
    $('hint').style.opacity = (show || count(P) === P.ng) ? 0 : 1;
    if (show) {
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const fsq = Math.min(22, s * 0.44), ftr = Math.min(17, s * 0.34);
      for (let g = 0; g < P.ng; g++) {
        if (P.filled[g]) continue;
        const lx = P.lp[g][0], ly = P.lp[g][1];
        if (lx < c0 - 1 || lx > c1 + 1 || ly < r0 - 1 || ly > r1 + 1) continue;
        const sq = Math.abs((lx % 1) - 0.5) < 0.01 && Math.abs((ly % 1) - 0.5) < 0.01;
        const n = P.num[g];
        ctx.font = `${sq ? fsq : ftr}px system-ui,-apple-system,sans-serif`;
        ctx.fillStyle = n === sel ? '#1f2f4f' : '#8b857a';
        if (n === sel) ctx.font = `700 ${sq ? fsq : ftr}px system-ui,-apple-system,sans-serif`;
        ctx.fillText(String(n), tx + lx * s, ty + ly * s + 0.5);
      }
    }
    if (flash) {
      const x = tx + flash.x * s, y = ty + flash.y * s;
      ctx.strokeStyle = '#c9a24a'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(x, y, Math.max(18, s * 0.9), 0, Math.PI * 2); ctx.stroke();
    }
  }

  function groupAt(sx, sy) {
    const x = (sx - view.tx) / view.s, y = (sy - view.ty) / view.s;
    const c = Math.floor(x), r = Math.floor(y);
    if (c < 0 || r < 0 || c >= P.cols || r >= P.rows) return -1;
    const u = x - c, v = y - r;
    let k;
    if (v < u && v < 1 - u) k = 0; else if (u > v && u > 1 - v) k = 1; else if (v > u && v > 1 - u) k = 2; else k = 3;
    return gq(P, r, c, k);
  }

  let toastT = 0;
  function toast(msg) {
    const t = $('toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1600);
  }

  function tap(sx, sy) {
    const g = groupAt(sx, sy);
    if (g < 0 || P.filled[g]) return;
    if (view.s < NUM_MIN * 0.75) { zoomAt(Math.max(1.6, (NUM_MIN * 1.6) / view.s), sx, sy); return; }
    if (P.num[g] !== sel) { toast(`That piece is number ${P.num[g]}`); return; }
    P.filled[g] = 1; save(P); draw(); updateCounts();
    if (count(P) === P.ng) setTimeout(finish, 450);
  }

  function updateCounts() {
    const left = {}; P.colors.forEach((c) => (left[c.n] = 0));
    for (let g = 0; g < P.ng; g++) if (!P.filled[g]) left[P.num[g]]++;
    document.querySelectorAll('.sw').forEach((b) => {
      const n = +b.dataset.n;
      b.querySelector('.ct').textContent = left[n] ? `${left[n]} left` : 'Done';
      b.classList.toggle('fin', !left[n]);
    });
    const d = count(P);
    $('pProg').textContent = `${d.toLocaleString()} of ${P.ng.toLocaleString()} pieces`;
    return left;
  }
  function textOn(hex) {
    const v = parseInt(hex.slice(1), 16); const L = 0.299 * (v >> 16) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255);
    return L < 140 ? '#fff' : '#1f2f4f';
  }
  function buildPalette() {
    const pal = $('palette'); pal.innerHTML = '';
    P.colors.forEach((c) => {
      const b = document.createElement('button');
      b.className = 'sw'; b.type = 'button'; b.dataset.n = c.n; b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', `${c.n} ${c.name}`);
      b.innerHTML = `<span class="chip" style="background:${c.rgb};color:${textOn(c.rgb)}">${c.n}</span><span><span class="nm">${c.name}</span><br><span class="ct"></span></span>`;
      b.addEventListener('click', () => pick(c.n));
      pal.append(b);
    });
  }
  function pick(n) {
    sel = n;
    document.querySelectorAll('.sw').forEach((b) => b.setAttribute('aria-checked', String(+b.dataset.n === n)));
    draw();
  }

  async function openPuzzle(n) {
    P = await load(n);
    $('home').hidden = true; $('play').hidden = false;
    $('pTitle').textContent = `Puzzle ${n} · ${P.level}`;
    buildPalette();
    const left = updateCounts();
    const first = P.colors.find((c) => left[c.n]) || P.colors[0];
    pick(first.n);
    resize(); fitView(); draw();
    track('color_open', { puzzle: String(n) });
    if (count(P) === P.ng) setTimeout(finish, 300);
  }
  function goHome() {
    $('play').hidden = true; $('home').hidden = false; P = null; renderList(); window.scrollTo(0, 0);
  }

  function finish() {
    const s = P.secret;
    $('doneT').textContent = s.verse.charAt(0).toUpperCase() + s.verse.slice(1);
    $('doneRef').textContent = `${s.ref} (WEB)`;
    $('donePrompt').textContent = s.prompt;
    const jk = `wml-seek-j${P.n}`;
    const j = $('journal'); j.value = store.get(jk) || '';
    j.oninput = () => store.set(jk, j.value);
    const idx = PUZZLES.indexOf(P.n);
    $('doneNext').textContent = idx < PUZZLES.length - 1 ? 'Next puzzle' : 'All puzzles';
    $('done').hidden = false;
    if (!store.get(`wml-seek-done${P.n}`)) { store.set(`wml-seek-done${P.n}`, '1'); track('color_complete', { puzzle: String(P.n) }); }
  }

  // pointer handling: tap fills, drag pans, pinch zooms
  const pts = new Map(); let start = null, moved = false, pinch = null;
  cv.addEventListener('pointerdown', (e) => {
    cv.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, { x: e.offsetX, y: e.offsetY });
    if (pts.size === 1) { start = { x: e.offsetX, y: e.offsetY, tx: view.tx, ty: view.ty }; moved = false; }
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, s: view.s, tx: view.tx, ty: view.ty };
      moved = true;
    }
  });
  cv.addEventListener('pointermove', (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.offsetX, y: e.offsetY });
    if (pts.size >= 2 && pinch) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const ns = pinch.s * (d / pinch.d);
      view.s = ns;
      view.tx = mx - (pinch.mx - pinch.tx) * (ns / pinch.s);
      view.ty = my - (pinch.my - pinch.ty) * (ns / pinch.s);
      clampView(); draw();
    } else if (pts.size === 1 && start) {
      const dx = e.offsetX - start.x, dy = e.offsetY - start.y;
      if (!moved && Math.hypot(dx, dy) > 8) moved = true;
      if (moved) { view.tx = start.tx + dx; view.ty = start.ty + dy; clampView(); draw(); }
    }
  });
  const up = (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    if (pts.size === 0) {
      if (!moved && start) tap(e.offsetX, e.offsetY);
      start = null; pinch = null;
    } else if (pts.size === 1) {
      const [a] = [...pts.values()]; start = { x: a.x, y: a.y, tx: view.tx, ty: view.ty }; pinch = null;
    }
  };
  cv.addEventListener('pointerup', up);
  cv.addEventListener('pointercancel', (e) => { pts.delete(e.pointerId); if (!pts.size) { start = null; pinch = null; } });
  cv.addEventListener('wheel', (e) => { e.preventDefault(); zoomAt(Math.exp(-e.deltaY * 0.0022), e.offsetX, e.offsetY); }, { passive: false });
  ['gesturestart', 'gesturechange'].forEach((t) => document.addEventListener(t, (e) => e.preventDefault()));

  $('zoomIn').onclick = () => zoomAt(1.5, W / 2, H / 2);
  $('zoomOut').onclick = () => zoomAt(1 / 1.5, W / 2, H / 2);
  $('fit').onclick = () => { fitView(); draw(); };
  $('find').onclick = () => {
    let g = -1;
    for (let i = 0; i < P.ng; i++) if (!P.filled[i] && P.num[i] === sel) { g = i; break; }
    if (g < 0) { for (let i = 0; i < P.ng; i++) if (!P.filled[i]) { g = i; break; } if (g >= 0) pick(P.num[g]); }
    if (g < 0) return;
    const [x, y] = P.lp[g];
    view.s = Math.max(view.s, 34);
    view.tx = W / 2 - x * view.s; view.ty = H / 2 - y * view.s; clampView();
    flash = { x, y }; draw();
    setTimeout(() => { flash = null; draw(); }, 1400);
  };
  $('back').onclick = goHome;
  $('more').onclick = () => { $('menu').hidden = false; $('restart').focus(); };
  $('closeMenu').onclick = () => { $('menu').hidden = true; };
  $('restart').onclick = () => { $('menu').hidden = true; $('confirm').hidden = false; $('confNo').focus(); };
  $('confNo').onclick = () => { $('confirm').hidden = true; };
  $('confYes').onclick = () => {
    $('confirm').hidden = true; P.filled.fill(0); store.del(key(P.n)); store.del(`wml-seek-done${P.n}`);
    updateCounts(); pick(P.colors[0].n); fitView(); draw();
  };
  $('doneView').onclick = () => { $('done').hidden = true; fitView(); draw(); };
  $('doneNext').onclick = () => {
    $('done').hidden = true;
    const idx = PUZZLES.indexOf(P.n);
    if (idx < PUZZLES.length - 1) openPuzzle(PUZZLES[idx + 1]); else goHome();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ['menu', 'confirm', 'done'].forEach((m) => ($(m).hidden = true));
    if (!P || $('play').hidden || e.target.tagName === 'TEXTAREA') return;
    const n = parseInt(e.key, 10);
    if (n && P.rgb[n]) pick(n);
    if (e.key === '+' || e.key === '=') zoomAt(1.4, W / 2, H / 2);
    if (e.key === '-') zoomAt(1 / 1.4, W / 2, H / 2);
  });
  window.addEventListener('resize', () => { if (P) { resize(); clampView(); draw(); } });

  // test hook (used for QA only): fill all but n pieces

  renderList();
})();
