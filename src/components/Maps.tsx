import { FC } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '40vh',
};

const center = {
  lat: 38.015081,
  lng: 24.4190000,
};

const nosokomeio = {
  lat: 38.019149759981275,
  lng: 24.423861639339265,
};

const astinomia = {
  lat: 38.01503736260557,
  lng: 24.420720508110698,
};

const limenarxeio ={
  lat: 38.013608253551524, 
  lng: 24.419178523453596,
};

const pirosvestiki = {
  lat: 38.019603059092525,
  lng: 24.412683908653555,
};

const Maps: FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBihIYoMV0a9nEQ0z5M9qscWhlXSk2YVDc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14.2}>
        <Marker position={astinomia} />
        <Marker position={nosokomeio} />
        <Marker position={limenarxeio} />
        <Marker position={pirosvestiki} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;