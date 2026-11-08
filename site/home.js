(function () {
  function $(id) { return document.getElementById(id); }
  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function track(n, p) { try { window.plausible && window.plausible(n, p ? { props: p } : undefined); } catch (e) {} }

  /* Same schedule as /color/color.js (puzzles open Mondays 08:00 UTC) */
  var SCHED = [[1, null], [8, null], [12, null], [6, '2026-11-16'], [13, '2026-11-23'], [3, '2026-11-30'], [7, '2026-12-07'], [5, '2026-12-14'],
    [4, '2026-12-21'], [14, '2026-12-28'], [16, '2027-01-04'], [17, '2027-01-11']];
  var now = Date.now();
  function rel(d) { return d ? Date.parse(d + 'T08:00:00Z') : 0; }
  var open = SCHED.filter(function (s) { return rel(s[1]) <= now; });
  var next = SCHED.filter(function (s) { return rel(s[1]) > now; })[0];
  var done = SCHED.filter(function (s) { return ls('wml-seek-done' + s[0]); }).length;
  var started = SCHED.filter(function (s) { return ls('wml-seek-p' + s[0]) && !ls('wml-seek-done' + s[0]); });

  function niceDate(d) {
    var dt = new Date(d + 'T12:00:00Z');
    return dt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });
  }
  function daysUntil(d) {
    var days = Math.round((rel(d) - now) / 864e5);
    return days <= 1 ? 'in about a day' : 'in ' + days + ' days';
  }

  // This-week card
  var line = $('weekLine'), cta = $('weekCta'), img = $('weekImg'), hero = $('heroColor');
  if (next) {
    img.src = '/pins/seek-' + String(next[0]).padStart(2, '0') + '.jpg';
    line.textContent = 'Each mosaic hides a Bible verse that only appears when the last piece is colored. ' + open.length +
      ' puzzles are open now. The next one opens ' + niceDate(next[1]) + ', ' + daysUntil(next[1]) + '.';
  } else {
    img.src = '/pins/seek-17.jpg';
    line.textContent = 'Each mosaic hides a Bible verse that only appears when the last piece is colored. All ' + open.length + ' puzzles are open now.';
  }
  if (done || started.length) {
    $('weekProg').hidden = false;
    $('weekBar').style.width = Math.round(done / SCHED.length * 100) + '%';
    $('weekProgText').textContent = 'You have found ' + done + ' of ' + SCHED.length + ' hidden verses.' + (started.length ? ' One is in progress.' : '');
  }
  if (started.length) { cta.textContent = 'Continue your puzzle'; hero.textContent = 'Continue your hidden verse'; }
  else if (done) { cta.textContent = 'Color the next puzzle'; }

  // Pick up where you left off
  var rec = [];
  try { rec = JSON.parse(ls('wml-recent') || '[]'); } catch (e) {}
  var items = [];
  if (started.length) items.push({ u: '/color/', t: 'Your hidden verse puzzle', d: 'Pick up the colors where you stopped' });
  rec.forEach(function (r) {
    if (items.length >= 4) return;
    if (started.length && r.u.indexOf('/color/') === 0) return;
    if (items.some(function (i) { return i.u === r.u; })) return;
    var ago = Math.round((now - r.ts) / 864e5);
    items.push({ u: r.u, t: r.t, d: ago < 1 ? 'Viewed today' : ago === 1 ? 'Viewed yesterday' : 'Viewed ' + ago + ' days ago' });
  });
  if (items.length) {
    var row = $('contRow');
    items.forEach(function (i) {
      var a = document.createElement('a'); a.className = 'cont'; a.href = i.u;
      var b = document.createElement('b'); b.textContent = i.t;
      var s = document.createElement('span'); s.textContent = i.d;
      a.appendChild(b); a.appendChild(s);
      a.addEventListener('click', function () { track('home_continue', { to: i.u }); });
      row.appendChild(a);
    });
    $('continue').hidden = false;
  }

  // Click tracking for every data-t link
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-t]'); if (a) track(a.getAttribute('data-t'));
  });

  // Email signup (same Formspree inbox as before)
  var f = $('signForm');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = $('sEmail').value.trim(), name = $('sName').value.trim(), msg = $('sMsg'), btn = $('sBtn');
    msg.className = 'sign-msg';
    if (!email || email.indexOf('@') < 1) { msg.textContent = 'Please enter a valid email.'; msg.classList.add('err'); return; }
    btn.disabled = true; btn.textContent = 'Sending\u2026';
    track('Free Gift Signup', { source: 'home' });
    fetch('https://formspree.io/f/xljrewag', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: email, name: name, _subject: 'New signup (homepage) via wonderfullymadelabs.com',
        message: 'New email signup from the homepage (31-Day Prayer Companion + new-release notes).\nName: ' + (name || '(not given)') + '\nEmail: ' + email })
    }).then(function (r) {
      if (!r.ok) throw 0;
      f.innerHTML = '<p class="sign-msg ok" style="font-size:17px">You\u2019re all set. Welcome.</p><a class="btn btn-gold" href="/prayer">Open the Prayer Companion</a>';
    }).catch(function () {
      btn.disabled = false; btn.textContent = 'Send me the companion';
      msg.textContent = 'Something went wrong. Please try again in a moment.'; msg.classList.add('err');
    });
  });
})();
