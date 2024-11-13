import React, { useState, useEffect } from 'react';
import ContactUsCard from '../Components/ContactCard';
import LocationMap from '../Components/map';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { PageContainer, BigImage, Buttcontainer, DescriptionContainer, DescriptionRow, DescriptionWrapper, ImageViewerWrapper, PageTitle, PageTitleWrapper, Row, ThumbnailContainer, ThumbnailImage } from '../Styles/productdetailstyles';
import Navbar from '../Components/Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon ,
  WhatsappIcon
} from "react-share";


  
   

const ProductDetail = () => {
  const { id } = useParams();

  window.scrollTo(0, 0); // Scroll to the top of the page

  useEffect(() => {

    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // The empty dependency array

  // Initialize propertyData with an empty object
  const [propertyData, setPropertyData] = useState({});

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
    };

    axios
      .get(`//sapi.metrekarre.com/api/product/${id}`, { headers })
      .then((response) => {
        setPropertyData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  document.title = `REF.${propertyData.reference}`;



  const openImageViewer = (index) => {
    setImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setImageIndex(0);
    setIsViewerOpen(false);
  };

  const propertyTitle = `${propertyData.country} ${propertyData.region} ${propertyData.zone}`;
  const propertyPrice = propertyData.price;
  const propertyPictures = propertyData.pictures;

  // const  = `${propertyData.rooms.}`;
  // const bathroom = propertyData.rooms.bathroom;
  const area = propertyData.area;

  const [imageIndex, setImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false); // State to control the image viewer

  const formatPrice = (number) => {
    if (number === null || number === undefined) {
      return '';
    }

    const numberString = number.toString().split('');
    let result = '';

    for (let i = numberString.length - 1, count = 0; i >= 0; i--) {
      result = numberString[i] + result;
      count++;

      if (count === 3 && i !== 0) {
        result = ' ' + result;
        count = 0;
      }
    }

    return result;
  };

  const formatPriceWithH2 = (number, color) => {
    const formattedPrice = formatPrice(number);
    return <h2 style={{ color: color }}> {propertyData.country !== "Lebanon" ? "EURO" : "USD"}  {formattedPrice}</h2>;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof document !== "undefined" ? document.title : "Check out this awesome content!";

 

  return (
    <div id='pdf-content'>
      <Navbar></Navbar>
      <PageContainer>

        <Row>
          <Buttcontainer>
            <h3>{propertyData.status}</h3>
          </Buttcontainer>
    <div className="App">
      <div className="main">
      </div>
      <div className="share-buttons">
      <Typography variant="h6" style={{ color:'#8B0000' }}>
      Share: </Typography>
        <FacebookShareButton url={shareUrl} quote={"Metrekarre Property : " +title}>
          <FacebookIcon round size={30}  />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={"Metrekarre Property : " +title}>
          <TwitterIcon round size={30}/>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={"Metrekarre Property : " +title}>
          <WhatsappIcon round size={30}/>
        </WhatsappShareButton>
      </div>
    </div>
  
        </Row>
        <div style={{height:"10px"}}></div>
       
      

        {propertyData && propertyData.pictures && propertyData.pictures.length > 0 && (
          <BigImage
            src={`//server.metrekarre.com/uploads/resized/${propertyPictures[imageIndex]}`}
            alt="Big"
            onClick={() => openImageViewer(imageIndex)}
          />
        )}

        {propertyData && propertyData.pictures && propertyData.pictures.length > 0 && (
          <ThumbnailContainer>
            {propertyData.pictures.map((image, index) => (
              <ThumbnailImage
                key={index}
                className="thumbnail-image"
                src={`//server.metrekarre.com/uploads/resized/${image}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => openImageViewer(index)}
                isSelected={index === imageIndex}
              />
            ))}
          </ThumbnailContainer>
        )}

        {isViewerOpen && (
          <ImageViewerWrapper>
            <ImageViewer
              src={propertyPictures.map((imageUrl) => `//server.metrekarre.com/uploads/resized/${imageUrl}`)}
              currentIndex={imageIndex}
              onClose={closeImageViewer}
              backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            />
          </ImageViewerWrapper>

        )}
        <PageTitleWrapper>



          <PageTitle>
            <h2 style={{ color: "#800000" }}> REF.{propertyData.reference} / {propertyTitle}</h2>
          </PageTitle>
          {/*propertyData && propertyData.rooms && propertyData.rooms.bedrooms && (
            <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {propertyData.rooms.bedrooms !== 0 && <><FontAwesomeIcon icon={faBed} style={{ marginRight: '8px' }} /> {propertyData.rooms.bedrooms}</>}
              {propertyData.rooms.bedrooms !== 0 && 3 !== 0 && <><FontAwesomeIcon icon={faShower} style={{ marginLeft: '16px', marginRight: '8px' }} /> {3}</>}
              {area !== 0 && <><FontAwesomeIcon icon={faHome} style={{ marginLeft: '16px', marginRight: '8px' }} /> {area} m<sup>2</sup></>}
              {propertyData.rooms.parking_gf !== 0 && 3 !== 0 && <><FontAwesomeIcon icon={faParking} style={{ marginLeft: '16px', marginRight: '8px' }} /> {3}</>}

            </Typography>
          )*/}
           {propertyData && propertyData.rooms  && (
           <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', textAlign: "center", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
               {area !== 0 && <><FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} /> {area} m<sup>2</sup></>}
              {propertyData.rooms.bedrooms !== 0  && propertyData.rooms.bedrooms !== "0" && propertyData.rooms.bedrooms !== "" && <><FontAwesomeIcon icon={faBed} style={{  marginLeft: '16px',marginRight: '8px' }} /> {propertyData.rooms.bedrooms}</>}
              {propertyData.rooms.bathrooms !== 0  && propertyData.rooms.bathrooms !== "0" && propertyData.rooms.bathrooms !== "" && <><FontAwesomeIcon icon={faShower} style={{ marginLeft: '16px', marginRight: '8px' }} /> {propertyData.rooms.bathrooms}</>}
             {propertyData.parking_gf !== 0 && <><FontAwesomeIcon icon={faParking} style={{ marginLeft: '16px', marginRight: '8px' }} /> {propertyData.parking_gf}</>}

            </Typography>)}
        </PageTitleWrapper>

        <DescriptionWrapper>
          <DescriptionContainer>
            <DescriptionRow>
              <h2>Description</h2>
              {formatPriceWithH2(propertyPrice, "#800000")}
            </DescriptionRow>
            <div
              dangerouslySetInnerHTML={{
                __html: propertyData.description,
              }}
            />
          </DescriptionContainer>
        </DescriptionWrapper>
        <LocationMap district={propertyData.zone} />
        <ContactUsCard refer={propertyData.reference} id={propertyData.id} />
      </PageContainer>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetail;
