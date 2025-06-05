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
    "Geophysical Resistivity Survey",
    "Hydrogeological Study ,Intervention & Management Plan per GroundWater",
    "Rainwater Harvesting and Ground Water Recharging ",
    "Impact Assessment Study and Water Audit",
    "Aquifer Mapping & Management Plan ; APT,SDT,Slug Test ",
    "Ground Survey ,Borewell site selection",
    "Recharge Structure Design and Construction",
    "Consultancy Groundwater NOC & Compliance From CGWA",
    "Water Body Rejuvenation (Ponds and Bawadi Repairing and Cleaning)",
    "Piezometer(DWLR) & Flow Meter Supply and Installation ",
    "Drilling, Borehole Logging, and Litholog Preparation",
    "GIS Analysis, GPS & Satellite Survey",
    "Water Quality Monitoring & Analysis",
    "Mining Plans & Survey",
    "Percolation and Soil Infiltration Testing",
    "ERT Earth Resistance Testing Services",
    "Soil Testing Service",
    "Environmental Services (Pollution Monitoring systems)",
    "Consultancy Service For CTE, CTO and Hazardous Waste Management",
    "Flood Study & Mitigation Plant",
    "Consultancy For STP ,ETP & RO Plant",
  ];

  const portfolioItems = [
    { image: portfolio1, title: "Resistivity Survey" },
    { image: portfolio2, title: "Electromagnetic Survey for Ground Water" },
    { image: portfolio3, title: "Lithological 3D Modeling" },
    { image: portfolio4, title: "Hydrogeological Study" },
    { image: portfolio5, title: "ETP and STO Works" },
    { image: portfolio6, title: "Resistivity Survey" },
    { image: portfolio7, title: "Geological 2d Cross Sections" },
    { image: portfolio8, title: "Geophysical Investigation Service" },
    { image: portfolio9, title: "Groundwater Survey Services" },
    { image: portfolio10, title: "Recharge Structure Construction" },
    { image: portfolio11, title: "Ground Water Detection Services" },
    { image: portfolio12, title: "Borewell Construction Service" },
    { image: portfolio13, title: "Roof Water Rain Water Harvesting" },
    { image: portfolio14, title: "Aquifer Recharge Structure" },
    { image: portfolio15, title: "Survey Through Drone" },
    { image: portfolio16, title: "Groundwater Level Monitoring Surveys" },
    { image: portfolio17, title: "RWH by Latest Technology" },
    { image: portfolio18, title: "Construction of Recharge Shafts " }
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
        .services-table {
          background-color: rgba(255, 255, 255, 0.55) !important;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        .services-table td,
        .services-table th {
          background-color: transparent !important;
          font-weight: 700;
          color: black;
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
        .review-card {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.3s ease;
        }
        .review-card:hover {
          background: rgba(255,255,255,0.2);
        }
        .view-more-btn {
          display: block;
          margin: 2rem auto 0;
          padding: 10px 25px;
          background-color: #0D5D5B;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          width: max-content;
          transition: background-color 0.3s ease;
        }
        .view-more-btn:hover {
          background-color: #0b4a49;
          text-decoration: none;
          color: white;
        }
      `}</style>

      {/* Experience Section */}
      <div className="text-center my-5 py-4 px-3 rounded" style={{ background: 'linear-gradient(to right, rgba(13,93,91,0.6), rgba(30,120,119,0.6))', color: 'white' }} data-aos="fade-down">
        <h2 style={{ fontSize: '3rem', fontWeight: '800', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>
          15+ Years of Excellence in Geoscience & Environmental Solutions
        </h2>
        <p className="mt-3 fs-5" style={{ maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
          With over fifteen years of specialized experience, we have successfully completed a wide range of projects across hydrogeology, geophysics, groundwater management, and environmental compliance.
          Our expert team integrates the latest technology with proven methodologies to deliver reliable, sustainable solutions tailored to your unique needs.
        </p>
      </div>

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
        <table className="table table-bordered table-hover shadow-sm services-table">
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
     {/* Reviews Section */}
<div className="my-5 py-5 px-3 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} data-aos="fade-up">
  <h3 className="client-heading">What Our Clients Say</h3>
  <div className="row">
    {/* Left: Review Cards */}
    <div className="col-md-8">
      <div className="row">
        {[{
          initials: "RS",
          name: "Mr. Rakesh Sharma",
          position: "Project Manager, Hindustan Ltd.",
          review: "GEOCON’s geophysical surveys were instrumental in helping us make informed decisions. Their attention to detail and data accuracy exceeded our expectations.",
          rating: 4.9
        }, {
          initials: "SV",
          name: "Dr. Seema Verma",
          position: "Hydrologist, Government of India",
          review: "Their hydrogeological analysis was comprehensive and well-documented. I highly recommend their services to government and private sector projects alike.",
          rating: 4.8
        }, {
          initials: "RB",
          name: "Rajeev Bansal",
          position: "Sr. Engineer, UltraTech Cement",
          review: "Their team handled our groundwater compliance project with great professionalism. The reporting and execution were timely and efficient.",
          rating: 4.9
        },
       {
    initials: "NS",
    name: "Nikita Sinha",
    position: "Environmental Consultant, EcoStrat Pvt. Ltd.",
    review: "Working with GEOCON was smooth and efficient. Their rainwater harvesting expertise helped our client achieve sustainability compliance effortlessly.",
    rating: 4.7
  }
      ].map((review, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="review-card d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-light text-dark fw-bold me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                  {review.initials}
                </div>
                <div>
                  <div className="fw-bold">{review.name}</div>
                  <div className="text-light small">{review.position}</div>
                </div>
              </div>
              <p className="fs-6" style={{ fontStyle: "italic" }}>"{review.review}"</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="text-warning">
                  {"★★★★★"}
                </div>
                <div className="text-light small">
                  {review.rating}/5
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Satisfaction Summary */}
    <div className="col-md-4 d-flex align-items-center">
      <div className="p-4 review-card w-100">
        <h5 className="text-white fw-bold mb-3">Client Experience & Satisfaction</h5>
        <p className="mb-2">✔ 15+ Years of Experience in Geoscience</p>
        <p className="mb-2">✔ 500+ Projects Delivered</p>
        <p className="mb-2">✔ 98% Client Satisfaction Rate</p>
        <p className="mb-2">✔ Trusted by Government & Private Sector</p>
        <p className="mb-2">✔ Accurate Reporting & Timely Delivery</p>
        <div className="mt-4 text-center">
          <a
            href="https://www.google.com/maps/place/Your+Business+Google+Page+Link+Here/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            View More Reviews
          </a>
        </div>
      </div>
    </div>
  </div>
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
