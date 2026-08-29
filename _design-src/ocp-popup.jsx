const {Button,FoilText,LogoPuck,Badge,Input}=window.OakCliffPilatesDesignSystem_d090e5;
const POP_REASONS=["I'm new to reformer","I want to get stronger","I'm coming back from an injury","I'm here for the community"];
const ARKETA="https://app.arketa.co/oakcliffpilates";
const POP_OFFERS=[
  {n:"3 classes",p:"$25",d:"Try all three studios before you commit.",u:ARKETA},
  {n:"1 week unlimited",p:"$59",d:"Seven days, every class, every studio.",u:ARKETA,best:true},
  {n:"10 classes",p:"$145",d:"For the ones who already know. Expires in 30 days.",u:ARKETA}
];
const popCss={
  veil:{position:"fixed",inset:0,zIndex:100,background:"rgba(11,11,11,.72)",backdropFilter:"blur(14px) saturate(140%)",display:"flex",alignItems:"center",justifyContent:"center",padding:24,animation:"popFade .18s cubic-bezier(.2,.7,.3,1)"},
  shell:{position:"relative",width:"min(1080px,100%)",maxHeight:"min(720px,92vh)",display:"grid",gridTemplateColumns:"1.05fr .95fr",gridTemplateRows:"minmax(0,1fr)",background:"var(--ocp-black)",border:"1px solid var(--border-hairline)",boxShadow:"0 40px 80px -20px rgba(0,0,0,.9)",overflow:"hidden"},
  panel:{padding:"56px 56px 48px",display:"flex",flexDirection:"column",gap:24,minHeight:0,overflowY:"auto"},
  photo:{position:"relative",overflow:"hidden",borderLeft:"1px solid var(--border-hairline)"},
  eyebrow:{font:"var(--text-style-eyebrow)",letterSpacing:"var(--ls-eyebrow-wide)",textTransform:"uppercase",color:"var(--ocp-gold)",margin:0},
  head:{fontFamily:"var(--font-display)",fontWeight:"var(--fw-bold)",fontSize:"var(--type-display-2)",lineHeight:"var(--lh-display)",letterSpacing:"var(--ls-display)",textTransform:"uppercase",margin:0},
  offerRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:16,padding:"14px 0",borderTop:"1px solid var(--border-subtle)",fontFamily:"var(--font-display)",fontWeight:"var(--fw-semibold)",fontSize:"var(--type-display-5)",letterSpacing:"var(--ls-display)",textTransform:"uppercase"},
  ask:{font:"var(--text-style-body)",color:"var(--text-secondary)",margin:0},
  fine:{font:"var(--fw-regular) var(--type-caption)/1.5 var(--font-body)",color:"var(--text-muted)",margin:0},
  close:{position:"absolute",top:16,right:16,zIndex:4,width:40,height:40,display:"grid",placeItems:"center",background:"rgba(11,11,11,.6)",border:"1px solid var(--border-hairline)",borderRadius:2,color:"var(--ocp-cream)",font:"16px var(--font-body)",cursor:"pointer"},
  ghost:{alignSelf:"center",background:"none",border:0,color:"var(--text-muted)",font:"var(--fw-bold) var(--type-micro)/1 var(--font-body)",letterSpacing:"var(--ls-eyebrow-wide)",textTransform:"uppercase",cursor:"pointer",padding:"12px 4px"},
  back:{alignSelf:"flex-start",background:"none",border:0,color:"var(--text-muted)",font:"var(--fw-bold) var(--type-micro)/1 var(--font-body)",letterSpacing:"var(--ls-eyebrow-wide)",textTransform:"uppercase",cursor:"pointer",padding:0},
  steps:{display:"flex",gap:8,alignItems:"center"},
  dot:on=>({width:on?28:8,height:3,background:on?"var(--ocp-gold)":"var(--border-hairline)",transition:"all .18s cubic-bezier(.2,.7,.3,1)"}),
  offerCard:best=>({display:"block",textDecoration:"none",padding:"20px 22px",background:"#111110",border:"1px solid "+(best?"var(--ocp-gold)":"var(--border-hairline)"),borderRadius:8,color:"var(--ocp-cream)"}),
  offerTop:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:16,fontFamily:"var(--font-display)",fontWeight:"var(--fw-semibold)",fontSize:"var(--type-display-5)",letterSpacing:"var(--ls-display)",textTransform:"uppercase"}
};
function IntroOfferPopup({open,onClose}){
  const [step,setStep]=React.useState(0);
  const [picked,setPicked]=React.useState(null);
  const [form,setForm]=React.useState({name:"",email:"",phone:""});
  React.useEffect(()=>{const h=e=>e.key==="Escape"&&onClose();window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h)},[onClose]);
  if(!open)return null;
  const set=k=>e=>setForm(f=>({...f,[k]:e.target.value}));
  const ready=form.name.trim()&&/.+@.+\..+/.test(form.email);
  return <div style={popCss.veil} onClick={onClose}>
    <style>{`@keyframes popFade{from{opacity:0;transform:translateY(8px)}}@media(max-width:820px){.pop-shell{grid-template-columns:1fr!important}.pop-photo{display:none!important}.pop-panel{padding:44px 24px 32px!important}}.pop-offer:hover{border-color:var(--ocp-gold)!important;background:rgba(201,162,74,.1)!important}`}</style>
    <div className="pop-shell" style={popCss.shell} onClick={e=>e.stopPropagation()}>
      <button style={popCss.close} onClick={onClose} aria-label="Close">✕</button>
      <div className="pop-panel" style={popCss.panel}>
        <div style={{display:"flex",alignItems:"center",gap:16}}><LogoPuck finish="gold" size={44} assetBase="assets/ocp"/><p style={popCss.eyebrow}>New here · intro offer</p></div>
        <div style={popCss.steps}>{[0,1,2].map(i=><span key={i} style={popCss.dot(i<=step)}></span>)}</div>
        {step===0&&<>
          <h2 style={popCss.head}>Start at <FoilText>$25</FoilText></h2>
          <p style={popCss.fine}>3 Classes for $25, 1 Week Unlimited for $59 and 10 Classes for $145.</p>
          <div>{POP_OFFERS.map(o=><div key={o.n} style={popCss.offerRow}><span>{o.n}</span><span style={{color:"var(--ocp-gold)"}}>{o.p}</span></div>)}</div>
          <p style={popCss.ask}>First, what brings you in?</p>
          <div style={{display:"grid",gap:10}}>{POP_REASONS.map(r=><Button key={r} variant="secondary" size="md" fullWidth style={{whiteSpace:"normal",textAlign:"center",height:"auto",minHeight:"var(--control-height)",paddingTop:12,paddingBottom:12}} onClick={()=>{setPicked(r);setStep(1)}}>{r}</Button>)}</div>
          <button style={popCss.ghost} onClick={onClose}>No, thanks</button>
        </>}
        {step===1&&<>
          <button style={popCss.back} onClick={()=>setStep(0)}>← Back</button>
          <h2 style={popCss.head}>Tell us who you are.</h2>
          <p style={popCss.ask}>“{picked}” · we've got you. Drop your info and we'll hold your intro offer.</p>
          <div style={{display:"grid",gap:14}}>
            <Input label="Name" placeholder="First and last" value={form.name} onChange={set("name")}/>
            <Input label="Email" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")}/>
            <Input label="Phone" type="tel" placeholder="Optional" value={form.phone} onChange={set("phone")}/>
          </div>
          <div style={{display:"grid",gap:12,marginTop:4}}>
            <Button variant="primary" size="lg" fullWidth disabled={!ready} onClick={()=>setStep(2)}>See my offers</Button>
            <p style={popCss.fine}>First-timers only, one per person. We'll text you class reminders, never spam.</p>
          </div>
          <button style={popCss.ghost} onClick={onClose}>Never mind</button>
        </>}
        {step===2&&<>
          <button style={popCss.back} onClick={()=>setStep(1)}>← Back</button>
          <h2 style={popCss.head}>You're in{form.name?", "+form.name.trim().split(" ")[0]:""}.</h2>
          <p style={popCss.ask}>Pick your intro offer and we'll take you straight to checkout.</p>
          <div style={{display:"grid",gap:12}}>{POP_OFFERS.map(o=>
            <a key={o.n} className="pop-offer" style={popCss.offerCard(o.best)} href={o.u} target="_blank" rel="noopener">
              <div style={popCss.offerTop}><span>{o.n}</span><span style={{color:"var(--ocp-gold)"}}>{o.p}</span></div>
              <p style={{margin:"10px 0 0",color:"var(--text-secondary)",font:"var(--text-style-body)",fontSize:"var(--type-body-sm)"}}>{o.d}</p>
              {o.best&&<div style={{marginTop:12}}><Badge tone="gold">Most popular</Badge></div>}
            </a>)}</div>
          <p style={popCss.fine}>Grip socks required. Roll in ten minutes early. Cancel free up to 4 hours out.</p>
          <button style={popCss.ghost} onClick={onClose}>Never mind</button>
        </>}
      </div>
      <div className="pop-photo" style={popCss.photo}>
        <img src="assets/ocp/photo-neon-sign.jpg" alt="Oak Cliff Pilates studio" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"var(--ocp-photo-scrim)"}}></div>
        <div style={{position:"absolute",left:28,bottom:24,right:28}}><Badge tone="outline">Are you down with OCP?</Badge></div>
      </div>
    </div>
  </div>;
}
Object.assign(window,{IntroOfferPopup});
