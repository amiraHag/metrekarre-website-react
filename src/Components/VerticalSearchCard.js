import React from 'react';
import { SearchCardContainer, Dropdown, InputField,RedWineButton } from '../Styles/VerticalSearchStyle';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useState, useEffect } from 'react';





const VerticalSearchCard = ({ count,queryCountry,searchRegion,searchDistrict,searchType,searchref,priceString,reload,category }) => {
  const [country, setCountry] = useState(queryCountry);
  const [district, setDistrict] = useState(searchDistrict);
  const [regionList, setRegionList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Lebanon');
  const [selectedCountryCode, setSelectedCountryCode] = useState('LB');
  const [selectedRegion, setSelectedRegion] = useState(searchRegion);
  const [selectedRegionId, setSelectedRegionId] = useState(1);
  const [priceRange, setPriceRange] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceString);
  const [selectedId, setSelectedId] = useState('');
  const [keyword,setKeyword] = useState('')
  const [propertyType, setPropertyType] = useState(searchType);
  const [reference, setReference] = useState(searchref == "-"?"":searchref);
  const [cat, setCategory] = useState('-');



const fetchData = async () => {
      try {
        const countriesResponse = await fetch('//sapi.metrekarre.com/api/countries');
        const regionsResponse = await fetch(`//api.metrekarre.com/regions/${selectedCountry}`);
        const pricesResponse = await fetch(`//sapi.metrekarre.com/api/prices`);

        const regionData = await regionsResponse.json();
        const countryData = await countriesResponse.json();
        const pricesData = await pricesResponse.json();

        const filteredCountries = countryData;
      

        setRegionList(regionData);
        setCountryList(filteredCountries);
        setPriceRange(pricesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
    

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
  const uniqueCountryCodes = Array.from(new Set(countryList.map((item) => item.code)));

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const selectedCountryCodeID=uniqueCountryNames.indexOf(selectedCountry);
    const selectedCountryCode =uniqueCountryCodes[selectedCountryCodeID];
    setSelectedCountryCode(selectedCountryCode);
    setCountry(selectedCountry);
    setSelectedRegion("");
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);

    const regionId = regionList.find((item) => item.region === selectedRegion)?.id || null;
    setSelectedRegionId(regionId);
    setDistrict('');
  };


  // Create a function to handle changes in the text field
  const handleTextFieldChange = (event) => {
    // Update the state variable with the new value of the text field
    setReference(event.target.value);
  };
  // Create a function to handle changes in the text field
  const handleKeywordChange = (event) => {
    // Update the state variable with the new value of the text field
    setKeyword(event.target.value);
  };
  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleCategory = (event) => {
    
   setCategory(event.target.value); // Update the country state  
  };

  const handlePriceRangeChange = (e) => {
    const selectedValue = e.target.value;
    const selectedId = e.target.options[e.target.selectedIndex].getAttribute('data-id');

    // Now you have both the selected value and the selected ID
    console.log('Selected Value:', selectedValue);
    console.log('Selected ID:', selectedId);

    // You can set the state variables for selectedPriceRange and selectedId here
    setSelectedPriceRange(selectedValue.replace("/",'per'));
    setSelectedId(selectedId); // Assuming you have a state variable named selectedId
  };



  function constructSearchUrl() {
    const newType = propertyType || 'Sale';
    const newCountry = country || 'Lebanon';
    const newSelectedRegion = selectedRegion || '-';
    const newDistrict = district || '-';
    const newRefNumber = reference || '-';
    const newSelectedId = (selectedId === undefined || selectedId === null || selectedId === '') ? 0 : selectedId;
    const newSelectedPriceRange = selectedPriceRange || '-';
    const newKeyword = keyword || ''
    const newCategory = cat || '-'
  
    // Construct the URL with the new variables
    return `/SearchPage/${newType}/${newCountry}/${newSelectedRegion}/${newDistrict}/${newRefNumber}/${newSelectedId}/${newSelectedPriceRange}/${newCategory}/${newKeyword}`;
  }
  return (
    <div style={{marginTop:"20px"}}>
     
      <SearchCardContainer>
      <InputField
        type="text"
        placeholder="REF. NUMBER"
        value={reference}
        onChange={handleTextFieldChange}
      />
      <InputField
        type="text"
        placeholder="KEY WORDS"
        value={keyword}
        onChange={handleKeywordChange}
      />
 
      <Dropdown
        value={country}
        onChange={handleCountryChange}
      >
        <option value="">COUNTRY</option>
        {uniqueCountryNames.map((countryName, index) => (
          <option key={index} value={countryName}>
            {countryName}
          </option>
        ))}
      </Dropdown>
      <Dropdown value={selectedRegion} onChange={handleRegionChange}>
        <option value="">REGION</option>
        {uniqueRegions.map((regionName, index) => (
          <option key={index} value={regionName}>
            {regionName}
          </option>
        ))}
      </Dropdown>
      <Dropdown value={district} onChange={(e) => setDistrict(e.target.value)}>
        <option value="">DISTRICT</option>
        {districtList.map((districtItem, index) => (
          <option key={index} value={districtItem.zone}>
            {districtItem.zone}
          </option>
        ))}
      </Dropdown>
           <Dropdown value={cat} onChange={handleCategory}>
        <option value="">CATEGORY</option>
        {["Residential","Commercial","Land"].map((categoryItem, index) => (
          <option key={index} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </Dropdown>
   
      <Dropdown onChange={handlePropertyTypeChange}>
        <option value="">TYPE</option>
        <option value="Sale">Sale</option>
        <option value="Rent">Rent</option>
      </Dropdown>
      <Dropdown  value={selectedPriceRange} onChange={handlePriceRangeChange}>
        <option value="">PRICE RANGE</option>
        {Array.isArray(priceRange) &&
          priceRange
            .filter((item) => {
              // Filter based on the selected property type
              if (propertyType === 'Sale') {
                return item.type === 'sale';
              } else if (propertyType === 'Rent') {
                return item.type === 'rent';
              }
              return true; // Show all options if no property type is selected
            })
            .map((item, index) => (

              <option
                key={index}
                value={item.price.replace("/",'per')}
                data-id={item.id}
                dangerouslySetInnerHTML={{
                  __html: selectedCountry === 'Lebanon' ? item.price : item.price_euro,
                }}
              />
            ))}
      </Dropdown>
      
  
      
      {/* Conditionally render the button based on field validation */}
      <Link
        to={constructSearchUrl()}
      >   
        <RedWineButton>SEARCH</RedWineButton>
      </Link>
    </SearchCardContainer>
    </div>
    
  );
};

export default VerticalSearchCard;
