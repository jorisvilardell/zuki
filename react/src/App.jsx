import React, { useState, useEffect } from 'react';
import { Zuki, ZukiFavicon } from './lib';
import './index.css';

const POSES = [
  { v: 'reference', t: 'Référence' },
  { v: 'salut', t: 'Salut' },
  { v: 'champion', t: 'Champion' },
  { v: 'devis', t: 'Devis' },
  { v: 'perplexe', t: 'Perplexe' },
  { v: 'process', t: 'Process' },
  { v: 'stop', t: 'Stop' },
];

const ACCESSORIES = [
  { v: 'helmet', t: 'Casque' },
  { v: 'none', t: 'Aucun' },
  { v: 'cap', t: 'Casquette' },
  { v: 'beanie', t: 'Bonnet' },
  { v: 'headset', t: 'Audio' },
  { v: 'party', t: 'Fête' },
];

const THEMES = [
  { v: 'orange', t: 'Orange' },
  { v: 'blue', t: 'Bleu' },
];

const ANIMATIONS = [
  { pose: 'reference', anim: 'anim-idle anim-claps', name: 'Idle', desc: 'Regarde autour de lui + claque des pinces.' },
  { pose: 'process', anim: 'anim-process', name: 'Process', desc: 'Pinces qui claquent, rouages.' },
  { pose: 'salut', anim: 'anim-salut', name: 'Salut', desc: 'Rebond d\'entrée puis pince qui salue.' },
  { pose: 'perplexe', anim: 'anim-perplexe', name: 'Perplexe', desc: 'Inclinaison de tête. Boucle douce.' },
  { pose: 'champion', anim: 'anim-success', name: 'Succès', desc: 'Animation de célébration pop.' },
  { pose: 'devis', anim: 'anim-idle', name: 'Devis prêt', desc: 'Document qui surgit.' },
  { pose: 'stop', anim: 'anim-stop', name: 'Stop / Erreur', desc: 'Refus ou erreur (401, 403, 500).' },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [playState, setPlayState] = useState({
    pose: 'reference',
    accessory: 'helmet',
    theme: 'orange',
  });
  
  // Re-trigger animation state
  const [animKeys, setAnimKeys] = useState({});

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const updatePlayState = (key, value) => {
    setPlayState(prev => ({ ...prev, [key]: value }));
  };

  const retriggerAnim = (index) => {
    setAnimKeys(prev => ({ ...prev, [index]: Date.now() }));
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="app-container">
          <div className="brand">
            <ZukiFavicon size={32} theme="orange" />
            <span>Zuki React</span>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Meet Zuki.</h1>
          <p>
            The premium React mascot component library. Flat design, SVG-based, lightweight, and fully customizable. 
            Build delightful user experiences with seamless animations.
          </p>
          <div className="hero-tags">
            <span className="tag">100% SVG Vector</span>
            <span className="tag">Zero Dependencies</span>
            <span className="tag">Customizable Themes</span>
            <span className="tag">React Library</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-art-bg"></div>
          <Zuki 
            pose="champion" 
            accessory="party"
            className="anim-idle"
            size="100%" 
            style={{ maxWidth: '400px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }} 
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Animations & Expressions</h2>
          <p>Bring your UI to life with pre-built CSS animations mapped to SVG layers.</p>
        </div>
        <div className="grid cols-3">
          {ANIMATIONS.map((anim, i) => (
            <div className="glass-card" key={i} onClick={() => retriggerAnim(i)}>
              <div className="stage">
                <Zuki 
                  key={animKeys[i] || i}
                  pose={anim.pose} 
                  className={anim.anim} 
                  size={160} 
                />
              </div>
              <div className="meta">
                <h3>{anim.name}</h3>
                <p>{anim.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Playground</h2>
          <p>Dress Zuki up. Swap accessories, poses, and themes instantly.</p>
        </div>
        
        <div className="playground">
          <div className="play-preview">
            <Zuki 
              pose={playState.pose}
              accessory={playState.accessory}
              theme={playState.theme}
              className={ANIMATIONS.find(a => a.pose === playState.pose)?.anim || 'anim-idle'}
              size={240}
            />
          </div>
          
          <div className="play-controls">
            <div className="controls-group">
              <label>Pose</label>
              <div className="chips">
                {POSES.map(p => (
                  <button 
                    key={p.v}
                    className={`chip-btn ${playState.pose === p.v ? 'active' : ''}`}
                    onClick={() => updatePlayState('pose', p.v)}
                  >
                    {p.t}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="controls-group">
              <label>Accessory</label>
              <div className="chips">
                {ACCESSORIES.map(a => (
                  <button 
                    key={a.v}
                    className={`chip-btn ${playState.accessory === a.v ? 'active' : ''}`}
                    onClick={() => updatePlayState('accessory', a.v)}
                  >
                    {a.t}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="controls-group">
              <label>Theme</label>
              <div className="chips">
                {THEMES.map(t => (
                  <button 
                    key={t.v}
                    className={`chip-btn ${playState.theme === t.v ? 'active' : ''}`}
                    onClick={() => updatePlayState('theme', t.v)}
                  >
                    {t.t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Zuki React — Premium React Component Library built for amazing experiences.</p>
      </footer>
    </div>
  );
}

export default App;
