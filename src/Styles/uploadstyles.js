import styled from "styled-components";

export const Container = styled.form`

  margin-left: 15%;
  margin-right: 15%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;

@media only screen and (min-width: 320px) and (max-width: 479px){ 
    margin: 5%;
 }

@media only screen and (min-width: 480px) and (max-width: 767px){ 
    margin: 5%;
 }

@media only screen and (min-width: 768px) and (max-width: 991px){  
    margin: 5%;
}

@media only screen and (min-width: 992px){ 

 }

`


export const ContactCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: 'wrap';
  /* flex-direction: ${props => props.single ? 'column' : 'row'}; */

  /*  */
  @media only screen and (min-width: 320px) and (max-width: 479px){ 
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ContactCard = styled.div`
  background-color: #CCCCCC;
  color: #800000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex-basis: calc(50% - 20px); /* Two cards per row with 20px margin in between */
  margin-bottom: 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 0.5px solid var(--back-color);

  h2 {
    margin-right: 20px;
  }

  .icon {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const TwoFieldsRow = styled.div`
  

  @media only screen and (min-width: 992px){ 
    display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .textfield,
  .dropdown {
    width: calc(50% - 10px); /* Two items per row with 10px margin in between */
  }
   }
`;

export const Dropdown = styled.select`
width: 100%;
  margin: 5px 0;
  padding: 10px 8px;
  background-color: #fff;
  color: grey;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px 16px;
  outline: none;

  border-radius:0px ;

  &:focus {
    border-color: var(--main-color);
    background-color: wineRed;
  }
`;

export const ButtonContainer = styled.div`
width: 100%;
justify-content: center;
flex-direction: row;
display: flex;
`


export const ImagePickerWrapper = styled.div`
  background-color: #CCCCCC;
  color: #800000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex-basis: calc(50% - 20px); 
  margin-bottom: 20px;
`;

export const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  margin-top: 10px;
`;

export const ImageItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ChooseFilesButton = styled.label`
  background-color: ${props =>
    props.hasImages ? '#8B0000' : '#8B0000'};
  color: white;
  margin: 5px;
  margin-left: 0px;
  padding: 10px 20px; 
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const FileInput = styled.input`
  display: none; 
`;