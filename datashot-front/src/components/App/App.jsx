import { useEffect, useState } from "react";
import { IoCameraReverse } from "react-icons/io5";
import Header from "../Header/Header";
import ImageDropZone from "../ImageDropZone/ImageDropZone";
import "./App.scss";
import ImageInfos from "../ImageInfos/ImageInfos";

function App() {
  const [exifData, setExifData] = useState(null);
  const [image, setImage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleExifData = (exifData) => {
    setExifData(exifData);
  };

  const handleImageChange = (imageData) => {
    setImage(imageData);
  };

  const handleReset = () => {
    setImage(null);
    setExifData(null);
  };

  console.log('EXIF', exifData);
  

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <ImageDropZone 
      onExifData={handleExifData} 
      image={image} 
      onImageChange={handleImageChange} 
    />
    {image && <ImageInfos exifData={exifData} darkMode={darkMode} />}
    {image && <IoCameraReverse className="reload-btn" size={40} onClick={handleReset} />}
  </div>
 
  )
}

export default App;
