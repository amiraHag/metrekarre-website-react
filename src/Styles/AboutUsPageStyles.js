import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-height: 100%;
  color: black;
  margin-bottom: 5vh;
  
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;

  @media only screen and (min-width: 320px) and (max-width: 479px){ 
    flex-direction:column
   }

@media only screen and (min-width: 480px) and (max-width: 767px){     flex-direction:column
 }

@media only screen and (min-width: 768px) and (max-width: 991px){     flex-direction:column
 }

@media only screen and (min-width: 992px){ 

 }
`;

export const Card = styled.div`
overflow: none;
  &:hover {
    transform: scale(1.05);
  }
  transition: transform 0.2s ease-in-out;

  width: 27.5%;
  background-color: #222;
  color: white;
  border-radius: 10px;
  text-align: left;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 320px) and (max-width: 479px){ 
    width: 90%;
   }

@media only screen and (min-width: 480px) and (max-width: 767px){   
  width: 90%;

 }

@media only screen and (min-width: 768px) and (max-width: 991px){   
  width: 95%;

 }

  h1,
  p {
    padding: 0 10px;
  }

  h1 {
    text-decoration: underline;
  }

  p {
    padding-bottom: 20px;
  }

 
`;

export const CardImage = styled.img`
  width: 100%;
  height: 35vh;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  margin-top: 40px;
`;
