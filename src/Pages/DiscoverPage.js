import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { discoverImages,discoverTitles } from "../constants";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  CarouselWrapper,
  ImageCard,
  Image,
  TitleH1,
}from "../Styles/DiscoverPageStyles"




const DiscoverPage = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Show 1 slide on screens with a width of 768px or less
      } else if (window.innerWidth <= 991){
        setSlidesToShow(1); 
      }
      else {
        setSlidesToShow(3); // Show 3 slides on larger screens
      }
    };

    handleResize(); // Call once to set the initial number of slides

    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide on slide change
    customPaging: (i) => (
      <div
        style={{
          width: "10px", // Adjust dot size as needed
          height: "10px", // Adjust dot size as needed
          backgroundColor: i === currentSlide ? "white" : "gray", // Selected dot is white, unselected dots are gray
          borderRadius: "50%", // Make the dots round
          marginTop:"20px",
        }}
      ></div>
    ),
  };
  
  return (
    <PageWrapper id="discover-section">
      <TitleH1>
        Our Locations
      </TitleH1>
      <CarouselWrapper>
        <Slider ref={sliderRef} {...settings}>
          {discoverImages.map((image, index) => (
            <div key={index}>
        <Link to={`/SearchPage/Sale/${discoverTitles[index]}/-/-/-/0/-/-`} style={{ textDecoration: 'none' }}>
              <ImageCard>
                <Image src={image} alt={`Image ${index + 1}`} />
                <h4>{discoverTitles[index]}</h4>
              </ImageCard>
              </Link>
              
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
