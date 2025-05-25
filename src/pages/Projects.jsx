import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

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

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  return (
    <>
      <div style={{ position: "relative", zIndex: 1030 }}>
        <TopBar />
      </div>

      <div style={{ position: "relative", zIndex: 1040 }}>
        <NavigationBar />
      </div>

      <div className="container py-5 mt-5">
        <h2 className="text-center text-white mb-5" data-aos="fade-down">Project Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
