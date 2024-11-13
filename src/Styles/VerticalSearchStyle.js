import styled from "styled-components";

export const SearchCardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 86.5vw;
  flex-direction: row;
  border-radius: 5px;
  padding: 15px;
  margin-top: 2%;
  margin-bottom: 2%;
  align-items: center;
  justify-content: start;
  background-color:  var(--card-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  h3{
    margin: 2%;
  }

  @media only screen and (min-width: 320px) and (max-width: 479px){ flex-direction:column }

  @media only screen and (min-width: 480px) and (max-width: 767px){ flex-direction:column }

  @media only screen and (min-width: 768px) and (max-width: 991px){ flex-direction:column }

  @media only screen and (min-width: 600px) and (max-width: 1024px){ 
    flex-direction:column 
  }

`;

export const RedWineButton = styled.button`
  background-color: var(--main-color);
  color: white;
  border: none;
  font-weight: bold;
  padding: 8px 20px;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  width: 150px;
  margin-left: 10px;
  border-radius: 5px;

  @media only screen and (min-width: 320px) and (max-width: 479px){ 
     margin-top: 10px;
     margin-left: 0px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px){ 
    margin-top: 10px;
    margin-left: 0px;
 }

  @media only screen and (min-width: 768px) and (max-width: 991px){
    margin-top: 10px;
    margin-left: 0px;
  }


  &:hover {
    background-color: darkred; /* Change the color on hover if desired */
  }
`;

export const Dropdown = styled.select`
  margin: 5px 0;
  padding: 9px;
  width: 40%;
  background-color: #fff;
  color: grey;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px 16px;
  outline: none;
  border-radius: 0px;

  &:focus {
    border-color: var(--main-color);
    background-color: wineRed;
  }

  @media only screen and (min-width: 320px) and (max-width: 479px){ 
  border-radius: 0px;
    
    width:100%}

@media only screen and (min-width: 480px) and (max-width: 767px){ width:100% }

@media only screen and (min-width: 768px) and (max-width: 991px){ width:100% }

@media only screen and (min-width: 600px) and (max-width: 1024px){ 
  width: 100%;
  }
`;

export const InputField = styled.input`
  margin: 5px 0;
  padding: 10px 8px;
  width: 40%;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  @media only screen and (min-width: 320px) and (max-width: 479px){ width:100%}

@media only screen and (min-width: 480px) and (max-width: 767px){ width:100% }

@media only screen and (min-width: 768px) and (max-width: 991px){ width:100% }

@media only screen and (min-width: 600px) and (max-width: 1024px){ 
  width: 100%;
  }

  &:focus {
    border-color: var(--main-color);
  }
`;