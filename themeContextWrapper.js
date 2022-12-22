import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './contexts/theme-context';
import {getLocalTheme, setLocalTheme} from './utils/localStorage';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(getLocalTheme() || themes.light);

  function changeTheme(theme) {
    setTheme(theme);
    setLocalTheme(theme);
    
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark-content');
        document.body.classList.remove('white-content');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark-content');
        document.body.classList.add('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}