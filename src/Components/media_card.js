import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageLogo from '../Images/Logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const AppartCard = ({ images, title, price, reference, kind, status, idNumber, country, bedrooms, bathroom, area, showRibbon }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigateToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const navigateToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    function formatPrice(number) {
        // Convert the number to a string and split it into an array of characters
        const numberString = number.toString().split('');

        // Initialize an empty result string
        let result = '';

        // Iterate through the characters in reverse order
        for (let i = numberString.length - 1, count = 0; i >= 0; i--) {
            // Add the current character to the result string
            result = numberString[i] + result;
            count++;

            // Add a space after every three characters (except for the last group)
            if (count === 3 && i !== 0) {
                result = ' ' + result;
                count = 0;
            }
        }

        return result;
    }

    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const arrow_image = (images.length > 1)? "show-arrows":"hide-arrows";
    return (
        <Card

            sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                minWidth: 200,
                maxWidth: 400,
                borderRadius: '5px',
                backgroundColor: 'var(--card-color)',
                cursor: "pointer",
                ":hover": {
                    shadow: 20,
                }
            }}
        >
           
            <CardMedia
                sx={{
                    height: "30vh", // Adjust the height here to make the image taller
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                    position: 'relative', // Add this to position the buttons inside the CardMedia
                }}
                image={images.length > 0 ? `//server.metrekarre.com/uploads/resized/${images[currentImageIndex]}` : imageLogo}
                title={title}
            >
                 <Link
                to={{
                    pathname: `/ProductDetail/${idNumber}`,
                }}
                style={{ color: 'inherit', textDecoration: 'none',position: 'absolute', left:'0',right:'0', bottom:'0',  top: '0' }}
            ></Link>
            {showRibbon==1 &&  <div className="ribbon">New</div>}
            {status=='Rented' &&  <div className="ribbon">Rented</div> }
            {status=='Sold' &&  <div className="ribbon">Sold</div> }

                <Button
                    className={`${arrow_image} left`}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'redwine', // Updated button color to "redwine"
                        cursor: 'pointer',
                        outline: 'none',
                        fontSize: '24px',
                        color: 'var(--main-color)',
                        left: '10px',
                    }}
                    onClick={navigateToPreviousImage}
                >
                    <ArrowBackIosNewIcon fontSize="large" />
                </Button>
                <Button
                    className={`${arrow_image} right`}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'redwine', // Updated button color to "redwine"
                        cursor: 'pointer',
                        outline: 'none',
                        fontSize: '24px',
                        color: 'var(--main-color)',
                        right: '10px',
                    }}
                    onClick={navigateToNextImage}
                >
                    <ArrowForwardIosIcon fontSize="large" />
                </Button>
            </CardMedia>
           
            <Link
                to={{
                    pathname: `/ProductDetail/${idNumber}`,
                }}
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                <CardContent style={{ height: "auto", overflowY: "auto" }}>
                
                    <Typography variant="h6" color="text.secondary" style={{ color:'#8B0000' ,marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Ref.{reference}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" style={{ marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {kind} {status}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" style={{ marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {country !== "Lebanon" ? "Euro" : "USD"} {formatPrice(price)}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {area !== "0" && area !== 0 && (
                            <>
                                <FontAwesomeIcon icon={faHome} style={{  marginRight: '8px' }} />
                                {area} m<sup>2 </sup>
                            </>
                        )}
                        {bedrooms !== "0" && bedrooms !== "" && bedrooms !== 0 && (
                            <>
                                <FontAwesomeIcon icon={faBed} style={{marginLeft: '16px', marginRight: '8px' }} />
                                {bedrooms}
                            </>
                        )}
                        {bathroom !== "0" && bathroom !== "" && bathroom !== 0 && (
                            <>
                                <FontAwesomeIcon icon={faShower} style={{ marginLeft: '16px', marginRight: '8px' }} />
                                {bathroom}
                            </>
                        )}
                      
                    </Typography>



                </CardContent>

            </Link>



            <CardActions sx={{ justifyContent: 'center' }}>
                <Link to={{
                    pathname: `/ProductDetail/${idNumber}`,
                }}>
                    <CustomButton text="Further Details" />
                </Link>
            </CardActions>
        </Card>

        // </Link>

    );
}

export default AppartCard;
