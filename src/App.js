import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Menu } from 'lucide-react';

const projectsData = [
  { id: 1, slug: "ethereal-dreams", title: "Ethereal Dreams", description: "A visual exploration of surreal landscapes.", images: ["https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800"], tags: ["Branding", "Motion"], colors: { primary: "#FF6B9D" } },
  { id: 2, slug: "urban-pulse", title: "Urban Pulse", description: "A dynamic web experience.", images: ["https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800"], tags: ["Web", "UI/UX"], colors: { primary: "#6C5CE7" } },
  { id: 3, slug: "botanical-series", title: "Botanical Series", description: "Illustrated collection of organic forms.", images: ["https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"], tags: ["Illustration"], colors: { primary: "#00B894" } },
  { id: 4, slug: "neon-nights", title: "Neon Nights", description: "Retro-futuristic animation series.", images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800"], tags: ["Motion"], colors: { primary: "#FD79A8" } },
  { id: 5, slug: "minimal-luxury", title: "Minimal Luxury", description: "High-end e-commerce platform.", images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"], tags: ["Web", "Branding"], colors: { primary: "#2D3436" } },
  { id: 6, slug: "sound-waves", title: "Sound Waves", description: "Music streaming platform identity.", images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"], tags: ["UI/UX"], colors: { primary: "#0984E3" } },
  { id: 7, slug: "earth-tones", title: "Earth Tones", description: "Sustainable fashion brand.", images: ["https://images.unsplash.com/photo-1558769132-cb1aea41c2a1?w=800"], tags: ["Branding"], colors: { primary: "#A0522D" } },
  { id: 8, slug: "digital-garden", title: "Digital Garden", description: "Interactive portfolio site.", images: ["https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800"], tags: ["Web"], colors: { primary: "#55EFC4" } }
];

const App = () => {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('home');
  const [proj, setProj] = useState(null);
  const [hov, setHov] = useState(null);
  const [w, setW] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const resize = () => setW(window.innerWidth);
    const scroll = () => {
      if (page === 'home') {
        setNav(window.scrollY > window.innerHeight / 2);
      } else {
        setNav(true);
      }
    };
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', scroll);
    scroll();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', scroll);
    };
  }, [page]);

  const t = lang === 'en' ? {
    tagline: "Designer, Animator & Visual Storyteller",
    intro: "Crafting digital experiences that blend motion, color, and texture.",
    contact: "hello@tnzs.design",
    projects: "projects",
    cta: "View Projects",
    back: "← Back"
  } : {
    tagline: "Diseñador, Animador y Narrador Visual",
    intro: "Creando experiencias digitales que combinan movimiento, color y textura.",
    contact: "hola@tnzs.design",
    projects: "proyectos",
    cta: "Ver Proyectos",
    back: "← Volver"
  };

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", background: '#141414', minHeight: '100vh', color: '#FFF' }}>
      {nav && !menu && (
        <div style={{ position: 'fixed', top: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, cursor: 'pointer', color: '#FFF', mixBlendMode: 'difference' }}
          onClick={() => { setPage('home'); setProj(null); setMenu(false); window.scrollTo(0, 0); }}>
          <div style={{ fontFamily: "'Arial Black'", fontSize: '3rem', fontWeight: '700', letterSpacing: '0.15em' }}>TNZS</div>
        </div>
      )}

      {nav && (
        <button onClick={() => setMenu(!menu)} style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 1001, background: 'transparent', border: 'none', cursor: 'pointer', width: '40px', height: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '30px', height: '2px', background: '#FFF', transition: 'all 0.4s', transform: menu ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)' }} />
          <span style={{ width: '30px', height: '2px', background: '#FFF', transition: 'all 0.3s', opacity: menu ? 0 : 1 }} />
          <span style={{ width: '30px', height: '2px', background: '#FFF', transition: 'all 0.4s', transform: menu ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)' }} />
        </button>
      )}

      {menu && (
        <div style={{ position: 'fixed', inset: 0, background: '#03318C', zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {['Home', 'Shop', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item}`} onClick={() => { setPage('home'); setMenu(false); }} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFF', textDecoration: 'none', fontWeight: '700' }}>{item}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
            <div onClick={() => { setPage('home'); setMenu(false); }} style={{ fontSize: '2rem', fontWeight: '700', cursor: 'pointer' }}>TNZS</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => setLang('en')} style={{ background: lang === 'en' ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#FFF', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1rem', cursor: 'pointer' }}>EN</button>
              <button onClick={() => setLang('es')} style={{ background: lang === 'es' ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#FFF', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1rem', cursor: 'pointer' }}>ES</button>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Instagram size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      )}

      {page === 'home' && (
        <>
          <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0" frameBorder="0" style={{ pointerEvents: 'none' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)', zIndex: 2 }} />
            <div style={{ position: 'relative', zIndex: 10, padding: '4rem', maxWidth: '800px', marginLeft: w < 768 ? '0' : '4rem' }}>
              <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: '700', textTransform: 'uppercase' }}>{t.tagline}</p>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '2rem', opacity: 0.95 }}>{t.intro}</p>
              <a href={`mailto:${t.contact}`} style={{ color: '#F280AA', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginBottom: '3rem' }}>{t.contact}</a>
              <div>
                <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }} style={{ display: 'inline-block', background: '#03318C', color: '#FFF', padding: '1rem 3rem', fontWeight: 'bold', textDecoration: 'none', border: '2px solid #03318C' }}>{t.cta} ↓</a>
              </div>
            </div>
          </div>

          <div id="projects" style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 3rem' }}>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '5rem', fontWeight: '600', textTransform: 'lowercase', opacity: 0.7 }}>{t.projects}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: w < 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: w < 768 ? '2rem' : '3rem' }}>
              {projectsData.map(p => (
                <div key={p.id} onClick={() => { setProj(p); setPage('project'); window.scrollTo(0, 0); }} onMouseEnter={() => setHov(p.id)} onMouseLeave={() => setHov(null)} style={{ position: 'relative', cursor: 'pointer' }}>
                  <div style={{ position: 'absolute', top: hov === p.id ? '3px' : '6px', left: hov === p.id ? '-3px' : '-6px', width: '100%', height: '100%', background: '#F280AA', transition: 'all 0.3s', zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1, background: '#FFF', overflow: 'hidden', transform: hov === p.id ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s' }}>
                    <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '1/1' }} />
                    {hov === p.id && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.8)', padding: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '900', textTransform: 'uppercase' }}>{p.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <footer style={{ background: '#141414', padding: '5rem 3rem', textAlign: 'center', marginTop: '8rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '3rem', fontWeight: '900', textTransform: 'uppercase' }}>UI/UX | Web | Motion | Branding</div>
            <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Instagram size={32} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Linkedin size={32} /></a>
            </div>
            <div style={{ marginTop: '4rem', opacity: 0.6 }}>
              <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{ background: 'none', border: 'none', color: '#F280AA', textDecoration: 'underline', cursor: 'pointer' }}>{lang === 'en' ? 'Español' : 'English'}</button>
            </div>
          </footer>
        </>
      )}

      {page === 'project' && proj && (
        <>
          <div style={{ minHeight: '100vh', padding: '8rem 2rem 4rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <button onClick={() => { setPage('home'); setProj(null); window.scrollTo(0, 0); }} style={{ background: 'transparent', border: 'none', color: '#F280AA', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '3rem' }}>{t.back}</button>
              <div style={{ background: proj.colors.primary, padding: '4rem' }}>
                <img src={proj.images[0]} alt={proj.title} style={{ width: '100%', marginBottom: '3rem', border: '8px solid #FFF' }} />
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#FFF' }}>{proj.title}</h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#FFF', marginBottom: '2rem' }}>{proj.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((tag, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.2)', color: '#FFF', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 'bold' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <footer style={{ background: '#141414', padding: '5rem 3rem', textAlign: 'center', marginTop: '8rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '3rem', fontWeight: '900', textTransform: 'uppercase' }}>UI/UX | Web | Motion | Branding</div>
            <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Instagram size={32} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}><Linkedin size={32} /></a>
            </div>
            <div style={{ marginTop: '4rem', opacity: 0.6 }}>
              <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} style={{ background: 'none', border: 'none', color: '#F280AA', textDecoration: 'underline', cursor: 'pointer' }}>{lang === 'en' ? 'Español' : 'English'}</button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;