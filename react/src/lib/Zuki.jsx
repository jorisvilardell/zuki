import { Fragment } from 'react';
import './Zuki.css';

const THEMES = {
  orange: { shell: '#F2552C', body: '#E24921', belly: '#FF8E63', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' },
  blue:   { shell: '#4F6EF7', body: '#3A59E0', belly: '#86A0FB', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' },
  green:  { shell: '#2EA043', body: '#238636', belly: '#56D364', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' },
  purple: { shell: '#8250DF', body: '#6E40C9', belly: '#A371F7', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' },
  yellow: { shell: '#E3B341', body: '#D29922', belly: '#F2CC60', helmet: '#F2552C', ink: '#2B2B33', light: '#FFFFFF' }
};

const VB = 260;
const BODY = { cx: 130, cy: 148, rx: 92, ry: 78 };
const EYE = { lx: 101, rx: 159, cy: 126, r: 29 };
const PUP = { r: 15 };

function n(v) { return (Math.round(v * 10) / 10); }

function pincerPaths() {
  return {
    base: 'M-18 -24 C8 -34 44 -30 60 -14 C66 -8 64 2 54 4 L10 3 C-2 5 -12 4 -20 -2 C-30 -10 -30 -18 -18 -24 Z',
    jaw:  'M10 3 C26 5 44 12 50 20 C46 26 30 26 16 22 C8 19 6 10 10 3 Z'
  };
}

const ClawGroup = ({ side, p, C }) => {
  const s = p.s == null ? 1 : p.s;
  const flip = !!p.flip;
  const sx = flip ? -s : s;
  const back = (flip ? p.rot : p.rot + 180) * Math.PI / 180;
  const ex = p.cx + Math.cos(back) * 14 * s;
  const ey = p.cy + Math.sin(back) * 14 * s;
  const pp = pincerPaths();

  return (
    <g className={`zuk-claw zuk-claw-${side}`}>
      <line className="zuk-arm" x1={n(p.ax)} y1={n(p.ay)} x2={n(ex)} y2={n(ey)}
            stroke={C.shell} strokeWidth="24" strokeLinecap="round"/>
      <g className="zuk-claw-pos" transform={`translate(${n(p.cx)} ${n(p.cy)}) rotate(${n(p.rot)}) scale(${n(sx)} ${s})`}>
        <g className="zuk-claw-tip">
          {p.holdSign && (
            <g transform="translate(0, 0)">
              <rect x="-10" y="-6" width="145" height="12" fill={C.ink} />
              <g transform="translate(135, 0) rotate(90) scale(2.2)">
                <polygon points="0,-36 25,-25 36,0 25,25 0,36 -25,25 -36,0 -25,-25" fill="#E63946" stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round"/>
                <polygon points="0,-30 21,-21 30,0 21,21 0,30 -21,21 -30,0 -21,-21" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round"/>
                <text x="0" y="6" fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="19" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="0">
                  {p.signText || 'STOP'}
                </text>
              </g>
            </g>
          )}
          <path className="zuk-jaw" d={pp.jaw} fill={C.shell} style={{ transformBox: 'fill-box', transformOrigin: '9% 0%' }}/>
          <path className="zuk-jaw-fixed" d={pp.base} fill={C.shell}/>
        </g>
      </g>
    </g>
  );
};

const LegsGroup = ({ C }) => {
  const w = 17, y0 = 206, y1 = 232;
  const xs = [ { x0: 92, x1: 84 }, { x0: 116, x1: 113 }, { x0: 144, x1: 147 }, { x0: 168, x1: 176 } ];
  return (
    <g className="zuk-legs">
      {xs.map((l, i) => (
        <line key={i} className={`zuk-leg zuk-leg-${i}`} x1={l.x0} y1={y0} x2={l.x1} y2={y1} stroke={C.shell} strokeWidth={w} strokeLinecap="round"/>
      ))}
    </g>
  );
};

const AccHelmet = ({ C }) => (
  <>
    {/* Main Rounded Dome (Scaled up slightly to match other accessories) */}
    <path d="M55 83 A 75 68 0 0 1 205 83 Z" fill={C.helmet}/>

    {/* Center Ridge */}
    <path d="M113 83 L113 16 Q130 8 147 16 L147 83 Z" fill={C.helmet}/>
    <path d="M113 83 L113 16 Q130 8 147 16 L147 83 Z" fill="rgba(255,255,255,0.15)"/>
    <path d="M113 83 L113 16" stroke="rgba(0,0,0,0.1)" strokeWidth="2.5" fill="none"/>
    <path d="M147 83 L147 16" stroke="rgba(0,0,0,0.1)" strokeWidth="2.5" fill="none"/>

    {/* Side Ridges */}
    <path d="M80 83 Q80 50 92 38" stroke="rgba(0,0,0,0.1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M180 83 Q180 50 168 38" stroke="rgba(0,0,0,0.1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

    {/* Brim (Dark thickness layer) */}
    <path d="M42 93 Q130 83 218 93 A 7 7 0 0 0 218 79 Q130 69 42 79 A 7 7 0 0 0 42 93 Z" fill={C.helmet}/>
    <path d="M42 93 Q130 83 218 93 A 7 7 0 0 0 218 79 Q130 69 42 79 A 7 7 0 0 0 42 93 Z" fill="rgba(0,0,0,0.15)"/>
    
    {/* Brim (Light top layer) */}
    <path d="M42 89 Q130 79 218 89 A 7 7 0 0 0 218 75 Q130 65 42 75 A 7 7 0 0 0 42 89 Z" fill={C.helmet}/>
  </>
);

const AccCap = ({ C }) => (
  <>
    {/* Visor */}
    <path d="M58 84 Q5 88 10 105 Q60 110 132 96 Z" fill={C.helmet}/>
    {/* Visor Shadow */}
    <path d="M10 105 Q15 111 65 112 Q125 102 132 96 Q60 110 10 105 Z" fill="rgba(0,0,0,0.1)"/>

    {/* Dome */}
    <path d="M58 84 A74 58 0 0 1 206 84 A 74 12 0 0 1 58 84 Z" fill={C.helmet}/>

    {/* Seams (6 panels) - Flat */}
    <path d="M132 26 Q132 55 132 96" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none"/>
    <path d="M132 26 Q90 45 70 88" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none"/>
    <path d="M132 26 Q174 45 194 88" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none"/>

    {/* Ventilation eyelets */}
    <circle cx="102" cy="50" r="2.5" fill="rgba(0,0,0,0.15)"/>
    <circle cx="162" cy="50" r="2.5" fill="rgba(0,0,0,0.15)"/>

    {/* Base rim */}
    <path d="M58 84 A 74 12 0 0 0 206 84" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none"/>

    {/* Top Button */}
    <ellipse cx="132" cy="26" rx="8" ry="4" fill={C.helmet}/>
    <path d="M124 26 A 8 4 0 0 0 140 26" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="none"/>
  </>
);

const AccBeanie = ({ C }) => (
  <>
    <path d="M54 82 A76 60 0 0 1 206 82 Z" fill={C.helmet}/>
    <rect x="50" y="76" width="160" height="18" rx="9" fill={C.ink}/>
    <circle cx="130" cy="20" r="11" fill={C.ink}/>
  </>
);

const AccHeadset = ({ C }) => (
  <>
    <path d="M58 86 A78 70 0 0 1 202 86" stroke={C.ink} strokeWidth="14" fill="none" strokeLinecap="round"/>
    <rect x="42" y="78" width="28" height="40" rx="12" fill={C.ink}/>
    <rect x="190" y="78" width="28" height="40" rx="12" fill={C.ink}/>
    <path d="M204 116 Q214 150 176 162" stroke={C.ink} strokeWidth="9" fill="none" strokeLinecap="round"/>
    <circle cx="174" cy="164" r="9" fill={C.helmet}/>
  </>
);

const AccParty = ({ C }) => (
  <>
    <path d="M130 6 L172 90 L88 90 Z" fill={C.helmet}/>
    <path d="M130 6 L150 46 L110 46 Z" fill={C.ink} opacity="0.18"/>
    <circle cx="130" cy="8" r="10" fill={C.ink}/>
  </>
);

const ACCESSORIES = { none: () => null, helmet: AccHelmet, cap: AccCap, beanie: AccBeanie, headset: AccHeadset, party: AccParty };

const AccessoryGroup = ({ name, C }) => {
  const Comp = ACCESSORIES[name] || ACCESSORIES.helmet;
  return <g className={`zuk-casque zuk-acc-${name}`}><Comp C={C} /></g>;
};

const EyesOpen = ({ C, look = { dx: 0, dy: 4 } }) => {
  const renderEye = (ex) => {
    const px = ex + look.dx, py = EYE.cy + look.dy;
    return (
      <Fragment key={ex}>
        <circle cx={ex} cy={EYE.cy} r={EYE.r} fill={C.light}/>
        <circle className="zuk-pupil" cx={n(px)} cy={n(py)} r={PUP.r} fill={C.ink}/>
        <circle className="zuk-eye-glint" cx={n(px + 5)} cy={n(py - 6)} r="5.5" fill={C.light}/>
      </Fragment>
    );
  };
  return <g className="zuk-eyes">{renderEye(EYE.lx)}{renderEye(EYE.rx)}</g>;
};

const EyesClosedHappy = ({ C }) => {
  const renderArc = (ex) => (
    <path key={ex} d={`M${ex - 20} ${EYE.cy} Q${ex} ${EYE.cy + 20} ${ex + 20} ${EYE.cy}`} stroke={C.ink} strokeWidth="8" fill="none" strokeLinecap="round"/>
  );
  return <g className="zuk-eyes">{renderArc(EYE.lx)}{renderArc(EYE.rx)}</g>;
};

const EyesConcentrated = ({ C }) => {
  const renderArc = (ex) => (
    <path key={ex} d={`M${ex - 19} ${EYE.cy + 6} Q${ex} ${EYE.cy - 16} ${ex + 19} ${EYE.cy + 6}`} stroke={C.ink} strokeWidth="8" fill="none" strokeLinecap="round"/>
  );
  return <g className="zuk-eyes">{renderArc(EYE.lx)}{renderArc(EYE.rx)}</g>;
};

const EyesSparkle = ({ C, look = { dx: 0, dy: 2 } }) => {
  const renderEye = (ex) => {
    const px = ex + look.dx, py = EYE.cy + look.dy;
    return (
      <Fragment key={ex}>
        <circle cx={ex} cy={EYE.cy} r={EYE.r} fill={C.light}/>
        <circle className="zuk-pupil" cx={n(px)} cy={n(py)} r={PUP.r} fill={C.ink}/>
        <circle className="zuk-eye-glint" cx={n(px + 5)} cy={n(py - 6)} r="6" fill={C.light}/>
        <circle className="zuk-eye-glint" cx={n(px - 5)} cy={n(py + 5)} r="3" fill={C.light}/>
      </Fragment>
    );
  };
  return <g className="zuk-eyes">{renderEye(EYE.lx)}{renderEye(EYE.rx)}</g>;
};

const MOUTHS = {
  smile:   'M108 164 Q130 186 152 164',
  neutral: 'M112 172 L148 172',
  small:   'M120 172 Q130 180 140 172',
  worried: 'M112 174 Q130 166 148 174'
};

const MouthSmile = ({ C, d = MOUTHS.smile }) => (
  <path className="zuk-mouth" d={d} stroke={C.ink} strokeWidth="8" fill="none" strokeLinecap="round"/>
);

const MouthBigOpen = ({ C }) => (
  <g className="zuk-mouth">
    <path d="M104 162 Q130 168 156 162 Q150 196 130 196 Q110 196 104 162 Z" fill={C.ink}/>
  </g>
);

const MouthSnore = ({ C }) => (
  <g className="zuk-mouth zuk-mouth-snore">
    <ellipse cx="130" cy="172" rx="6" ry="6" fill={C.ink}/>
  </g>
);

const PlastronGroup = ({ C }) => (
  <g className="zuk-plastron"><ellipse cx="130" cy="170" rx="55" ry="49" fill={C.belly}/></g>
);

const CarapaceGroup = ({ C }) => (
  <g className="zuk-carapace"><ellipse cx={BODY.cx} cy={BODY.cy} rx={BODY.rx} ry={BODY.ry} fill={C.body}/></g>
);

const REST_L = { ax: 58, ay: 180, cx: 30, cy: 172, rot: 18, s: 0.6, flip: true };
const REST_R = { ax: 202, ay: 180, cx: 230, cy: 172, rot: 342, s: 0.6 };

function star(cx, cy, r, fill, key) {
  let pts = '';
  for (let i = 0; i < 10; i++) {
    const ang = (Math.PI / 5) * i - Math.PI / 2;
    const rad = (i % 2 === 0) ? r : r * 0.45;
    pts += `${n(cx + rad * Math.cos(ang))},${n(cy + rad * Math.sin(ang))} `;
  }
  return <polygon key={key} points={pts.trim()} fill={fill} />;
}

function gear(cx, cy, r, fill) {
  const teeth = 8, inner = r * 0.62, hole = r * 0.34;
  let p = '';
  for (let i = 0; i < teeth * 2; i++) {
    const ang = (Math.PI / teeth) * i;
    const rad = (i % 2 === 0) ? r : inner;
    p += (i === 0 ? 'M' : 'L') + n(cx + rad * Math.cos(ang)) + ' ' + n(cy + rad * Math.sin(ang)) + ' ';
  }
  p += 'Z';
  // Punch a transparent hole using evenodd
  p += ` M ${n(cx - hole)} ${n(cy)} A ${n(hole)} ${n(hole)} 0 1 0 ${n(cx + hole)} ${n(cy)} A ${n(hole)} ${n(hole)} 0 1 0 ${n(cx - hole)} ${n(cy)} Z`;
  return <path d={p} fill={fill} fillRule="evenodd" />;
}

const PropGears = ({ C }) => (
  <g className="zuk-props zuk-props-gears">
    <g className="zuk-gear-a">{gear(75, 48, 25, 'currentColor')}</g>
    <g className="zuk-gear-b">
      <g transform="rotate(22.5 49 22)">
        {gear(49, 22, 20, C.helmet)}
      </g>
    </g>
  </g>
);

const PropDocument = ({ C, transform }) => (
  <g className="zuk-props zuk-props-doc" transform={transform || ""}>
    <rect x="168" y="140" width="64" height="80" rx="6" fill={C.light} transform="rotate(8 200 180)"/>
    <g transform="rotate(8 200 180)" stroke={C.shell} strokeWidth="5" strokeLinecap="round">
      <line x1="178" y1="158" x2="222" y2="158"/>
      <line x1="178" y1="172" x2="222" y2="172"/>
      <line x1="178" y1="186" x2="210" y2="186"/>
    </g>
    <path d="M180 202 l8 9 16 -18" transform="rotate(8 200 180)" stroke={C.helmet} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
);

const PropEyebrow = ({ C }) => (
  <path className="zuk-eyebrow" d="M146 98 Q160 90 174 98" stroke={C.ink} strokeWidth="7" fill="none" strokeLinecap="round"/>
);

const PropQuestion = () => (
  <g className="zuk-props zuk-props-q">
    <text x="206" y="64" fontFamily="system-ui, sans-serif" fontSize="58" fontWeight="800" fill="currentColor">?</text>
  </g>
);

export const PropBurst = ({ C }) => (
  <g className="zuk-props-burst">
    <g className="zuk-star-1">{star(130, 29, 8, C.helmet, 's1')}</g>
    <g className="zuk-star-2">{star(175, 42, 10, C.helmet, 's2')}</g>
    <g className="zuk-star-3">{star(85, 43, 10, C.helmet, 's3')}</g>
    <g className="zuk-star-4">{star(100, 20, 5, C.helmet, 's4')}</g>
    <g className="zuk-star-5">{star(150, 28, 6, C.helmet, 's5')}</g>
  </g>
);

const PropWrench = ({ C }) => (
  <g className="zuk-props zuk-props-wrench" transform="rotate(-32 196 150)">
    <rect x="188" y="96" width="16" height="74" rx="8" fill={C.ink}/>
    <path d="M178 96 a18 18 0 1 1 36 0 l-8 0 a10 10 0 1 0 -20 0 Z" fill={C.ink}/>
  </g>
);

const PropZ = ({ C }) => (
  <g className="zuk-props zuk-props-z" fontFamily="system-ui, sans-serif" fontWeight="800" fill={C.body}>
    <text className="zuk-z-1" x="188" y="92" fontSize="26">Z</text>
    <text className="zuk-z-2" x="208" y="66" fontSize="34">Z</text>
    <text className="zuk-z-3" x="226" y="40" fontSize="22" opacity="0.6">z</text>
  </g>
);

export const PropCopGlasses = ({ C }) => (
  <g className="zuk-props-glasses">
    <path d="M75 110 L185 110" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
    <path d="M80 110 C80 145 125 145 125 110 Z" fill={C.ink} />
    <path d="M135 110 C135 145 180 145 180 110 Z" fill={C.ink} />
    <path d="M90 115 L105 115" stroke={C.light} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M145 115 L160 115" stroke={C.light} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
  </g>
);





export const Zuki = ({
  pose = 'reference',
  theme = 'orange',
  accessory = 'none',
  accessoryColor,
  mono = '',
  monoBg = '#FFFFFF',
  size = 260,
  className = '',
  title,
  stopText = 'STOP',
  hideLimbs = false,
  extra
}) => {
  const isMono = !!mono;
  const baseC = isMono ? { shell: mono, body: mono, belly: mono, helmet: mono, ink: monoBg, light: monoBg } : (THEMES[theme] || THEMES.orange);
  const C = { ...baseC };
  if (accessoryColor) C.helmet = accessoryColor;

  let L = { ...REST_L };
  let R = { ...REST_R };
  let Eyes = <EyesOpen C={C} />;
  let Mouth = <MouthSmile C={C} />;
  let Props = null;

  switch (pose) {
    case 'idle': break;
    case 'hello':
      L = { ...REST_L };
      Eyes = <EyesOpen C={C} />;
      Mouth = <MouthSmile C={C} d={MOUTHS.smile} />;
      break;
    case 'process':
      Eyes = <EyesConcentrated C={C} />;
      Mouth = <MouthSmile C={C} d={MOUTHS.small} />;
      Props = <PropGears C={C} />;
      break;
    case 'quote':
      L = { ...REST_L };
      R = { ax: 202, ay: 180, cx: 200, cy: 140, rot: 100, s: 0.5 };
      Props = <PropDocument C={C} />;
      Mouth = <MouthSmile C={C} />;
      break;
    case 'perplexed':
      L = { ax: 50, ay: 160, cx: 20, cy: 110, rot: 25, s: 0.6, flip: true };
      R = { ax: 210, ay: 160, cx: 240, cy: 110, rot: 335, s: 0.6 };
      Eyes = <EyesOpen C={C} look={{ dx: 5, dy: -1 }} />;
      Mouth = <MouthSmile C={C} d={MOUTHS.neutral} />;
      Props = <><PropEyebrow C={C} /><PropQuestion C={C} /></>;
      break;
    case 'success':
      L = { ax: 62, ay: 152, cx: 48, cy: 80, rot: 55, s: 0.56, flip: true };
      R = { ax: 198, ay: 152, cx: 212, cy: 80, rot: 305, s: 0.56 };
      Eyes = <EyesSparkle C={C} />;
      Mouth = <MouthBigOpen C={C} />;
      Props = <PropBurst C={C} />;
      break;
    case 'travaille':
      R = { ax: 200, ay: 170, cx: 204, cy: 150, rot: 290, s: 0.52 };
      Props = <PropWrench C={C} />;
      Mouth = <MouthSmile C={C} d={MOUTHS.small} />;
      break;
    case 'endormi':
      L = { ...REST_L, rot: -2 };
      R = { ...REST_R, rot: 2 };
      Eyes = <EyesClosedHappy C={C} />;
      Mouth = <MouthSnore C={C} />;
      Props = <PropZ C={C} />;
      break;
    case 'stop':
      L = { ...REST_L };
      R = { ax: 200, ay: 160, cx: 230, cy: 120, rot: 270, s: 0.7, holdSign: true, signText: stopText };
      Eyes = <EyesConcentrated C={C} />;
      Mouth = <MouthSmile C={C} d={MOUTHS.neutral} />;
      break;
  }

  const cls = `zuk ${className}`.trim();

  return (
    <svg className={cls} viewBox={`0 0 ${VB} ${VB}`} width={size} height={size} style={{ overflow: 'visible' }} xmlns="http://www.w3.org/2000/svg" data-pose={pose}>
      {title && <title>{title}</title>}
      <g className="zuk-root">
        {!hideLimbs && <LegsGroup C={C} />}
        <CarapaceGroup C={C} />
        {!isMono && <PlastronGroup C={C} />}
        <AccessoryGroup name={accessory} C={C} />
        {Eyes}
        {Mouth}
        {!hideLimbs && (
          <g className="zuk-pinces">
            <ClawGroup side="left" p={L} C={C} />
            <ClawGroup side="right" p={R} C={C} />
          </g>
        )}
        {Props}
        {extra && <g dangerouslySetInnerHTML={{ __html: extra }} />}
      </g>
    </svg>
  );
};

export const ZukiFavicon = ({ theme = 'orange', size }) => {
  return <Zuki pose="idle" theme={theme} size={size} accessory="helmet" hideLimbs={true} />;
};

export default Zuki;
