
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    dark: false,
    backgroundColor: '#fff',
    textColor: '#000',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      dark: !prevTheme.dark,
      backgroundColor: prevTheme.dark ? '#fff' : '#000',
      textColor: prevTheme.dark ? '#000' : '#fff',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};