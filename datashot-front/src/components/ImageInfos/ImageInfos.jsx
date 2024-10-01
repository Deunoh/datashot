import './ImageInfos.scss';
import PropTypes from 'prop-types';
import { FaCamera, FaRulerHorizontal, FaBolt, FaLaptopCode } from "react-icons/fa";
import { IoIosAperture } from "react-icons/io";
import { MdOutlineShutterSpeed, MdExposure, MdOutlineWbIridescent } from "react-icons/md";
import { SiSocialblade } from "react-icons/si";
import { BsCameraVideoFill } from "react-icons/bs";

const ImageInfos = ({ exifData, darkMode }) => {
  // Fonction pour obtenir la valeur EXIF ou un trait d'union si non disponible
  const getExifValue = (value, defaultValue = '-') => {
    return value && value.description ? value.description : defaultValue;
  };

  return (
    <div className={`infos-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className='infos-title'>Informations EXIF</h2>
      <div className="infos-list-container">
        <ul>
          <li><FaCamera /> {getExifValue(exifData?.Model, 'Appareil inconnu')}</li>
          <li><IoIosAperture /> Ouverture : {getExifValue(exifData?.FNumber, 'f/')}</li>
          <li><MdOutlineShutterSpeed /> Vitesse : {getExifValue(exifData?.ExposureTime)}</li>
          <li><SiSocialblade /> ISO : {getExifValue(exifData?.ISOSpeedRatings)}</li>
          <li><FaRulerHorizontal /> Focale : {getExifValue(exifData?.FocalLength)}</li>
          <li><BsCameraVideoFill /> Objectif : {getExifValue(exifData?.LensModel, 'Inconnu')}</li>
        </ul>
        <ul>
          <li><MdExposure /> Exposition : {getExifValue(exifData?.ExposureProgram)}</li>
          <li><MdOutlineWbIridescent /> Balance des blancs : {getExifValue(exifData?.WhiteBalance)}</li>
          <li><FaBolt /> Flash : {getExifValue(exifData?.Flash)}</li>
          <li><FaLaptopCode /> Logiciel : {getExifValue(exifData?.Software, 'Inconnu')}</li>
        </ul>
      </div>
    </div>
  );
};

ImageInfos.propTypes = {
  exifData: PropTypes.object, // Changé pour accepter l'objet complet d'exifReader
  darkMode: PropTypes.bool.isRequired
};

export default ImageInfos;