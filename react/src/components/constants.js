export const POSES = [
  { v: 'idle', t: 'Reference', desc: 'ID card, neutral pose' },
  { v: 'hello', t: 'Hello', desc: 'Onboarding, greeting' },
  { v: 'process', t: 'Processing', desc: 'Loading, generating quote' },
  { v: 'quote', t: 'Quote Ready', desc: 'Validation, success' },
  { v: 'perplexed', t: 'Perplexed', desc: 'Error 404, empty state' },
  { v: 'success', t: 'Champion', desc: 'Quote sent, conversion' },
  { v: 'endormi', t: 'Sleeping', desc: 'Inactive session' },
  { v: 'stop', t: 'Stop', desc: 'Blocking error' }
];

export const ANIMATIONS = [
  { pose: 'idle', anim: 'anim-idle anim-claps', name: 'Idle', desc: 'Slight sway + blinking. Continuous loop, very subtle.', loop: true },
  { pose: 'process', anim: 'anim-process', name: 'Zuki calculates', desc: 'Clapping claws, turning gears. Replaces the spinner.', loop: true },
  { pose: 'quote', anim: 'anim-quote', name: 'Quote ready', desc: 'Pop + emerging document + luminous ping. Plays once.', loop: false },
  { pose: 'hello', anim: 'anim-hello', name: 'Hello', desc: 'Entry bounce then waving claw. First launch.', loop: false },
  { pose: 'perplexed', anim: 'anim-perplexed', name: 'Perplexed', desc: 'Head tilt + « ? ». Soft loop on empty states.', loop: true },
  { pose: 'success', anim: 'anim-success', name: 'Champion', desc: 'Victory dance. Plays once.', loop: false },
  { pose: 'endormi', anim: 'anim-sleeping', name: 'Sleeping', desc: 'Zzz. Soft loop.', loop: true },
  { pose: 'stop', anim: 'anim-stop', name: 'Stop', desc: 'Blocking animation.', loop: true }
];

export const ACCESSORIES = [
  { v: 'helmet', t: 'Helmet' },
  { v: 'none', t: 'None' },
  { v: 'cap', t: 'Cap' },
  { v: 'beanie', t: 'Beanie' },
  { v: 'headset', t: 'Headset' },
  { v: 'party', t: 'Party' },
];

export const THEMES = [
  { v: 'orange', t: 'Orange', hex: '#F2552C' },
  { v: 'blue', t: 'Blue', hex: '#4F6EF7' },
  { v: 'green', t: 'Green', hex: '#2EA043' },
  { v: 'purple', t: 'Purple', hex: '#8250DF' },
  { v: 'yellow', t: 'Yellow', hex: '#E3B341' }
];
