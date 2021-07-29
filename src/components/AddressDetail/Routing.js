import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
});

export default function Routing({ 
  userLatitude,
  userLongitude,
  machineLatitude,
  machineLongitude,
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(userLatitude, userLongitude), L.latLng(machineLatitude, machineLongitude)],
      routeWhileDragging: true,
      language: 'fr',
    }).addTo(map).hide();

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

Routing.propTypes = {
  userLatitude: PropTypes.number.isRequired,
  userLongitude: PropTypes.number.isRequired,
  machineLatitude: PropTypes.number.isRequired,
  machineLongitude: PropTypes.number.isRequired,
};
