/* ==========================================================================
   ZUK — mascotte ZukQuote
   Moteur SVG paramétrique. Une seule source de vérité pour la silhouette ;
   chaque pose et chaque variante de format en découle.

   Calques nommés : pattes, pinces, carapace, plastron, casque, yeux, bouche, props
   Règles DA : flat, aplats uniquement, pas de dégradé/ombre/contour, max 5 couleurs.
   ========================================================================== */
(function (global) {
  'use strict';

  // ---- Thèmes (max 5 couleurs ; le casque reste jaune dans tous les cas) ----
  var THEMES = {
    orange: { shell: '#F2552C', belly: '#FF8E63', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' },
    blue:   { shell: '#4F6EF7', belly: '#86A0FB', helmet: '#FFC53D', ink: '#2B2B33', light: '#FFFFFF' }
  };

  var VB = 260; // viewBox carré 0 0 260 260

  // Géométrie de base
  var BODY = { cx: 130, cy: 148, rx: 92, ry: 78 };

  function n(v) { return (Math.round(v * 10) / 10); }

  // -- Pince à deux mors (gripper de crabe), style flat ---------------------
  // Forme unité : poignet près de l'origine locale, ouverture (mors) vers +x.
  // base = corps + mors supérieur (fixe) ; jaw = mors inférieur (mobile).
  function pincerPaths() {
    return {
      base: 'M-18 -24 C8 -34 44 -30 60 -14 C66 -8 64 2 54 4 L10 3 ' +
            'C-2 5 -12 4 -20 -2 C-30 -10 -30 -18 -18 -24 Z',
      jaw:  'M10 3 C26 5 44 12 50 20 C46 26 30 26 16 22 C8 19 6 10 10 3 Z'
    };
  }

  // ---- PINCES (claw) ------------------------------------------------------
  // pose: {ax,ay (épaule), cx,cy (poignet), rot (deg), s (échelle), flip (gauche)}
  function clawGroup(side, p, C) {
    var s = (p.s == null ? 1 : p.s);
    var flip = !!p.flip;
    var sx = flip ? -s : s;
    // poignet = arrière du corps de la pince. Côté monde : rot si miroir, sinon rot+180.
    var back = (flip ? p.rot : p.rot + 180) * Math.PI / 180;
    var ex = p.cx + Math.cos(back) * 14 * s;
    var ey = p.cy + Math.sin(back) * 14 * s;
    var arm = '<line class="zuk-arm" x1="' + n(p.ax) + '" y1="' + n(p.ay) + '" x2="' + n(ex) + '" y2="' + n(ey) +
              '" stroke="' + C.shell + '" stroke-width="24" stroke-linecap="round"/>';
    var pp = pincerPaths();
    var tip = '<g class="zuk-claw-pos" transform="translate(' + n(p.cx) + ' ' + n(p.cy) +
              ') rotate(' + n(p.rot) + ') scale(' + n(sx) + ' ' + s + ')">' +
              '<g class="zuk-claw-tip">' +
              '<path class="zuk-jaw" d="' + pp.jaw + '" fill="' + C.shell + '" style="transform-box:fill-box;transform-origin:9% 0%"/>' +
              '<path class="zuk-jaw-fixed" d="' + pp.base + '" fill="' + C.shell + '"/>' +
              '</g></g>';
    return '<g class="zuk-claw zuk-claw-' + side + '">' + arm + tip + '</g>';
  }

  // ---- PATTES (4 stubs) ---------------------------------------------------
  function legsGroup(C) {
    var w = 17, y0 = 206, y1 = 232;
    var xs = [
      { x0: 92, x1: 84 },
      { x0: 116, x1: 113 },
      { x0: 144, x1: 147 },
      { x0: 168, x1: 176 }
    ];
    var s = '';
    xs.forEach(function (l) {
      s += '<line x1="' + l.x0 + '" y1="' + y0 + '" x2="' + l.x1 + '" y2="' + y1 +
           '" stroke="' + C.shell + '" stroke-width="' + w + '" stroke-linecap="round"/>';
    });
    return '<g class="zuk-legs">' + s + '</g>';
  }

  // ---- ACCESSOIRES (couche interchangeable : « habiller Zuki ») -----------
  // L'accessoire se pose sur le haut de la carapace (sommet vers y≈64).
  function accHelmet(C) {
    var brim = '<ellipse cx="130" cy="80" rx="86" ry="17" fill="' + C.helmet + '"/>';
    var dome = '<path d="M48 80 A82 62 0 0 1 212 80 Z" fill="' + C.helmet + '"/>';
    var knob = '<ellipse cx="130" cy="26" rx="9" ry="7" fill="' + C.helmet + '"/>';
    return brim + dome + knob;
  }
  function accCap(C) {
    // casquette : dôme + visière vers la gauche
    var dome = '<path d="M58 84 A74 58 0 0 1 206 84 Z" fill="' + C.helmet + '"/>';
    var visor = '<path d="M58 84 Q20 86 14 98 Q40 96 96 92 Z" fill="' + C.helmet + '"/>';
    var btn = '<circle cx="132" cy="30" r="7" fill="' + C.helmet + '"/>';
    return dome + visor + btn;
  }
  function accBeanie(C) {
    var dome = '<path d="M54 82 A76 60 0 0 1 206 82 Z" fill="' + C.helmet + '"/>';
    var band = '<rect x="50" y="76" width="160" height="18" rx="9" fill="' + C.ink + '"/>';
    var pom = '<circle cx="130" cy="20" r="11" fill="' + C.ink + '"/>';
    return dome + band + pom;
  }
  function accHeadset(C) {
    // casque audio support / SAV
    var band = '<path d="M58 86 A78 70 0 0 1 202 86" stroke="' + C.ink + '" stroke-width="14" fill="none" stroke-linecap="round"/>';
    var earL = '<rect x="42" y="78" width="28" height="40" rx="12" fill="' + C.ink + '"/>';
    var earR = '<rect x="190" y="78" width="28" height="40" rx="12" fill="' + C.ink + '"/>';
    var mic = '<path d="M204 116 Q214 150 176 162" stroke="' + C.ink + '" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="174" cy="164" r="9" fill="' + C.helmet + '"/>';
    return band + earL + earR + mic;
  }
  function accParty(C) {
    var cone = '<path d="M130 6 L172 90 L88 90 Z" fill="' + C.helmet + '"/>';
    var stripe = '<path d="M130 6 L150 46 L110 46 Z" fill="' + C.ink + '" opacity="0.18"/>';
    var pom = '<circle cx="130" cy="8" r="10" fill="' + C.ink + '"/>';
    return cone + stripe + pom;
  }

  var ACCESSORIES = {
    none: function () { return ''; },
    helmet: accHelmet,
    cap: accCap,
    beanie: accBeanie,
    headset: accHeadset,
    party: accParty
  };

  function accessoryGroup(name, C) {
    var fn = ACCESSORIES[name] || ACCESSORIES.helmet;
    return '<g class="zuk-casque zuk-acc-' + name + '">' + fn(C) + '</g>';
  }

  // ---- YEUX ---------------------------------------------------------------
  var EYE = { lx: 101, rx: 159, cy: 126, r: 29 };
  var PUP = { r: 15 };

  function eyesOpen(C, look) {
    look = look || { dx: 0, dy: 4 };
    function eye(ex) {
      var px = ex + look.dx, py = EYE.cy + look.dy;
      return '<circle cx="' + ex + '" cy="' + EYE.cy + '" r="' + EYE.r + '" fill="' + C.light + '"/>' +
             '<circle cx="' + n(px) + '" cy="' + n(py) + '" r="' + PUP.r + '" fill="' + C.ink + '"/>' +
             '<circle cx="' + n(px + 5) + '" cy="' + n(py - 6) + '" r="5.5" fill="' + C.light + '"/>';
    }
    return '<g class="zuk-eyes">' + eye(EYE.lx) + eye(EYE.rx) + '</g>';
  }

  // yeux fermés détendus (arc vers le bas = content)
  function eyesClosedHappy(C) {
    function arc(ex) {
      return '<path d="M' + (ex - 20) + ' ' + EYE.cy + ' Q' + ex + ' ' + (EYE.cy + 20) + ' ' + (ex + 20) + ' ' + EYE.cy +
             '" stroke="' + C.ink + '" stroke-width="8" fill="none" stroke-linecap="round"/>';
    }
    return '<g class="zuk-eyes">' + arc(EYE.lx) + arc(EYE.rx) + '</g>';
  }

  // yeux concentrés (arc vers le haut, comme ^ ^)
  function eyesConcentrated(C) {
    function arc(ex) {
      return '<path d="M' + (ex - 19) + ' ' + (EYE.cy + 6) + ' Q' + ex + ' ' + (EYE.cy - 16) + ' ' + (ex + 19) + ' ' + (EYE.cy + 6) +
             '" stroke="' + C.ink + '" stroke-width="8" fill="none" stroke-linecap="round"/>';
    }
    return '<g class="zuk-eyes">' + arc(EYE.lx) + arc(EYE.rx) + '</g>';
  }

  // yeux pétillants (étoile de reflet plus grande)
  function eyesSparkle(C, look) {
    look = look || { dx: 0, dy: 2 };
    function eye(ex) {
      var px = ex + look.dx, py = EYE.cy + look.dy;
      return '<circle cx="' + ex + '" cy="' + EYE.cy + '" r="' + EYE.r + '" fill="' + C.light + '"/>' +
             '<circle cx="' + n(px) + '" cy="' + n(py) + '" r="' + PUP.r + '" fill="' + C.ink + '"/>' +
             '<circle cx="' + n(px + 5) + '" cy="' + n(py - 6) + '" r="6" fill="' + C.light + '"/>' +
             '<circle cx="' + n(px - 5) + '" cy="' + n(py + 5) + '" r="3" fill="' + C.light + '"/>';
    }
    return '<g class="zuk-eyes">' + eye(EYE.lx) + eye(EYE.rx) + '</g>';
  }

  // ---- BOUCHE -------------------------------------------------------------
  var MOUTHS = {
    smile:   'M108 164 Q130 186 152 164',
    bigOpen: '', // remplie ci-dessous
    neutral: 'M112 172 L148 172',
    small:   'M120 172 Q130 180 140 172',
    worried: 'M112 174 Q130 166 148 174'
  };

  function mouthSmile(C, d) {
    d = d || MOUTHS.smile;
    return '<path class="zuk-mouth" d="' + d + '" stroke="' + C.ink +
           '" stroke-width="8" fill="none" stroke-linecap="round"/>';
  }

  function mouthBigOpen(C) {
    // sourire ouvert = forme pleine (langue suggérée par la forme)
    return '<g class="zuk-mouth">' +
           '<path d="M104 162 Q130 168 156 162 Q150 196 130 196 Q110 196 104 162 Z" fill="' + C.ink + '"/>' +
           '</g>';
  }

  // ---- PLASTRON -----------------------------------------------------------
  function plastronGroup(C) {
    return '<g class="zuk-plastron"><ellipse cx="130" cy="170" rx="55" ry="49" fill="' + C.belly + '"/></g>';
  }

  // ---- CARAPACE -----------------------------------------------------------
  function carapaceGroup(C) {
    return '<g class="zuk-carapace"><ellipse cx="' + BODY.cx + '" cy="' + BODY.cy +
           '" rx="' + BODY.rx + '" ry="' + BODY.ry + '" fill="' + C.shell + '"/></g>';
  }

  // ======================== POSES ==========================================
  // Chaque pose définit : pinces (positions), yeux, bouche, props, casque tilt
  var REST_L = { ax: 58, ay: 180, cx: 30, cy: 172, rot: 18, s: 0.6, flip: true };
  var REST_R = { ax: 202, ay: 180, cx: 230, cy: 172, rot: 342, s: 0.6 };

  function buildPose(pose, C) {
    var L = Object.assign({}, REST_L), R = Object.assign({}, REST_R);
    var eyes = eyesOpen(C), mouth = mouthSmile(C), props = '';

    switch (pose) {
      case 'reference':
        break;

      case 'salut':
        L = { ax: 60, ay: 150, cx: 50, cy: 84, rot: 70, s: 0.6, flip: true }; // pince levée, mors ouverts vers le haut (coucou)
        mouth = mouthBigOpen(C);
        break;

      case 'calcule':
        eyes = eyesConcentrated(C);
        mouth = mouthSmile(C, MOUTHS.small);
        props = propGears(C);
        break;

      case 'devis':
        R = { ax: 200, ay: 172, cx: 202, cy: 156, rot: 320, s: 0.54 };
        props = propDocument(C);
        mouth = mouthSmile(C);
        break;

      case 'perplexe':
        L = { ax: 54, ay: 158, cx: 70, cy: 66, rot: 120, s: 0.46, flip: true }; // gratte le casque par le côté
        eyes = eyesOpen(C, { dx: 5, dy: -1 });
        mouth = mouthSmile(C, MOUTHS.worried);
        props = propEyebrow(C) + propQuestion(C);
        break;

      case 'champion':
        L = { ax: 62, ay: 152, cx: 48, cy: 80, rot: 55, s: 0.56, flip: true };
        R = { ax: 198, ay: 152, cx: 212, cy: 80, rot: 305, s: 0.56 };
        eyes = eyesSparkle(C);
        mouth = mouthBigOpen(C);
        props = propBurst(C);
        break;

      case 'travaille':
        R = { ax: 200, ay: 170, cx: 204, cy: 150, rot: 290, s: 0.52 };
        props = propWrench(C);
        mouth = mouthSmile(C, MOUTHS.small);
        break;

      case 'endormi':
        eyes = eyesClosedHappy(C);
        mouth = mouthSmile(C, MOUTHS.small);
        props = propZ(C);
        break;

      case 'stop':
        R = { ax: 198, ay: 160, cx: 208, cy: 134, rot: 285, s: 0.64 }; // pince tendue en avant
        eyes = eyesOpen(C, { dx: 0, dy: 2 });
        mouth = mouthSmile(C, MOUTHS.neutral);
        break;
    }

    var pinces = '<g class="zuk-pinces">' + clawGroup('left', L, C) + clawGroup('right', R, C) + '</g>';

    return { pinces: pinces, eyes: eyes, mouth: mouth, props: props };
  }

  // ======================== PROPS ==========================================
  function star(cx, cy, r, fill) {
    var pts = '', i;
    for (i = 0; i < 10; i++) {
      var ang = (Math.PI / 5) * i - Math.PI / 2;
      var rad = (i % 2 === 0) ? r : r * 0.45;
      pts += n(cx + rad * Math.cos(ang)) + ',' + n(cy + rad * Math.sin(ang)) + ' ';
    }
    return '<polygon points="' + pts.trim() + '" fill="' + fill + '"/>';
  }

  function gear(cx, cy, r, fill) {
    var teeth = 8, inner = r * 0.62, hole = r * 0.34, p = '', i;
    for (i = 0; i < teeth * 2; i++) {
      var ang = (Math.PI / teeth) * i;
      var rad = (i % 2 === 0) ? r : inner;
      p += (i === 0 ? 'M' : 'L') + n(cx + rad * Math.cos(ang)) + ' ' + n(cy + rad * Math.sin(ang)) + ' ';
    }
    p += 'Z';
    return '<g class="zuk-gear"><path d="' + p + '" fill="' + fill + '"/>' +
           '<circle cx="' + cx + '" cy="' + cy + '" r="' + n(hole) + '" fill="#FFFFFF"/></g>';
  }

  function propGears(C) {
    return '<g class="zuk-props zuk-props-gears">' +
      '<g class="zuk-gear-a">' + gear(96, 36, 17, C.ink) + '</g>' +
      '<g class="zuk-gear-b">' + gear(150, 28, 12, C.helmet) + '</g>' +
      star(186, 48, 8, C.helmet) +
      '</g>';
  }

  function propDocument(C) {
    // document tenu dans la pince droite (devant)
    return '<g class="zuk-props zuk-props-doc">' +
      '<rect x="168" y="120" width="64" height="80" rx="6" fill="' + C.light + '" transform="rotate(8 200 160)"/>' +
      '<g transform="rotate(8 200 160)" stroke="' + C.shell + '" stroke-width="5" stroke-linecap="round">' +
        '<line x1="178" y1="138" x2="222" y2="138"/>' +
        '<line x1="178" y1="152" x2="222" y2="152"/>' +
        '<line x1="178" y1="166" x2="210" y2="166"/>' +
      '</g>' +
      '<path d="M180 182 l8 9 16 -18" transform="rotate(8 200 160)" stroke="' + C.helmet + '" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</g>';
  }

  function propEyebrow(C) {
    // un sourcil interrogatif au-dessus de l'œil droit
    return '<path class="zuk-eyebrow" d="M146 98 Q160 90 174 98" stroke="' + C.ink +
           '" stroke-width="7" fill="none" stroke-linecap="round"/>';
  }

  function propQuestion(C) {
    return '<g class="zuk-props zuk-props-q">' +
      '<text x="206" y="64" font-family="system-ui, sans-serif" font-size="58" font-weight="800" fill="' + C.ink + '">?</text>' +
      '</g>';
  }

  function propBurst(C) {
    // petites étoiles de joie autour
    return '<g class="zuk-props zuk-props-burst">' +
      star(70, 48, 9, C.helmet) + star(196, 44, 11, C.helmet) +
      star(232, 96, 7, C.ink) + star(30, 102, 7, C.ink) +
      '</g>';
  }

  function propWrench(C) {
    // clé à molette tenue dans la pince droite
    return '<g class="zuk-props zuk-props-wrench" transform="rotate(-32 196 150)">' +
      '<rect x="188" y="96" width="16" height="74" rx="8" fill="' + C.ink + '"/>' +
      '<path d="M178 96 a18 18 0 1 1 36 0 l-8 0 a10 10 0 1 0 -20 0 Z" fill="' + C.ink + '"/>' +
      '</g>';
  }

  function propZ(C) {
    return '<g class="zuk-props zuk-props-z" font-family="system-ui, sans-serif" font-weight="800" fill="' + C.ink + '">' +
      '<text x="188" y="92" font-size="26">Z</text>' +
      '<text x="208" y="66" font-size="34">Z</text>' +
      '<text x="226" y="40" font-size="22" opacity="0.6">z</text>' +
      '</g>';
  }

  // ======================== RENDER =========================================
  function render(opts) {
    opts = opts || {};
    var pose = opts.pose || 'reference';
    var theme = THEMES[opts.theme] || THEMES.orange;
    var C = theme;

    // mode mono : tout en une seule couleur (silhouette pleine), yeux/bouche en négatif (fond)
    if (opts.mono) {
      C = { shell: opts.mono, belly: opts.mono, helmet: opts.mono, ink: (opts.monoBg || '#FFFFFF'), light: (opts.monoBg || '#FFFFFF') };
    }

    var P = buildPose(pose, C);
    var accessory = (opts.accessory != null) ? opts.accessory : 'helmet';

    var inner =
      legsGroup(C) +
      carapaceGroup(C) +
      (opts.mono ? '' : plastronGroup(C)) +
      accessoryGroup(accessory, C) +
      P.eyes +
      P.mouth +
      P.pinces +
      P.props +
      (opts.extra || '');

    var size = opts.size ? (' width="' + opts.size + '" height="' + opts.size + '"') : '';
    var cls = 'zuk' + (opts.class ? ' ' + opts.class : '');
    var role = opts.title ? ('<title>' + opts.title + '</title>') : '';

    return '<svg class="' + cls + '" viewBox="0 0 ' + VB + ' ' + VB + '"' + size +
           ' xmlns="http://www.w3.org/2000/svg" data-pose="' + pose + '">' + role +
           '<g class="zuk-root">' + inner + '</g></svg>';
  }

  // favicon ultra-simplifié : corps + casque + 2 yeux uniquement
  function renderFavicon(opts) {
    opts = opts || {};
    var C = THEMES[opts.theme] || THEMES.orange;
    var body = '<ellipse cx="130" cy="150" rx="96" ry="84" fill="' + C.shell + '"/>';
    var brim = '<ellipse cx="130" cy="78" rx="92" ry="18" fill="' + C.helmet + '"/>';
    var dome = '<path d="M44 78 A86 66 0 0 1 216 78 Z" fill="' + C.helmet + '"/>';
    var eyes =
      '<circle cx="98" cy="138" r="30" fill="#FFFFFF"/><circle cx="103" cy="143" r="16" fill="' + C.ink + '"/>' +
      '<circle cx="162" cy="138" r="30" fill="#FFFFFF"/><circle cx="167" cy="143" r="16" fill="' + C.ink + '"/>';
    var size = opts.size ? (' width="' + opts.size + '" height="' + opts.size + '"') : '';
    return '<svg class="zuk zuk-favicon" viewBox="0 0 260 260"' + size + ' xmlns="http://www.w3.org/2000/svg">' +
           body + brim + dome + eyes + '</svg>';
  }

  global.Zuk = {
    render: render,
    renderFavicon: renderFavicon,
    THEMES: THEMES,
    ACCESSORIES: ['none', 'helmet', 'cap', 'beanie', 'headset', 'party'],
    POSES: ['reference', 'salut', 'calcule', 'devis', 'perplexe', 'champion', 'travaille', 'endormi', 'stop']
  };

})(window);
