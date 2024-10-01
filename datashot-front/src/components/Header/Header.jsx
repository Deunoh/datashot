import PropTypes from 'prop-types';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from "react-icons/lu";
import './Header.scss';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1 className='main-title'>DataShot.</h1>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? <LuSun /> : <FaMoon />}
      </button>
    </header>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;