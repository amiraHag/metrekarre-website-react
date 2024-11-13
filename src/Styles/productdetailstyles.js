import styled from "styled-components";
// Styled components for the Page2 component
export const PageContainer = styled.div`
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 1%;

  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: 300px) {
    margin: 5%;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: 480px) {
    margin: 5%;
  }

  /* TABLETS PORTRAIT */
  @media only screen and (min-width: 768px) {
    margin: 10%;
  }

  /* TABLET LANDSCAPE / DESKTOP */
  @media only screen and (min-width: 1024px) {
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1%;
  }
`;

export const BigImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  max-height: 50vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  object-fit: cover;
`;

export const ThumbnailImage = styled.img`
  width: 10vh;
  height: 10vh;
  margin-bottom: 1%;
  margin-top: 1%;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--main-color);
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    border-color: var(--main-color);
  `}
`;

export const PageTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 10px;
  color: black;

  h2 {
    font-weight: 500;
    color: white;
  }
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 2%;

  p {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    color: white;
  }

  h3 {
    color: var(--main-color);
    size: 1.5rem;
    color: white;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 20px;
  background-color: var(--card-color);
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  white-space: pre-line;
  text-align: left;
  margin-top: 4%;
  margin-bottom: 4%;

  p {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  h2 {
    padding-bottom: 20px;
    font-weight: 400;
    color: var(--main-color);
  }
`;

export const DescriptionWrapper = styled.div`
  margin-top: 2%;
`;

export const DescriptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--back-color);
`;

export const Buttcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin: 0;
  color: var(--main-color);

  h3 {
    padding: 10px;
    color: white;
    background-color: var(--main-color);
    font-size: 1.5rem;
    font-weight: 500;
  }

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ImageViewerWrapper = styled.div`
  display: flex;
  height: 100vh; /* Set full-screen height */
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999; /* Ensure it's above other content */
  @media only screen and (min-width: 992px){ 

img {
    height: 100%;
   
  }

      }
   
`;