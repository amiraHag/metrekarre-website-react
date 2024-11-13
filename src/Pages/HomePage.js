import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Hero from './Hero';
import DiscoverPage from './DiscoverPage';
import CardGrid from './CardGrid';
import Footer from './Footer';
import { styled } from 'styled-components';
import AboutUs from './AboutUs';



const HomePage = () => {
  const heroRef = useRef(null);
  const discoverRef = useRef(null);
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);

  const sectionList = [
    'hero-section',
    'discover-section',
    'aboutus-section',
    'footer-section',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {

    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  

  const scrollToSection = () => {
    if (currentIndex < sectionList.length - 1) {
      const nextSectionId = sectionList[currentIndex + 1];
      switch (nextSectionId) {
        case 'hero-section':
          heroRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'discover-section':
          discoverRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'aboutus-section':
          aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'footer-section':
          footerRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reset index to 0 when reaching the end
      setCurrentIndex(0);
    }
  };



  const ScrollButton = styled.button`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    right: 20px;
    background-color: #800000; /* Wine red background color */
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px; /* Larger size */
    height: 60px; /* Larger size */
    font-size: 28px; /* Larger size */
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 9999; /* Make sure it's on top */
  `;

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={discoverRef}>
        <DiscoverPage />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <ScrollButton onClick={scrollToSection}>
        <i className="fas fa-chevron-down"></i>
      </ScrollButton>
    </div>
  );
};

export default HomePage;
