import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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

import portfolio1 from "../assets/services/port-img01.jpg";
import portfolio2 from "../assets/services/port-img02.jpg";
import portfolio3 from "../assets/services/port-img03.jpg";
import portfolio4 from "../assets/services/port-img04.jpg";
import portfolio5 from "../assets/services/port-img05.jpg";
import portfolio6 from "../assets/services/port-img06.jpeg";
import portfolio7 from "../assets/services/port-img07.jpg";
import portfolio8 from "../assets/services/port-img08.jpg";
import portfolio9 from "../assets/services/port-img09.jpg";
import portfolio10 from "../assets/services/port-img10.jpg";
import portfolio11 from "../assets/services/port-img11.jpg";
import portfolio12 from "../assets/services/port-img12.jpg";
import portfolio13 from "../assets/services/port-img13.jpg";
import portfolio14 from "../assets/services/port-img14.jpg";
import portfolio15 from "../assets/services/port-img15.jpg";
import portfolio16 from "../assets/services/port-img16.jpg";
import portfolio17 from "../assets/services/port-img17.jpg";
import portfolio18 from "../assets/services/port-img18.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoDismissed, setVideoDismissed] = useState(false);

  const handleShowClients = () => {
    setShowAllClients(true);
    setTimeout(() => setShowAllClients(false), 4000);
  };

  const handleShowPortfolio = () => {
    setShowAllPortfolio(true);
    setTimeout(() => setShowAllPortfolio(false), 4000);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoDismissed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !showVideo && !videoDismissed) {
        setShowVideo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo, videoDismissed]);

  const clientsProjects = [
    "Hydrogeological Investigation and Impact Assessment",
    "Rainwater Harvesting and Ground Water Recharging (Study, Installation, and Pits Construction)",
    "Environmental and Water Impact Assessment and Audit",
    "Aquifer and Well Hydraulic Testing and Geophysical Survey for Water Resource Assessment (Including Electromagnetic and Groundwater Surveys)",
    "Ground Survey",
    "Recharge Structure Design and Construction (Including Recharge Shaft)",
    "Groundwater NOC Compliance and Consultancy",
    "Water Body Regeneration (Ponds and Bawadi Repairing and Cleaning)",
    "DWLR, Flow Meter Supply, Installation, and Remote Display, and Water Level Recording",
    "Borewell Site Selection",
    "Drilling, Borehole Logging, and Litholog Preparation",
    "GIS & GPS Survey",
    "Water Quality Analysis",
    "Mining Plans",
    "Percolation and Soil Infiltration Testing",
    "ERT Earth Resistance Testing Service",
    "Stainless Steel Wire Screen Tubewell Filter Service",
    "Soil Resistivity Testing Service"
  ];

 const portfolioItems = [
  { image: portfolio1, title: "Resistivity Survey" },
  { image: portfolio2, title: "Electromagnetic Survey for Ground Water" },
  { image: portfolio3, title: "Lithological 3D Modeling" },
  { image: portfolio4, title: "Hydrogeological Study" },
  { image: portfolio5, title: "ETP and STO Works" },
  { image: portfolio6, title: "Resistivity Survey" },
  { image: portfolio7, title: "Geoelectrical Resistivity Cross Section" },
  { image: portfolio8, title: "Geophysical Investigation Service" },
  { image: portfolio9, title: "Groundwater Survey Services" },
  { image: portfolio10, title: "Ground Water Recharging Construction Service" },
  { image: portfolio11, title: "Survey Through Drone" },
  { image: portfolio12, title: "Borewell Construction Service" },
  { image: portfolio13, title: "Roof Water Rain Water Harvesting" },
  { image: portfolio14, title: "Aquifer Recharge Structure" },
  { image: portfolio15, title: "Survey Through Drone" },
  { image: portfolio16, title: "Groundwater Level Monitoring Surveys" },
  { image: portfolio17, title: "Geophysical Survey at JNRI" },
  { image: portfolio18, title: "Groundwater Monitoring Survey" }
];


  const logoStyle = {
    height: "110px",
    margin: "0 30px",
    objectFit: "contain",
    borderRadius: "15px",
    transition: "transform 0.5s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const portfolioItemStyle = {
    width: "280px",
    margin: "0 20px",
    textAlign: "center",
    transition: "transform 0.4s ease"
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease"
  };

  const portfolioRows = [
    portfolioItems.slice(0, Math.ceil(portfolioItems.length / 2)),
    portfolioItems.slice(Math.ceil(portfolioItems.length / 2))
  ];

  return (
    <div className="container my-5">
      <style>{`
        .client-heading {
          font-size: 2.6rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
          transition: all 0.4s ease;
        }
        .client-heading:hover {
          color: #ffeb3b;
          font-size: 2.8rem;
        }
        .portfolio-caption {
          margin-top: 10px;
          font-weight: 600;
          color: #d4edda;
          transition: color 0.3s ease;
        }
        .portfolio-image:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 35px rgba(0,0,0,0.4);
        }
        .marquee-logo:hover {
          transform: scale(1.12);
          filter: brightness(1.1);
        }
        .table thead th,
        .table tbody td {
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: black !important;
        }
        .floating-video {
          position: fixed;
          bottom: 80px;
          right: 20px;
          z-index: 9999;
          width: 320px;
          height: 180px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          border-radius: 10px;
          overflow: hidden;
          animation: fadeIn 0.5s ease-in-out;
          background: black;
        }
        .close-btn {
          position: absolute;
          top: 5px;
          right: 10px;
          font-size: 22px;
          color: white;
          cursor: pointer;
          z-index: 10;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Clients Section */}
      <div className="my-5 py-5 px-3 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", cursor: 'pointer' }} data-aos="zoom-in" onClick={handleShowClients}>
        <h3 className="client-heading">Our Clients (Click to Expand)</h3>
        {showAllClients ? (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={logoStyle} />
            ))}
          </div>
        ) : (
          <Marquee gradient={false} speed={50}>
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={logoStyle} />
            ))}
          </Marquee>
        )}
      </div>

      {/* Services Table */}
      <div className="table-responsive mb-5" data-aos="fade-up">
        <h3 className="client-heading">Our Services</h3>
        <table className="table table-bordered table-hover shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', borderColor: 'black' }}>
          <tbody>
            {Array.from({ length: Math.ceil(clientsProjects.length / 3) }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[0, 1, 2].map(colIndex => {
                  const totalRows = Math.ceil(clientsProjects.length / 3);
                  const index = colIndex * totalRows + rowIndex;
                  return (
                    <td key={colIndex}>
                      {clientsProjects[index] ? (
                        <>
                          <strong>{index + 1}.</strong> {clientsProjects[index]}
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Portfolio Section */}
      <div className="mb-5" data-aos="fade-up" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", cursor: 'pointer' }} onClick={handleShowPortfolio}>
        <h3 className="client-heading">Project Portfolio (Click to Expand)</h3>
        {showAllPortfolio ? (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {portfolioItems.map((item, index) => (
              <div key={index} style={portfolioItemStyle}>
                <Link to={`/portfolio/${index + 1}`}>
                  <img src={item.image} alt={`Portfolio ${index + 1}`} className="portfolio-image" style={imageStyle} />
                </Link>
                <div className="portfolio-caption">{index + 1}. {item.title}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {portfolioRows.map((row, rowIndex) => (
              <Marquee key={rowIndex} gradient={false} speed={40} direction={rowIndex % 2 === 0 ? "right" : "left"}>
                {row.map((item, index) => (
                  <div key={index} style={portfolioItemStyle}>
                    <Link to={`/portfolio/${index + 1 + rowIndex * Math.ceil(portfolioItems.length / 2)}`}>
                      <img src={item.image} alt={`Portfolio ${index + 1}`} className="portfolio-image" style={imageStyle} />
                    </Link>
                    <div className="portfolio-caption">{index + 1 + rowIndex * Math.ceil(portfolioItems.length / 2)}. {item.title}</div>
                  </div>
                ))}
              </Marquee>
            ))}
          </>
        )}
      </div>

      {/* Floating YouTube Video */}
      {showVideo && (
        <div className="floating-video">
          <div className="close-btn" onClick={handleCloseVideo}>×</div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DU8DqB1_rRw?autoplay=1&mute=0"
            title="YouTube video"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default Services;
