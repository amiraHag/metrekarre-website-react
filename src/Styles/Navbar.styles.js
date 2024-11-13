import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';



export const Container = styled.div`
background-color: black;
position: sticky;
width: 100%;
min-height: 60px;
padding: 25px;
top: 0;
left: 0;
right: 0; 
z-index: 1;
display: flex;
align-items: center;
justify-content: space-between;


@media only screen and (min-width: 320px) and (max-width: 479px) {
  padding: 0px;
  background-color: var(--main-color);
}
`;

export const LogoTitleContainer = styled.a`
background-color: var(--main-color);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
border-radius: 5px;
margin-left: 4.5%;
text-decoration: none;

@media only screen and (min-width: 480px) and (max-width: 767px){ 
    margin-left: 20%;
    margin-right: 40%; 
}  

@media only screen and (min-width: 320px) and (max-width: 479px) {
  flex-direction: column;
  align-items: flex-start;
}

h1{
  margin: 5px;
}

h1,
h5 {
  color: white;
  margin: 0px;
}

h5 {
  font-style: italic;
}

`;

export const Menu = styled.div`
font-size: 1.1rem;


a:hover {
  color: var(--main-color);
  transition: transform 0.2s ease-in;
}
a {
  margin: 10px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  color: white;
  text-align: center;
}

display: flex;
align-items: center;
justify-content: center;
margin-right: 3vw;

p {
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  color: black;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  display: none;
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  display: none;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  display: none;
}
`;

export const CustomMenu = styled.div`
color: white;
cursor: pointer;
margin: 10px;
@media only screen and (min-width: 900px)  {
  display: none;
}
`;

export const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
padding: 10px;
background: white;
width: 60vw;
z-index: 100;
transition: transform 0.2s ease-in;
background-color: black;
list-style-type: none;

a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;
  transition: color 0.2s ease-in;
}

a:hover {
  color: var(--main-color);
  transition: transform 0.2s ease-in;
}

transform: ${(props) => (props.show ? 'translateX(0%)' : 'translateX(100%)')};
li {
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid white;
}
`;

export const CustomClose = styled(CloseIcon)`
cursor: pointer;
color: white;
`;

export const CloseWrapper = styled.div`
display: flex;
justify-content: flex-start;
color: white;
background-color: black;
`;