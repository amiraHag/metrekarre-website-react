import React from 'react';
import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    redWinePagination: {
      '& .MuiPaginationItem-root': {
        color: 'black', // White text for non-selected pages
      },
      '& .Mui-selected': {
        backgroundColor: '#8B0000 !important', // Red wine color for the selected page background
        color: 'white !important', // White text for the selected page
        '&:hover': {
          backgroundColor: '#8B0000 !important', // Red wine color for the selected page background on hover
        },
      },
      '& .MuiPaginationItem-rounded': {
        borderRadius: '50%', // Rounded border radius for pagination items
      },
      '& button': {
        fontSize: '1.5rem', // Bigger font size for buttons
      },
    },
  }));
  
  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    padding: 20px; /* Padding for the card */
  `;

  const InsideContainer = styled.div`
     background-color: var(--card-color); 
     padding: 20px;
    border-radius: 5px;

  
  `
  
  const MyPagination = ({ page, count, onPageChange }) => {
    const classes = useStyles();
  
    const handleChange = (event, value) => {
      onPageChange(value);
    };
  
    return (
      <CardContainer>
        <InsideContainer>
            <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
          size="large"
          className={classes.redWinePagination}
          boundaryCount={true}
        /> 
        </InsideContainer>
       
      </CardContainer>
    );
  };
  
  export default MyPagination;