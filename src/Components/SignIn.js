import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from 'styled-components';
import CustomButton from './CustomButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ButtonOverlay } from '../Styles/HeroStyles';

const InputField = styled.input`
  margin-right: 10px;
  padding: 10px 8px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const MarginDiv = styled.div`

  margin-bottom: 20px; 

  label{
    margin-bottom: 20px;
  }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

`

const Title = styled.h2`
  margin-bottom: 15px;
`
const SignInDialog = ({ open, onClose, onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async () => {
    try {
      await handleLogin();
    } catch (error) {
      console.error(error);
    }

    onClose();
   
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('//sapi.metrekarre.com/api/token/create', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        if (token) {
          // Save the token to local storage
          localStorage.setItem('token', token);
          console.log(token);
        } else {
          throw new Error('Failed to login');
        }
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      // Handle login error
      console.error(error);
      // Show an error message (you can use a library like react-bootstrap for modals)
    }
  };

  const storedToken = localStorage.getItem('token');


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent style={{ backgroundColor: 'var(--back-color)' }}>
        <Title> {storedToken ? "Profile":"Sign-In"} </Title>
        {
           storedToken ? <div style={{height:"300px",width:"300px", display: "flex", flexDirection:"column", justifyContent: "center",alignItems:"center"}}>
             <Link to={`/Upload`}>
               <ButtonOverlay>Upload Property</ButtonOverlay>
              </Link>
              <ButtonOverlay onClick={
                () => {
                  localStorage.setItem('token', "");
                  window.location.reload();
                }
              }>Log Out</ButtonOverlay>

           </div> : 
          <form>
          <MarginDiv>
            <label>Email:</label>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </MarginDiv>
          <MarginDiv>
            <label>Password:</label>
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </MarginDiv>
          <MarginDiv>
         <Row>
         <CustomButton onClick={handleSignIn} text="Sign In">
          </CustomButton>
         </Row>
          </MarginDiv>
        </form>
        }
       
        
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
