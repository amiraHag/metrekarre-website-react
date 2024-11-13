import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

import ResponsiveGrid from '../Components/grid';
const AppartmentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export default function CardGrid({propertyData}) {
  return (
    <AppartmentsWrapper>
      <ResponsiveGrid></ResponsiveGrid>
    </AppartmentsWrapper>
  );
}
