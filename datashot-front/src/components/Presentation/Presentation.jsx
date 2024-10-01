import './Presentation.scss';
import PropTypes from 'prop-types';

const Presentation = ({darkMode}) => {
  return (
    <div className={`presentation-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className='presentation-title'>Bienvenue sur DataShot</h2>
      <p className='presentation-paragraph'>
      Explorez les métadonnées EXIF de vos photos en un clic. Découvrez :
      </p>
      <ul className='presentation-list'>
        <li><span role="img" aria-label="camera">📷</span> L'équipement utilisé : Appareil photo et objectif</li>
        <li><span role="img" aria-label="gear">⚙️</span> Les réglages techniques : Ouverture, vitesse d'obturation, ISO</li>
        <li><span role="img" aria-label="pin">📍</span> Le lieu de prise de vue (si disponible)</li>
        <li><span role="img" aria-label="palette">🎨</span> Et bien plus encore !</li>
      </ul>
      {/* <p className='presentation-paragraph'>
        Que vous soyez un photographe passionné cherchant à affiner votre technique, un amateur curieux de vos souvenirs, ou simplement intrigué par la technologie derrière vos images, DataShot vous offre un voyage captivant au cœur de vos photographies.
      </p> */}
      <p className='presentation-paragraph'>
        Simple et rapide, sans inscription. Glissez-déposez votre photo pour commencer !
      </p>
    </div>
  )
}

Presentation.propTypes = {
  darkMode: PropTypes.bool.isRequired
};
export default Presentation;