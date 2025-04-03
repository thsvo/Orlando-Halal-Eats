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
    lat: 28.7361658, 
    lng: -81.2762179 
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
      <LoadScript googleMapsApiKey="AIzaSyCihLNR2cBYVJYCrfl2eso5rHXCAMpmBCo">
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