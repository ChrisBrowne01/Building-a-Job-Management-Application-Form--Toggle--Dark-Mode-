import React, { useState, useEffect } from "react";
import { Header } from "./component/Header";
import { Footer } from './component/Footer';
import './App.css';

function App() {
  // Initialize dark mode from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  // Effect to apply/remove the 'dark-mode' class on the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(theme => !theme);
  };

  return (
      <div className="App">
        {/* Dark Mode Toggle Button */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
        
        <Header />
        <main className="headerfunc">
          <section className='columns'>Section 1</section>
          <section className='columns'>Section 2</section>
          <section className='columns'>Section 3</section>
        </main>
        <Footer /> 
      </div>
  );
}

export default App;
