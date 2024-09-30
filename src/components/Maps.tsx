import React from 'react';
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api';
import AdvancedMarker from './AdvancedMarker';

const containerStyle = {
  width: '100%',
  height: '32vh',
};

const center = {
  lat: 38.015081,
  lng: 24.4190000,
};

const locations = {
  nosokomeio: { lat: 38.019149759981275, lng: 24.423861639339265 },
  astinomia: { lat: 38.01503736260557, lng: 24.420720508110698 },
  limenarxeio: { lat: 38.013608253551524, lng: 24.419178523453596 },
  pirosvestiki: { lat: 38.019603059092525, lng: 24.412683908653555 },
};

const Maps: React.FC = () => {
  const [loadError, setLoadError] = React.useState<Error | undefined>(undefined);

  if (loadError) {
    return <div>Error loading maps: {loadError.message}</div>;
  }

  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyBihIYoMV0a9nEQ0z5M9qscWhlXSk2YVDc"
      onError={(error) => setLoadError(error)}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14.2}>
        {Object.entries(locations).map(([key, position]) => (
          <AdvancedMarker key={key} position={position} />
        ))}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Maps;