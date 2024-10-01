import './Presentation.scss';
import PropTypes from 'prop-types';

const Presentation = ({darkMode}) => {
  return (
<div className={`presentation-container ${darkMode ? 'dark-mode' : ''}`}>
  <h2 className='presentation-title'>Bienvenue sur DataShot</h2>
  <p className='presentation-paragraph'>
    Explorez les métadonnées EXIF de vos photos en un clic :
  </p>
  <ul className='presentation-list'>
    <li><span role="img" aria-label="camera">📷</span> Appareil photo et objectif</li>
    <li><span role="img" aria-label="gear">⚙️</span> Réglages : Ouverture, vitesse, ISO</li>
    <li><span role="img" aria-label="pin">📍</span> Lieu de prise de vue (si disponible)</li>
    <li><span role="img" aria-label="palette">🎨</span> Et bien plus encore !</li>
  </ul>
  <p className='presentation-paragraph'>
    Simple, rapide et sans inscription. Glissez-déposez votre photo pour commencer ! Aucune donnée n'est envoyée à un serveur.
  </p>
</div>

  )
}

Presentation.propTypes = {
  darkMode: PropTypes.bool.isRequired
};
export default Presentation;