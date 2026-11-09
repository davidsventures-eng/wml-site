/* Wonderfully Made Labs — shared site header, footer sitemap, and "recently viewed" memory.
   One file powers navigation on every page so visitors always know where they are
   and how to reach everything in one or two taps. */
(function () {
  if (window.__wmlNav) return; window.__wmlNav = true;

  var MENU = [
    { id: 'know', label: 'Know Jesus', blurb: 'The best news there is, in His own words', items: [
      { t: 'Who is Jesus?', d: 'Come and meet Him, simply, in Scripture', u: '/jesus/' },
      { t: 'I want to follow Jesus', d: 'A simple prayer and your first steps', u: '/jesus/#respond' },
      { t: 'Ask us to pray for you', d: 'Share a need or tell us you said yes', u: '/jesus/#pray' },
      { t: 'Our testimony', d: 'How a scientist found peace on his knees', u: '/learn/#testimony' }
    ]},
    { id: 'time', label: 'Time with Him', blurb: 'Quiet ways to be with the Lord today', items: [
      { t: 'Breath Prayer', d: 'Breathe a verse slowly, then rest with Him in silence', u: '/breathe/', badge: 'New' },
      { t: 'Walk with Him', d: 'Start from how you feel, and be guided through Scripture', u: '/walk/' },
      { t: '31-Day Prayer Companion', d: 'A Psalm, a prayer, and one small step a day', u: '/prayer' },
      { t: 'Hidden Verse Coloring', d: 'Color slowly. The verse appears when you finish.', u: '/color/', badge: 'New every Monday' },
      { t: 'Move & Be Still', d: 'Move, breathe, and rest in a word of Scripture', u: '/move-and-be-still.html' },
      { t: 'Guided Journals', d: 'For fear, grief, and heavy days', u: '/learn/#journals' }
    ]},
    { id: 'hard', label: 'Hard Seasons', blurb: 'He is near to those who have a broken heart', items: [
      { t: 'I just got a heart diagnosis', d: 'What is happening, what to do, what comes next', u: '/learn/#patient' },
      { t: 'Someone I love has cancer', d: 'A gentle companion for patients and families', u: '/learn/#cancer' },
      { t: 'I\u2019m scared or anxious', d: 'Name what you feel, then breathe and pray', u: '/still-tool.html' },
      { t: 'I feel far from God', d: 'Finding Christ in the darkness, 31 days', u: '/prayer' },
      { t: 'Essays for the journey', d: 'Faith and medicine, written plainly', u: '/learn/#essays' }
    ]},
    { id: 'creation', label: 'His Creation', blurb: 'See the Maker in what He made', items: [
      { t: 'River Detective', d: 'Solve a real heart mystery, ages 8+', u: '/river-detective.html' },
      { t: 'The River That Forgot How to Flow', d: 'How the heart\u2019s arteries work, 3 reading levels', u: '/learn/#story' },
      { t: 'The Story Behind the Mystery', d: 'Ages 8 to pre-med', u: '/heart' },
      { t: 'The Guards Who Forgot Their Friends', d: 'The immune system and autoimmunity', u: '/learn/#story2' },
      { t: 'The Furnace Friend', d: 'Why healthy food and movement matter', u: '/learn/#story3' },
      { t: 'The Worker Who Forgot the Rule', d: 'What cancer really is, for families', u: '/learn/#story4' },
      { t: 'Take Heart, for Adults', d: 'The truth about your heart, in plain numbers', u: '/learn/#adult' }
    ]}
  ];
  window.WML_MENU = MENU;

  var path = location.pathname.replace(/index\.html$/, '');
  var here = path + location.hash;
  window.addEventListener('hashchange', function () { here = path + location.hash; remember(); });
  function isCurrent(u) {
    var p = u.split('#')[0].replace(/index\.html$/, '');
    if (u.indexOf('#') > -1) return here === u;
    if (p === '/') return false;
    return path === p || path === p + '/' || path + '/' === p;
  }

  /* ---- remember recently viewed pages (for "Pick up where you left off") ---- */
  function remember() { try {
    if (path !== '/' && !/admin/.test(path) && !(path === '/learn/' && !location.hash)) {
      var title = (document.title || '').split(/\s[|\u2014\u2013-]\s/)[0].trim();
      var all = [].concat.apply([], MENU.map(function (g) { return g.items; }));
      var hit = all.filter(function (i) { return isCurrent(i.u); })[0];
      if (hit) title = hit.t;
      if (path === '/shop.html') title = 'The Shop';
      if (title) {
        var rec = JSON.parse(localStorage.getItem('wml-recent') || '[]').filter(function (r) { return r.u !== here; });
        rec.unshift({ u: here, t: title, ts: Date.now() });
        localStorage.setItem('wml-recent', JSON.stringify(rec.slice(0, 6)));
      }
    }
  } catch (e) {} }
  remember();

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function itemHTML(i) {
    return '<a class="wml-mi" href="' + i.u + '"' + (isCurrent(i.u) ? ' aria-current="page"' : '') + '>' +
      '<span class="wml-mi-t">' + esc(i.t) + (i.badge ? ' <em class="wml-badge">' + esc(i.badge) + '</em>' : '') + '</span>' +
      '<span class="wml-mi-d">' + esc(i.d) + '</span></a>';
  }

  var LOGO = '<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#23344a"/><path d="M16 6v20M10 12h12" stroke="#e8b04b" stroke-width="3" stroke-linecap="round"/></svg>';

  function build() {
    if (document.querySelector('.wml-nav')) return;
    var header = el('header', { class: 'wml-nav', role: 'banner' });
    var groups = MENU.map(function (g) {
      var active = g.items.some(function (i) { return isCurrent(i.u); });
      return '<li class="wml-g' + (active ? ' is-active' : '') + '">' +
        '<button class="wml-gb" type="button" aria-expanded="false" aria-controls="wml-p-' + g.id + '">' + esc(g.label) +
        '<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>' +
        '<div class="wml-panel" id="wml-p-' + g.id + '" hidden><p class="wml-blurb">' + esc(g.blurb) + '</p>' +
        g.items.map(itemHTML).join('') + '</div></li>';
    }).join('');
    header.innerHTML =
      '<div class="wml-bar">' +
        '<a class="wml-brand" href="/" aria-label="Wonderfully Made Labs home">' + LOGO + '<span>Wonderfully Made Labs</span></a>' +
        '<nav class="wml-menu" aria-label="Main"><ul>' + groups +
          '<li><a class="wml-link" href="/#serve">Serve</a></li>' +
        '</ul></nav>' +
        '<a class="wml-shop' + (path === '/shop.html' ? ' is-active' : '') + '" href="/shop.html">Shop</a>' +
        '<button class="wml-burger" type="button" aria-expanded="false" aria-controls="wml-drawer" aria-label="Open menu"><span></span><span></span><span></span></button>' +
      '</div>';

    var drawer = el('div', { class: 'wml-drawer', id: 'wml-drawer', hidden: '' });
    drawer.innerHTML = '<div class="wml-drawer-in">' +
      '<a class="wml-drawer-cta" href="/breathe/">Spend 3 quiet minutes with Him \u2192</a>' +
      MENU.map(function (g) { return '<section><h3>' + esc(g.label) + '</h3>' + g.items.map(itemHTML).join('') + '</section>'; }).join('') +
      '<section><h3>More</h3>' + itemHTML({ t: 'Serve with us', d: 'Pray for someone, share, or support the mission', u: '/#serve' }) +
      itemHTML({ t: 'Free Printables', d: 'Advent Day 1 and more to print at home', u: '/free/' }) +
      itemHTML({ t: 'The Shop', d: 'Books on Amazon, printables on Etsy', u: '/shop.html' }) +
      itemHTML({ t: 'Everything in one place', d: 'The full library', u: '/learn/' }) + '</section></div>';

    document.body.insertBefore(drawer, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    var openG = null;
    function closeAll() {
      header.querySelectorAll('.wml-gb').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      header.querySelectorAll('.wml-panel').forEach(function (p) { p.hidden = true; });
      openG = null;
    }
    header.querySelectorAll('.wml-gb').forEach(function (b) {
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var was = b.getAttribute('aria-expanded') === 'true';
        if (was && b._byHover) { b._byHover = false; return; }
        closeAll();
        if (!was) { b.setAttribute('aria-expanded', 'true'); panel.hidden = false; openG = b; b._byHover = false; }
      });
      var li = b.parentNode, t;
      li.addEventListener('mouseenter', function () {
        if (!window.matchMedia('(hover:hover) and (min-width:981px)').matches) return;
        clearTimeout(t); if (openG === b) return; closeAll(); b.setAttribute('aria-expanded', 'true'); panel.hidden = false; openG = b; b._byHover = true;
      });
      li.addEventListener('mouseleave', function () {
        if (!window.matchMedia('(hover:hover) and (min-width:981px)').matches) return;
        t = setTimeout(closeAll, 180);
      });
    });
    document.addEventListener('click', function (e) { if (!header.contains(e.target)) closeAll(); });

    var burger = header.querySelector('.wml-burger');
    function setDrawer(open) {
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) drawer.style.top = Math.max(0, header.getBoundingClientRect().bottom) + 'px';
      drawer.hidden = !open;
      document.documentElement.classList.toggle('wml-lock', open);
    }
    burger.addEventListener('click', function () { setDrawer(drawer.hidden); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { if (openG) { var g = openG; closeAll(); g.focus(); } if (!drawer.hidden) { setDrawer(false); burger.focus(); } }
    });
    window.addEventListener('hashchange', function () { closeAll(); setDrawer(false); });

    /* footer sitemap */
    if (!document.querySelector('.wml-foot') && !document.body.hasAttribute('data-no-sitemap')) {
      var f = el('footer', { class: 'wml-foot' });
      f.innerHTML = '<div class="wml-foot-in">' +
        '<div class="wml-foot-brand"><a class="wml-brand" href="/">' + LOGO + '<span>Wonderfully Made Labs</span></a>' +
        '<p>A quiet place to find the Lord, spend time with Him, and see His glory in what He made.</p>' +
        '<a class="wml-foot-cta" href="https://inhisglorypsalms13914.substack.com/subscribe" target="_blank" rel="noopener">Get a note when something new opens</a>' +
        '<p class="wml-foot-social"><a href="https://www.youtube.com/@WonderfullyMadeLabs" target="_blank" rel="noopener">YouTube</a> \u00b7 <a href="https://inhisglorypsalms13914.substack.com" target="_blank" rel="noopener">Substack</a> \u00b7 <a href="https://www.instagram.com/wonderfullymadelabs/" target="_blank" rel="noopener">Instagram</a> \u00b7 <a href="https://www.tiktok.com/@wonderfullymadelabs" target="_blank" rel="noopener">TikTok</a></p></div>' +
        MENU.map(function (g) {
          return '<div class="wml-foot-col"><h4>' + esc(g.label) + '</h4>' + g.items.map(function (i) { return '<a href="' + i.u + '">' + esc(i.t) + '</a>'; }).join('') + '</div>';
        }).join('') +
        '<div class="wml-foot-col"><h4>Serve</h4><a href="/#serve">Serve with us</a><a href="/color/#boardH">Fellowship board</a><a href="/free/">Free Printables</a><a href="/shop.html">The Shop</a><a href="https://www.etsy.com/shop/WonderfullyMadeLab" target="_blank" rel="noopener">Printables on Etsy</a><a href="https://buy.stripe.com/9B600ka9p5aiddBcX39Zm00" target="_blank" rel="noopener">Support the mission</a><a href="/learn/">The full library</a></div>' +
        '</div><p class="wml-foot-fine">Scripture quotations are from the World English Bible. Educational content, not medical advice. To God be the glory.</p>';
      document.body.appendChild(f);
    }
  }

  /* ---- gentle "Walk with Him" ribbon: shown on a resource page while a walk is in progress ---- */
  function walkRibbon() { try {
    if (/^\/walk\/?$/.test(path) || /admin/.test(path)) return;
    var w = JSON.parse(localStorage.getItem('wml-walk') || 'null');
    if (!w || w.s !== 3 || Date.now() - w.ts > 864e5) return;
    if (sessionStorage.getItem('wml-walk-hide')) return;
    var r = el('div', { class: 'wml-walkr', role: 'complementary', 'aria-label': 'Your walk with Him' });
    r.innerHTML = '<a href="/walk/#now"><small>Walking with Him</small>When you\u2019re ready: how is your heart now? <b aria-hidden="true">\u2192</b></a>' +
      '<button type="button" aria-label="Hide for now">\u00d7</button>';
    r.querySelector('button').addEventListener('click', function () { try { sessionStorage.setItem('wml-walk-hide', '1'); } catch (e) {} r.remove(); });
    document.body.appendChild(r);
  } catch (e) {} }
  function boot() { build(); walkRibbon(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
