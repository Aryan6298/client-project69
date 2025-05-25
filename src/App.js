import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import ScrollToTop from "./pages/ScrollToTop";
import NotFound from "./pages/NotFound";
import FloatingWhatsAppButton from "./pages/FloatingWhatsappLogo";
import Clients from "./pages/Client";
import Projects from "./pages/Projects";
import TermsOfService from "./pages/TermsOfServices";
import Instruments from "./pages/Instruments";
import PortfolioDetails from "./pages/PortfolioDetails"; // ✅ NEW IMPORT

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <FloatingWhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/termsofservices" element={<TermsOfService />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/portfolio/:id?" element={<PortfolioDetails />} /> {/* ✅ New Portfolio Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
