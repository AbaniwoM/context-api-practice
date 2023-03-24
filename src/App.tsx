import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
export const ThemeContext = React.createContext({} as IThemeContext);

interface IThemeContext {
  theme: string;
  setTheme: any;
}

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div>
      <Header />
      <Hero />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

