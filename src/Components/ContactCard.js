import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const ContactCard = styled.div`
  background-color: #CCCCCC;
  color: #800000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-weight: 400;
    text-align: start;
    padding-bottom: 20px;
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 0.5px solid var(--back-color);

  h2 {
    margin-right: 20px;
  }
`;

const QuillContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 2%;
  padding: 10px;
  width: 100%;
  height: auto;
  min-height: 300px;
`;
const MessageText = styled.p`
  color: #800000;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const ButtonAndRecaptchaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledSendButton = styled.button`
  background-color: #800000; /* Red wine color */
  color: white;
  padding: 10px 40px; /* Add padding */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #a00000; /* Darker red wine color on hover */
  }
`;

const refNumberTitle = styled.h3`


`

const ContactUsCard = ({ refer, id }) => {
  const [text, setText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [ref, setRef] = useState(0);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
    ],
  };

  const handleChange = (value) => {
    setText(value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const [requestStatus, setRequestStatus] = useState(null);


  useEffect(() => {

    setRef(refer)
    console.log(refer);

  }, []); // The empty dependency array

  const sendData = async () => {
    try {
      // Define the URL for your API endpoint
      const url = '//sapi.metrekarre.com/api/product/interested';
     
      // Prepare the data to send in the POST request
      const data = {
        product_id: id,
        fname: firstName,
        lname: lastName,
        email: email,
        phone: phoneNumber,
        comment: text,
      };


      if (!firstName || !lastName || !phoneNumber || !email || !text) {
        window.alert('Please fill in all required fields.'); // Display an alert
        return;
      }

      // Send a POST request
      const response = await axios.post(url, data);

      if (response.status === 200) {
        // Request was successful
        console.log('Request was successful');

        // Print the keys and values
        Object.entries(data).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });

        // Update the request status and show a "thank you" message
        setRequestStatus('success');
        window.alert('Thank You! Your Message was sent'); // Display an alert

        setTimeout(() => {
          window.location.reload(false);
      }, 1000); // Adjust the delay time as needed


      } else {
        // Handle other response statuses if needed
        console.error('Request failed with status code', response.status);
        setRequestStatus('error');
      }
    } catch (error) {
      // Handle request errors
      console.error('Error sending the request:', error);
      setRequestStatus('error');
    }
  };

  return (
    <ContactCard>
      <TitleWrap>
        <h2>Contact Us</h2>
      </TitleWrap>
      {refer ? (
        <div style={{ width: "100%" }}>
          <h3 style={{ marginBottom: "10px", marginLeft: "5px" }}>Ref. {refer}</h3>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          {/* Content to render when 'refer' is null */}
        </div>
      )}

<label  style={{
        width:'100%',
          textAlign: 'left'
        }}>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          outline: 'none', // Remove focus outline
        }}
      />
      <label  style={{
        width:'100%',
          textAlign: 'left'
        }}>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          outline: 'none', // Remove focus outline
        }}
      />
      <label  style={{
        width:'100%',
          textAlign: 'left'
        }}>Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          outline: 'none', // Remove focus outline
        }}
      />
      <label  style={{
        width:'100%',
          textAlign: 'left'
        }}>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          outline: 'none', // Remove focus outline
        }}
      />



      <label  style={{
        width:'100%',
          textAlign: 'left'
        }}>Your Message:</label>
      <QuillContainer>
        <ReactQuill value={text} onChange={handleChange} modules={modules} />
      </QuillContainer>


      {/* <div style={{ width: "100%" }}>
        <h4 style={{ marginBottom: "10px", marginLeft: "5px" }}>Tel. +961 1 32 00 75</h4>
        <h4 style={{ marginBottom: "10px", marginLeft: "5px" }}>Mob. +961 3 26 26 69</h4>
      </div> */}



      <ButtonAndRecaptchaContainer>
        <ReCAPTCHA
          sitekey="6Le9_KkoAAAAANL1E7YbgvfQc4kUI1qwGL0y98Uf" // Replace with your reCAPTCHA site key
          onChange={handleRecaptchaChange}
        />

        {recaptchaValue ? ( // Display the button only if reCAPTCHA is verified
          <a style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: "none" }} >
            <StyledSendButton onClick={sendData}>Send Message</StyledSendButton>
          </a>
        ) : (
          <div style={{ width:"100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MessageText>Please verify that you are not a robot.</MessageText>
          </div>
        )}


      </ButtonAndRecaptchaContainer>
    </ContactCard>
  );
};

export default ContactUsCard;