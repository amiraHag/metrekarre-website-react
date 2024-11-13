import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import gptLogo from "../Images/chatgpt.png"

// Styled component for the RichTextEditor
const RichTextEditorWrapper = styled.div`
  background-color: #CCCCCC;
  color: #800000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex-basis: calc(50% - 20px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: 10px;

`

// Styled component for the title
const Title = styled.h2`
  font-size: 1.5rem;
  word-wrap: break-word; /* Allow title to wrap if it's too long */
  border-bottom: 0.5px solid var(--back-color);

`;

// Styled component for the ChatGPT logo button and its container
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto; 
`;

const LogoButton = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the ChatGPT logo image
const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  border-radius: 5px;
`;

const QuillContainer = styled.div`
  background-color: white; /* Set the background color to white */
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: auto;
  min-height: 500px;
`;

function RichTextEditor({ onEditorValueChange }) {
  const [text, setText] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
    ],
  };

  const handleChange = (value) => {
    setText(value);
    onEditorValueChange(value);
  };

  const handleChatGPTButtonClick = () => {
    // window.location.href = 'https://chat.openai.com/';
    // Implement the logic for the ChatGPT button click here
    // For example, you can send the text to a ChatGPT API for processing
  };

  return (
    <RichTextEditorWrapper>
      <Row>
        <Title>DESCRIPTION</Title>
        <LogoContainer>
          <LogoButton href='https://chat.openai.com/'>
            <LogoImage src={gptLogo} alt="ChatGPT Logo" />
          </LogoButton>
        </LogoContainer>
      </Row>
      <QuillContainer>
        <ReactQuill
          value={text}
          onChange={handleChange}
          modules={modules}
        />
      </QuillContainer>
    </RichTextEditorWrapper>
  );
}

export default RichTextEditor;
