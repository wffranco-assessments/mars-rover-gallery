import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useDarkMode } from '../hooks/dark-mode';

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button type="button" className="flex gap-2 items-center" onClick={() => setDarkMode(!darkMode)}>
      <DarkModeSwitch checked={darkMode} onChange={() => undefined} />
      <span className="hidden md:inline">{darkMode?'Dark':'Light'} Mode</span>
    </button>
  );
};

export default DarkMode;
