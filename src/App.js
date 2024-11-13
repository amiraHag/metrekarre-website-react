import "./App.css";
import React from 'react';
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Page2 from "./Pages/ProductDetail";
import SearchPage from "./Pages/SearchPage";
import UploadPropertyPage from "./Pages/UploadPropertyPage";
import TermsAndConditions from "./Pages/TermsAndConditions";
import DiscoverPagenavbar from "./Pages/DiscoverPagenavbar";
import AboutUsNavbar from "./Pages/AboutUsNavbar";
import ContactUsPage from "./Pages/ContactUsPage";
import UploadPropertyPage2 from "./Pages/UploadPropertyPage2";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ProductDetail/:id"  element={<Page2 />} />
      <Route path="/Locations"  element={<DiscoverPagenavbar />} />
      <Route path="/SearchPage/:type/:country/:region/:district/:ref/:priceId/:price/:category/:key?" element={<SearchPage />} />
      <Route path="/Upload/" element={<UploadPropertyPage />} />
      <Route path="/Upload" element={<UploadPropertyPage />} />
      <Route path="/Upload2/" element={<UploadPropertyPage2 />} />
      <Route path="/Upload2" element={<UploadPropertyPage2 />} />
      <Route path="/TermsConditions" element={<TermsAndConditions />} />
      <Route path="/AboutUs" element={<AboutUsNavbar />} />
      <Route path="/Contactus" element={<ContactUsPage />} />

    </Routes>

    </>
  );
}

export default App;
