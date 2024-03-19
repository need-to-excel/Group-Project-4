import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '25vw',
  height: '25vh',
};


const MapTool = ({latlon}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyADPPOlpkf2iqEuTHqHKSyW5QnmwOvgQoA',
    libraries,
  });
  const center = {
    lat: latlon.lat||7.2905715, // default latitude
    lng: latlon.lon||80.6337262, // default longitude
  };
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapTool;
