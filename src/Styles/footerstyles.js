import styled from "styled-components";


export const FooterContainer = styled.footer`
  background-color: var(--back-color);
  padding: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
  display: none;
    
}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    transition: color 0.3s ease-in-out;
  }
`;