import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import VerticalSearchCard from '../Components/VerticalSearchCard';
import { useParams } from 'react-router-dom';
import CustomButton from '../Components/CustomButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ResponsiveGrid from '../Components/grid';


const ContainerBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: var(--main-color);
  font-size: 24px;
`;

const NoDataMessage = styled.h2`
  text-align: center;
  color: black;
`;

const SearchPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [propertyDataCountry, setPropertyDataCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalNumber, setTotalNumber] = useState(0);
  const [pagination, setpagination] = useState(0);

  let { type, ref, country, region, district, price, priceId, key,category } = useParams();

  const fetchTotal = async () => {
    axios
      .get(
        `https://sapi.metrekarre.com/api/search/${type}/${ref}/${priceId}/${country}/${region}/${district}/${category}/${newoffsetCount}/${newCount}`,
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        setTotalNumber(response.data["count"]);
      })
      .catch((error) => {

      });
  };

  const fetchDataForPage = async () => {
    
    setLoading(true);
    axios
      .get(
        `https://sapi.metrekarre.com/api/search/${type}/${ref}/${priceId}/${country}/${region}/${district}/${category}/${newoffsetCount}/${newCount}`,
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        
        const dataFromAPI = response.data["products"];

        if (key && key.trim() !== "") {
          const filteredData = dataFromAPI.filter((item) =>
            item.description.toLowerCase().includes(key)
          );
          setPropertyData(filteredData);
        } else {
          setPropertyData(dataFromAPI);
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  const [newCount, setNewCount] = useState(40);
  const [newoffsetCount, setNewOffsetCount] = useState(0);
  const fetchCountryDataForPage = async () => {
    setLoading(true);
    axios
      .get(
        `https://sapi.metrekarre.com/api/search/${type}/-/0/${country}/-/-/-/0/40`,
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        const dataFromAPI = response.data["products"];

       
          setPropertyDataCountry(dataFromAPI);
        
       
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleLoadMoreClick = () => {
    // Increment the newCount by 20
    setNewCount(newCount);
    setNewOffsetCount(newoffsetCount + newCount);

    // Use setTimeout to scroll to the end of the page after rendering the additional content
    setTimeout(() => {
      window.scrollTo(0, 100);
    }, 1000);
  };


  useEffect(() => {

    document.title = "MetreKarre " + `${country}`;

    fetchDataForPage();
    fetchCountryDataForPage();
    fetchTotal();
    
    window.scrollTo(0, document.body.scrollHeight);

  }, [country, type, ref, region, district, price, priceId, key,newoffsetCount, newCount,category]); // Include all relevant dependencies




  return (
    <ContainerBox>
      <Navbar />
    
      <VerticalSearchCard
        margin="0%"
        count={totalNumber}
        queryCountry={country}
        searchRegion={region}
        searchDistrict={district}
        searchType={type}
        searchref={ref}
        searchPrice={priceId}
        priceString={price}
        category={category}
        reload={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await fetchDataForPage();
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }}
      />

{propertyData.length > 0 ? (
      <h2 class="count-property full-width" style={{color:"black"}}>{totalNumber} Properties Found</h2>
      
      ):(
        <h2></h2>
      )
    }


      {loading ? ( // Display loading indicator if loading
        <LoadingContainer>
          <CircularProgress size={50} style={{ color: "var(--main-color)" }} />
        </LoadingContainer>
      ) :
        (


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "50px" }}>
            {propertyData.length === 0 ? (
             <>
              <h2 class="center">No Data Available for Your Search</h2>
              <br/> 
              <h3 class="center">You can check the closest properties for your search below</h3>
              <br/>
              <ResponsiveGrid propertyData={propertyDataCountry}></ResponsiveGrid>
              <CustomButton text="Load More" onClick={handleLoadMoreClick}>Load More</CustomButton>
              </>
            ) : (
              <>
               <h2 class="center">Properties {newoffsetCount+1} to {(newoffsetCount+40)>totalNumber? (totalNumber):(newoffsetCount+40)}</h2>
                <ResponsiveGrid propertyData={propertyData}></ResponsiveGrid>
                <CustomButton text="Load More" onClick={handleLoadMoreClick}>Load More</CustomButton>
              </>
            )
            }
          </div>

        )}


    </ContainerBox>
  );
};

export default SearchPage;
