import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import ReusableTextField from '../Components/CustomTextfield';
import RichTextEditor from '../Components/RichTextEditor';
import CustomButton from '../Components/CustomButton';
import CheckboxRow from '../Components/agreeTerms';
import { Container, ButtonContainer, ContactCard, ContactCardContainer, Dropdown, TitleWrap, TwoFieldsRow, ImagePickerWrapper, ImageRow, ImageItem, Image, ChooseFilesButton, FileInput } from '../Styles/uploadstyles';
import { categoryArray, ForWhat, bathroomArrays, bedrooms, floor, furnishedArray, kind, livingrooms, parkings, styleArray, typeArray } from '../constants';
import axios from 'axios';
import LocationSearchMap from '../Components/pinmap';
//import countryData from '..//Assets/countries.json';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import handleSearch  from '../Components/pinmap';

const UploadPropertyPage = () => {

    const [dates, setDates] = useState([]);
    
    const [property_info_class, setPropertyinfoclass] = useState('hide_property_info');
    const [property_info_residential_class, setPropertyinfoResidentialclass] = useState('show_property_info_residential');
    const [property_info_commercial_class, setPropertyinfoCommercialclass] = useState('hide_property_info_commercial');
    const [property_info_land_class, setPropertyinfoLandclass] = useState('hide_property_info_land');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [category, setSelectedCategory] = useState('Residential'); // State for Category
    const [For, setSelectedForSale] = useState('For Sale'); // State for For Sale
    const [address, setAddress] = useState(''); // State for address
    const [plot_number, setPlotNumber] = useState('');
    const [zone, setZone] = useState('');
    const [bua, setBUA] = useState('');
    const [with_construction, setSelectedWithConstruction] = useState('');
    const [coef_au_sol, setCoefauSol] = useState('');
    const [coef_general, setCoefGeneral] = useState('');
    const [building_area, setBuildingArea] = useState('');
    const [view_position, setSelectedViewPosition] = useState('');
    const [orientation_view, setSelectedOriantationView] = useState('');
    const [plus_desc, setPlusDesc] = useState('');
    const [minus_Desc, setminusDesc] = useState('');
    const [commercial_type, setSelectedCommercialType] = useState('');
    const [underground_parking, setSelectedUndergroundParking] = useState('');
    const [gf_parkeing, setSelectedGFParkings] = useState('');
    const [show_window, setSelectedShowWindow] = useState(''); 
    const [painting, setSelectedPainting] = useState(''); 
    const [paintry, setSelectedPaintry] = useState(''); 
    const [kitchen, setSelectedKitchen] = useState(''); 
    const [flooring, setSelectedFlooring] = useState(''); 
    const [doors, setSelectedDoors] = useState(''); 
    const [windows, setSelectedWindows] = useState(''); 
    const [masonary, setSelectedMasonary] = useState(''); 
    const [facade, setSelectedFacade] = useState(''); 
    const [acsystem, setSelectedACSystem] = useState(''); 
    const [double_glaze, setSelectedDoubleGlaze] = useState(''); 
    const [mezzanine, setSelectedMezzanine] = useState(''); 
    const [basement, setSelectedBasement] = useState(''); 
    const [terrace, setSelectedTerrace] = useState(''); 
    const [garden, setSelectedGarden] = useState(''); 
    const [storage, setSelectedStorage] = useState(''); 

    const [price, setPrice] = useState(''); // State for Price
    const [size, setSize] = useState(''); // State for Size (M2)
    const [additional_charges, setAdditionalCharges] = useState(''); // State for Additional Charges
    const [kind_r, setSelectedKind] = useState(''); // State for Kind
    const [type, setSelectedType] = useState(''); // State for Type
    const [living, setSelectedLivingRooms] = useState(''); // State for Nb. Living Rooms
    const [bathroom, setSelectedBathroom] = useState(''); // State for Nb. Bathrooms
    const [parking, setSelectedParkings] = useState(''); // State for Nb. Parkings
    const [style, setSelectedStyle] = useState(''); // State for Style
    const [furnished, setSelectedFurnished] = useState(''); // State for Furnished
    const [floor_r, setSelectedFloor] = useState(''); // State for Floor
    const [bedroom, setSelectedBedrooms] = useState(''); // State for Nb. Bedrooms
    const [country, setSelectedCountry] = useState('');
    const [selectedImages, setSelectedImages] = useState([])
    const [desc, setDescription] = useState('')
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [isFormValid, setIsFormValid] = useState(true);
    const [countryNames, setCountryNames] = useState([]);
    const [recaptchaValue, setRecaptchaValue] = useState(null);



    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };


    const handleLocationChange = (newLatitude, newLongitude) => {
        setLatitude(newLatitude);
        setLongitude(newLongitude);
        setPropertyinfoclass('show-property-info');

    };

    const handleInputChange = (event, setterFunction) => {
        const newValue = event.target.value;
        setterFunction(newValue);
    };
  

    const handleCategoryInputChange = (event, setterFunction) => {
        const newValue = event.target.value;
        setterFunction(newValue);
        if(newValue == "Commercial"){
            setPropertyinfoCommercialclass("show_property_info_commercial");
            setPropertyinfoResidentialclass("hide_property_info_residential");
            setPropertyinfoLandclass("hide_property_info_land");
        }
        if(newValue == "Residential"){
            setPropertyinfoCommercialclass("hide_property_info_commercial");
            setPropertyinfoResidentialclass("show_property_info_residential");
            setPropertyinfoLandclass("hide_property_info_land");
        }
        if(newValue == "Land"){
            setPropertyinfoCommercialclass("hide_property_info_commercial");
            setPropertyinfoResidentialclass("hide_property_info_residential");
            setPropertyinfoLandclass("show_property_info_land");
        }
    };

    // Function to handle image selection
    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        // Concatenate the new files with the existing selectedImages array
        setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...selectedFiles]);
    };

    const handleEditorValueChange = (value) => {
        setDescription(value);
    };
    // Function to reset selected images
    const handleResetImages = () => {
        setSelectedImages([]);
    };

    const token = localStorage.getItem('token');


    const formDataParams = {
        first_name,
        last_name,
        email,
        phone,
        country,
        category,
        For,
        price,
        size,
        kind_r,
        type,
        style,
        furnished,
        floor_r,
        living,
        bedroom,
        bathroom,
        parking,
        desc,
        latitude,
        longitude,
    };

    const formDataParamsResidentials = {
        first_name,
        last_name,
        email,
        phone,
        country,
        category,
        For,
        size,
        address,
        price,
        kind_r,
        type,
        style,
        furnished,
        floor_r,
        living,
        bedroom,
        bathroom,
        underground_parking,
        gf_parkeing,
        garden,
        terrace,
        desc,
        latitude,
        longitude,

    };

    const formDataParamsCommercial = {
        first_name,
        last_name,
        email,
        phone,
        country,
        category,
        For,
        size,
        address,
        price,
        commercial_type,
        underground_parking,
        gf_parkeing,
        floor_r,
        show_window,
        furnished,
        garden,
        painting,
        paintry,
        kitchen,
        flooring,
        doors,
        windows,
        masonary,
        facade,
        acsystem,
        double_glaze,
        mezzanine,
        basement,
        terrace,
        storage,
        desc,
        latitude,
        longitude,

    };

    const formDataParamsLand = {
        first_name,
        last_name,
        email,
        phone,
        country,
        category,
        For,
        size,
        address,
        price,
        plot_number,
        zone,
        bua,
        with_construction,
        coef_au_sol,
        coef_general,
        building_area,
        view_position,
        orientation_view,
        desc,
        latitude,
        longitude,

    };





    const handleFormSubmit = async (formDataParams) => {
        try {
            
            

            if(category =="Residential"){
                for (const [key, value] of Object.entries(formDataParamsResidentials)) {
                    if (!value) {
                        alert(`Please fill in the ${key} field.`);
                        return;
                    }
                }
               }
               if(category =="Commercial"){
                for (const [key, value] of Object.entries(formDataParamsCommercial)) {
                    if (!value) {
                        alert(`Please fill in the ${key} field.`);
                        return;
                    }
                }
            }
               if(category =="Land"){
                for (const [key, value] of Object.entries(formDataParamsLand)) {
                    if (!value) {
                        alert(`Please fill in the ${key} field.`);
                        return;
                    }
                }
    
            }

           const formData = new FormData();

           if (!selectedImages || selectedImages.length === 0) {
                alert('Please select at least one image.');
                return;
            } else {
                for (let i = 0; i < selectedImages.length; i++) {
                    formData.append('image' + i, selectedImages[i]);
                }
                formData.append('imageCount', selectedImages.length);
           }

           if(category =="Residential"){
            for (const [key, value] of Object.entries(formDataParamsResidentials)) {
                formData.append(key, value);
            }
           }
           if(category =="Commercial"){
            for (const [key, value] of Object.entries(formDataParamsCommercial)) {
                formData.append(key, value);
            }
        }
           if(category =="Land"){
            for (const [key, value] of Object.entries(formDataParamsLand)) {
                formData.append(key, value);
            }

        }
        const headers = {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '', // Replace with your desired origin or '' for any origin
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Replace with the allowed HTTP methods
           };

            if (token && token.trim() !== '') {
                headers['Authorization'] = `Bearer ${token}`;
           }


            formData.forEach((value, name) => {
                console.log(`Field Name: ${name}, Value: ${value}`);
            });
        
          
            // Make the POST request to your API endpoint with FormData
            const response = await axios.post(
                '//sapi.metrekarre.com/api/product/upload',
                formData,
                { headers }
            );

            console.log('Response Data:', response.data);

            console.log('POST request successful', response.data);
            

            setTimeout(() => {
                console.log(response);
                alert('Thank you for submitting your property');
                window.location.reload(false);
            }, 1000); // Adjust the delay time as needed

            console.log('POST request successful', response.data);
            return response.data;
            
        } catch (error) {
            setTimeout(() => {
                alert('Unexpected Error from our end');
            }, 10); // Adjust the delay time as needed
            console.error('Error sending POST request', error);
            throw error;
        }
    };

    const [countryIndex, setCountryIndex] = useState(0);


    useEffect(() => {
        document.title = `Upload Property`;
        const currentDate = new Date(); // Get the current date
        const endDate = new Date('July 1, 2029'); // Define the end date
        const dateList = [];

        while (currentDate <= endDate) {
            // Format the current date as "Month Year"
            const formattedDate = currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
            });

            dateList.push(formattedDate);

            // Move to the next month
            currentDate.setMonth(currentDate.getMonth() + 1);
        }

        setDates(dateList.reverse());

        const fetchCountriesData = async () => {
            try {
              const countriesResponse = await fetch('//sapi.metrekarre.com/api/countries');
              const countryData = await countriesResponse.json();
            
              const countryNames = Array.from(new Set(countryData.map((country) => country.country)));
              setCountryNames(countryNames);
             
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchCountriesData();

    }, [countryIndex]);


    const ButtonAndRecaptchaContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
`;







    return (<div>
        <Navbar />
        <Container>
        <ContactCard>
                <TitleWrap>
                    <h2>PROPERTY EXACT LOCATION</h2>
                </TitleWrap>
              
                <Dropdown
                        className="dropdown text-uppercase"
                        onChange={(e) => {
                            handleInputChange(e, setSelectedCountry)
                            setCountryIndex(e.target.selectedIndex);
                            
                        }}
                    >
                        <option value="">COUNTRY</option>
                        {countryNames.map((country, index) => (
                            <option key={country} value={index}>
                                {country}
                            </option>
                        ))}
                        

                    </Dropdown>
                  
                
                <LocationSearchMap

                    handleLocation={handleLocationChange}
                    country={countryNames[country]}
                    >

                </LocationSearchMap>
            </ContactCard>


            {/* Owner Info Card */}
            <ContactCard
             className={`${property_info_class}`}
            >
                <TitleWrap>
                    <h2>OWNER INFO</h2>
                </TitleWrap>
                <TwoFieldsRow>
                    <ReusableTextField className="textfield" id="First Name" label="First Name" onChange={(e) => handleInputChange(e, setFirstName)} />
                    <ReusableTextField className="textfield" id="Last Name" label="Last Name" onChange={(e) => handleInputChange(e, setLastName)} />
                </TwoFieldsRow>

                <TwoFieldsRow>
                    <ReusableTextField className="textfield" id="phoneNumber" label="Area Code + Phone Number" onChange={(e) => handleInputChange(e, setPhoneNumber)} />
                    <ReusableTextField className="textfield" id="Email" label="Email" onChange={(e) => handleInputChange(e, setEmail)} />
                </TwoFieldsRow>
            </ContactCard>

          
                {/* Property Info Card */}
                <ContactCard  className={`${property_info_class}`}> 
                    <TitleWrap>
                        <h2>PROPERTY INFO</h2>
                    </TitleWrap>
                    <TwoFieldsRow>
                    <Dropdown
                            className="dropdown"
                            onChange={(e) => handleInputChange(e, setSelectedForSale)}
                            value={For}
                        >
                            {ForWhat.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </Dropdown>
                        <Dropdown
                            className="dropdown"
                            onChange={(e) => handleCategoryInputChange(e, setSelectedCategory)}
                            value={category}
                        >

                            {categoryArray.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </Dropdown>
                       
                    </TwoFieldsRow>
                    <TwoFieldsRow>
                    <ReusableTextField
                            className="textfield"
                            id="Size"
                            label="Size (M2)"
                            onChange={(e) => handleInputChange(e, setSize)}
                            value={size}
                        />
 <ReusableTextField
                            className="textfield"
                            id="Address"
                            label="Address"
                            onChange={(e) => handleInputChange(e, setAddress)}
                            value={address}
                        />
                       
                        
                    </TwoFieldsRow>
                      
                       <TwoFieldsRow>

                        <ReusableTextField
                            className="textfield"
                            id="Price"
                            label="Price ($)"
                            onChange={(e) => handleInputChange(e, setPrice)}
                            value={price}
                        />
                
                    </TwoFieldsRow>
            

                        </ContactCard>

                   
                
                {/* Residential Info Card */}
                <ContactCard  className={`${property_info_class} ${property_info_residential_class}`}> 
                    <TitleWrap>
                        <h2>RESIDENTIAL INFO</h2>
                    </TitleWrap>
             

                    <TwoFieldsRow>
                        <Dropdown
                            className="dropdown"
                            onChange={(e) => handleInputChange(e, setSelectedKind)}
                            value={kind_r}>
                            {kind.map((kindItem) => (
                                <option key={kindItem} value={kindItem}>
                                    {kindItem}
                                </option>
                            ))}

                            <option value="">Kind</option>

                        </Dropdown>
                        <Dropdown
                            className="dropdown"
                            onChange={(e) => handleInputChange(e, setSelectedType)}
                            value={type}>
                            {typeArray.map((typeItem) => (
                                <option key={typeItem} value={typeItem}>
                                    {typeItem}
                                </option>
                            ))}
                            <option value="">Type</option>

                        </Dropdown>
                    </TwoFieldsRow>
                    <Dropdown
                        className="dropdown"
                        onChange={(e) => handleInputChange(e, setSelectedStyle)}

                        value={style}>
                        {styleArray.map((styleItem) => (
                            <option key={styleItem} value={styleItem}>
                                {styleItem}
                            </option>
                        ))}
                        <option value="">Style</option>

                    </Dropdown>

               

                            <TwoFieldsRow>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFurnished)}
                                    value={furnished}>
                                    {furnishedArray.map((furnishedItem) => (
                                        <option key={furnishedItem} value={furnishedItem}>
                                            {furnishedItem}
                                        </option>
                                    ))}
                                    <option value="">Furnished?</option>
                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFloor)}
                                    value={floor_r}>
                                    {floor.map((floorNb) => (
                                        <option key={floorNb} value={floorNb}>
                                            {floorNb}
                                        </option>
                                    ))}
                                    <option value="">Floor</option>

                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>

                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedBedrooms)}
                                    value={bedroom}>
                                    {bedrooms.map((bedroomNb) => (
                                        <option key={bedroomNb} value={bedroomNb}>
                                            {bedroomNb}
                                        </option>
                                    ))}

                                    <option value="">Bedrooms</option>

                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedLivingRooms)}
                                    value={living}>
                                    {livingrooms.map((livingroomsItem) => (
                                        <option key={livingroomsItem} value={livingroomsItem}>
                                            {livingroomsItem}
                                        </option>
                                    ))}
                                    <option value="">Living Rooms</option>

                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedBathroom)}
                                    value={bathroom}>
                                    {bathroomArrays.map((bathroomItem) => (
                                        <option key={bathroomItem} value={bathroomItem}>
                                            {bathroomItem}
                                        </option>
                                    ))}
                                    <option value="">Bathrooms</option>
                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedUndergroundParking)}
                                    value={underground_parking}>
                                        {parkings.map((parkingItem) => (
                                        <option value={parkingItem}>
                                            {parkingItem}
                                        </option>
                                    ))}
                                     <option   value="-">-</option>
                                    <option   value="">Number of Underground Parking</option>
                                   

                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedGFParkings)}
                                    value={gf_parkeing}>
                                    {parkings.map((parkingItem) => (
                                        <option value={parkingItem}>
                                            {parkingItem}
                                        </option>
                                    ))}
                                     <option   value="-">-</option>
                                    <option value="">Number of GF Parkings</option>
                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedGarden)}
                                    value={garden}>
                                    <option  value="">Garden?</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>
                           
                                <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedTerrace)}
                                    value={terrace}>
                                    <option  value="">Terrace?</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                            </TwoFieldsRow>

                        </ContactCard>

                   
                {/* Land Info Card */}
                <ContactCard  className={`${property_info_class} ${property_info_land_class}`}> 
                    <TitleWrap>
                        <h2>LAND INFO</h2>
                    </TitleWrap>
                    <TwoFieldsRow>
                    <ReusableTextField
                            className="textfield"
                            id="Plot Number"
                            label="Plot Number"
                            onChange={(e) => handleInputChange(e, setPlotNumber)}
                            value={plot_number}
                        />

                        <ReusableTextField
                            className="textfield"
                            id="Zone"
                            label="Zone"
                            onChange={(e) => handleInputChange(e, setZone)}
                            value={zone}
                        />
                        
                    </TwoFieldsRow>
                    <TwoFieldsRow>
                    <ReusableTextField
                            className="textfield"
                            id="BUA"
                            label="BUA"
                            onChange={(e) => handleInputChange(e, setBUA)}
                            value={bua}
                        />
                         <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedWithConstruction)}
                                    value={with_construction}>
                                    <option  value="">With Construction Permit?</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>
                    <TwoFieldsRow>
                    <ReusableTextField
                            className="textfield"
                            id="Coef au Sol"
                            label="Coef au Sol"
                            onChange={(e) => handleInputChange(e, setCoefauSol)}
                            value={coef_au_sol}
                        />

                        <ReusableTextField
                            className="textfield"
                            id="Coef General"
                            label="Coef General"
                            onChange={(e) => handleInputChange(e, setCoefGeneral)}
                            value={coef_general}
                        />
                        
                    </TwoFieldsRow>
                    <TwoFieldsRow>
                    <ReusableTextField
                            className="textfield"
                            id="Building Area"
                            label="Building Area"
                            onChange={(e) => handleInputChange(e, setBuildingArea)}
                            value={building_area}
                        />
                    </TwoFieldsRow>

                        </ContactCard>

                {/* Further Details Land Card */}
                <ContactCard  className={`${property_info_class} ${property_info_land_class}`}> 
                    <TitleWrap>
                        <h2>FURTHER DETAILS</h2>
                    </TitleWrap>
                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedViewPosition)}
                                    value={view_position}>
                                    <option  value="">View</option>
                                    <option  value="Sea View">Sea View</option>
                                    <option  value="Mounteain View">Mounteain View</option>
                                    <option  value="No View">No View</option>
                                    <option  value="Panoramic View">Panoramic View</option>

                                </Dropdown>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedOriantationView)}
                                    value={orientation_view}>
                                    <option  value="">Orientation</option>
                                    <option  value="North">North</option>
                                    <option  value="South">South</option>
                                    <option  value="East">East</option>
                                    <option  value="West">West</option>

                                </Dropdown>    
                    </TwoFieldsRow>
                   
                        </ContactCard>
                   
            {/* Commercial Info Card */}
            <ContactCard  className={`${property_info_class} ${property_info_commercial_class}`}> 
                    <TitleWrap>
                        <h2>COMMERCIAL INFO</h2>
                    </TitleWrap>
             

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedCommercialType)}
                                    value={commercial_type}>
                                    <option  value="">Type</option>
                                    <option value="Store">Store</option>
                                    <option   value="Showroom">Showroom</option>
                                    <option   value="Warehouse">Warehouse</option>
                                    <option   value="Office">Office</option>
                                    <option   value="Building">Building</option>
                                    <option   value="Resto / Cafe">Resto / Cafe</option>
                                    <option   value="Farm">Farm</option>
                                    <option   value="PLot">PLot</option>

                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedUndergroundParking)}
                                    value={underground_parking}>
                                        {parkings.map((parkingItem) => (
                                        <option value={parkingItem}>
                                            {parkingItem}
                                        </option>
                                    ))}
                                    <option   value="-">-</option>
                                    <option   value="">Number of Underground Parking</option>
                                   

                                </Dropdown>
                    </TwoFieldsRow>
               

                            <TwoFieldsRow>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedGFParkings)}
                                    value={gf_parkeing}>
                                    {parkings.map((parkingItem) => (
                                        <option value={parkingItem}>
                                            {parkingItem}
                                        </option>
                                    ))}
                                     <option   value="-">-</option>
                                    <option value="">Number of GF Parkings</option>
                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFloor)}
                                    value={floor_r}>
                                    {floor.map((floorNb) => (
                                        <option key={floorNb} value={floorNb}>
                                            {floorNb}
                                        </option>
                                    ))}
                                    <option value="">Floor Number</option>

                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>

                           
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedShowWindow)}
                                    value={show_window}>
                                    {livingrooms.map((livingroomsItem) => (
                                        <option value={livingroomsItem}>
                                            {livingroomsItem}
                                        </option>
                                    ))}
                                    <option value="">Number of Show Window</option>

                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFurnished)}
                                    value={furnished}>
                                    {furnishedArray.map((furnishedItem) => (
                                        <option key={furnishedItem} value={furnishedItem}>
                                            {furnishedItem}
                                        </option>
                                    ))}
                                    <option value="">Furnished?</option>
                                </Dropdown>
                            </TwoFieldsRow>
                            <TwoFieldsRow>
                                
                                <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedGarden)}
                                    value={garden}>
                                    <option  value="">Garden?</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                                <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedTerrace)}
                                    value={terrace}>
                                    <option  value="">Terrace?</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                            </TwoFieldsRow>
                           

                        </ContactCard>

           {/* Needs Renovation Commercial Info Card */}
           <ContactCard  className={`${property_info_class} ${property_info_commercial_class}`}> 
                    <TitleWrap>
                        <h2>NEEDS RENOVATION</h2>
                    </TitleWrap>
             

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedPainting)}
                                    value={painting}>
                                  <option   value="">Painting</option>
                                  <option   value="Yes">Yes</option>
                                  <option   value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedPaintry)}
                                    value={paintry}>
                                    <option   value="">Paintry</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedKitchen)}
                                    value={kitchen}>
                                    <option  value="">Kitchen</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFlooring)}
                                    value={flooring}>
                                    <option   value="">Flooring</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedDoors)}
                                    value={doors}>
                                  <option   value="">Doors</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedWindows)}
                                    value={windows}>
                                    <option   value="">Windows</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedMasonary)}
                                    value={masonary}>
                                  <option   value="">Masonary</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedFacade)}
                                    value={facade}>
                                    <option   value="">Facade</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>
                        </ContactCard>
                
              
     {/* Options Commercial Info Card */}
     <ContactCard  className={`${property_info_class} ${property_info_commercial_class}`}> 
                    <TitleWrap>
                        <h2>OPTIONS</h2>
                    </TitleWrap>
             

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                   onChange={(e) => handleInputChange(e, setSelectedACSystem)}
                                    value={acsystem}>
                                  <option   value="">A/C System</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedDoubleGlaze)}
                                    value={double_glaze}>
                                    <option   value="">Double Glaze</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>

                    <TwoFieldsRow>
                    <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedMezzanine)}
                                    value={mezzanine}>
                                  <option   value="">Mezzanine</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>
                                </Dropdown>
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedBasement)}
                                    value={basement}>
                                    <option  value="">Basement</option>
                                    <option  value="Yes">Yes</option>
                                    <option  value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>

                    <TwoFieldsRow>
                   
                   <Dropdown
                                    className="dropdown"
                                    onChange={(e) => handleInputChange(e, setSelectedStorage)}
                                    value={storage}>
                                    <option   value="">Storage</option>
                                    <option   value="Yes">Yes</option>
                                    <option   value="No">No</option>

                                </Dropdown>
                    </TwoFieldsRow>
                        </ContactCard>
                
              

           

            {/* Pick Image Card */}

            <ImagePickerWrapper
            className={`${property_info_class}`}
            >
                <TitleWrap>
                    <h2>UPLOAD IMAGES</h2>
                </TitleWrap>

                <ImageRow>
                    <ChooseFilesButton
                        hasImages={selectedImages.length > 0}
                    >
                        {selectedImages.length > 0 ? 'ADD IMAGES' : 'CHOOSE IMAGES'}
                        <FileInput
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleImageChange(e)}

                        />
                    </ChooseFilesButton>
                    {selectedImages.length > 0 && (
                        <ChooseFilesButton onClick={handleResetImages} >
                            RESET IMAGES
                        </ChooseFilesButton>
                    )}
                </ImageRow>

                <ImageRow>
                    {selectedImages.map((image, index) => (
                        <ImageItem key={index}>
                            <Image src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                        </ImageItem>
                    ))}
                </ImageRow>
            </ImagePickerWrapper>

            {/* TExt Editor Card description */}
            <ContactCard
             className={`${property_info_class}`}
            >
            <RichTextEditor
           
            onEditorValueChange={handleEditorValueChange} />
            </ContactCard>
           
            <ContactCard
            className={`${property_info_class}`}
            >
                <CheckboxRow />
            </ContactCard>

            {/* <ButtonAndRecaptchaContainer>
                <ReCAPTCHA
                    sitekey="6Le9_KkoAAAAANL1E7YbgvfQc4kUI1qwGL0y98Uf"
                    onChange={handleRecaptchaChange}
                />
            </ButtonAndRecaptchaContainer> */}
                <ButtonContainer
                className={`${property_info_class}`}
                >
                    <Button 
                     variant="contained"
                     sx={{
                       backgroundColor: '#8B0000', // Wine red color
                       color: 'white',
                       fontWeight:'bold',
                       minHeight: "45px",
                       minWidth: "200px",
                       '&:hover': {
                         backgroundColor: 'black', // Set background color to black on hover
                       },
                     }}
                     onClick={() => handleFormSubmit(formDataParams)}>
                        Upload Property
                    </Button>
                </ButtonContainer>
        </Container>

    </div>

    );
}

export default UploadPropertyPage;
