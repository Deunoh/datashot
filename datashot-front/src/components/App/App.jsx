import { useState } from "react";
import Header from "../Header/Header";
import ImageDropZone from "../ImageDropZone/ImageDropZone";
import "./App.scss";

function App() {
  const [exifData, setExifData] = useState(null);

  const handleExifData = (exifData) => {
    setExifData(exifData);
  };

  console.log('EXIF', exifData);
  

  return (
    <>
       <Header/>
       <ImageDropZone onExifData={handleExifData} />
    </>
 
  )
}

export default App;
