import React from 'react';
import { useGoogleMap } from '@react-google-maps/api';

interface AdvancedMarkerProps {
  position: google.maps.LatLngLiteral;
}

const AdvancedMarker: React.FC<AdvancedMarkerProps> = ({ position }) => {
  const map = useGoogleMap();

  React.useEffect(() => {
    if (!map) return;

    const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position,
    });

    return () => {
      advancedMarker.map = null;
    };
  }, [map, position]);

  return null;
};

export default AdvancedMarker;