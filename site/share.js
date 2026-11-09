/* Wonderfully Made Labs: "Send this to someone" verse cards.
   WMLShare.open({ verse, ref, link, source, item, art })
   Draws a 1080x1350 card on a canvas, then lets the person send it (Web Share with image when the
   device allows), copy the link, or save the image. Verses are passed in exactly as shown on the page. */
(function () {
  if (window.WMLShare) return;
  var css = '' +
  '.wsh-back{position:fixed;inset:0;z-index:2000;background:rgba(15,24,34,.72);display:flex;align-items:flex-start;justify-content:center;padding:max(16px,env(safe-area-inset-top)) 14px 24px;overflow:auto;-webkit-overflow-scrolling:touch}' +
  '.wsh{margin:auto 0;width:min(460px,100%);background:#fbf6ea;color:#3a3226;border-radius:22px;padding:22px 20px 18px;box-shadow:0 30px 80px rgba(0,0,0,.4);font-family:"General Sans","Inter",system-ui,sans-serif;text-align:left;animation:wshIn .35s ease both}' +
  '@keyframes wshIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
  '.wsh h2{font-family:"Chillax","Trebuchet MS",sans-serif;color:#23344a;font-size:24px;line-height:1.15;margin:0 34px 6px 0;font-weight:600}' +
  '.wsh p{margin:0 0 12px;font-size:15px;color:#6a5f4e;line-height:1.45}' +
  '.wsh-x{position:absolute;right:12px;top:10px;width:40px;height:40px;border:0;background:none;font-size:26px;color:#6a5f4e;cursor:pointer;border-radius:50%}' +
  '.wsh-x:hover{background:rgba(35,52,74,.08)}' +
  '.wsh-in{position:relative}' +
  '.wsh-img{display:block;width:100%;max-width:300px;margin:4px auto 14px;border-radius:14px;box-shadow:0 14px 30px -16px rgba(35,52,74,.6);aspect-ratio:4/5;background:#23344a}' +
  '.wsh-msg{width:100%;font:inherit;font-size:15px;padding:12px 14px;border-radius:12px;border:1.5px solid rgba(35,52,74,.2);background:#fff;color:#3a3226;min-height:84px;resize:vertical;box-sizing:border-box}' +
  '.wsh-lab{display:block;font-weight:600;color:#23344a;font-size:14px;margin:0 0 6px}' +
  '.wsh-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}' +
  '.wsh-b{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:48px;padding:12px 18px;border-radius:999px;border:1.5px solid rgba(35,52,74,.25);background:transparent;color:#23344a;font:inherit;font-weight:700;font-size:15px;cursor:pointer;text-decoration:none}' +
  '.wsh-b.main{background:#e8b04b;border-color:#e8b04b;flex-basis:100%}' +
  '.wsh-b:hover{border-color:#23344a}' +
  '.wsh-b:focus-visible,.wsh-x:focus-visible,.wsh-msg:focus-visible{outline:3px solid #e8b04b;outline-offset:2px}' +
  '.wsh-note{font-size:13px!important;margin:10px 0 0!important;min-height:1.2em}' +
  '.wsh-fine{font-size:12.5px!important;margin:10px 0 0!important}' +
  '@media (prefers-reduced-motion:reduce){.wsh{animation:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function track(n, p) { try { window.plausible && window.plausible(n, { props: p || {} }); } catch (e) {} }
  function tag(link, source, item) {
    var u = new URL(link, location.origin);
    u.searchParams.set('utm_source', 'friend');
    u.searchParams.set('utm_medium', 'share-card');
    u.searchParams.set('utm_campaign', source + (item ? '-' + item : ''));
    return u.toString();
  }
  function loadImg(src) {
    return new Promise(function (res) { if (!src) return res(null); var i = new Image(); i.onload = function () { res(i); }; i.onerror = function () { res(null); }; i.src = src; });
  }
  function wrap(ctx, text, maxW) {
    var words = text.split(/\s+/), lines = [], line = '';
    words.forEach(function (w) { var t = line ? line + ' ' + w : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; });
    if (line) lines.push(line); return lines;
  }
  function draw(o) {
    var W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H;
    var x = c.getContext('2d');
    var fontsReady = (document.fonts && document.fonts.load) ? Promise.all([
      document.fonts.load('600 60px Chillax'), document.fonts.load('italic 400 56px Nunito'), document.fonts.load('600 30px "General Sans"')
    ]).catch(function () {}) : Promise.resolve();
    return Promise.all([fontsReady, loadImg(o.art)]).then(function (r) {
      var img = r[1];
      x.fillStyle = '#23344a'; x.fillRect(0, 0, W, H);
      if (img) {
        var s = Math.max(W / img.width, H / img.height), w = img.width * s, h = img.height * s;
        x.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
        var g = x.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, 'rgba(20,30,44,.55)'); g.addColorStop(.45, 'rgba(20,30,44,.72)'); g.addColorStop(1, 'rgba(20,30,44,.9)');
        x.fillStyle = g; x.fillRect(0, 0, W, H);
      }
      // gold cross mark
      x.fillStyle = '#e8b04b'; x.fillRect(W / 2 - 5, 120, 10, 64); x.fillRect(W / 2 - 24, 140, 48, 10);
      x.textAlign = 'center';
      x.fillStyle = '#e8b04b'; x.font = '600 30px "General Sans", Inter, system-ui, sans-serif';
      x.fillText((o.eyebrow || 'A word for you today').toUpperCase().split('').join('\u200A'), W / 2, 250);
      // verse, auto-sized
      var verse = o.verse.replace(/^[\u201c"]+|[\u201d"]+$/g, '');
      var size = 64, lines, lh, maxH = 620;
      for (; size >= 34; size -= 2) {
        x.font = 'italic 400 ' + size + 'px Nunito, Georgia, serif';
        lines = wrap(x, '\u201c' + verse + '\u201d', W - 200); lh = size * 1.42;
        if (lines.length * lh <= maxH) break;
      }
      var top = 330 + (maxH - lines.length * lh) / 2 + size;
      x.fillStyle = '#ffffff';
      lines.forEach(function (l, i) { x.fillText(l, W / 2, top + i * lh); });
      x.fillStyle = '#e4dac4'; x.font = '600 34px "General Sans", Inter, system-ui, sans-serif';
      x.fillText(o.ref, W / 2, top + lines.length * lh + 36);
      // footer
      x.fillStyle = 'rgba(232,176,75,.9)'; x.fillRect(W / 2 - 60, H - 210, 120, 3);
      x.fillStyle = '#ffffff'; x.font = '600 40px Chillax, "Trebuchet MS", sans-serif';
      x.fillText(o.cta || 'Take 3 quiet minutes with Him', W / 2, H - 140);
      x.fillStyle = '#cdbf9f'; x.font = '500 30px "General Sans", Inter, system-ui, sans-serif';
      x.fillText('wonderfullymadelabs.com', W / 2, H - 88);
      return new Promise(function (res) { c.toBlob(function (b) { res({ blob: b, url: c.toDataURL('image/jpeg', .9) }); }, 'image/jpeg', .9); });
    });
  }

  var lastFocus = null;
  function open(o) {
    lastFocus = document.activeElement;
    var link = tag(o.link, o.source, o.item);
    var back = document.createElement('div'); back.className = 'wsh-back';
    back.innerHTML = '<div class="wsh" role="dialog" aria-modal="true" aria-labelledby="wshH"><div class="wsh-in">' +
      '<button class="wsh-x" type="button" aria-label="Close">\u00d7</button>' +
      '<h2 id="wshH" tabindex="-1">Send this to someone</h2>' +
      '<p>Who do you know who is carrying something heavy? A verse and a quiet minute might be exactly what they need today.</p>' +
      '<img class="wsh-img" alt="A card with the verse ' + o.ref.replace(/"/g, '') + '" />' +
      '<label class="wsh-lab" for="wshMsg">Your note (you can change it)</label>' +
      '<textarea class="wsh-msg" id="wshMsg"></textarea>' +
      '<div class="wsh-row">' +
        '<button class="wsh-b main" type="button" data-a="send">Send it</button>' +
        '<button class="wsh-b" type="button" data-a="copy">Copy link</button>' +
        '<a class="wsh-b" data-a="save" download="verse-card.jpg" href="#">Save image</a>' +
      '</div>' +
      '<p class="wsh-note" role="status" aria-live="polite"></p>' +
      '<p class="wsh-fine">Nothing is posted for you. You choose who it goes to.</p>' +
      '</div></div>';
    document.body.appendChild(back);
    var msg = back.querySelector('#wshMsg'), note = back.querySelector('.wsh-note'), img = back.querySelector('.wsh-img');
    msg.value = (o.message || 'I thought of you today. This verse helped me, and there is a quiet place to rest with it for a few minutes:') ;
    var card = null;
    draw(o).then(function (r) { card = r; img.src = r.url; back.querySelector('[data-a="save"]').href = r.url; });
    function done(method) { track('Share Card', { source: o.source, item: o.item || '', method: method }); }
    function close() { back.remove(); document.removeEventListener('keydown', onKey); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') { var f = back.querySelectorAll('button,a,textarea'); var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    }
    document.addEventListener('keydown', onKey);
    back.addEventListener('click', function (e) {
      if (e.target === back || e.target.closest('.wsh-x')) return close();
      var b = e.target.closest('[data-a]'); if (!b) return;
      var a = b.dataset.a, text = msg.value.trim();
      if (a === 'send') {
        var payload = { title: 'A verse for you', text: text + '\n' + link };
        var file = card && card.blob && window.File ? new File([card.blob], 'verse-card.jpg', { type: 'image/jpeg' }) : null;
        if (file && navigator.canShare && navigator.canShare({ files: [file] })) payload = { files: [file], title: 'A verse for you', text: text + '\n' + link };
        if (navigator.share) {
          navigator.share(payload).then(function () { done(payload.files ? 'share-image' : 'share-link'); note.textContent = 'Sent. Thank you for thinking of them.'; })
            .catch(function (err) { if (err && err.name === 'AbortError') return; copy(); });
        } else copy();
      } else if (a === 'copy') { copy(); }
      else if (a === 'save') { done('save-image'); note.textContent = 'Image saved. Add the link when you send it.'; }
      function copy() {
        var t = text + '\n' + link;
        (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () {
          done('copy'); note.textContent = 'Copied. Paste it into a text or message to them.';
        }).catch(function () { note.textContent = link; });
      }
    });
    setTimeout(function () { back.querySelector('#wshH').focus(); }, 30);
    track('Share Card Open', { source: o.source, item: o.item || '' });
  }

  // Welcome line for people who arrive from a card
  function arrived() {
    try { var p = new URLSearchParams(location.search); return p.get('utm_medium') === 'share-card'; } catch (e) { return false; }
  }
  window.WMLShare = { open: open, arrived: arrived };
  if (arrived()) track('Shared Visit', { page: location.pathname });
})();
