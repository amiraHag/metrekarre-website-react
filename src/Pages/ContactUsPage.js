import React from 'react'
import Navbar from '../Components/Navbar'
import ContactUsCard from '../Components/ContactCard'
import styled from 'styled-components'
import Footer from './Footer'

const ContactUsPage = () => {
    const Container = styled.div`
    width: 50%;
    margin: 50px auto;
  
    @media (max-width: 767px) {
      width: 90%;
    }
  `;

  return (
    <div>
        <Navbar />
        <Container>
        <ContactUsCard id= {1} />
    </Container>
    <Footer />
    </div>
   
  )
}

export default ContactUsPage