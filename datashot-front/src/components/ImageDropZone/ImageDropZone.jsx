import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageDropZone.scss';
import Loader from '../Loader/Loader';
import EXIF from 'exif-js';

const ImageDropZone = ({ onExifData }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    setIsLoading(true);

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage({
          src: e.target.result,
          width: img.width,
          height: img.height
        });
        setIsLoading(false);
      };
      img.src = e.target.result;

      // Extraction des données EXIF
      EXIF.getData(file, function() {
        const exifData = EXIF.getAllTags(this);
        onExifData(exifData);
      });
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });

  return (
    <div className="image-drop-zone">
      {!image && (<div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Déposez la photo ici ...</p> :
            <p>Glissez et déposez une image ici, ou cliquez pour sélectionner une image</p>
        }
      </div>)}
      {isLoading && <Loader message="Chargement de l'image..." />}
      {image && !isLoading &&(
        <div className="image-preview">
          <img
            src={image.src}
            alt="Uploaded preview"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDropZone;