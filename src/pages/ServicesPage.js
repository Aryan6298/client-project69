import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import portfolio14 from"../assets/gallery03.jpg";
import portfolio15 from "../assets/services/port-img15.jpg";
import portfolio16 from "../assets/services/port-img16.jpg";
import portfolio17 from "../assets/services/port-img17.jpg";
import portfolio18 from "../assets/services/port-img18.jpg";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";
import TopBar from "../components/TopBar";


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

  const servicesData = [
    ["1", "Hydrogeological Investigation, Impact Assessment, and Groundwater NOC Compliance for Industry, Infrastructure, and Mining Projects", "Groundwater Management", "Studies underground water systems, assesses impacts, and ensures compliance with CGWA regulations for NOC.", "Industry, Infrastructure, Mining"],
    ["2", "Rainwater Harvesting and Ground Water Recharging (Study, Installation, Pits Construction, and Roof Top Harvesting)", "Water Conservation", "Designs and implements systems to collect and recharge rainwater into the ground, including pits and roof top setups.", "Residential, Commercial, Agriculture"],
    ["3", "Environmental and Water Impact Assessment and Audit", "Environmental Assessment", "Evaluates the environmental and water-related impacts of projects and audits compliance.", "Industry, Infrastructure, Mining"],
    ["4", "Aquifer and Well Hydraulic Testing and Geophysical Survey for Water Resource Assessment (Including Electromagnetic and Groundwater Surveys)", "Groundwater Management", "Tests aquifer performance, conducts geophysical surveys, and assesses water resources using various methods.", "Industry, Agriculture, Research"],
    ["5", "Soil Resistivity Testing Service", "Soil and Water Testing", "Measures soil resistivity to assess subsurface conditions for grounding or water-related projects.", "Infrastructure, Research"],
    ["6", "Recharge Structure Design and Construction (Including Recharge Shaft)", "Water Conservation", "Designs and builds structures like recharge shafts to enhance groundwater replenishment.", "Residential, Commercial, Agriculture"],
    ["7", "Water Body Regeneration, Rejuvenation, and Beautification (Ponds and Bawadi Repairing and Cleaning)", "Environmental Restoration", "Restores and beautifies water bodies like ponds and bawadis through repair and cleaning.", "Community, Environmental Projects"],
    ["8", "DWLR, Flow Meter Supply, Installation, and Remote Display, and Water Level Recording", "Water Monitoring", "Supplies and installs devices to monitor groundwater levels and flow, including remote display systems.", "Industry, Agriculture, Research"],
     ["9", "Borewell Site Selection", "Groundwater Management", "Identifies optimal locations for borewells based on groundwater availability.", "Agriculture, Residential, Industry"],
      ["10", "Drilling, Borehole Logging, Litholog Preparation, and Geotechnical Investigation", "Groundwater Management", "Drills boreholes, logs data, prepares lithologs, and investigates soil properties for water projects.", "Industry, Infrastructure, Agriculture"],
    ["11", "GIS, GPS Survey, Sedimentation Studies through Remote Sensing, and Satellite Data Interpretation", "Survey and Mapping", "Uses GIS, GPS, remote sensing, and satellite data to study sedimentation and map water resources.", "Research, Environmental Projects"],
    ["12", "Water Quality Analysis", "Water Monitoring", "Tests water samples to assess quality and ensure safety for use.", "Industry, Agriculture, Residential"],
    ["13", "Mining Plans", "Mining Support", "Develops plans for mining operations, often including water management strategies.", "Mining"],
    ["14", "Percolation and Soil Infiltration Testing", "Soil and Water Testing", "Measures how water infiltrates soil to assess suitability for recharge or drainage.", "Agriculture, Environmental Projects"],
    ["15", "ERT Earth Resistance Testing Service", "Soil and Water Testing", "Uses electrical resistivity to study subsurface conditions for water projects.", "Research, Infrastructure"],
    ["16", "Stainless Steel Wire Screen Tubewell Filter Service", "Groundwater Management", "Provides and installs stainless steel filters for tubewells to ensure clean water extraction.", "Agriculture, Industry"],
    ["17", "Water Resources Management and Conservation", "Water Conservation", "Oversees the sustainable management and conservation of water resources.", "General, Policy Planning"],
    ["18", "Watershed Management", "Water Conservation", "Manages watersheds to ensure sustainable water supply and prevent erosion.", "Agriculture, Environmental Projects"],
    ["19", "Wastewater Treatment and Reuse (Non-Conventional Technology)", "Wastewater Management", "Treats and reuses wastewater using non-conventional methods for sustainability.", "Industry, Residential, Agriculture"]
  

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
     <>
      {/* TopBar */}
      <div style={{ position: 'relative', zIndex: 1030 }}>
        <TopBar />
      </div>

      {/* NavigationBar */}
      <div style={{ position: 'relative', zIndex: 1040, paddingBottom: '30px' }}>
        <NavigationBar />
      </div>
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
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={{ height: "110px", margin: "0 30px", objectFit: "contain", borderRadius: "15px", transition: "transform 0.5s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }} />
            ))}
          </div>
        ) : (
          <Marquee gradient={false} speed={50}>
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img key={i} src={logo} alt={`Client ${i + 1}`} className="marquee-logo" style={{ height: "110px", margin: "0 30px", objectFit: "contain", borderRadius: "15px", transition: "transform 0.5s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }} />
            ))}
          </Marquee>
        )}
      </div>

      {/* Replaced Services Table */}
      <div className="table-responsive mb-5" data-aos="">
        <h3 className="client-heading">Our Services</h3>
        <table className="table table-bordered table-hover shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: 'black' }}>
          <thead className="thead-dark">
            <tr>
              <th>S. No.</th>
              <th>Service Description</th>
              <th>Category</th>
              <th>Purpose</th>
              <th>Sector</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index}>
                {service.map((field, i) => (
                  <td key={i}>{field}</td>
                ))}
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

         {showVideo && (
        <div className="floating-video">
          <div className="close-btn" onClick={handleCloseVideo}>×</div>
          <iframe
            src="https://www.youtube.com/embed/DU8DqB1_rRw?autoplay=1&mute=0"
            title="YouTube video"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Services;
