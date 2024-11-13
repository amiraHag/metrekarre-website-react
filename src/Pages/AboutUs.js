import React from 'react';
import {
  Section,
  Container,
  Title,
  Card,
  CardImage,
} from "../Styles/AboutUsPageStyles";
import { AboutUsDataArray } from '../constants';



const InfoSection = ({ data }) => {
    const { heading, paragraphOne, paragraphTwo, buttonLabel, image } = data;
  
    return (
      <Card>
        <CardImage src={image} alt={heading} />
        <h1 style={{ marginBottom: '10px', marginTop:'10px'}}>{heading}</h1>
        <p>{paragraphOne}</p>
      </Card>
    );
  };
  



const AboutUs = () => {
  return (
    <Section>
      <Title>About Us</Title>
      <Container>
        {AboutUsDataArray.map((data, index) => (
          <InfoSection key={index} data={data} />
        ))}
      </Container>
    </Section>
  );
};

export default AboutUs;
