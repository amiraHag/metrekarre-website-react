import styled, { keyframes } from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ButtonColumn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
`;

export const bounceZoom = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const ButtonOverlay = styled.button`
  padding: 2vh;
  margin: 20px;
  background-color: var(--main-color);
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: wineRed;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchCardWrapper = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    display: none;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
