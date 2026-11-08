// Seek and You Will Find: fellowship board API (Vercel Node function).
// Storage: Upstash Redis REST (connected through the Vercel Marketplace).
// Actions (?a=): board, post, react, found, admin_list, admin_approve, admin_delete
const crypto = require('crypto');

// Find the Upstash REST settings even if Vercel added a custom prefix (e.g. STORAGE_KV_REST_API_URL).
const envFind = (re, not) => { const k = Object.keys(process.env).find((n) => re.test(n) && !(not && not.test(n)) && process.env[n]); return k ? process.env[k] : ''; };
const R_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || envFind(/(KV_REST_API_URL|REDIS_REST_URL)$/);
const R_TOK = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || envFind(/(KV_REST_API_TOKEN|REDIS_REST_TOKEN)$/, /READ_ONLY/);
// Some setups only give a redis:// URL; the REST endpoint and token can be derived from it.
let R_URL2 = R_URL, R_TOK2 = R_TOK;
if (!R_URL2 || !R_TOK2) {
  const ru = envFind(/(KV_URL|REDIS_URL)$/);
  try { const u = new URL(ru); if (/upstash\.io$/.test(u.hostname) && u.password) { R_URL2 = 'https://' + u.hostname; R_TOK2 = decodeURIComponent(u.password); } } catch (e) {}
}
// sha256 of the admin passphrase (the passphrase itself is never stored in the repo).
// Setting SEEK_ADMIN_KEY in Vercel overrides this.
const ADMIN_HASH = '3be75aba452a3c89015025b49f58a48abe0f29ba638f7986802936d0743c4169';
const PUZZLES = [1, 8, 12, 6, 13, 3, 7, 5, 4, 14, 16, 17];
const ADJ = ['Quiet', 'Gentle', 'Hopeful', 'Faithful', 'Joyful', 'Grateful', 'Steady', 'Humble', 'Kind', 'Patient', 'Bright', 'Restful', 'Peaceful', 'Trusting', 'Glad', 'Still'];
const NOUN = ['Sparrow', 'Dove', 'Lamb', 'Cedar', 'Olive', 'Lily', 'River', 'Lantern', 'Meadow', 'Harbor', 'Willow', 'Robin', 'Shepherd', 'Pilgrim', 'Vine', 'Morning'];
const P = 'wml:seek:';

async function redis(cmds) {
  const r = await fetch(R_URL2.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: `Bearer ${R_TOK2}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error('store ' + r.status);
  const out = await r.json();
  return out.map((x) => (x && 'result' in x ? x.result : null));
}
const hobj = (arr) => { const o = {}; if (Array.isArray(arr)) for (let i = 0; i < arr.length; i += 2) o[arr[i]] = arr[i + 1]; return o; };

function ipHash(req) {
  const ip = String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '').split(',')[0].trim() || 'x';
  const day = new Date().toISOString().slice(0, 10);
  return crypto.createHash('sha256').update(`${ip}|${day}|seek`).digest('hex').slice(0, 20);
}
async function limited(req, what, max, secs) {
  const k = `${P}rl:${what}:${ipHash(req)}`;
  const [n] = await redis([['INCR', k], ['EXPIRE', k, secs]]);
  return n > max;
}
function isAdmin(req) {
  const key = String(req.headers['x-seek-key'] || '');
  if (!key) return false;
  if (process.env.SEEK_ADMIN_KEY) {
    const a = Buffer.from(key), b = Buffer.from(process.env.SEEK_ADMIN_KEY);
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  }
  const h = crypto.createHash('sha256').update(key).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(h), Buffer.from(ADMIN_HASH));
}
function validName(n) {
  const m = /^([A-Z][a-z]+) ([A-Z][a-z]+) (\d{1,3})$/.exec(String(n || ''));
  return !!(m && ADJ.includes(m[1]) && NOUN.includes(m[2]));
}
const BLOCK = /(https?:|www\.|\.com\b|\.net\b|\.org\b|@|\b\d[\d\s().-]{6,}\d\b)/i;
const ROUGH = /\b(fuck|shit|bitch|cunt|nigg|fag|porn|sex|casino|crypto|bitcoin|viagra|loan)/i;
function cleanText(t) {
  return String(t || '').replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '').replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}
function pub(c) {
  return { id: c.id, p: +c.p, name: c.name, text: c.text, t: +c.t, pray: +(c.pray || 0), amen: +(c.amen || 0) };
}
async function getMany(ids) {
  if (!ids || !ids.length) return [];
  const rows = await redis(ids.map((id) => ['HGETALL', `${P}c:${id}`]));
  return rows.map(hobj).filter((c) => c.id);
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  const send = (code, obj) => { res.statusCode = code; res.end(JSON.stringify(obj)); };
  if (!R_URL2 || !R_TOK2) return send(503, { error: 'not_configured', seen: Object.keys(process.env).filter((n) => /KV|REDIS|UPSTASH/.test(n)) });
  const q = req.query || Object.fromEntries(new URL(req.url, 'http://x').searchParams);
  const a = String(q.a || '');
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};
  try {
    if (a === 'board' && req.method === 'GET') {
      const p = parseInt(q.p, 10);
      const [st, pend] = await redis([['HGETALL', `${P}stats`], ['ZCARD', `${P}pending`]]);
      const s = hobj(st);
      const out = { stats: { found: +(s.found || 0), prayers: +(s.prayers || 0), shared: +(s.shared || 0), pending: +pend || 0 } };
      if (PUZZLES.includes(p)) {
        const [ids] = await redis([['ZREVRANGE', `${P}ap:${p}`, 0, 39]]);
        out.posts = (await getMany(ids)).map(pub);
      }
      res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=15');
      return send(200, out);
    }
    if (req.method !== 'POST') return send(405, { error: 'method' });

    if (a === 'post') {
      if (body.website) return send(200, { ok: true }); // honeypot
      const p = parseInt(body.p, 10);
      const text = cleanText(body.text);
      if (!PUZZLES.includes(p)) return send(400, { error: 'puzzle' });
      if (!validName(body.name)) return send(400, { error: 'name' });
      if (text.length < 5 || text.length > 500) return send(400, { error: 'length' });
      if (BLOCK.test(text)) return send(400, { error: 'contact' });
      if (await limited(req, 'post', 4, 3600)) return send(429, { error: 'slow' });
      const id = crypto.randomBytes(6).toString('hex');
      const t = Date.now();
      const flag = ROUGH.test(text) ? '1' : '0';
      await redis([
        ['HSET', `${P}c:${id}`, 'id', id, 'p', String(p), 'name', body.name, 'text', text, 't', String(t), 'status', 'pending', 'flag', flag, 'pray', '0', 'amen', '0'],
        ['ZADD', `${P}pending`, t, id],
      ]);
      return send(200, { ok: true, status: 'pending' });
    }
    if (a === 'react') {
      const id = String(body.id || '').replace(/[^a-f0-9]/g, '').slice(0, 12);
      const kind = body.kind === 'amen' ? 'amen' : body.kind === 'pray' ? 'pray' : '';
      if (!id || !kind) return send(400, { error: 'bad' });
      if (await limited(req, 'react', 120, 3600)) return send(429, { error: 'slow' });
      const [st] = await redis([['HGET', `${P}c:${id}`, 'status']]);
      if (st !== 'approved') return send(404, { error: 'missing' });
      const [first] = await redis([['SET', `${P}rx:${id}:${kind}:${ipHash(req)}`, '1', 'NX', 'EX', 86400 * 3]]);
      if (first !== 'OK') return send(200, { ok: true, dup: true });
      const cmds = [['HINCRBY', `${P}c:${id}`, kind, 1]];
      if (kind === 'pray') cmds.push(['HINCRBY', `${P}stats`, 'prayers', 1]);
      await redis(cmds);
      return send(200, { ok: true });
    }
    if (a === 'found') {
      const p = parseInt(body.p, 10);
      if (!PUZZLES.includes(p)) return send(400, { error: 'puzzle' });
      if (await limited(req, 'found', 30, 86400)) return send(200, { ok: true });
      await redis([['HINCRBY', `${P}stats`, 'found', 1], ['HINCRBY', `${P}found`, String(p), 1]]);
      return send(200, { ok: true });
    }

    // ----- admin -----
    if (a.startsWith('admin_')) {
      if (await limited(req, 'admin', 300, 3600)) return send(429, { error: 'slow' });
      if (!isAdmin(req)) return send(401, { error: 'key' });
      if (a === 'admin_list') {
        const [pids, st] = await redis([['ZRANGE', `${P}pending`, 0, 199], ['HGETALL', `${P}stats`]]);
        const recent = [];
        const lists = await redis(PUZZLES.map((p) => ['ZREVRANGE', `${P}ap:${p}`, 0, 19]));
        for (const l of lists) if (l) recent.push(...l);
        const pending = (await getMany(pids)).map((c) => ({ ...pub(c), flag: c.flag === '1' }));
        const approved = (await getMany(recent)).map(pub).sort((x, y) => y.t - x.t).slice(0, 60);
        return send(200, { pending, approved, stats: hobj(st) });
      }
      const id = String(body.id || '').replace(/[^a-f0-9]/g, '').slice(0, 12);
      const [c] = await redis([['HGETALL', `${P}c:${id}`]]);
      const cm = hobj(c);
      if (!cm.id) return send(404, { error: 'missing' });
      if (a === 'admin_approve') {
        if (cm.status === 'approved') return send(200, { ok: true });
        await redis([
          ['HSET', `${P}c:${id}`, 'status', 'approved'],
          ['ZREM', `${P}pending`, id],
          ['ZADD', `${P}ap:${cm.p}`, cm.t, id],
          ['HINCRBY', `${P}stats`, 'shared', 1],
        ]);
        return send(200, { ok: true });
      }
      if (a === 'admin_delete') {
        const cmds = [['ZREM', `${P}pending`, id], ['ZREM', `${P}ap:${cm.p}`, id], ['DEL', `${P}c:${id}`]];
        if (cm.status === 'approved') cmds.push(['HINCRBY', `${P}stats`, 'shared', -1]);
        await redis(cmds);
        return send(200, { ok: true });
      }
    }
    return send(400, { error: 'action' });
  } catch (e) {
    return send(500, { error: 'server' });
  }
};
