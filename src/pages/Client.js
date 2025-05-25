import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopBar from "../components/TopBar";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import client1 from "../assets/ABL.png";
import client2 from "../assets/Arihant.jpg";
import client3 from "../assets/Dabur.jpg";
import client4 from "../assets/Hindustan.png";
import client5 from "../assets/IMA-PG.jpg";
import client6 from "../assets/MEIL.jpg";
import client7 from "../assets/NNI.jpg";
import client8 from "../assets/Parle-G.png";
import client9 from "../assets/PGP.jpg";
import client10 from "../assets/PMKSY.jpg";
import client11 from "../assets/SUF.jpg";
import client12 from "../assets/ultra-tech-cement.png";

const Clients = () => {
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

      <style>{`
       
        .client-heading {
          color: #ffffff;
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
        }
        .client-logo:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="container py-5">
        <h2 className="client-heading" data-aos="fade-down">Our Clients</h2>
        <div
          className="d-flex flex-wrap justify-content-center align-items-center"
          data-aos="fade-up"
        >
          {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="client-logo"
              style={logoStyle}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Clients;