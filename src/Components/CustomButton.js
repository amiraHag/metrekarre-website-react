import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CustomButton = ({ text, onClick}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#8B0000', // Wine red color
            color: 'white',
            fontWeight:'bold',
            minHeight: "45px",
            minWidth: "200px",
            '&:hover': {
              backgroundColor: 'black', // Set background color to black on hover
            },
          }}
          onClick={handleClick}
          type="submit"
        >
          {text}
        </Button>
    </div>
  );
};

export default CustomButton;
