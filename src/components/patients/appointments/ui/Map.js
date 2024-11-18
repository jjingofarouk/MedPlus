import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && locations.length > 0) {
      const mapOptions = {
        center: locations[0],
        zoom: 12,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#484848"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }
        ]
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      locations.forEach((location, index) => {
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: `Location ${index + 1}`,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>Location ${index + 1}</strong><br>${location.name || 'No name available'}</div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    }
  }, [locations]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map"></div>
    </div>
  );
};

export default Map;
