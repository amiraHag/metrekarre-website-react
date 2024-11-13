import React, { useState } from 'react';
import styled from 'styled-components';

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

  .icon {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ImagePickerWrapper = styled.div`
  background-color: #CCCCCC;
  color: #800000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex-basis: calc(50% - 20px); 
  margin-bottom: 20px;
`;

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  margin-top: 10px;
`;

const ImageItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ChooseFilesButton = styled.label`
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

const FileInput = styled.input`
  display: none; 
`;

function ImagePicker() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Update the selectedImages state with the selected files
    setSelectedImages(selectedImages.concat(selectedFiles));
  };

  const handleResetClick = () => {
    // Clear the selectedImages state to remove all images
    setSelectedImages([]);
  };

  return (
    <ImagePickerWrapper>
      <TitleWrap>
        <h2>Upload Images</h2>
      </TitleWrap>

      {/* Custom styled "Choose Files" button */}
      <ImageRow>
        <ChooseFilesButton
          hasImages={selectedImages.length > 0}
        >
          {selectedImages.length > 0 ? 'Add Images' : 'Choose Images'}
          <FileInput
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </ChooseFilesButton>
        {selectedImages.length > 0 && (
          <ChooseFilesButton onClick={handleResetClick}>
            Reset Images
          </ChooseFilesButton>
        )}
      </ImageRow>

      {/* Display the selected images */}
      <ImageRow>
        {selectedImages.map((image, index) => (
          <ImageItem key={index}>
            <Image src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          </ImageItem>
        ))}
      </ImageRow>
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
