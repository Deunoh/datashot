import './ImageInfos.scss';
import { FaCamera, FaRulerHorizontal, FaBolt, FaLaptopCode } from "react-icons/fa";
import { IoIosAperture } from "react-icons/io";
import { MdOutlineShutterSpeed, MdExposure, MdOutlineWbIridescent } from "react-icons/md";
import { SiSocialblade } from "react-icons/si";
import { BsCameraVideoFill } from "react-icons/bs";

const ImageInfos = () => {
  return <div className='infos-container'>
    <h2 className='infos-title'>Informations EXIF</h2>
    <div className="infos-list-container">
      <ul>
        <li><FaCamera /> Apple Iphone 14 pro</li>
        <li><IoIosAperture /> Ouverture : 1.80</li>
        <li><MdOutlineShutterSpeed /> Vitesse : 1/122</li>
        <li><SiSocialblade /> ISO : 100</li>
        <li><FaRulerHorizontal /> Focale : 4.25mm</li>
        <li><BsCameraVideoFill /> Objectif : Nom de l'objectif</li>
      </ul>
      <ul>
        <li><MdExposure /> Exposition : Automatique</li>
        <li><MdOutlineWbIridescent /> Balance des blancs : Auto white balance</li>
        <li><FaBolt /> Flash : Flash did not fire, compulsory flash mode</li>
        <li><FaLaptopCode /> Logiciel : Adobe Lightroom 5.4 (Windows)</li>
      </ul>

    </div>
  </div>
}

export default ImageInfos;