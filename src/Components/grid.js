import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from './media_card';
import styled from 'styled-components';

export default function ResponsiveGrid({ propertyData }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 600,
        lg: 900,
        xl: 1200,
        tablet: 1024,
      },
    },
  });

  const ContainerBox = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center; /* Horizontally center content */
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 4vh;
  `;

  const ContentBox = styled.div`
    width: 100%; /* Full width */
    max-width: 86.5vw; /* Adjust the maximum width as needed */
  `;

  return (
    <ContainerBox>
      <ContentBox>
        <Box color="red">
          <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
              {propertyData.map((property, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={6} xl={3}>
                  <MediaCard
                    images={property.pictures}
                    title={property.country + ", " + property.region + ", " + property.zone}
                    price={property.price}
                    reference={property.ref}
                    kind={property.kind}
                    status={property.status}
                    idNumber={property.id}
                    country={property.country}
                    bedrooms={property.rooms["bedrooms"]}
                    bathroom={property.rooms["bathrooms"]}
                    area={property.area}
                    showRibbon={property.new_product}
                  />
                </Grid>
              ))}
            </Grid>
          </ThemeProvider>
        </Box>
      </ContentBox>
    </ContainerBox>
  );
}
