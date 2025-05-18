import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopBar from "../components/TopBar";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";


const Instruments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const logoStyle = {
    height: "120px",
    margin: "20px",
    objectFit: "contain",
    borderRadius: "10px",
    transition: "transform 0.4s ease",
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: 1030 }}>
        <TopBar />
      </div>

      <div style={{ position: "relative", zIndex: 1040 }}>
        <NavigationBar />
      </div>

      
      <Footer />
    </div>
  );
};

export default Instruments;