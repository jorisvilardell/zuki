<div align="center">
  <h1>🤖 Zuki</h1>
  <p><strong>A dynamic, fully animated SVG mascot built as a plug-and-play React component.</strong></p>

  [![npm version](https://img.shields.io/npm/v/@zukquote/zuki-react.svg?style=flat-square)](https://www.npmjs.com/package/@zukquote/zuki-react)
  [![license](https://img.shields.io/npm/l/@zukquote/zuki-react.svg?style=flat-square)](https://github.com/jorisvilardell/zuki/blob/main/LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

  <p>
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-api-reference">API Reference</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

Add a touch of life to your landing pages, error boundaries, loading screens, and empty states! Zuki comes with built-in personality and emotions out-of-the-box. 

## ✨ Features

- **🎨 Fully Scalable:** Built entirely with pure SVG. Crystal clear at any resolution.
- **🏃‍♂️ Animated Personalities:** Beautiful CSS keyframe animations for various emotional states (Idle, Sleeping, Celebrating...).
- **👔 Customizable:** Supports multiple themes (colors), poses, and accessories.
- **⚡ Lightweight & Fast:** Zero dependencies other than React. No heavy animation libraries like Framer Motion or Lottie.

## 📦 Installation

Install the package via your preferred package manager:

```bash
npm install @zukquote/zuki-react
```
```bash
pnpm add @zukquote/zuki-react
```
```bash
yarn add @zukquote/zuki-react
```

## 🚀 Quick Start

Using Zuki is incredibly simple. Just import the component and the accompanying CSS file (which contains all the animation magic).

```jsx
import { Zuki, ZukiFavicon } from '@zukquote/zuki-react';
import '@zukquote/zuki-react/style.css'; // Important: imports animations!

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      {/* A sleeping Zuki with a purple theme */}
      <Zuki pose="sleeping" theme="purple" size={260} />

      {/* Zuki waving hello with an orange theme and a green helmet! */}
      <Zuki pose="hello" theme="orange" accessory="helmet" accessoryColor="#2EA043" size={260} />

      {/* Head-only Icon */}
      <ZukiFavicon theme="blue" size={64} />
    </div>
  );
}
```

## 🎛️ API Reference

### `<Zuki />`
The main full-body animated mascot.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `pose` | `string` | `'idle'` | The animation state. Options: `'idle'`, `'hello'`, `'success'`, `'stop'`, `'sleeping'`, `'thinking'` |
| `theme` | `string` | `'orange'` | Primary color theme. Options: `'orange'`, `'blue'`, `'green'`, `'purple'`, `'yellow'` |
| `accessory` | `string` | `'none'` | What Zuki is wearing. Options: `'none'`, `'helmet'`, `'cap'`, `'beanie'`, `'headset'`, `'party'` |
| `accessoryColor`| `string` | *Theme* | Override the color of the accessory with any valid CSS color (e.g., `'#FF5555'`). |
| `size` | `number` | `100%` | Width of the component in pixels. Will scale SVG proportionately. |

### `<ZukiFavicon />`
A reduced version of Zuki showing only his head, optimized for small sizes like favicons, avatars, or inline icons. Accepts `theme` and `size` props.

## 🤝 Contributing

Zuki is built to be easily extensible. If you want to add a new pose, a new accessory, or a new color theme, we'd love to see your contributions!

1. Fork the project.
2. Clone your fork: `git clone https://github.com/your-username/zuki.git`
3. Install dependencies using pnpm: `pnpm install`
4. Create a new branch for your feature: `git checkout -b feat/my-new-pose`
5. Start the local playground to test your changes: `cd react && pnpm run dev`
6. Make your changes and commit!

Our CI automatically checks that ESLint passes and that both the library and the landing page build correctly.

## 📄 License

MIT License © 2026 ZukQuote
