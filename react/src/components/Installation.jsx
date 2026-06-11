import { useState } from 'react';

export default function Installation() {
  const [pkg, setPkg] = useState('pnpm');

  const getCommand = () => {
    switch (pkg) {
      case 'npm': return 'npm install @ton-orga/zuki-react';
      case 'yarn': return 'yarn add @ton-orga/zuki-react';
      case 'pnpm': return 'pnpm i @ton-orga/zuki-react';
      default: return 'pnpm i @ton-orga/zuki-react';
    }
  };

  return (
    <section id="installation" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Intégration</div>
          <h2>Installation React</h2>
        </div>
        
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '20px' }}>1. NPM Package</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['npm', 'pnpm', 'yarn'].map(m => (
                  <button 
                    key={m} 
                    onClick={() => setPkg(m)}
                    style={{
                      background: pkg === m ? 'var(--ink)' : 'transparent',
                      color: pkg === m ? 'var(--bg)' : 'var(--muted)',
                      border: `1px solid ${pkg === m ? 'var(--ink)' : 'var(--line)'}`,
                      borderRadius: '8px',
                      padding: '4px 12px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', padding: '16px 24px', borderRadius: '12px', fontFamily: 'monospace', color: 'var(--ink)', fontSize: '15px' }}>
              {getCommand()}
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '20px' }}>2. Composant</h3>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', padding: '24px', borderRadius: '12px', fontFamily: 'monospace', color: 'var(--ink)', overflowX: 'auto', lineHeight: '1.6', fontSize: '15px' }}>
              <span style={{ color: 'var(--orange)' }}>import</span> {'{'} Zuki, ZukiFavicon {'}'} <span style={{ color: 'var(--orange)' }}>from</span> <span style={{ color: 'var(--blue)' }}>'@ton-orga/zuki-react'</span>;<br/>
              <span style={{ color: 'var(--orange)' }}>import</span> <span style={{ color: 'var(--blue)' }}>'@ton-orga/zuki-react/style.css'</span>;<br/>
              <br/>
              <span style={{ color: 'var(--orange)' }}>export default function</span> App() {'{'}<br/>
              &nbsp;&nbsp;<span style={{ color: 'var(--orange)' }}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--muted)' }}>{/* Mascot full body */}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: 'var(--blue)' }}>Zuki</span> pose=<span style={{ color: 'var(--orange)' }}>"hello"</span> theme=<span style={{ color: 'var(--orange)' }}>"orange"</span> size={'{260}'} /&gt;<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--muted)' }}>{/* Mascot head only (favicon / icon) */}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: 'var(--blue)' }}>ZukiFavicon</span> theme=<span style={{ color: 'var(--orange)' }}>"blue"</span> size={'{64}'} /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
