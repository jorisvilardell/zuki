import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IdCard from './components/IdCard';
import Expressions from './components/Expressions';
import Animations from './components/Animations';
import Playground from './components/Playground';
import Formats from './components/Formats';
import Installation from './components/Installation';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [playState, setPlayState] = useState({ pose: 'idle', accessory: 'none', theme: 'orange' });
  const [animKeys, setAnimKeys] = useState({});

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const updatePlayState = (key, value) => setPlayState(prev => ({ ...prev, [key]: value }));

  const retriggerAnim = (index) => setAnimKeys(prev => ({ ...prev, [index]: Date.now() }));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <IdCard />
      <Expressions />
      <Animations animKeys={animKeys} retriggerAnim={retriggerAnim} />
      <Playground playState={playState} updatePlayState={updatePlayState} />
      <Formats />
      <Installation />
      <Footer />
    </>
  );
}

export default App;
