
import { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from "react-icons/lu";
import './Header.scss';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <h1 className='main-title'>DataShot.</h1>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? <LuSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;