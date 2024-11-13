import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SignInDialog from '../Components/SignIn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, BurgerNav, CloseWrapper, CustomClose, CustomMenu, LogoTitleContainer, Menu } from '../Styles/Navbar.styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleBurgerClick = () => {
    setBurgerStatus(!burgerStatus);
  };

  const [isSigninOpen, setSignOpen] = useState(false);

  const openSignin = () => {
    setSignOpen(true);
  };

  const closeSignIn = () => {
    setSignOpen(false);
  };

  useEffect(() => {
    // Google Analytics gtag.js code
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-GEQW6H79GJ');
  }, []);

  const Column = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 1000;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `

  const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: black;
`;

  const SocialMediaIcon = styled.i`
  font-size: 24px;
  margin-left: 10px;
  color: #fff;
  margin-right: 10px;
  transition: color 0.3s ease;

&:hover {
  color: var(--main-color); /* Change the hover color as needed */
}
`;

  const storedToken = localStorage.getItem('token');


  return (
    <Column>
      <Container>
        <LogoTitleContainer href='/'>
          <h1>{"METREKARRE"}</h1>
          <h5>{"Your Real Estate Boutique"}</h5>
        </LogoTitleContainer>
        <Menu>
          <Link to="/">
            Home
          </Link>

          <Link to="/AboutUs">
            About Us
          </Link>

          <Link to="/Locations" >Locations</Link>

          <a href="/Contactus">
            Contact Us
          </a>
        </Menu>



        <Menu>
          <a
            onClick={openSignin}
            style={{ color: 'white', backgroundColor: '#800000', borderRadius: '5px', padding: '10px' }}
          >
            {storedToken ? "Your Profile"
              :
              "Sign In"
            }
          </a>
        </Menu>
        <SignInDialog open={isSigninOpen} onClose={closeSignIn} />
        <CustomMenu onClick={handleBurgerClick}>
          <MenuIcon />
        </CustomMenu>
        {burgerStatus && (
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={handleBurgerClick} />
            </CloseWrapper>
            <li>
              <a href="#hero-section">Home</a>
            </li>
            <li>
              <a href="/AboutUs" onClick={() => handleNavLinkClick('aboutus-section')}>
                About Us
              </a>
            </li>
            <li>
              <a href="/Locations" onClick={() => handleNavLinkClick('discover-section')}>
                Locations
              </a>
            </li>
            <li>
              <a href="/Contactus">

                Contact Us
              </a>
            </li>
            <li>
              <a onClick={openSignin} target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </li>
            <SignInDialog open={isSigninOpen} onClose={closeSignIn} />

            <li>
              <a href="https://apps.apple.com/us/app/metrekarre/id6469328161" target="_blank" rel="noopener noreferrer">
                App Store
              </a>
            </li>
            <li>
              <a href="https://wa.me/+96103262669" target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            </li>
          </BurgerNav>
        )}
      </Container>

      <SocialMediaContainer>
        <a href="https://www.facebook.com/metrekarre" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon className="fab fa-facebook"></SocialMediaIcon>
        </a>
        <a href="https://www.instagram.com/metrekarre_realestatelb/" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon className="fab fa-instagram"></SocialMediaIcon>
        </a>
        <i class="fa-brands fa-x-twitter"></i>
        <a href="https://twitter.com/metre_karre" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon>
            <FontAwesomeIcon icon={faXTwitter} />
          </SocialMediaIcon>
        </a>
        <a href="https://wa.me/+96103262669" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon className="fab fa-whatsapp"></SocialMediaIcon>
        </a>
        <a href="https://apps.apple.com/us/app/metrekarre/id6469328161" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon className="fa-brands fa-app-store"></SocialMediaIcon>
        </a>
        <a href="https://wa.me/+96103262669" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon className="fa-brands fa-google-play"></SocialMediaIcon>
        </a>
      </SocialMediaContainer>

    </Column>

  );
};

export default Navbar;
