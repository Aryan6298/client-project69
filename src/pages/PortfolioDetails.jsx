import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

const portfolioItems = [
  { image: portfolio1, title: "Rainwater Harvesting System", description: "A system for collecting and storing rainwater for reuse." },
  { image: portfolio2, title: "Geophysical Survey at JNRI", description: "Subsurface investigation using geophysical tools at JNRI." },
  { image: portfolio3, title: "Aquifer Recharge Structure", description: "Designed to enhance groundwater recharge in water-scarce areas." },
  { image: portfolio4, title: "Aquifer Structure Design", description: "A scientifically crafted aquifer model to support water recharge." },
  { image: portfolio5, title: "Ground Recharge Model", description: "Model designed to simulate recharge effectiveness." },
  { image: portfolio6, title: "Sustainable Water Management", description: "Eco-friendly strategies for managing groundwater resources." },
  { image: portfolio7, title: "Urban Water Planning", description: "Survey and analysis for urban aquifer systems." },
  { image: portfolio8, title: "Percolation Testing", description: "Testing to evaluate soil suitability for recharge." },
  { image: portfolio9, title: "RWH Tanks", description: "Storage structures for rainwater harvesting." },
  { image: portfolio10, title: "Catchment Design", description: "Design for maximizing water capture efficiency." },
  { image: portfolio11, title: "Aquifer Monitoring", description: "Tools and data for real-time aquifer health monitoring." },
  { image: portfolio12, title: "Advanced Hydrological Study", description: "Comprehensive study using AI and sensors." },
];

const PortfolioDetails = () => {
  const { id } = useParams(); // get the dynamic ID from URL
  const refs = useRef([]); // array of refs for each item

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Scroll to the correct image when component mounts
    const scrollToImage = () => {
      const index = parseInt(id, 10) - 1;
      if (!isNaN(index) && refs.current[index]) {
        setTimeout(() => {
          refs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // slight delay for AOS animation to settle
      }
    };

    scrollToImage();
  }, [id]);

  return (
    <div className="container py-5">
      <style>{`
        body {
          background: linear-gradient(to bottom right, #005c97, #28a745);
          color: #ffffff;
        }
        .portfolio-title {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          color: #ffffff;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
          margin-bottom: 3rem;
        }
        .project-card {
          margin-bottom: 60px;
        }
        .pop-hover {
          transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
          filter: brightness(0.92) contrast(0.95);
        }
        .pop-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          z-index: 2;
          filter: brightness(1) contrast(1);
        }
        .project-heading {
          font-weight: 600;
          font-size: 1.75rem;
          margin-top: 1rem;
          color: #ffffff;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }
        .project-heading:hover {
          color: #ffc107;
          transform: scale(1.03);
        }
        .project-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #e0e0e0;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>

      <h2 className="portfolio-title">Project Portfolio</h2>

      {portfolioItems.map((item, index) => (
        <div
          className="row align-items-center project-card"
          data-aos="fade-up"
          key={index}
          ref={(el) => (refs.current[index] = el)}
        >
          <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
            <img src={item.image} alt={item.title} className="img-fluid rounded shadow pop-hover" />
          </div>
          <div className={`col-md-6 mt-4 mt-md-0 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
            <h3 className="project-heading">{item.title}</h3>
            <p className="project-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDetails;
