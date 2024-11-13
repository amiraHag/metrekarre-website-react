import styled from "styled-components";

export const SocialMediaContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 10px;
background-color: rgba(0, 0, 0, 0.5);
margin-bottom: 20px;
`;

export const SocialMediaIcon = styled.i`
font-size: 24px;
margin-left: 10px;
color: #fff;
margin-right: 10px;
transition: color 0.3s ease;

&:hover {
  color: var(--main-color); /* Change the hover color as needed */
}
`;

export const ScrollButton = styled.button`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
bottom: 20px;
right: 20px;
background-color: #800000; /* Wine red background color */
color: white;
border: none;
border-radius: 50%;
width: 60px; /* Larger size */
height: 60px; /* Larger size */
font-size: 28px; /* Larger size */
cursor: pointer;
transition: background-color 0.3s ease;
z-index: 9999; /* Make sure it's on top */
`;