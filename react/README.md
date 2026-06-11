# Zuki React 🤖

Zuki is a dynamic, fully animated SVG mascot built as a plug-and-play React component. 
Add a touch of life to your landing pages, error boundaries, loading screens, and empty states!

![Zuki Mascot Preview](https://github.com/user-attachments/assets/preview-image) <!-- Placeholder for a real image if you have one -->

## ✨ Features

- **🎨 Fully Scalable:** Built entirely with SVG. Crystal clear at any resolution.
- **🏃‍♂️ Animated Personalities:** Comes with built-in CSS keyframe animations for various states.
- **👔 Customizable:** Supports multiple themes (colors), poses, and accessories.
- **⚡ Lightweight:** Zero dependencies (other than React).

## 📦 Installation

Install the package using your favorite package manager:

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

To use Zuki, you need to import the component and the accompanying CSS file (which contains all the animation keyframes).

```jsx
import { Zuki, ZukiFavicon } from '@zukquote/zuki-react';
import '@zukquote/zuki-react/style.css'; // Important: imports animations!

export default function App() {
  return (
    <div>
      {/* Default Zuki */}
      <Zuki pose="hello" theme="orange" size={260} />

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
| `pose` | `string` | `'idle'` | The animation/pose state. Options: `'idle'`, `'hello'`, `'success'`, `'stop'`, `'sleeping'`, `'thinking'` |
| `theme` | `string` | `'orange'` | Primary color theme. Options: `'orange'`, `'blue'`, `'green'`, `'purple'`, `'yellow'` |
| `accessory` | `string` | `'none'` | What Zuki is wearing. Options: `'none'`, `'helmet'`, `'cap'`, `'beanie'`, `'headset'`, `'party'` |
| `accessoryColor`| `string` | *Theme specific* | Override the color of the accessory with any valid CSS color (e.g., `'#FF5555'`). |
| `size` | `number` | `100%` | Width of the component in pixels. Will scale SVG proportionately. |
| `className` | `string` | `''` | Additional CSS classes applied to the root element. |

### `<ZukiFavicon />`
A reduced version of Zuki showing only his head, optimized for small sizes like favicons, avatars, or inline icons.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `string` | `'orange'` | Primary color theme. |
| `size` | `number` | `32` | Width of the icon in pixels. |
| `className` | `string` | `''` | Additional CSS classes applied to the root element. |

## 🎨 Themes Available
- `orange` (Default)
- `blue`
- `green`
- `purple`
- `yellow`

## 🏃‍♂️ Poses & Animations Available
- `idle`: Swaying gently, blinking, looking around.
- `hello`: Waving hand enthusiastically.
- `success`: "Champion" pose, jumping up with both arms.
- `stop`: Robotic traffic-controller pose, pointing firmly with synchronized blinking.
- `sleeping`: Eyes closed, breathing animation (carapace expands/deflates), snoring mouth in sync, with "Zzz" particles.
- `thinking`: Tapping his chin playfully.

## 📄 License

MIT License © 2026 [ZukQuote / Joris]
