import './Map.scss';
import PropTypes from 'prop-types';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaStreetView } from 'react-icons/fa';


const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  const iconPosition = leaflet.icon({
    iconSize: [41, 45],
    iconAnchor: [18, 45],
    popupAnchor: [2, -40],
    shadowSize: [50, 64],
    shadowAnchor: [15, 65],
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/6984/6984944.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
  });

  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;

  return (
    <MapContainer center={position} zoom='16' scrollWheelZoom={false} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={iconPosition}>
        <Popup className='map-popup'>
            <div>Photo prise ici</div>
          <a 
            href={streetViewUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="street-view-link"
          >
            <FaStreetView /> Voir dans Google Street View
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
}
export default Map;