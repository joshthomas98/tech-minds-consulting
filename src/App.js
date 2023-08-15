import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SocialMediaIcons from "./components/SocialMediaIcons";
import Homepage from "./pages/Homepage";
import WebDevelopment from "./pages/WebDevelopment";
import TechConsultancy from "./pages/TechConsultancy";
import VirtualCTO from "./pages/VirtualCTO";
import ContactForm from "./pages/ContactForm";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="web-development" element={<WebDevelopment />} />

          <Route path="tech-consultancy" element={<TechConsultancy />} />

          <Route path="virtual-cto" element={<VirtualCTO />} />

          <Route path="contactform" element={<ContactForm />} />

          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
