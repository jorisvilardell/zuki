/* Zuki — character sheet : data + rendu */
(function () {
  'use strict';

  // ---- auto-render des <span data-zuk='{...}'> ----
  document.querySelectorAll('[data-zuk]').forEach(function (el) {
    try { el.innerHTML = Zuk.render(JSON.parse(el.getAttribute('data-zuk'))); }
    catch (e) { console.error('data-zuk', e); }
  });

  // ---- marque (barre) + hero + lockup ----
  document.getElementById('brandMark').innerHTML = Zuk.renderFavicon({});
  document.getElementById('heroArt').innerHTML = Zuk.render({ pose: 'reference', class: 'anim-idle anim-claps' });
  document.getElementById('lockZuk').innerHTML = Zuk.render({ pose: 'reference', class: 'anim-idle anim-claps' });

  // ---- palette ----
  var COLORS = [
    { name: 'Carapace', hex: '#F2552C' },
    { name: 'Plastron', hex: '#FF8E63' },
    { name: 'Casque', hex: '#FFC53D' },
    { name: 'Encre', hex: '#2B2B33' },
    { name: 'Reflet', hex: '#FFFFFF' }
  ];
  document.getElementById('palette').innerHTML = COLORS.map(function (c) {
    var border = (c.hex === '#FFFFFF') ? 'border-bottom:1px solid var(--line)' : '';
    return '<div class="sw"><div class="chip" style="background:' + c.hex + ';' + border + '"></div>' +
      '<div class="lab"><b>' + c.name + '</b><span>' + c.hex + '</span></div></div>';
  }).join('');

  // ---- expressions ----
  var EXPR = [
    { pose: 'reference', name: 'Référence', ctx: 'Carte d\u2019identité, pose neutre' },
    { pose: 'salut', name: 'Salut', ctx: 'Onboarding, accueil' },
    { pose: 'calcule', name: 'Calcule', ctx: 'Loading, génération du devis' },
    { pose: 'devis', name: 'Présente le devis', ctx: 'Validation, succès' },
    { pose: 'perplexe', name: 'Perplexe', ctx: 'Erreur 404, page vide' },
    { pose: 'champion', name: 'Champion', ctx: 'Devis envoyé, conversion' },
    { pose: 'travaille', name: 'Travaille', ctx: 'Calcul prolongé' },
    { pose: 'endormi', name: 'Endormi', ctx: 'Session inactive' },
    { pose: 'stop', name: 'Stop', ctx: 'Erreur bloquante' }
  ];
  document.getElementById('exprGrid').innerHTML = EXPR.map(function (e) {
    return '<div class="card"><div class="stage">' + Zuk.render({ pose: e.pose }) + '</div>' +
      '<div class="meta"><h3>' + e.name + '</h3><p>' + e.ctx + '</p></div></div>';
  }).join('');

  // ---- animations ----
  var PING = '<circle class="zuk-ping" cx="130" cy="150" r="94" fill="none" stroke="#F2552C" stroke-width="6"/>';
  var ANIMS = [
    { key: 'idle', cls: 'anim-idle', pose: 'reference', name: 'Idle', desc: 'Balancement + clignement. Boucle permanente, très discret.', loop: true },
    { key: 'calcule', cls: 'anim-calcule', pose: 'calcule', name: 'Zuki calcule', desc: 'Pinces qui claquent, rouages qui tournent. Remplace le spinner.', loop: true },
    { key: 'success', cls: 'anim-success', pose: 'devis', name: 'Devis prêt', desc: 'Pop + document qui surgit + ping lumineux. Joué une fois.', loop: false, extra: PING },
    { key: 'salut', cls: 'anim-salut', pose: 'salut', name: 'Salut', desc: 'Rebond d\u2019entrée puis pince qui salue. Premier lancement.', loop: false },
    { key: 'perplexe', cls: 'anim-perplexe', pose: 'perplexe', name: 'Perplexe', desc: 'Inclinaison de tête + « ? ». Boucle douce sur états vides.', loop: true }
  ];
  function animSVG(a) { return Zuk.render({ pose: a.pose, class: a.cls, extra: a.extra || '' }); }
  var animGrid = document.getElementById('animGrid');
  animGrid.innerHTML = ANIMS.map(function (a) {
    var corner = a.loop
      ? '<span class="badge-loop">boucle</span>'
      : '<button class="replay" data-replay="' + a.key + '" title="Rejouer">↻</button>';
    return '<div class="card demo"><div class="stage" data-stage="' + a.key + '">' +
      animSVG(a) + corner + '<span class="hint">' + (a.loop ? 'en lecture' : 'cliquer pour rejouer') + '</span></div>' +
      '<div class="meta"><h3>' + a.name + '</h3><p>' + a.desc + '</p></div></div>';
  }).join('');

  // rejouer : re-render le SVG (réinitialise les animations CSS)
  function replay(key) {
    var a = ANIMS.find(function (x) { return x.key === key; });
    var stage = animGrid.querySelector('[data-stage="' + key + '"]');
    if (!a || !stage) return;
    var svg = stage.querySelector('svg');
    if (svg) svg.remove();
    stage.insertAdjacentHTML('afterbegin', animSVG(a));
  }
  animGrid.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-replay]');
    if (btn) { replay(btn.getAttribute('data-replay')); return; }
    var stage = e.target.closest('[data-stage]');
    if (stage) {
      var k = stage.getAttribute('data-stage');
      var a = ANIMS.find(function (x) { return x.key === k; });
      if (a && !a.loop) replay(k);
    }
  });

  // ---- playground « habiller Zuki » ----
  var state = { accessory: 'helmet', pose: 'reference', theme: 'orange', bg: 'light' };
  var ACC = [
    { v: 'helmet', t: 'Casque' }, { v: 'none', t: 'Aucun' }, { v: 'cap', t: 'Casquette' },
    { v: 'beanie', t: 'Bonnet' }, { v: 'headset', t: 'Casque audio' }, { v: 'party', t: 'Fête' }
  ];
  var PPOSE = [
    { v: 'reference', t: 'Référence' }, { v: 'salut', t: 'Salut' }, { v: 'champion', t: 'Champion' },
    { v: 'devis', t: 'Devis' }, { v: 'perplexe', t: 'Perplexe' }, { v: 'stop', t: 'Stop' }
  ];
  var THEME = [{ v: 'orange', t: 'Orange', c: '#F2552C' }, { v: 'blue', t: 'Bleu', c: '#4F6EF7' }];
  var BG = [{ v: 'light', t: 'Clair' }, { v: 'dark', t: 'Sombre' }];

  function chip(group, o, active) {
    var dot = o.c ? '<span class="sw-dot" style="background:' + o.c + '"></span>' : '';
    return '<button class="chip-btn" data-group="' + group + '" data-val="' + o.v + '" aria-pressed="' +
      (active ? 'true' : 'false') + '">' + dot + o.t + '</button>';
  }
  document.getElementById('accChips').innerHTML = ACC.map(function (o) { return chip('accessory', o, o.v === state.accessory); }).join('');
  document.getElementById('poseChips').innerHTML = PPOSE.map(function (o) { return chip('pose', o, o.v === state.pose); }).join('');
  document.getElementById('themeChips').innerHTML = THEME.map(function (o) { return chip('theme', o, o.v === state.theme); }).join('');
  document.getElementById('bgChips').innerHTML = BG.map(function (o) { return chip('bg', o, o.v === state.bg); }).join('');

  function renderPlay() {
    document.getElementById('playZuk').innerHTML = Zuk.render({
      pose: state.pose, accessory: state.accessory, theme: state.theme,
      class: 'anim-idle' + (state.pose === 'reference' ? ' anim-claps' : '')
    });
    document.getElementById('playPreview').classList.toggle('dark', state.bg === 'dark');
  }
  document.querySelectorAll('.controls .chip-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var g = b.getAttribute('data-group'), v = b.getAttribute('data-val');
      state[g] = v;
      document.querySelectorAll('.chip-btn[data-group="' + g + '"]').forEach(function (x) {
        x.setAttribute('aria-pressed', x.getAttribute('data-val') === v ? 'true' : 'false');
      });
      renderPlay();
    });
  });
  renderPlay();

  // ---- favicons ----
  var favSizes = [16, 32, 64];
  document.getElementById('favRow').innerHTML = favSizes.map(function (s) {
    return '<div class="fav-item"><div class="px" style="width:' + (s + 28) + 'px;height:' + (s + 28) + 'px">' +
      Zuk.renderFavicon({ size: s }) + '</div><small>' + s + '×' + s + '</small></div>';
  }).join('') +
    '<div class="fav-item"><div class="px" style="padding:18px">' + Zuk.renderFavicon({ size: 128 }) +
    '</div><small>aperçu ×</small></div>';

  // ---- sticker 512 ----
  var st = document.getElementById('sticker');
  st.style.background = 'radial-gradient(120% 120% at 50% 22%, #FFE8DF, #FFD9C9)';
  st.innerHTML = Zuk.render({ pose: 'champion' });
  st.querySelector('svg').style.width = '78%';

  // ---- theme toggle (clair / sombre global) ----
  var saved = null;
  try { saved = localStorage.getItem('zuki-theme'); } catch (e) {}
  if (saved === 'dark') document.body.classList.add('dark');
  document.getElementById('themeBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    try { localStorage.setItem('zuki-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
  });

  // ---- favicon vivant dans l'onglet ----
  try {
    var favLink = document.createElement('link');
    favLink.rel = 'icon';
    favLink.href = 'data:image/svg+xml,' + encodeURIComponent(Zuk.renderFavicon({}));
    document.head.appendChild(favLink);
  } catch (e) {}

})();
