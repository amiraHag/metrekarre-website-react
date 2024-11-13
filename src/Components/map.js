import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ district }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const apiKey = 'AIzaSyDDI-5SKATfW-WLSR7FuZxwBx5unGXFCQo'
    /*'AIzaSyCTMWyKOAvIDPd5rVDdvePo3XIGoRBTTX8'*/;
    const encodedDistrictName = encodeURIComponent(district);
    // console.log(encodedDistrictName)
    // Make a GET request to the Geocoding API
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedDistrictName}&key=${apiKey}`)
      .then((response) => {
        if (response.data.results.length > 0) {
          const location = response.data.results[0].geometry.location;
          setLatitude(location.lat);
          setLongitude(location.lng);
        } else {
          console.error(district);
          setLatitude(null); // Set latitude to null
          setLongitude(null); // Set longitude to null
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLatitude(null); // Set latitude to null
        setLongitude(null); // Set longitude to null
      });
  }, [district]);

  const center = useMemo(() => [latitude, longitude], [latitude, longitude]);

  const mapStyle = {
    height: '500px',
    width: '100%',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
  };

  return (
    <div>
      {latitude !== null && longitude !== null ? (
        <MapContainer center={center} zoom={14} style={mapStyle} zoomControl={false} attributionControl={false}>

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=''
          />
          {/* Add a red circle around the location */}
          <Circle center={center} pathOptions={{ color: 'red' }} radius={300} />
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default LocationMap;


