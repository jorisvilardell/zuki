import React from 'react';
import { Zuki } from '../lib';

export default function Hero() {
  return (
    <header className="wrap">
      <div className="hero">
        <div>
          <div className="eyebrow">Mascot · ZukQuote</div>
          <h1>Meet&nbsp;Zuki.</h1>
          <p className="lede">The artisan crab of ZukQuote. A nod to Ferris (Rust) and the construction trade — tool-claws and a hard hat. Professional yet warm, recognizable even when tiny, and works in black and white.</p>
          <div className="tagrow">
            <span className="tag">Flat · Solid colors</span>
            <span className="tag">5 colors max</span>
            <span className="tag">No outlines</span>
            <span className="tag">Customizable base</span>
          </div>
        </div>
        <div className="hero-art">
          <Zuki pose="idle" accessory="none" className="anim-idle anim-claps" style={{ width: 'min(380px, 72vw)', height: 'auto', filter: 'none' }} />
        </div>
      </div>
    </header>
  );
}
