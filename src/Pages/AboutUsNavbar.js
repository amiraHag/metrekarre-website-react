import React from 'react';
import Navbar from '../Components/Navbar';
import AboutUs from './AboutUs';
import Footer from './Footer';

const AboutUsNavbar = () => {
  const centerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Center vertically by using the full viewport height
  };

  return (
    <div style={centerContainerStyle}>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsNavbar;

