import React from 'react';
import { useGoogleMap } from '@react-google-maps/api';

interface AdvancedMarkerProps {
  position: google.maps.LatLngLiteral;
}

const AdvancedMarker: React.FC<AdvancedMarkerProps> = ({ position }) => {
  const map = useGoogleMap();
  const markerRef = React.useRef<google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null>(null);

  React.useEffect(() => {
    if (!map) return;

    const { AdvancedMarkerElement } = google.maps.marker || {};

    if (AdvancedMarkerElement) {
      markerRef.current = new AdvancedMarkerElement({
        map,
        position,
      });
    } else {
      // Fallback to regular Marker if AdvancedMarkerElement is not available
      markerRef.current = new google.maps.Marker({
        map,
        position,
      });
    }

    return () => {
      if (markerRef.current) {
        if ('setMap' in markerRef.current) {
          (markerRef.current as google.maps.Marker).setMap(null);
        } else {
          (markerRef.current as google.maps.marker.AdvancedMarkerElement).map = null;
        }
      }
    };
  }, [map, position]);

  return null;
};

export default AdvancedMarker;