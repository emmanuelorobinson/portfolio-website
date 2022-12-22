import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './contexts/theme-context';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
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