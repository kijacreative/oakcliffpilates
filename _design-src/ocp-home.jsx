const DS=window.OakCliffPilatesDesignSystem_d090e5;
const {Button,Card,Badge,Tag,Input,LogoPuck,SectionLabel,FoilText,StatBlock,PhotoFrame}=DS;
const P="assets/ocp/";
const FU="https://framerusercontent.com/images/";
const NAV=["Classes","Schedule","Studios","Membership","Shop"];
const MQ=["Energy Elevated™","Are you down with OCP?","Classical AF","OG Reformer","Arms, Ass & Abs","Pilates in the Park"];
const CLASSES=[
  {n:"OG Reformer",img:"og-reformer.jpg",d:"Where classical Pilates meets a faster pace and a little more fire. It blends foundational movement with modern, athletic sequences that challenge your strength, balance, and agility."},
  {n:"Classical AF",img:"photo-golden-hour-class.jpg",d:"Where good Pilates habits are built. It targets deep muscles and builds real core strength through slow, classic Pilates movement."},
  {n:"Arms, Ass & Abs",img:"arms-ass-abs.jpg",d:"Exactly what it sounds like. Upper body, glutes, and core worked through a series of counts, pulses, and holds that just keep building."},
  {n:"Other class types",img:"other-class-types.jpg",d:"We offer other Reformer class options as well, from Restorative Pilates, Tabata Pilates, Jump board classes and our many Mat classes in the park and around Dallas."}
];
const STUDIOS=[
  {n:"Bishop Arts",m:"Studio 01",a:"196 W. Davis St. #140",d:"Our original Dallas Pilates studio serving the vibrant Bishop Arts District since 2021."},
  {n:"Uptown",m:"Studio 02",a:"2222 McKinney Ave. #160",d:"Bringing sleek, sophisticated reformer Pilates to Uptown Dallas."},
  {n:"Lower Greenville",m:"Studio 03",a:"2000 Greenville Ave.",d:"Offering the same high-energy reformer Pilates classes Dallas loves."}
];
const TEAM=[
  {n:"Amanda Mecsey",r:"Owner/Instructor",img:"amanda.jpg"},
  {n:"Charley Carroll",r:"General Manager/Instructor",img:"charley.png"},
  {n:"Kiel Jared",r:"Owner/Operations",img:"kiel.jpg"}
];
const REVIEWS=[
  {n:"Bishop Arts",u:"https://go.revublast.com/ocp-bishop"},
  {n:"Uptown",u:"https://go.revublast.com/ocp-uptown"},
  {n:"Lower Greenville",u:"https://go.revublast.com/ocp-lower-greenville"}
];
const TIERS=[
  {n:"Unlimited",c:"Per month",p:"$209",items:["Every class, every studio","VIP perks","Priority waitlist"],hot:true},
  {n:"The Regular",c:"12 per month",p:"$189",items:["12 classes a month","Any studio","Less than $16/class"]},
  {n:"Perfect Balance",c:"8 per month",p:"$159",items:["8 classes a month","Any studio","Perfect for 2x per week"]},
  {n:"OCP Lite",c:"4 per month",p:"$99",items:["4 classes a month","Any studio","Good for once a week"]}
];
const QUOTES=[
  {q:"I walked in thinking I'd hate it. Three years later I'm here four times a week.",a:"Member since 2022"},
  {q:"First studio where the playlist matched the neighborhood.",a:"Member since 2021"},
  {q:"Nobody looked at me sideways on day one. That's the whole reason I stayed.",a:"Member since 2023"}
];
const secHead=(num,label,title,right)=><div className="sec-head"><div style={{display:"grid",gap:20}}><SectionLabel number={num}>{label}</SectionLabel><h2 className="dsp">{title}</h2></div>{right}</div>;

function Nav({onBook}){
  return <header className="nav"><div className="wrap nav-in">
    <a href="#top" style={{display:"flex",alignItems:"center",gap:14}}><LogoPuck finish="gold" size={44} assetBase={P}/><span className="dsp" style={{fontSize:"var(--type-display-5)"}}>Oak Cliff Pilates</span></a>
    <nav className="nav-links">{NAV.map(n=><a key={n} href="#top">{n}</a>)}</nav>
    <div style={{display:"flex",alignItems:"center",gap:12}}><Button size="md" onClick={onBook}>Grab a spot</Button><button className="nav-burger" aria-label="Menu"><i></i><i></i><i></i></button></div>
  </div></header>;
}

function Hero({onBook}){
  return <section className="hero" id="top">
    <video src="uploads/OCP%20Home%20Page%20Video%20copy.mp4" poster={P+"photo-golden-hour-class.jpg"} autoPlay muted loop playsInline aria-label="Reformer class at Oak Cliff Pilates"/>
    <div className="hero-frame"></div>
    <div className="wrap hero-in">
      <p className="eyebrow" style={{letterSpacing:"var(--ls-eyebrow-wide)"}}>Dallas · 3 studios · 250+ classes a week</p>
      <h1 className="dsp" style={{margin:"24px 0 28px"}}>Pilates Reimagined,<br/><FoilText>Energy Elevated™</FoilText></h1>
      <p className="lede" style={{marginBottom:36}}>Reformer Pilates at three Dallas studios in Bishop Arts, Uptown and Lower Greenville. 250+ classes a week, capped at 12.</p>
      <div className="btn-row"><Button size="lg" as="a" href="https://app.arketa.co/oakcliffpilates" target="_blank" rel="noopener">Book now</Button><Button size="lg" variant="secondary" as="a" href="#studios">Our locations</Button></div>
      <div className="hero-meta"><span>01 · Energy Elevated™</span><span>Anti-Pilates Pilates</span></div>
    </div>
  </section>;
}

function Marquee(){
  const items=[...MQ,...MQ];
  return <div className="marquee"><div className="marquee-t">{items.map((m,i)=><span key={i}>{m} <span style={{color:"var(--ocp-gold-deep)"}}>·</span></span>)}</div></div>;
}

function Stats(){
  return <div className="wrap" style={{padding:"0 48px"}}><div className="stats">
    <StatBlock value="2016" label="Started as Pilates in the Park" size="lg"/>
    <StatBlock value="3" label="Studios across Dallas" size="lg" divider/>
    <StatBlock value="250+" label="Classes every week" size="lg" divider/>
    <StatBlock value="∞" label="Neighbors, not clients" size="lg" divider/>
  </div></div>;
}

function Manifesto(){
  return <section className="band"><div className="wrap">
    {secHead("01","Let's Flex & Flow","Where Pilates meets hustle.")}
    <div className="grid g2" style={{alignItems:"center"}}>
      <PhotoFrame src={FU+"LqezpxNV5CnrvB79kBMelqpQ7hI.jpg?width=1600"} alt="Reformer class at Oak Cliff Pilates" ratio="16 / 10"/>
      <div>
        <h3 className="dsp" style={{fontSize:"var(--type-display-4)",margin:0}}>Your Pilates, Your Style.</h3>
        <p className="lede" style={{marginTop:20,fontSize:"var(--type-body)"}}>Whether you're rocking with the OG Reformer (modern Pilates) or keeping it real with Pilates AF (Authentic Form), our classes are designed to hit different. Plus, every trainer brings their own flair and energy to the table, so no two classes are alike.</p>
        <p className="lede" style={{marginTop:20,fontSize:"var(--type-body)"}}>Oak Cliff Pilates has grown from a small Bishop Arts studio into a city-wide movement, rooted in great energy, strong relationships, and the belief that Pilates should feel like home. Wherever you show up, you'll feel the same OCP vibe: welcoming, empowering, and community-driven.</p>
        <div className="btn-row" style={{marginTop:32}}><Button as="a" href="https://app.arketa.co/oakcliffpilates" target="_blank" rel="noopener">Join OCP</Button></div>
      </div>
    </div>
  </div></section>;
}

function IntroBand({onBook}){
  return <section className="band band-light" id="offer"><div className="wrap">
    {secHead("02","New client specials","Save over 70% on your first 3 classes!",<div style={{display:"grid",gap:16,justifyItems:"end"}}><Badge tone="ink">First-timers only</Badge><Button variant="onLight" size="lg" as="a" href="https://app.arketa.co/oakcliffpilates/pricing/checkout/CX8QBVvU6bdj31zrkZbR" target="_blank" rel="noopener">Sign up now</Button></div>)}
    <p className="lede" style={{marginBottom:24,fontSize:"var(--type-body)",color:"var(--text-on-light-secondary)",maxWidth:"60ch"}}>Don't just dip a toe in, dive into Pilates with 3 classes for only $25 at any location. This offer's too good to pass up. What are you waiting for? Let's move!</p>
    <p className="lede" style={{marginBottom:40,fontSize:"var(--type-display-5)",fontFamily:"var(--font-display)",textTransform:"uppercase",letterSpacing:"var(--ls-display)",color:"var(--text-on-light)",maxWidth:"38ch"}}>3 Classes for $25, 1 Week Unlimited for $59 and 10 Classes for $145.</p>
    <div className="grid g3">
      {[{n:"3 classes",p:"$25",d:"Try all three studios before you commit."},{n:"1 week unlimited",p:"$59",d:"Seven days, every class, every studio.",best:true},{n:"10 classes",p:"$145",d:"For the ones who already know. Expires in 30 days."}].map(o=>
        <Card key={o.n} variant="light" hoverable padding="32px" className={o.best?"offer-best":undefined} footer={<><span>{o.n}</span><span>{o.best?"Best value":"Intro"}</span></>}>
          {o.best&&<div className="offer-flag">Most popular</div>}
          <div className="dsp" style={{fontSize:"var(--type-display-1)",color:"var(--ocp-black)"}}>{o.p}</div>
          <p style={{margin:"16px 0 0",color:"var(--text-on-light-secondary)",fontSize:"var(--type-body-sm)",lineHeight:"var(--lh-body)"}}>{o.d}</p>
        </Card>)}
    </div>
    <p style={{margin:"32px 0 0",color:"var(--text-on-light-secondary)",fontSize:"var(--type-caption)"}}>Grip socks required, roll in ten minutes early. Cancel free up to 4 hours out.</p>
  </div></section>;
}

function Classes(){
  return <section className="band" id="schedule"><div className="wrap">
    {secHead("03","What we run","Our classes & training options.",<Button variant="secondary" as="a" href="https://app.arketa.co/oakcliffpilates" target="_blank" rel="noopener">Full schedule</Button>)}
    <div className="grid g2">{CLASSES.map(c=><div key={c.n}>
      <PhotoFrame src={P+c.img} alt={c.n} ratio="16 / 10" caption={c.n}/>
      <p className="lede" style={{marginTop:20,fontSize:"var(--type-body)"}}>{c.d}</p>
    </div>)}</div>
    <p className="lede" style={{marginTop:48,fontSize:"var(--type-body)",maxWidth:"78ch"}}>Group Reformer classes are the heart of Oak Cliff Pilates: high-energy, music-driven 45-minute full-body workouts on premium reformer equipment, morning through evening, all levels welcome, capped at 12 students. Private Pilates training offers one-on-one sessions for specific goals, injury recovery, or faster results, and semi-private sessions let you train with a friend.</p>
  </div></section>;
}

function Studios(){
  return <section className="band" style={{paddingTop:0}} id="studios"><div className="wrap">
    {secHead("04","Where we are","Our locations.",<Button variant="secondary" as="a" href="https://oakcliffpilates.framer.website/locations" target="_blank" rel="noopener">Get directions</Button>)}
    <div className="grid g3">{STUDIOS.map((s,i)=><Card key={s.n} variant="dark" hoverable padding="0" footer={<><span>{s.n}</span><span>{s.m}</span></>}>
      <div style={{position:"relative",aspectRatio:"4 / 5"}}><image-slot id={"ocp-studio-"+i} shape="rect" placeholder={"Drop a photo of "+s.n}></image-slot></div>
      <div style={{padding:"24px 24px 8px"}}><p className="tk">{s.a}</p><p style={{margin:"10px 0 0",color:"var(--text-secondary)",fontSize:"var(--type-body-sm)",lineHeight:"var(--lh-body)"}}>{s.d}</p></div>
    </Card>)}</div>
  </div></section>;
}

function Team(){
  return <section className="band band-light" id="team"><div className="wrap">
    {secHead("05","More than just instructors","We're your Pilates Hype Team!",<Button variant="onLight" as="a" href="https://oakcliffpilates.framer.website/meet-the-trainers" target="_blank" rel="noopener">Meet the team</Button>)}
    <p className="lede" style={{marginBottom:40,fontSize:"var(--type-body)",color:"var(--text-on-light-secondary)",maxWidth:"64ch"}}>High-energy, results-driven reformer Pilates for busy professionals, parents, and everyone in between, across Bishop Arts, Uptown, and Lower Greenville.</p>
    <div className="grid g3">{TEAM.map((t,i)=><Card key={i} variant="light" hoverable padding="0" footer={<><span>{t.n}</span><span>{t.r}</span></>}>
      <div style={{position:"relative",aspectRatio:"3 / 4",overflow:"hidden"}}><img src={P+t.img} alt={t.n} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/></div>
    </Card>)}</div>
  </div></section>;
}

function Membership({onBook}){
  return <section className="band" id="membership"><div className="wrap">
    {secHead("06","Lock it in","Memberships.")}
    <div className="grid g4">{TIERS.map(t=><Card key={t.n} variant={t.hot?"outline":"dark"} padding="36px" hoverable footer={<><span>{t.n}</span><span>{t.c}</span></>}>
      <div style={{marginBottom:20,minHeight:26}}>{t.hot&&<Badge tone="gold">Most popular</Badge>}</div>
      <div className="dsp" style={{fontSize:"var(--type-display-3)",color:"var(--ocp-gold)"}}>{t.p}<span style={{fontSize:"var(--type-body)",fontFamily:"var(--font-body)",color:"var(--text-secondary)",letterSpacing:0}}>/mo</span></div>
      <div style={{display:"grid",gap:12,margin:"28px 0 32px"}}>{t.items.map(i=><div key={i} style={{display:"flex",gap:12,color:"var(--text-secondary)",fontSize:"var(--type-body-sm)",lineHeight:"var(--lh-body)",borderTop:"1px solid var(--border-subtle)",paddingTop:12}}><span style={{color:"var(--ocp-gold-deep)"}}>·</span><span>{i}</span></div>)}</div>
      <Button variant={t.hot?"primary":"secondary"} fullWidth onClick={onBook}>Lock it in</Button>
    </Card>)}</div>
    <p className="tk" style={{marginTop:28}}>All memberships work at every studio. Cancel or change any time.</p>
  </div></section>;
}

const FAQS=[
  {q:"Do I need experience to take a reformer Pilates class?",a:"No experience is needed. Every group reformer class at Oak Cliff Pilates in Dallas welcomes complete beginners, and our certified trainers offer modifications throughout. Classes are capped at 12 people so your instructor can set up your reformer, check your form and adjust the work to suit you from your very first session."},
  {q:"What should I wear to your Dallas Pilates classes?",a:"Wear fitted activewear and grip socks. Grip socks are required at all three Oak Cliff Pilates studios in Dallas and are available at the front desk if you need a pair. Avoid clothing with zips or buttons, which can catch on the reformer. Bring a water bottle. Everything else is provided."},
  {q:"How much does reformer Pilates cost in Dallas?",a:"At Oak Cliff Pilates in Dallas, new clients get three reformer classes for $25. After that, a drop in class is $30, class packs start at $290 for ten, and monthly memberships run from $99 for four classes to $209 for unlimited. Every plan works at all three studios."},
  {q:"Where are the Oak Cliff Pilates studios located?",a:"Oak Cliff Pilates has three Dallas studios. Bishop Arts, our original location, is at 196 W Davis St #140. Uptown is at 2222 McKinney Ave #160. Lower Greenville, our 4,000 square foot flagship, is at 2000 Greenville Ave. All three run the full class schedule."},
  {q:"Is there parking at your Dallas Pilates studios?",a:"Yes. Bishop Arts has validated parking in the garage directly below the studio, with a QR code at the front desk to validate. Uptown has garage parking beneath the building, accessible from Thomas Ave. Parking details for Lower Greenville are listed on that studio page at oakcliffpilates.com."},
  {q:"How long is a class and how many people are in it?",a:"Group reformer classes at Oak Cliff Pilates run 45 minutes and are capped at 12 students. The small size is deliberate. It means your trainer can watch your form, offer hands on cues and adjust spring resistance individually, which is difficult in a larger room."}
];
function Faq(){
  const [open,setOpen]=React.useState(0);
  return <section className="band band-light" id="faq"><div className="wrap">
    {secHead("08","Good questions","Everything first-timers ask us.")}
    <div style={{display:"grid",maxWidth:"78ch"}}>{FAQS.map((f,i)=>{const on=open===i;return <div key={i} style={{borderTop:"1px solid rgba(11,11,11,.14)"}}>
      <button onClick={()=>setOpen(on?-1:i)} aria-expanded={on} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,padding:"24px 0",background:"none",border:0,cursor:"pointer",textAlign:"left",font:"var(--fw-semibold) var(--type-display-5)/1.25 var(--font-display)",letterSpacing:"var(--ls-display)",textTransform:"uppercase",color:"var(--ocp-black)"}}>
        <span>{f.q}</span>
        <span aria-hidden="true" style={{flex:"none",color:"var(--ocp-gold-deep)",font:"var(--fw-regular) 22px/1 var(--font-body)",transform:on?"rotate(45deg)":"none",transition:"transform .18s cubic-bezier(.2,.7,.3,1)"}}>+</span>
      </button>
      {on&&<p style={{margin:"0 0 26px",maxWidth:"66ch",color:"var(--text-on-light-secondary)",fontSize:"var(--type-body)",lineHeight:"var(--lh-body)",textWrap:"pretty"}}>{f.a}</p>}
    </div>})}</div>
  </div></section>;
}

function Quotes(){
  return <section className="band" style={{paddingTop:0}}><div className="wrap">
    {secHead("07","In their words","600+ verified 5 star reviews. From beginners to pros, everybody's getting stronger.")}
    <div className="embedsocial-hashtag" data-ref="fb980bf40d0a2b8e8a2cb383d5e0eff865a98305" ref={el=>{if(el&&!document.getElementById("EmbedSocialHashtagScript")){const js=document.createElement("script");js.id="EmbedSocialHashtagScript";js.src="https://embedsocial.com/cdn/ht.js";document.head.appendChild(js);}}}></div>
    <div style={{marginTop:44,display:"grid",gap:16}}>
      <span className="eyebrow">Leave a review</span>
      <div className="btn-row">{REVIEWS.map(r=><Button key={r.n} variant="secondary" as="a" href={r.u} target="_blank" rel="noopener">{r.n}</Button>)}</div>
    </div>
  </div></section>;
}


function AppBand(){
  return <section className="band" style={{paddingTop:0,paddingBottom:0}}><div className="wrap"><div className="grid g2" style={{alignItems:"center",border:"1px solid var(--border-hairline)",padding:"56px"}}>
    <div>
      <h2 className="dsp" style={{fontSize:"var(--type-display-3)",margin:0}}>Book faster and smarter</h2>
      <p className="lede" style={{marginTop:20,fontSize:"var(--type-body)"}}>Get the Oak Cliff Pilates app on the App Store or Google Play. Book classes, manage your account, grab your spot in seconds.</p>
      <div className="btn-row" style={{marginTop:32}}>
        <Button as="a" href="https://apps.apple.com/us/app/oak-cliff-pilates-2-0/id6754995849" target="_blank" rel="noopener">App Store</Button>
        <Button variant="secondary" as="a" href="https://play.google.com/store/apps/details?id=com.arketa.oakcliffpilates" target="_blank" rel="noopener">Google Play</Button>
      </div>
    </div>
    <img src={FU+"enm9rMNcdUmjI7Lby3TZLv0Jo58.png?width=1080"} alt="Oak Cliff Pilates app" style={{width:"100%",height:"auto",borderRadius:"var(--radius-lg)"}}/>
  </div></div></section>;
}

function Signup(){
  const [email,setEmail]=React.useState("");
  return <section className="band" style={{paddingTop:0}}><div className="wrap"><div style={{border:"1px solid var(--border-hairline)",padding:"72px 56px",display:"grid",gap:32,gridTemplateColumns:"1.1fr .9fr",alignItems:"center"}}>
    <div><h2 className="dsp" style={{fontSize:"var(--type-display-3)"}}>Are you down with OCP?</h2><p className="lede" style={{marginTop:16}}>Schedule drops, pop-ups in the park, and the occasional Happy Hour class. No spam.</p></div>
    <div style={{display:"grid",gap:12}}><Input placeholder="you@email.com" value={email} onChange={e=>setEmail(e.target.value)}/><Button size="lg" fullWidth>Sign me up</Button></div>
  </div></div></section>;
}

function Footer(){
  return <footer className="foot"><div className="wrap">
    <div className="foot-cols">
      <div style={{display:"grid",gap:20,justifyItems:"start"}}><img src="uploads/Anti-pilates club.png" alt="Oak Cliff Pilates — Anti-Pilates Club" style={{width:132,height:"auto",display:"block"}}/><p style={{margin:0,color:"var(--text-secondary)",fontSize:16,maxWidth:"28ch"}}>Your Anti-Pilates Reformer Pilates Studio in Dallas, TX. Since 2016.</p></div>
      <div className="foot-list"><span className="eyebrow">Move</span><a href="https://oakcliffpilates.framer.website/class-schedule" target="_blank" rel="noopener">Class schedule</a><a href="https://oakcliffpilates.framer.website/events" target="_blank" rel="noopener">Events</a><a href="#membership">Memberships</a><a href="#offer">New here</a></div>
      <div className="foot-list"><span className="eyebrow">Studios</span>{STUDIOS.map(s=><a key={s.n} href="#studios">{s.n}</a>)}</div>
      <div className="foot-list"><span className="eyebrow">More</span><a href="https://oakcliffpilates.framer.website/retail" target="_blank" rel="noopener">Retail</a><a href="https://www.ocp-academy.com/" target="_blank" rel="noopener">Training Academy</a><a href="https://oakcliffpilates.framer.website/blog" target="_blank" rel="noopener">In the news</a><a href="https://instagram.com/oakcliffpilates" target="_blank" rel="noopener">Instagram</a></div>
    </div>
    <h2 className="dsp foot-big">Energy Elevated™</h2>
    <div className="rowlabel" style={{marginTop:32,color:"var(--text-muted)"}}><span>© 2026 Oak Cliff Pilates</span><span>Design reference for Framer build</span></div>
  </div></footer>;
}

function OCPHome(){
  const [pop,setPop]=React.useState(false);
  React.useEffect(()=>{const t=setTimeout(()=>setPop(true),5000);return()=>clearTimeout(t)},[]);
  const open=()=>setPop(true);
  return <>
    <Nav onBook={open}/><Hero onBook={open}/><Marquee/>
    <div style={{padding:"96px 0"}}><Stats/></div>
    <Manifesto/><IntroBand onBook={open}/><Classes/><Studios/><Team/><Membership onBook={open}/><Quotes/><Faq/><AppBand/><Signup/><Footer/>
    <window.IntroOfferPopup open={pop} onClose={()=>setPop(false)}/>
  </>;
}
Object.assign(window,{OCPHome});
