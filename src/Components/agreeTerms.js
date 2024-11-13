import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CheckboxRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer; /* Add cursor pointer on hover */
  text-decoration: none; /* Remove the default underline */
  transition: text-decoration 0.2s ease-in-out; /* Add smooth transition for underline */
  
  &:hover {
    text-decoration: underline; /* Underline text on hover */
  }
  a{
    text-decoration: none;
    color: var(--main-color);
  }
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
  cursor: pointer; /* Add cursor pointer on hover */
`;

function CheckboxRow() {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <CheckboxRowContainer>
      <CheckboxLabel onClick={handleCheckboxChange}>
        <CheckboxInput
          type="checkbox"
          checked={agreeToTerms}
          onChange={handleCheckboxChange}
        />
        <Link to="/TermsConditions">
        <a href="#">I agree to terms and conditions</a>
        </Link>
       
      </CheckboxLabel>
    </CheckboxRowContainer>
  );
}

export default CheckboxRow;
