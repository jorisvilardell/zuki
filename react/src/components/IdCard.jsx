import { Zuki } from '../lib';

export default function IdCard() {
  return (
    <section id="id">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Reference</div>
          <h2>The ID Card</h2>
          <p>Neutral pose, slight 3/4 front view. Works without outlines on both light and dark backgrounds.</p>
        </div>
        <div className="idcard">
          <div className="pane light">
            <Zuki pose="idle" accessory="none" size={240} />
          </div>
          <div className="pane dark">
            <Zuki pose="idle" accessory="none" size={240} />
          </div>
        </div>

        <h3 style={{ margin: '42px 0 4px', fontSize: '18px' }}>Palette — 5 colors, not one more</h3>
        <div className="pal">
          <div className="sw"><div className="chip" style={{background:'#F2552C'}}></div><div className="lab"><b>Shell</b><span>#F2552C</span></div></div>
          <div className="sw"><div className="chip" style={{background:'#FF8E63'}}></div><div className="lab"><b>Plastron</b><span>#FF8E63</span></div></div>
          <div className="sw"><div className="chip" style={{background:'#FFC53D'}}></div><div className="lab"><b>Helmet</b><span>#FFC53D</span></div></div>
          <div className="sw"><div className="chip" style={{background:'#2B2B33'}}></div><div className="lab"><b>Ink</b><span>#2B2B33</span></div></div>
          <div className="sw"><div className="chip" style={{background:'#FFFFFF', borderBottom:'1px solid var(--line)'}}></div><div className="lab"><b>Highlight</b><span>#FFFFFF</span></div></div>
        </div>

        <div className="specs">
          <div className="panel ok">
            <h3>Do's</h3>
            <ul>
              <li><span className="dot"></span><span>Solid colors only, <b>no gradients or drop shadows</b>.</span></li>
              <li><span className="dot"></span><span>Keep the <b>large round eyes</b> and the single highlight dot.</span></li>
              <li><span className="dot"></span><span>Maintain a <b>readable silhouette at 16 px</b>.</span></li>
              <li><span className="dot"></span><span>Layer names: <code className="inl">shell · plastron · claws · legs · helmet · eyes · mouth</code>.</span></li>
            </ul>
          </div>
          <div className="panel no">
            <h3>Don'ts</h3>
            <ul>
              <li><span className="dot"></span><span>"Pixar cartoon" style: glossy eyes, gradient shell, shadow under the belly.</span></li>
              <li><span className="dot"></span><span>Realistic articulated claws or 8 detailed legs.</span></li>
              <li><span className="dot"></span><span>Multiple accessories (belt, overalls, glasses).</span></li>
              <li><span className="dot"></span><span>More than 5 colors, or a pure black (#000).</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
