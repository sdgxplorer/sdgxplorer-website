import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, ArrowRight, Download, Leaf, Globe2, Compass, Smartphone, Check, Menu, X, ChevronDown, Sprout, Mountain, Heart, ShieldCheck } from 'lucide-react';
import { game } from './game';
import './styles.css';

function WorldIllustration() {
  return <svg className="world" viewBox="0 0 700 600" role="img" aria-labelledby="world-title">
    <title id="world-title">An illustrated island with trees, mountains, a village, and a winding river</title>
    <defs><linearGradient id="ground" x2="0" y2="1"><stop stopColor="#91b88b"/><stop offset="1" stopColor="#5f9474"/></linearGradient><linearGradient id="water" x2="1" y2="1"><stop stopColor="#7fcbc1"/><stop offset="1" stopColor="#3a9b96"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="12"/></filter></defs>
    <ellipse cx="357" cy="491" rx="237" ry="33" fill="#244b37" opacity=".15" filter="url(#shadow)"/>
    <circle cx="351" cy="287" r="226" fill="#e8eddb"/>
    <g fill="none" stroke="#b9c9ae" strokeDasharray="4 9"><ellipse cx="355" cy="303" rx="290" ry="196" transform="rotate(-22 355 303)"/></g>
    <path d="M94 337 Q104 255 217 235 L459 245 Q581 274 613 345 L579 414 405 495 211 452 103 389Z" fill="#305b45"/>
    <path d="M94 337 Q104 255 217 235 L459 245 Q581 274 613 345 L572 388 402 458 213 416 103 367Z" fill="url(#ground)"/>
    <path d="M358 261 C470 287 290 311 383 341 S460 372 377 393 S336 424 402 458 L450 438 C397 417 444 414 466 391 S436 346 417 337 S446 286 399 265Z" fill="url(#water)"/>
    <path d="M183 284 282 117 380 288Z" fill="#597b67"/><path d="m282 117 29 171 69 0Z" fill="#3b6553"/>
    <path d="m250 171 32-54 37 65-24-10-14 15-15-21Z" fill="#f5f2df"/>
    <path d="m299 278 82-130 81 137Z" fill="#92a88b"/><path d="m381 148 14 134 67 3Z" fill="#73947b"/><path d="m355 189 26-41 25 42-17-7-10 10-9-11Z" fill="#f5f2df"/>
    <g fill="#f2e8ca" stroke="#cebd92" strokeWidth="2"><path d="m435 308 0-53 48-19 39 29v53l-46 19Z"/><path d="m483 236 0 59 39 23v-53Z" fill="#dfd4b4"/></g>
    <path d="m425 256 51-44 57 49-49-21-49 23Z" fill="#c46a48"/><path d="m476 212 8 28 49 21Z" fill="#9b4e38"/>
    <path d="M454 289v-23l14-5v27M494 280v-17l13 7v17" fill="#608d82"/>
    <g stroke="#e9debd" strokeWidth="9" fill="none"><path d="m228 354 58 26 28-12"/><path d="m233 342 58 26 25-11"/></g>
    <g stroke="#6c694c" strokeWidth="5"><path d="M159 329v-70M196 359v-68M249 314v-55M541 351v-68M506 371v-43M321 412v-54"/></g>
    <g fill="#2c674c"><path d="m159 208-35 73h70Z"/><path d="m159 239-42 63h84Z"/><path d="m196 246-31 64h62Z"/><path d="m196 273-38 55h76Z"/><path d="m249 217-30 65h60Z"/><path d="m541 232-35 74h70Z"/><path d="m541 265-42 64h84Z"/><path d="m506 286-30 63h60Z"/><path d="m321 314-30 66h60Z"/><path d="m321 342-38 56h76Z"/></g>
    <g fill="#6e9b63"><ellipse cx="205" cy="382" rx="18" ry="8"/><ellipse cx="470" cy="349" rx="19" ry="8"/><ellipse cx="373" cy="296" rx="15" ry="6"/></g>
    <g fill="#f1d088"><circle cx="221" cy="328" r="4"/><circle cx="237" cy="339" r="3"/><circle cx="530" cy="379" r="4"/><circle cx="514" cy="386" r="3"/></g>
    <g fill="none" stroke="#42634d" strokeWidth="2.5" strokeLinecap="round"><path d="m430 125 9-4 9 4m23 27 7-3 7 3m-302 22 7-3 7 3"/></g>
  </svg>;
}

const highlights = [
  { icon: Compass, number: '01', title: 'Let curiosity lead', body: 'Step into a world built for discovery. Explore your surroundings and uncover new perspectives along the way.', color: 'green' },
  { icon: Sprout, number: '02', title: 'Play with purpose', body: 'Get to know the Sustainable Development Goals through approachable, meaningful moments of play.', color: 'orange' },
  { icon: Heart, number: '03', title: 'Imagine a better future', body: 'Connect everyday choices with a bigger picture, and find inspiration to make a positive difference.', color: 'blue' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [requirementsTab, setRequirementsTab] = useState('minimum');
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    ['How do I install the APK?', 'When a release is available, download the APK on your Android device. Open the file, allow installation from your browser or file manager if Android prompts you, and follow the installation steps. You can turn that permission off afterward.'],
    ['Is SDGXplorer available for iOS?', 'This download page is prepared for Android APK releases. Information about other platforms will be added when confirmed.'],
    ['Are the device requirements final?', 'No. The specifications shown here are placeholders. They will be updated after the game has been tested on supported Android devices.'],
    ['Where can I find the latest version?', 'The download section on this page will display the current release, file size, and release date once an APK has been added.'],
  ];
  return <>
    <header><a className="brand" href="#home" aria-label="SDGXplorer home"><span className="brand-icon"><Compass size={22}/></span>SDG<span className="brand-light">Xplorer</span><span className="brand-dot">.</span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">{[['The game', 'about'], ['The experience', 'experience'], ['Requirements', 'requirements']].map(([name, id]) => <a key={id} href={'#'+id} onClick={() => setMenuOpen(false)}>{name}</a>)}<a href="#download" className="nav-download" onClick={() => setMenuOpen(false)}>Get the game <ArrowDown size={15}/></a></nav>
    </header>
    <main>
      <section id="home" className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span/> A LITTLE ADVENTURE. A BIGGER PURPOSE.</div><h1>Small steps.<br/>Big <em>impact.</em></h1><p>{game.description}</p><div className="hero-actions"><a className="button primary" href="#download"><Download size={18}/> Get it for Android <ArrowUpRight size={18}/></a><a className="text-link" href="#about">Discover the game <ArrowRight size={17}/></a></div><div className="platform-note"><Smartphone size={15}/> Made for Android <span>·</span> An adventure with purpose</div></div>
        <div className="hero-art"><div className="art-note"><span className="note-icon"><Leaf size={20}/></span><div>A world worth exploring<small>Every discovery starts with you.</small></div></div><WorldIllustration/><div className="floating-tag"><Globe2 size={17}/> Explore. Learn. Make a difference.</div><span className="art-coordinate">YOUR NEXT ADVENTURE STARTS HERE ↗</span></div>
      </section>
      <div className="purpose-strip"><div className="wrap"><span><Leaf size={18}/> Built around a better tomorrow</span><p>Inspired by the <strong>17 Sustainable Development Goals</strong></p><a href="#experience">Find your purpose <ArrowUpRight size={16}/></a></div></div>
      <section id="about" className="about wrap"><div><div className="eyebrow">WELCOME, EXPLORER</div><h2>A little play.<br/>A new perspective.</h2></div><div className="about-copy"><p>Big ideas begin with small discoveries. SDGXplorer invites you to slow down, look closer, and explore what a more sustainable world could look like.</p><p className="muted">An adventure made to spark curiosity about our planet, our communities, and the future we share.</p><span className="draft-label">Preview content · Game details to be confirmed</span></div></section>
      <section id="experience" className="experience wrap"><div className="section-heading"><div><div className="eyebrow">MORE THAN AN ADVENTURE</div><h2>Discover what moves you.</h2></div><span className="section-aside">A glimpse of the journey ahead <ArrowDown size={18}/></span></div><div className="features">{highlights.map(({icon:Icon, number, title, body, color}) => <article className={'feature '+color} key={number}><div className="feature-top"><span className="feature-icon"><Icon size={30} strokeWidth={1.5}/></span><span>{number} /</span></div><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="requirements" className="requirements wrap"><div className="requirements-intro"><div className="eyebrow">READY FOR THE JOURNEY?</div><h2>A little room<br/>for adventure.</h2><p>Check your Android device before you set off. Here’s the proposed setup for a smooth experience.</p><div className="requirement-note"><ShieldCheck size={22}/><span>Draft specifications<small>Final requirements will be confirmed with the first release.</small></span></div></div><div className="spec-panel"><div className="spec-tabs" role="tablist" aria-label="Device requirements">{['minimum', 'recommended'].map(t => <button key={t} role="tab" aria-selected={requirementsTab === t} aria-controls="specifications" id={'tab-'+t} onClick={() => setRequirementsTab(t)} className={requirementsTab === t ? 'active' : ''}>{t === 'minimum' ? 'Minimum' : 'Recommended'}{requirementsTab === t && <Check size={15}/>}</button>)}</div><div id="specifications" role="tabpanel" aria-labelledby={'tab-'+requirementsTab}>{game.requirements.map(r => <div className="spec-row" key={r.label}><span>{r.label}</span><strong>{r[requirementsTab]}</strong></div>)}</div><p className="spec-foot"><Smartphone size={15}/> Android devices only · Placeholder requirements</p></div></section>
      <section id="download" className="download-section wrap"><div className="download-decoration"><Globe2 size={240} strokeWidth={.5}/></div><div className="download-copy"><div className="eyebrow">YOUR NEXT CHAPTER</div><h2>The world is waiting.<br/>Ready to explore?</h2><p>Your next meaningful adventure is just a download away.</p><div className="release-meta"><span><Smartphone size={15}/> Android APK</span><span>Version: {game.release.version}</span><span>Size: {game.release.size}</span></div></div><div className="download-action">{game.release.available ? <a className="button light" href={game.release.apkUrl} download><Download size={19}/> Download APK <ArrowDown size={19}/></a> : <button className="button light" disabled><Download size={19}/> APK coming soon</button>}<p>{game.release.available ? 'Download directly to your Android device.' : 'The first build is getting ready for adventure.'}</p><span className="release-date">Release date: {game.release.date}</span></div></section>
      <section className="faq wrap"><div><div className="eyebrow">A FEW HELPFUL DETAILS</div><h2>Before you set off.</h2><p>Everything you need to get started.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><button aria-expanded={openFaq === i} aria-controls={'faq-'+i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}<ChevronDown size={19} className={openFaq === i ? 'rotated' : ''}/></button><div id={'faq-'+i} hidden={openFaq !== i}><p>{answer}</p></div></div>)}</div></section>
    </main><footer className="wrap"><div><a href="#home" className="brand"><span className="brand-icon"><Compass size={20}/></span>SDG<span className="brand-light">Xplorer</span><span className="brand-dot">.</span></a><p>Explore with curiosity. Leave with purpose.</p></div><div className="footer-right"><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} SDGXplorer</span><small>Website preview · Placeholder game information</small></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
