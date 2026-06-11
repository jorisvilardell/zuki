import { ZukiFavicon } from '../lib';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <div className="bar">
      <div className="wrap">
        <div className="brand">
          <ZukiFavicon size={34} theme="orange" /> Zuki
        </div>
        <nav>
          <a href="#expressions">Expressions</a>
          <a href="#anims">Animations</a>
          <a href="#dress">Playground</a>
          <a href="#formats">Formats</a>
        </nav>
        <button className="toggle" onClick={toggleTheme} title="Toggle light / dark mode">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}
