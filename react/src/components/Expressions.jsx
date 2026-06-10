import React from 'react';
import { Zuki } from '../lib';
import { POSES } from './constants';

export default function Expressions() {
  return (
    <section id="expressions">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Library</div>
          <h2>Eight Expressions</h2>
          <p>One pose per product moment: onboarding, loaders, success, empty states, errors.</p>
        </div>
        <div className="grid cols-4">
          {POSES.map((p, i) => (
            <div className="card" key={i}>
              <div className="stage">
                <Zuki pose={p.v} accessory="none" size="100%" style={{ maxWidth: '190px' }} />
              </div>
              <div className="meta">
                <h3>{p.t}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
