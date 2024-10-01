import { useState } from "react";
import Header from "../Header/Header";
import ImageDropZone from "../ImageDropZone/ImageDropZone";
import "./App.scss";
import ImageInfos from "../ImageInfos/ImageInfos";

function App() {
  const [exifData, setExifData] = useState(null);
  const [image, setImage] = useState(null);

  const handleExifData = (exifData) => {
    setExifData(exifData);
  };

  const handleImageChange = (imageData) => {
    setImage(imageData);
  };

  console.log('EXIF', exifData);
  

  return (
    <>
       <Header/>
       <ImageDropZone onExifData={handleExifData} image={image} onImageChange={handleImageChange} />
       <ImageInfos />
    </>
 
  )
}

export default App;
