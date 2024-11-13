import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Link from '@mui/material/Link';
import { FooterContainer, Container, FooterLink, FooterLinks } from '../Styles/footerstyles';
import { Helmet } from 'react-helmet';

const LegalDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <p>
          By selecting a property through our portal www.metrekarre.com related to your search criteria (whether Rent or Sale), you would have agreed to entrust and hire MetreKarre Koncept to seek, communicate, and assist in the closure of your selected property on the terms and conditions specified herein.
        </p>
        <p>
          MetreKarre Koncept fees: You agree to pay to MetreKarre Koncept a fee in the amount of (i) 2.5% + VAT on the sale value of the real estate property you have selected or (ii) A (one) month rental fee + VAT of the yearly rental contract.
        </p>
      </DialogContent>
    </Dialog>
  );
};

const Footer = () => {
  const [legalDialogOpen, setLegalDialogOpen] = useState(false);

  const handleOpenLegalDialog = () => {
    setLegalDialogOpen(true);
  };

  const handleCloseLegalDialog = () => {
    setLegalDialogOpen(false);
  };

  return (
    <FooterContainer>
      <Container>
        <FooterLinks>
          <Link style={{ textDecoration: "none" }}>
            <FooterLink href="/AboutUs">About Us</FooterLink>
          </Link>
          <FooterLink href="/Contactus">Contact Us</FooterLink>
          <FooterLink href="#" onClick={handleOpenLegalDialog}>Legal</FooterLink>
          <FooterLink href="/SearchPage/Sale/Lebanon/-/-/-/0/-/-">For Sale</FooterLink>
          <FooterLink href="/SearchPage/Rent/Lebanon/-/-/-/0/-/-">For Rent</FooterLink>
          <FooterLink href="/SearchPage/Sale/Lebanon/-/-/-/0/-/-">Lebanon</FooterLink>
          <FooterLink href="/SearchPage/Sale/France/-/-/-/0/-/-">Paris</FooterLink>
          <FooterLink href="/SearchPage/Sale/Greece/-/-/-/0/-/-">Greece</FooterLink>
          <FooterLink href="https://www.facebook.com/metrekarre" target="_blank">Facebook</FooterLink>
          <FooterLink href="https://www.instagram.com/metrekarre_realestatelb/" target="_blank">Instagram</FooterLink>
          <FooterLink href="https://twitter.com/metre_karre" target="_blank">Twitter</FooterLink>
          <FooterLink href="https://wa.me/+96103262669" target="_blank">WhatsApp</FooterLink>
          <FooterLink href="mailto:info@metrekarre.com">Email</FooterLink>
        </FooterLinks>
        <FooterLinks style={{margin:"5px"}}>
          <h4 style={{ color: "#8B0000" }}>
          Ashrafieh, Georges Zeidan street - Acra bldg, Beirut, Lebanon 
          </h4>
          <h4 style={{ marginLeft: "15px", marginRight:"10px", color:"#8B0000" }}>Tel. +961 1 32 00 75</h4>
          <h4 style={{ marginLeft: "5px", color:"#8B0000" }}>Mob. +961 3 26 26 69 </h4>
          <h4 style={{marginLeft: "15px",color: "#8B0000" }}>
           Email:<FooterLink style={{color: "#8B0000" }} href="mailto:info@metrekarre.com">info@metrekarre.com</FooterLink>
          </h4>
        </FooterLinks>
      </Container>
      <LegalDialog open={legalDialogOpen} onClose={handleCloseLegalDialog} />
      <Helmet>
        <meta property="og:title" content="Metrekarre Real Estate" />
        <meta property="og:description" content="MetreKarre Koncept is a leading real estate agency specializing in luxury apartment rentals and sales. We offer comprehensive marketing strategies for sellers and efficient property searches for buyers, both locally and globally. Our effective promotion methods and industry alliances ensure successful real estate transactions." />
        <meta property="og:url" content="https://www.metrekarre.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
    </FooterContainer>


  );
};

export default Footer;