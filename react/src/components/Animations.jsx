import React from 'react';
import { Zuki } from '../lib';
import { ANIMATIONS } from './constants';

export default function Animations({ animKeys, retriggerAnim }) {
  return (
    <section id="anims">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Movement</div>
          <h2>Five Animations</h2>
          <p>Hover or click a card to replay. Designed to replace spinners and enrich product states.</p>
        </div>
        <div className="grid anim-grid">
          {ANIMATIONS.map((anim, i) => (
            <div className="card demo" key={i} onClick={() => retriggerAnim(i)}>
              <div className="stage">
                <Zuki 
                  key={animKeys[i] || i}
                  pose={anim.pose} 
                  className={anim.anim} 
                  accessory="none"
                  size="100%" 
                  style={{ maxWidth: '190px' }}
                />
                {anim.loop ? <span className="badge-loop">loop</span> : <button className="replay" title="Replay">↻</button>}
                <span className="hint">{anim.loop ? 'playing' : 'click to replay'}</span>
              </div>
              <div className="meta">
                <h3>{anim.name}</h3>
                <p>{anim.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
