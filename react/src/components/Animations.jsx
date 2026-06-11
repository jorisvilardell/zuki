import { useState, useRef } from 'react';
import { Zuki } from '../lib';
import { ANIMATIONS } from './constants';

// List of the main driving animations for each state to track the cycle completion
const MAIN_ANIM_ITERATIONS = [
  'zuki-sway',             // idle
  'zuki-process-breathe',  // process
  'zuki-bite',             // process fallback
  'zuki-devis-point-anim', // quote
  'zuki-bouncein',         // hello (intro)
  'zuki-wave-organic',     // hello (wave)
  'zuki-tilt-think',       // perplexed
  'zuki-champ-jump',       // success
  'zuki-sleep-breath',     // sleeping
  'zuki-cop-breathe'       // stop
];

function AnimationCard({ anim }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isHoveredRef = useRef(false);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const handleIteration = (e) => {
    // Stop at the end of the current animation cycle if the user is no longer hovering
    if (MAIN_ANIM_ITERATIONS.includes(e.animationName) && !isHoveredRef.current) {
      setIsPlaying(false);
    }
  };

  const activeClass = isPlaying ? anim.anim : '';
  const activePose = anim.pose;

  return (
    <div 
      className="card demo" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onAnimationIteration={handleIteration}
      onAnimationEnd={() => {
        if (!isHoveredRef.current) setIsPlaying(false);
      }}
    >
      <div className="stage" style={{ pointerEvents: 'none' }}>
        <Zuki
          pose={activePose}
          className={activeClass}
          accessory="none"
          size="100%"
          style={{ maxWidth: '190px' }}
        />
        <span className="hint">{isPlaying ? 'playing...' : 'hover to play'}</span>
      </div>
      <div className="meta">
        <h3>{anim.name}</h3>
        <p>{anim.desc}</p>
      </div>
    </div>
  );
}

export default function Animations() {
  return (
    <section id="anims">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Movement</div>
          <h2>{ANIMATIONS.length} Animations</h2>
          <p>Hover a card to play. The animation cycle will finish cleanly even if you move your mouse away.</p>
        </div>
        <div className="grid anim-grid">
          {ANIMATIONS.map((anim, i) => (
            <AnimationCard key={i} anim={anim} />
          ))}
        </div>
      </div>
    </section>
  );
}
