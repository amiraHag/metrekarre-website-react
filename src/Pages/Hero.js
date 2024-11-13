import React from 'react';
import Slider from 'react-slick';
import image3 from '../Images/mykonos2.jpeg';
import image1 from '../Images/waterf2.jpeg';
import image4 from '../Images/eiffel2.jpeg';
import VerticalSearchCard from '../Components/VerticalSearchCard';
import { Link } from 'react-router-dom';
import { ImageContainer, Image, ButtonColumn, ButtonOverlay, Container, SearchCardWrapper } from '../Styles/HeroStyles';
import translate from 'google-translate-api-x';
import { useState,useEffect } from 'react';
import axios from 'axios';

const images = [image1, image3, image4];
const titles = ["Lebanon", "Greece", "France"];

const settings = {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,

};

const HeroSlider = () => {
 
const storedToken = localStorage.getItem('token');

const verifyToken = async (username, password) => {
  // Get the token from localStorage

  if (storedToken) {
    // Define the verification URL
    const verificationLink = '//sapi.metrekarre.com/api/token/check';

    // Send a GET request with the token in the header and set 'Content-Type' to 'application/json'
    axios.get(verificationLink, {
      headers: {
        'Authorization': `Bearer ${storedToken}`,
        'Content-Type': 'application/json', // Set the content type
      },
    })
    .then(response => {
      if (response.status === 200) {
        console.log('Token verified');
        // If the token is verified, you can perform further actions here
      } else {
        console.log('Token verification failed');
        // Handle token verification failure
        // Set the token in local storage to null
        localStorage.setItem('token', null);
      }
    })
    .catch(error => {
      console.error('Error verifying token:', error);
      // Handle error when making the request
      // Set the token in local storage to null on error
      localStorage.setItem('token', null);
    });
  } else {
    console.log('Token not found');
    // Handle the case where the token is not found
  }
};


  useEffect(() => {
    verifyToken();
  }
  ,[storedToken]);
  return (
    <Container>

      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
            <ButtonColumn>
              <Link to={`/SearchPage/Sale/-/-/-/-/0/-/-`}>
                <ButtonOverlay>SEARCH PROPERTIES</ButtonOverlay>
              </Link>
              <Link to="/Upload">
                <ButtonOverlay>UPLOAD PROPERTY</ButtonOverlay>
              </Link>
            </ButtonColumn>
          </ImageContainer>
        ))}
      </Slider>
      <SearchCardWrapper className='search-card-home'>
        <VerticalSearchCard />
      </SearchCardWrapper>
    </Container>
  );
};

export default HeroSlider;
