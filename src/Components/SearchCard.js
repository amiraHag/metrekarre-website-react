// SearchCard.js

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useEffect } from 'react';

const DropdownRow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Dropdown = styled.select`
  margin: 0 10px;
  padding: 10px 8px;
  width: 15%;
  background-color: #fff;
  color: grey;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px 16px;
  outline: none;

  &:focus {
    border-color: var(--main-color);
    background-color: wineRed;
  }
`;

const InputField = styled.input`
  margin-right: 10px;
  padding: 10px 8px;
  width: 10%;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const SearchCard = () => {
  const [refNumber, setRefNumber] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const [regionList, setRegionList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Lebanon');
  const [selectedRegion, setSelectedRegion] = useState(''); // Store selected region
  const [selectedRegionId, setSelectedRegionId] = useState(1);

  const [priceRange, setPriceRange] = useState([]);

  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const [selectedId, setSelectedId] = useState('');


  const url = `/SearchPage/Sale/${country}/${region}/${district}/${refNumber}/${selectedId}/${selectedPriceRange}`;




  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesResponse = await fetch('//api.metrekarre.com/countries');
        const regionsResponse = await fetch(`//api.metrekarre.com/regions/${selectedCountry}`);
        const pricesResponse = await fetch(`//api.metrekarre.com/prices`);

        const regionData = await regionsResponse.json();
        const countryData = await countriesResponse.json();
        const pricesData = await pricesResponse.json();

        const filteredCountries = countryData.filter((country) =>
        ['Lebanon', 'France', 'Greece'].includes(country.country)
      );

        setRegionList(regionData);
        setCountryList(filteredCountries);
        setPriceRange(pricesData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedRegionId) {
      const fetchDistricts = async () => {
        try {
          const response3 = await fetch(`//api.metrekarre.com/zones/${selectedRegionId}`);
          const districtData = await response3.json();

          setDistrictList(districtData);
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      };

      fetchDistricts();
    }
  }, [selectedRegionId]);

  const uniqueRegions = Array.from(new Set(regionList.map((item) => item.region)));
  const uniqueCountryNames = Array.from(new Set(countryList.map((item) => item.country)));

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setCountry(selectedCountry); // Update the country state
  };
  const handleCategory = (event) => {
    const selectedCat = event.target.value;
   setCategory(selectedCat); // Update the country state  
  };
  const [category, setCategory] = useState('-');

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);

    const regionId = regionList.find((item) => item.region === selectedRegion)?.id || null;
    setSelectedRegionId(regionId);
    setDistrict(''); // Clear selected district when region changes

    console.log('Region:', region);
    console.log('Selected Region:', selectedRegion);
  };

  const handlePriceRangeChange = (e) => {
    const selectedValue = e.target.value;
    const selectedId = e.target.options[e.target.selectedIndex].getAttribute('data-id');

    // Now you have both the selected value and the selected ID
    console.log('Selected Value:', selectedValue);
    console.log('Selected ID:', selectedId);

    // You can set the state variables for selectedPriceRange and selectedId here
    setSelectedPriceRange(selectedValue);
    setSelectedId(selectedId); // Assuming you have a state variable named selectedId
  };
  function constructSearchUrl() {
    // Create new variables based on conditions
    const newCountry = country || 'Lebanon';
    const newSelectedRegion = selectedRegion || '-';
    const newDistrict = district || '-';
    const newRefNumber = refNumber || '-';
    const newSelectedId = (selectedId === undefined || selectedId === null || selectedId === '') ? 0 : selectedId;
    const newSelectedPriceRange = selectedPriceRange || '-';
  
    // Construct the URL with the new variables
    return `/SearchPage/Sale/${newCountry}/${newSelectedRegion}/${newDistrict}/${newRefNumber}/${newSelectedId}/${newSelectedPriceRange}/${category}`;
  }



  

  return (
    <div>
      <DropdownRow>
        <InputField
          type="text"
          placeholder="REF. NUMBER"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
        />
  <Dropdown style={{ marginRight: "10px" }} value={category} onChange={handleCategory}>
        <option value="">SELECT CATEGORY</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Land">Land</option>
      </Dropdown>
      
        <Dropdown
          value={country}
          onChange={handleCountryChange}
        >
          <option value="">SELECT A COUNTRY</option>
          {uniqueCountryNames.map((countryName, index) => (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          ))}
        </Dropdown>
        <Dropdown
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">SELECT A REGION</option>
          {uniqueRegions.map((regionName, index) => (
            <option key={index} value={regionName}>
              {regionName}
            </option>
          ))}
        </Dropdown>
  
        <Dropdown value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">SELECT A DISTRICT</option>
          {districtList.map((districtItem, index) => (
            <option key={index} value={districtItem.zone}>
              {districtItem.zone}
            </option>
          ))}
        </Dropdown>
  
        <Dropdown style={{ marginRight: "10px" }} value={selectedPriceRange} onChange={handlePriceRangeChange}>
        <option value="">PRICE RANGE</option>
        {Array.isArray(priceRange) &&
          priceRange
            .map((item, index) => (
              <option key={index} value={item.price} data-id={item.id}>
                {selectedCountry === 'Lebanon' ? item.price : item.price_euro}
              </option>
            ))}
      </Dropdown>

      

        <Link to= {constructSearchUrl()} >
            <CustomButton text="SEARCH" />
          </Link>
  
    
      </DropdownRow>
    </div>
  );
  
};

export default SearchCard;

