import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { TwoFieldsRow } from '../Styles/uploadstyles';
import ReusableTextField from './CustomTextfield';
import CustomButton from './CustomButton';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import styled from 'styled-components';

const LocationSearchMap = ({handleLocation,country}) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [pinLocation, setPinLocation] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading
  const mapRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [mapKey, setMapKey] = useState(Date.now());
  const [highlight_message, setHighlightMessage] = useState('hide_highlight');


  const initialLatitude = 33.8547;
  const initialLongitude = 35.8623;

  const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  
  
  `

  const handleSearch = () => {
    if (country) {
      setLoading(true); // Set loading to true while fetching data
      const apiKey = 'AIzaSyDDI-5SKATfW-WLSR7FuZxwBx5unGXFCQo';
                      
      const encodedSearchQuery = encodeURIComponent(`${country}`);
      axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedSearchQuery}&key=${apiKey}`)
        .then((response) => {
          if (response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            setLatitude(location.lat);
            setLongitude(location.lng)
            setPinLocation({ lat: location.lat, lng: location.lng });
            setMapKey(Date.now());
            setHighlightMessage("show-highlight");
          } else {
            setLatitude(null);
            setLongitude(null);
            setPinLocation(null);
            setErrorMessage('No results found for the location.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
          setLatitude(null);
          setLongitude(null);
          setPinLocation(null);
          setErrorMessage('Error fetching data. Please try again later.');
        })
        .finally(() => {
          setLoading(false); // Set loading to false when the request is completed
        });
    } else {
      setErrorMessage('Please enter country.');
    }
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPinLocation({ lat, lng });
  };

  const center = useMemo(() => [latitude || initialLatitude, longitude || initialLongitude], [
    latitude,
    longitude,
    country,
  ]);

  useEffect(() => {
    if (mapRef.current && pinLocation) {
      mapRef.current.setView(pinLocation, mapRef.current.getZoom());
    }
  }, [pinLocation]);

  const mapStyle = {
    height: '400px',
    width: '100%',
    borderRadius: '5px',
    marginTop:'20px'
  };
 
  return (
   
    <div>
     
     <Row style={{ display: 'flex',flexDirection: 'column', textAlign: 'center'}}>
       <CustomButton
        text="Locate My Property"
        onClick={() => handleSearch()}
        ></CustomButton> 
        <div  className={`${highlight_message}`} style={{ fontWeight: 'bold', marginTop: '20px'}}>Use fingers to move map and double click on the location.</div>
    
          </Row>
        
      {loading ? ( // Display CircularProgress while loading
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress color="secondary" />
        </div>
      ) : latitude !== null && longitude !== null ? (
       
      
        <MapContainer
          key={mapKey}
          center={center}
          zoom={5}
          style={mapStyle}
          zoomControl={true}
          attributionControl={false}
          whenCreated={(map) => {
            mapRef.current = map;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
          />
          <LocationMarker handleMapClick={handleMapClick} handleLocation={handleLocation} pinLocation={pinLocation} />
        </MapContainer>
        
       
      ) : (
       <div></div>
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};




function LocationMarker({ handleMapClick, pinLocation,handleLocation }) {
  const map = useMapEvents({
    click: (e) => {
      handleMapClick(e);
    },
  });

  const markerRef = useRef(null);
  const [address, setAddress] = useState(null);

  const reverseGeocode = async (lat, lng) => {
    try {
        const apiKey = 'AIzaSyDDI-5SKATfW-WLSR7FuZxwBx5unGXFCQo';

      const response = await axios.get(
        ` https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );

      if (response.data.results.length > 0) {
        const result = response.data.results;
        console.log(result[3]["address_components"][0]["long_name"])
        console.log(result[3]["address_components"][1]["long_name"])
        console.log()

        handleLocation(lat,lng);

        setAddress(result);
      } else {
        setAddress(null);
      }
    } catch (error) {
      console.error('Error performing reverse geocoding: ', error);
      setAddress(null);
    }
  };

  useEffect(() => {
    if (pinLocation) {
      reverseGeocode(pinLocation.lat, pinLocation.lng);
      markerRef.current.openPopup();
    }
  }, [pinLocation]);

  return pinLocation ? (
    <Marker
      ref={markerRef}
      position={pinLocation}
      icon={new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [30, 30],
      })}
    >

    </Marker>
  ) : null;
}

  


export default LocationSearchMap;
