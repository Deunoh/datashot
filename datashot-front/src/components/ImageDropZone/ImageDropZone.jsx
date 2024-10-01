import { useCallback, useState } from 'react';
import { PiCameraPlusFill } from "react-icons/pi";
import { useDropzone } from 'react-dropzone';
import ExifReader from 'exifreader';
import PropTypes from 'prop-types';
import './ImageDropZone.scss';
import Loader from '../Loader/Loader';

const ImageDropZone = ({ onExifData, onImageChange, image }) => {
  
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    setIsLoading(true);

    reader.onload = async (e) => {
      const img = new Image();
      img.onload = () => {
        onImageChange({ src: e.target.result, width: img.width, height: img.height });
        setIsLoading(false);
      };
      img.src = e.target.result;

      // Extraction des données EXIF avec ExifReader
      try {
        const tags = await ExifReader.load(file);
        onExifData(tags);
      } catch (error) {
        console.error('Erreur lors de la lecture des données EXIF:', error);
        onExifData(null);
      }
    };

    reader.readAsDataURL(file);
  }, [onExifData, onImageChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    multiple: false
  });

  return (
    <>
    {isLoading && <Loader message="Chargement de l'image..." />}
    <div className="image-drop-zone">
      {!image && (<div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
            <p>Déposez la photo ici ...</p>
          ) : (
            <div className="dropzone-content">
              <PiCameraPlusFill size={50} />
              <p>Glissez et déposez une image ici, ou cliquez pour sélectionner une image</p>
            </div>
          )}
      </div>)}
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
    </>
  );
};


ImageDropZone.propTypes = {
  onExifData: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};

export default ImageDropZone;