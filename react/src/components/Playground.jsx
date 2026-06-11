import { Zuki } from '../lib';
import { POSES, ACCESSORIES, THEMES, ANIMATIONS } from './constants';

export default function Playground({ playState, updatePlayState }) {
  return (
    <section id="dress">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Reusable</div>
          <h2>Dress Zuki</h2>
          <p>The helmet is just an accessory layer. Zuki is a neutral base: swap hats, colors, or poses to repurpose him for another product.</p>
        </div>
        <div className="dress">
          <div className="preview">
            <Zuki 
              pose={playState.pose}
              accessory={playState.accessory}
              accessoryColor={playState.accessoryColor}
              theme={playState.theme}
              className={ANIMATIONS.find(a => a.pose === playState.pose)?.anim || 'anim-idle'}
              size={260}
            />
          </div>
          <div className="controls">
            <div className="ctl">
              <label>Accessory</label>
              <div className="chips">
                {ACCESSORIES.map(a => (
                  <button 
                    key={a.v}
                    className="chip-btn"
                    aria-pressed={playState.accessory === a.v}
                    onClick={() => updatePlayState('accessory', a.v)}
                  >
                    {a.t}
                  </button>
                ))}
              </div>
            </div>
            <div className="ctl" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ marginBottom: 0 }}>Accessory Color</label>
              <div className="color-picker-wrapper">
                <input 
                  type="color" 
                  value={playState.accessoryColor || '#FFC53D'} 
                  onChange={(e) => updatePlayState('accessoryColor', e.target.value)} 
                  className="color-picker-input"
                  title="Choose a custom color"
                />
                <div className="color-picker-display" style={{ backgroundColor: playState.accessoryColor || '#FFC53D' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ mixBlendMode: 'difference', color: '#fff' }}>
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
              </div>
              {playState.accessoryColor && (
                <button 
                  className="chip-btn" 
                  onClick={() => updatePlayState('accessoryColor', '')}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                >
                  Clear
                </button>
              )}
            </div>
            <div className="ctl">
              <label>Stroke Color</label>
              <div className="chips">
                {THEMES.map(t => (
                  <button 
                    key={t.v}
                    className="chip-btn"
                    aria-pressed={playState.theme === t.v}
                    onClick={() => updatePlayState('theme', t.v)}
                  >
                    <span className="sw-dot" style={{ background: t.hex }}></span> {t.t}
                  </button>
                ))}
              </div>
            </div>
            <div className="ctl">
              <label>Preview Pose</label>
              <div className="chips">
                {POSES.map(p => (
                  <button 
                    key={p.v}
                    className="chip-btn"
                    aria-pressed={playState.pose === p.v}
                    onClick={() => updatePlayState('pose', p.v)}
                  >
                    {p.t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
