import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'H:/Med/medhub/src/components/styles/MapComponent.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'; // Import fullscreen CSS
import 'leaflet-control-geocoder'; // Import the leaflet-control-geocoder plugin
import 'leaflet-fullscreen'; // Import the fullscreen plugin

const MapComponent = ({ route }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map', {
      center: [1.3733, 32.2903], // Center of Uganda
      zoom: 6, // Adjust zoom level as needed
    });

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add route if provided
    if (route) {
      const routeLayer = L.polyline(route.path.map(point => [point.lat, point.lng]), { color: 'blue' }).addTo(map);

      // Add start and end markers
      L.marker(route.path[0]).addTo(map)
        .bindPopup('Start')
        .openPopup();
      L.marker(route.path[route.path.length - 1]).addTo(map)
        .bindPopup('End')
        .openPopup();

      // Add markers for each point in the route
      route.path.forEach(point => {
        L.marker([point.lat, point.lng]).addTo(map)
          .bindPopup(`Lat: ${point.lat}, Lng: ${point.lng}`);
      });

      map.fitBounds(routeLayer.getBounds());
    }

    // Initialize geocoder
    const geocoder = L.Control.Geocoder.nominatim();
    L.Control.geocoder({
      geocoder,
      defaultMarkGeocode: false
    }).on('markgeocode', function (e) {
      map.setView(e.geocode.center, 13);
      L.marker(e.geocode.center).addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
    }).addTo(map);

    // Ensure that geocoder is properly used
    map.on('click', function(e) {
      geocoder.geocode(e.latlng, function(results) {
        const result = results[0];
        if (result) {
          L.marker(result.center).addTo(map)
            .bindPopup(result.name)
            .openPopup();
          map.setView(result.center, 13);
        }
      });
    });

    // Add full screen control
    L.control.fullscreen().addTo(map);

    // Clean up on component unmount
    return () => {
      map.remove();
    };
  }, [route]);

  return <div id="map" className="map"></div>;
};

export default MapComponent;
