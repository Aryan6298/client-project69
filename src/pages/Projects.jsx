import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

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

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
                <img src={item.image} alt={item.title} className="card-img-top" style={{ height: "220px", objectFit: "cover" }} />
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
