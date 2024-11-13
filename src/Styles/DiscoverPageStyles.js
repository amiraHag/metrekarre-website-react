import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: var(--back-color);
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselWrapper = styled.div`
  width: 98%;
  margin-top: 20px;
  margin-left: 3%;
  @media (max-width: 575px) {
  margin-left: 0%;

  }

  @media (min-width: 576px) and (max-width: 767px) {
    margin-left: 0%;
  }
`;

export const ImageCard = styled.div`
  border-radius: 10px;
  height: auto;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 575px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 90%;
  }

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 50vh;
  border-radius: 5px;
  object-fit: cover;
  transition: filter 0.2s ease-in-out;



  @media (max-width: 575px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 90%;
  }
`;

export const TitleH1 = styled.h1`
  padding: 1%;
  color: black;
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
