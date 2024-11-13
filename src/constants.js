import image1 from "./Images/interior2.jpeg";
import image2 from "./Images/luxury.jpeg";
import image3 from "./Images/mykonosvilla.webp";
import parisImage from "./Images/Paris Vente.jpeg";
import BeirutImage from "./Images/Beirut .jpeg";
import GreeceImage from "./Images/greece.jpeg";



export const categoryArray = ["Residential", "Commercial", "Land"];
export const ForWhat = ["For Sale", "For Rent"];
export const kind = ["Apartment", "Villa", "Chalet", "Town house", "Building", "Bungalow", "Hotel", "Pent house", "Semi-detached villa", "Studio", "Terraced"].reverse();
export const typeArray = ["Simplex", "Duplex", "Multiplex"].reverse();
export const styleArray = ["Typical",
    "Modern",
    "Standard",
    "Old",
    "Bourgeois",
    "1960's",
    "Années 50",
    "Années 60-70",
    "Années 80-90",
    "1980's",
    "Contemporary",
    "Liberty",
    "Traditional",
    "New",
    "Period",
    "1900's",
    "Post 1970 s",
    "Post War",
    "Pre War",
    "Victorian"
    ,].reverse();

export const furnishedArray = ["Yes", "No"];
export const floor = [-5,-4,-3,-2,-1,0,1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20].reverse();
export const bedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
export const livingrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
export const bathroomArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
export const parkings = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();


export const AboutUsDataArray = [
    {
      heading: 'Explore our beautiful homes',
      paragraphOne: "MetreKarre Koncept is a leading real estate agency specializing in luxury apartment rentals and sales. We offer comprehensive marketing strategies for sellers and efficient property searches for buyers, both locally and globally. Our effective promotion methods and industry alliances ensure successful real estate transactions.",
      image: image1,
    },
    {
      heading: 'Global approach',
      paragraphOne: 'MetreKarre Koncept is your trusted partner in the world of luxury real estate. With a global approach, we bring you exquisite properties from Lebanon, France, Greece, and around the world. Our expert brokerage services ensure that you find the perfect home, no matter where your dreams take you.',
      image: image2,
    },
    {
      heading: 'Mission & Vision',
      paragraphOne: "At MetreKarre Koncept, our mission is to redefine the real estate experience. We are committed to providing exceptional service, unmatched expertise, and a personalized approach to every client. Our vision is to be your go-to real estate agency, whether you're buying, selling, or investing in Lebanon, France, Greece, or anywhere globally.",
      image: image3,
    },
  ];


  export const discoverImages = [BeirutImage, parisImage, GreeceImage];
  export  const discoverTitles = ["LEBANON", "FRANCE", "GREECE"];