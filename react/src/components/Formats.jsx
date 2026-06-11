import { Zuki, ZukiFavicon } from '../lib';

export default function Formats() {
  return (
    <section id="formats">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Export</div>
          <h2>Formats & Logo</h2>
        </div>
        <div className="fav-row">
          <div className="fav-item">
            <div className="px"><ZukiFavicon size={64} theme="orange" /></div>
            <small>Favicon 64px</small>
          </div>
          <div className="fav-item">
            <div className="px"><ZukiFavicon size={32} theme="orange" /></div>
            <small>Favicon 32px</small>
          </div>
          <div className="fav-item">
            <div className="px"><ZukiFavicon size={16} theme="orange" /></div>
            <small>Favicon 16px</small>
          </div>
          <div className="sticker" style={{ background: 'var(--orange)' }}>
            <Zuki pose="hello" accessory="none" size={170} theme="blue" />
          </div>
          <div className="lockup">
            <Zuki pose="idle" accessory="helmet" className="anim-idle anim-claps" size={96} />
            <div className="wordmark">Zuk<span className="q">Quote</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
