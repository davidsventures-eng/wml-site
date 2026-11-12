import os
HERE=os.path.dirname(os.path.abspath(__file__))
import json, html, re
L=json.load(open(os.path.join(HERE,'ledger.json')))
# verify verses against WEBU file
V={}
for line in open(os.path.join(HERE,'engwebu_vpl.txt'),encoding='utf-8'):
    p=line.split(' ',2)
    if len(p)==3: V[p[0]+' '+p[1]]=p[2].strip()
def q(code,ref,text,partial=False):
    full=V[code]
    assert text in full,(code,text,full)
    if not partial: assert text==full,(code,full)
    lab=('from ' if partial else '')+ref+' (WEBU)'
    return f'<blockquote class="mv"><p>&ldquo;{html.escape(text)}&rdquo;</p><cite>{lab}</cite></blockquote>'
m=lambda x:f"${x:,.2f}"
tin=sum(a for _,a in L['in']); tout=sum(r[2] for r in L['out'])
rows_in=''.join(f'<tr><td>{html.escape(n)}</td><td class="n">{m(a)}</td></tr>' for n,a in L['in'])
rows_out=''.join(f'<tr><td><b>{html.escape(n)}</b><small>{html.escape(d)}</small></td><td class="d">{html.escape(w)}</td><td class="n">{m(a)}</td></tr>' for n,d,a,w in L['out'])
bars=''.join(f'<div class="bar"><span class="bl">{html.escape(n)}</span><span class="bt"><i style="width:{max(0.6,a/tout*100):.1f}%"></i></span><span class="bv">{m(a)}</span></div>' for n,d,a,w in L['out'] if a>0)
steps=[
 ("1","First, give back to God","The first 10% of every sale is set aside to give, before anything else is paid.",q('PRO 3:9','Proverbs 3:9','Honor the LORD with your substance, with the first fruits of all your increase;')),
 ("2","Pay what we owe","Running costs and taxes are paid next, on time and in full.",q('ROM 13:7','Romans 13:7','Therefore give everyone what you owe: if you owe taxes, pay taxes;',True)),
 ("3","Carry no debt","We only spend what we already have. If something can’t be paid for, it waits.",q('ROM 13:8','Romans 13:8','Owe no one anything, except to love one another;',True)),
 ("4","Keep a small reserve","About three months of running costs are kept so the work doesn’t stop if sales slow.",q('PRO 21:20','Proverbs 21:20','There is precious treasure and oil in the dwelling of the wise, but a foolish man swallows it up.')),
 ("5","Give away the rest","Anything beyond that goes out as resources for people in hard seasons.",q('DEU 15:11','Deuteronomy 15:11','For the poor will never cease out of the land. Therefore I command you to surely open your hand to your brother, to your needy, and to your poor, in your land.')),
]
steps_html=''.join(f'<li class="step"><span class="sn">{n}</span><div><h3>{t}</h3><p>{d}</p>{v}</div></li>' for n,t,d,v in steps)
page=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Mission Funded | Where the Money Comes From | Wonderfully Made Labs</title>
<meta name="description" content="An open ledger for Wonderfully Made Labs: what has funded the work and how any surplus will be given away. We are not a nonprofit, and money sent to us is not a donation." />
<link rel="canonical" href="https://wonderfullymadelabs.com/mission/" />
<meta property="og:title" content="Mission Funded: an open ledger" />
<meta property="og:description" content="What has funded the work and how any surplus will be given away." />
<meta property="og:image" content="https://wonderfullymadelabs.com/assets/home_door.jpg" />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#23344a" />
<link rel="icon" type="image/png" href="/assets/favicon-48.png" />
<link rel="preconnect" href="https://api.fontshare.com" />
<link href="https://api.fontshare.com/v2/css?f[]=chillax@500,600,700&f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/site/nav.css?v=3" />
<link rel="stylesheet" href="/site/home.css?v=3" />
<script defer src="/site/nav.js?v=4"></script>
<script defer data-domain="wonderfullymadelabs.com" src="https://plausible.io/js/script.tagged-events.js"></script>
<style>
.m-hero{{background:var(--navy);color:#efe7d6;padding:76px 0 64px}}
.m-hero h1{{color:#fff;font-size:clamp(38px,5vw,60px);font-weight:700;max-width:15ch}}
.m-hero .eyebrow{{color:var(--gold)}}
.m-hero .lede{{color:#efe7d6;max-width:620px}}
.m-hero .mv{{border-color:var(--gold);max-width:620px}}
.m-hero .mv p{{color:#f3ede0}} .m-hero .mv cite{{color:#cdbf9f}}
.notice{{max-width:880px;margin:-34px auto 0;position:relative;background:#fff;border-radius:16px;padding:24px 28px;box-shadow:0 0 0 2px var(--gold),0 24px 40px -28px rgba(35,52,74,.5)}}
.notice h2{{font-size:22px;margin-bottom:8px}}
.notice p{{margin:6px 0 0}}
.sec{{max-width:880px;margin:0 auto;padding:64px 20px 0}}
.sec>h2{{font-size:clamp(28px,3.4vw,38px);margin-bottom:10px}}
.sec>p.intro{{color:var(--soft);max-width:640px;margin:0 0 24px}}
.kpis{{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:8px 0 26px}}
.kpi{{background:#fff;border-radius:14px;padding:18px 20px;box-shadow:0 0 0 1px rgba(35,52,74,.08)}}
.kpi small{{display:block;font-family:var(--alt);font-weight:700;text-transform:uppercase;letter-spacing:.1em;font-size:12px;color:var(--soft)}}
.kpi b{{display:block;font-family:var(--display);font-size:30px;color:var(--navy);margin-top:6px;font-variant-numeric:tabular-nums}}
table.led{{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 0 0 1px rgba(35,52,74,.08);margin-bottom:18px}}
.led caption{{text-align:left;font-family:var(--alt);font-weight:700;color:var(--navy);padding:0 0 8px}}
.led td,.led th{{padding:13px 16px;border-bottom:1px solid rgba(35,52,74,.08);vertical-align:top;text-align:left}}
.led th{{font-family:var(--alt);font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--soft)}}
.led td small{{display:block;color:var(--soft);font-size:14.5px;margin-top:2px}}
.led .n{{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}}
.led .d{{color:var(--soft);white-space:nowrap;font-size:15px}}
.led tfoot td{{font-weight:700;color:var(--navy);border-bottom:0;background:var(--cream-2)}}
.bars{{margin:10px 0 0}}
.bar{{display:grid;grid-template-columns:190px 1fr 96px;gap:12px;align-items:center;padding:6px 0;font-size:15px}}
.bt{{background:var(--cream-2);border-radius:99px;height:12px;overflow:hidden}}
.bt i{{display:block;height:100%;background:var(--gold-d);border-radius:99px}}
.bv{{text-align:right;font-variant-numeric:tabular-nums}}
ol.steps{{list-style:none;padding:0;margin:0}}
.step{{display:grid;grid-template-columns:52px 1fr;gap:18px;padding:26px 0;border-bottom:1px solid rgba(35,52,74,.1)}}
.step:last-child{{border-bottom:0}}
.sn{{width:44px;height:44px;border-radius:50%;background:var(--navy);color:var(--gold);display:grid;place-items:center;font-family:var(--display);font-weight:700;font-size:20px}}
.step h3{{font-size:22px}} .step p{{margin:6px 0 0}}
.mv{{margin:14px 0 0;border-left:3px solid var(--gold);padding:2px 0 2px 14px}}
.mv p{{margin:0;font-style:italic;color:var(--ink)}}
.mv cite{{display:block;font-style:normal;font-size:14px;color:var(--soft);margin-top:4px}}
.grid2{{display:grid;grid-template-columns:1fr 1fr;gap:16px}}
.card{{background:#fff;border-radius:14px;padding:22px;box-shadow:0 0 0 1px rgba(35,52,74,.08)}}
.card h3{{font-size:20px;margin-bottom:6px}}
.card ul{{margin:8px 0 0;padding-left:20px}}
.help{{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}}
.fine{{font-size:14.5px;color:var(--soft);margin-top:14px}}
.sign{{text-align:center;font-family:var(--display);color:var(--navy);font-size:22px;padding:56px 20px 72px}}
@media (max-width:720px){{
 .kpis{{grid-template-columns:1fr}} .grid2{{grid-template-columns:1fr}}
 .bar{{grid-template-columns:1fr 84px}} .bar .bt{{grid-column:1/-1;order:3}}
 .led .d{{display:none}} .notice{{margin:-28px 16px 0;padding:20px}}
 .led td,.led th{{padding:12px}}
}}
</style>
</head>
<body class="home">
<main id="main">
<section class="m-hero" aria-labelledby="mH"><div class="wrap">
  <p class="eyebrow">Mission Funded</p>
  <h1 id="mH">Where the money comes from, and where it will go.</h1>
  <p class="lede">An open ledger for this work. The goal is to break even on what it costs to run, then give away whatever is left as resources for people in hard seasons.</p>
  {q('2CO 8:21','2 Corinthians 8:21','Having regard for honorable things, not only in the sight of the Lord, but also in the sight of men.')}
</div></section>

<aside class="notice" aria-labelledby="nH">
  <h2 id="nH">Please read this first</h2>
  <p><b>Wonderfully Made Labs is not a nonprofit, at least not yet.</b> It is a small sole-proprietor business.</p>
  <p>Money you send us is <b>not a donation</b> and <b>is not tax-deductible</b>. When you buy a book or printable, that is a purchase. If you choose to contribute, it is a gift to a small business and is counted here as income.</p>
  <p>If we ever form a nonprofit or partner with one, we will say so on this page first.</p>
</aside>

<section class="sec" aria-labelledby="fH">
  <p class="eyebrow">The ledger</p>
  <h2 id="fH">Funded to date</h2>
  <p class="intro">Founder money is shown as one anonymous line, because the point is the work, not who paid for it.</p>
  {q('LUK 14:28','Luke 14:28','For which of you, desiring to build a tower, doesn’t first sit down and count the cost, to see if he has enough to complete it?')}
  <div class="kpis" style="margin-top:26px">
    <div class="kpi"><small>Funded to date</small><b>{m(tin)}</b></div>
    <div class="kpi"><small>From sales</small><b>{m(L['in'][1][1])}</b></div>
    <div class="kpi"><small>Given away so far</small><b>{m(L['given'])}</b></div>
  </div>
  <table class="led"><caption>Where the funding came from</caption>
    <thead><tr><th>Source</th><th class="n">Amount</th></tr></thead>
    <tbody>{rows_in}</tbody>
    <tfoot><tr><td>Funded to date</td><td class="n">{m(tin)}</td></tr></tfoot></table>
  <p class="fine">Last updated {L['updated']}.</p>
</section>

<section class="sec" aria-labelledby="bH">
  <p class="eyebrow">What it has built</p>
  <h2 id="bH">What the money has made</h2>
  <div class="grid2">
    <div class="card"><h3>Open to everyone on the site</h3><ul>
      <li>Held, a 7-day walk through grief, with audio and journal</li>
      <li>Breath Prayer and Walk with Him</li>
      <li>The 31-day prayer companion</li>
      <li>Hidden-verse coloring pages and printables</li>
      <li>Heart, cancer and body-science stories for families</li></ul></div>
    <div class="card"><h3>Books and printables for sale</h3><ul>
      <li>Fearfully and Wonderfully Made, a coloring book</li>
      <li>When I’m Scared, God Is With Me, a journal</li>
      <li>Seek and You Will Find</li>
      <li>The Light Has Come, an Advent devotional</li>
      <li>Printables on Etsy and in the shop</li></ul></div>
  </div>
  {q('LUK 16:10','Luke 16:10','He who is faithful in a very little is faithful also in much.',True)}
</section>

<section class="sec" aria-labelledby="hH">
  <p class="eyebrow">How we handle money</p>
  <h2 id="hH">Five rules, in this order</h2>
  <p class="intro">Any money that comes in, from sales or contributions, follows these steps.</p>
  <ol class="steps">{steps_html}</ol>
</section>

<section class="sec" aria-labelledby="gH">
  <p class="eyebrow">Where the giving goes</p>
  <h2 id="gH">Resources in bulk, for people in hard seasons</h2>
  <p class="intro">Once sales cover the cost of running, the giving share buys books, journals and printed resources in bulk for groups that walk with people in hard seasons. Each gift will be listed here with what was sent and where it went (the kind of group, not names).</p>
  <div class="grid2">
    <div class="card"><h3>Who we hope to serve</h3><ul>
      <li>Grief groups and hospice teams</li>
      <li>Hospital chaplains and children’s hospitals</li>
      <li>Churches and pregnancy centers</li></ul></div>
    <div class="card"><h3>What we will post</h3><ul>
      <li>What was bought, and what it cost</li>
      <li>What kind of group received it</li>
      <li>The date it was sent</li></ul></div>
  </div>
  {q('JAM 1:27','James 1:27','Pure religion and undefiled before our God and Father is this: to visit the fatherless and widows in their affliction,',True)}
  {q('MAT 25:40','Matthew 25:40','because you did it to one of the least of these my brothers, you did it to me.',True)}
</section>

<section class="sec" aria-labelledby="wH">
  <p class="eyebrow">If you want to help</p>
  <h2 id="wH">Ways to be part of it</h2>
  <p class="intro">Praying and sharing help just as much as buying something. If you do want to give, give only what you have decided in your heart, and never under pressure.</p>
  {q('2CO 9:7','2 Corinthians 9:7','Let each man give according as he has determined in his heart, not grudgingly or under compulsion, for God loves a cheerful giver.')}
  <div class="help">
    <a class="btn btn-gold" href="/shop.html" data-t="mission_shop">Visit the shop</a>
    <a class="btn btn-line" href="/jesus/#pray" data-t="mission_pray">Pray with us</a>
    <a class="btn btn-line" href="https://buy.stripe.com/9B600ka9p5aiddBcX39Zm00" target="_blank" rel="noopener" data-t="mission_contribute">Contribute to the work</a>
  </div>
  <p class="fine">A contribution is a gift to a small business, not a donation to a charity. It is not tax-deductible, and it is counted above as outside contributions.</p>
  {q('2CO 8:20','2 Corinthians 8:20','We are avoiding this, that any man should blame us concerning this abundance which is administered by us.')}
  {q('1CO 4:2','1 Corinthians 4:2','Here, moreover, it is required of stewards that they be found faithful.')}
</section>

<p class="sign">To God be the glory.</p>
</main>
</body>
</html>
'''
open(os.path.join(HERE,'..','..','mission','index.html'),'w',encoding='utf-8').write(page)
print('ok',tin,tout)
