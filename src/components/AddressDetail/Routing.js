import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

export default function Routing({
  position,
  machineLatitude,
  machineLongitude,
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(position),
        L.latLng(machineLatitude, machineLongitude)
      ],
      routeWhileDragging: true,
      language: 'fr',
    }).addTo(map).hide();

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

Routing.propTypes = {
  position: PropTypes.object,
  machineLatitude: PropTypes.number,
  machineLongitude: PropTypes.number,
};
