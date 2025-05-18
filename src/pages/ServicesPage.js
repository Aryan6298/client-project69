import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import client logos
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

// Portfolio images
import portfolio1 from "../assets/gallery05.jpg";
import portfolio2 from "../assets/gallery06.jpg";
import portfolio3 from "../assets/gallery07.jpg";
import portfolio4 from "../assets/gallery08.jpg";
import portfolio5 from "../assets/gallery09.jpg";
import portfolio6 from "../assets/gallery10.jpg";
import portfolio7 from "../assets/gallery04.jpg";
import portfolio8 from "../assets/gallery03.jpg";
import portfolio9 from "../assets/gallery02.jpg";
import portfolio10 from "../assets/gallery01.jpg";
import portfolio11 from "../assets/about-image.jpg";
import portfolio12 from "../assets/image03.jpg";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);

  const handleShowClients = () => {
    setShowAllClients(true);
    setTimeout(() => setShowAllClients(false), 4000);
  };

  const handleShowPortfolio = () => {
    setShowAllPortfolio(true);
    setTimeout(() => setShowAllPortfolio(false), 4000);
  };

  const clientsProjects = [
    { name: "M/s PGP Glass Private Limited", project: "Hydrogeological Investigation, Water Assessment, Impact Assessment Study" },
    { name: "M/s Ultratech Cement Unit Dhar", project: "Rain Water Harvesting, Piezometer, Recharge Calculation and Study" },
    { name: "M/s Agro Solvent Product Pvt. Ltd", project: "Impact Assessment Study and Water Audit" },
    { name: "M/s Sun Nutra Foods", project: "Impact Assessment Study and Hydrogeological Investigation for Water Awards" },
    { name: "M/s Hindustan Unilever Limited", project: "Geophysical Investigation, Aquifer Geometry, Aquifer Performance Test, Soil Testing and Percolation Test" },
    { name: "Oil (Confederation of Indian Industries)", project: "Geophysical Survey at Jawaharlal Nehru Research Institute" },
    { name: "Megha Engineering & Infrastructures Limited", project: "Geophysical and Recharge Structure in Jihadibaroda Village" },
    { name: "Dabur India Limited", project: "CGWA NOC" },
    { name: "IMA-PG India Pvt. Ltd.", project: "Rain Water Harvesting" },
    { name: "Meil", project: "Geophysical Survey" },
    { name: "Indore Municipal Corporation", project: "Geophysical Survey" }
  ];

  const portfolioItems = [
    { image: portfolio1, title: "Rainwater Harvesting System" },
    { image: portfolio2, title: "Geophysical Survey at JNRI" },
    { image: portfolio3, title: "Aquifer Recharge Structure" },
    { image: portfolio4, title: "Aquifer Recharge Structure" },
    { image: portfolio5, title: "Aquifer Recharge Structure" },
    { image: portfolio6, title: "Aquifer Recharge Structure" },
    { image: portfolio7, title: "Aquifer Recharge Structure" },
    { image: portfolio8, title: "Aquifer Recharge Structure" },
    { image: portfolio9, title: "Aquifer Recharge Structure" },
    { image: portfolio10, title: "Aquifer Recharge Structure" },
    { image: portfolio11, title: "Aquifer Recharge Structure" },
    { image: portfolio12, title: "Aquifer Recharge Structure" },
  ];

  const logoStyle = {
    height: "120px",
    margin: "0 40px",
    objectFit: "contain",
    borderRadius: "10px",
    transition: "transform 0.4s ease",
  };

  const portfolioItemStyle = {
    width: "300px",
    margin: "0 30px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  };

  return (
    <>
  {/* TopBar - appears above Navbar */}
      <div style={{ position: 'relative', zIndex: 1030 }}>
        <TopBar />
      </div>

      {/* NavigationBar with higher z-index */}
      <div style={{ position: 'relative', zIndex: 1040 }}>
        <NavigationBar />
      </div>

    <div className="container my-5">
      <style>{`

        body {
          background: linear-gradient(to bottom right, #005c97, #28a745);
          color: #ffffff;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2a44;
          text-align: center;
          margin-bottom: 3rem;
        }
        .portfolio-caption {
          margin-top: 10px;
          font-weight: 600;
          color: #1f2a44;
          transition: color 0.3s ease;
        }
        .portfolio-image:hover {
          transform: scale(1.07);
          box-shadow: 0 10px 35px rgba(0,0,0,0.3);
        }
        .portfolio-image {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .marquee-logo:hover {
          transform: scale(1.1);
        }
        .client-heading {
          color: #1f2a44;
          transition: color 0.3s, font-size 0.3s;
        }
        .client-heading:hover {
          color: yellow;
          font-size: 30px;
        }
        .bg-transparent {
          background-color: transparent !important;
        }
        .table thead th,
        .table tbody td {
          background-color: transparent !important;
        }
      `}</style>

      {/* Clients */}
      <div
        className="my-5 py-5 px-3 rounded"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", cursor: 'pointer' }}
        data-aos="zoom-in"
        onClick={handleShowClients}
      >
        <h3 className="text-center mb-4 fw-semibold client-heading">
          Our Clients (Click to Expand)
        </h3>
        {showAllClients ? (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={logoStyle} />
            ))}
          </div>
        ) : (
          <Marquee gradient={false} speed={50} pauseOnHover={false}>
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={logoStyle} />
            ))}
          </Marquee>
        )}
      </div>

      {/* Services Table */}
      <div className="table-responsive mb-5" data-aos="fade-up">
        <h3 className="text-center mb-3 client-heading" style={{ fontWeight: "600" }}>
          Our Services
        </h3>
        <table className="table table-bordered table-hover shadow-sm bg-transparent text-white">
          <thead className="bg-transparent text-light border-bottom">
            <tr>
              <th>#</th>
              <th>Our Services</th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {clientsProjects.map((entry, index) => (
              <tr key={index} className="bg-transparent">
                <td>{index + 1}</td>
                <td>{entry.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Portfolio */}
      <div
        className="mb-5"
        data-aos="fade-up"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", cursor: 'pointer' }}
        onClick={handleShowPortfolio}
      >
        <h3 className="text-center mb-4 client-heading" style={{ fontWeight: "600" }}>
          Project Portfolio (Click to Expand)
        </h3>
        {showAllPortfolio ? (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {portfolioItems.map((item, index) => (
              <div key={index} style={portfolioItemStyle}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  style={imageStyle}
                />
                <div className="portfolio-caption">{item.title}</div>
              </div>
            ))}
          </div>
        ) : (
          <Marquee gradient={false} speed={40} pauseOnHover={false} direction="right">
            {portfolioItems.map((item, index) => (
              <div key={index} style={portfolioItemStyle}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  style={imageStyle}
                />
                <div className="portfolio-caption">{item.title}</div>
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
