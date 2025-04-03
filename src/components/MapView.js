"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapView = () => {
  // Container style for the map
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  // Coordinates for 786 Myrtle St, Sanford, FL 32773
  const center = {
    lat: 28.8113675, // Latitude for the address
    lng: -81.2683292 // Longitude for the address
  };

  // Options for the map, including satellite view
  const mapOptions = {
    mapTypeId: 'satellite', // Set to satellite view
    zoomControl: true,
    scrollwheel: false,
    mapTypeControl: true,
    fullscreenControl: true,
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18} // Higher zoom level for better detail
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;