import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Container = styled.div`
 /* Set text color to white */
`;

const TermsText = styled.p`
 margin: 20px; /* Add your desired margin */
  color: white; 
`;

const TermsAndConditions = () => {
  return (
    <Container>
      <Navbar />
      <TermsText>
      Before MetreKarre Koncept. can list your property, you must agree to the below terms and conditions: By accepting these terms and conditions, you agree to entrust MetreKarre Koncept to seek for a buyer and/or a lessee for your real estate property (the "Property") on the terms and conditions specified herein. You also agree and hereby authorize MetreKarre Koncept to advertise your Property in our principal publication, websites, and by any other means, at our discretion, with no restrictions, including without limitation our right to produce a complete photographic portfolio of the real estate property in question. We undertake to use our best endeavors within our resources to find a buyer/lessee for your Property within the shortest time. All expenses related to advertising your Property are borne by us. This may include a photographic portfolio, online publication, press publication, and in-house advertisement. MetreKarre Koncept fees: You agree to pay to MetreKarre Koncept a fee in the amount of (i) 2.5% on the sale value of your real estate property or (ii) 1 (one) month rental fee, should MetreKarre Koncept rent your Property to a third party introduced to you by or through MetreKarre Koncept.
      </TermsText>
    </Container>
  );
};

export default TermsAndConditions;
