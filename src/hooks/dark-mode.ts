import { useState } from 'react';

export function useDarkMode(): [boolean, (_checked: boolean) => void] {
  const [darkMode, setDarkMode] = useState(isDarkMode());

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    updateMode(checked);
  };

  return [darkMode, toggleDarkMode];
}

export function isDarkMode() {
  return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export function updateMode(dark?: boolean) {
  if (dark === true) {
    localStorage.theme = 'dark';
  } else if(dark === false) {
    localStorage.theme = 'light';
  } else {
    localStorage.removeItem('theme');
  }
  if (isDarkMode()) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
