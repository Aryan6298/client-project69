import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
import TopBar from "../components/TopBar";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
const portfolioData = [
  {
    title: "Resistivity Surveys",
    image: portfolio1,
    description:
      "Our resistivity surveys accurately map subsurface formations to identify groundwater potential, detect fractures, and support geotechnical site assessments.",
  },
  {
    title: "Electromagnetic Surveys",
    image: portfolio2,
    description:
      "We perform electromagnetic surveys to evaluate subsurface conductivity, enabling rapid assessment of aquifers, salinity zones, and buried features.",
  },
  {
    title: "Geophysical Investigations",
    image: portfolio3,
    description:
      "Comprehensive geophysical investigations combining multiple techniques for detailed analysis of subsurface geology, groundwater, and mineral potential.",
  },
  {
    title: "Hydrogeological Studies",
    image: portfolio4,
    description:
      "Detailed hydrogeological studies to assess groundwater availability, recharge zones, aquifer behavior, and sustainable water resource management.",
  },
  {
    title: "ETP and STO Works",
    image: portfolio5,
    description:
      "Design and implementation of Effluent Treatment Plants (ETP) and Sewage Treatment Outlets (STO) with a focus on regulatory compliance and efficiency.",
  },
  {
    title: "Resistivity Survey",
    image: portfolio6,
    description:
      "Precision resistivity surveys conducted for groundwater prospecting, soil characterization, and environmental site evaluations.",
  },
  {
    title: "Geological 2d Cross Section",
    image: portfolio7,
    description:
      "Creation of 2D geological cross sections based on geophysical and borehole data to visualize subsurface layering and guide construction planning.",
  },
  {
    title: "Geophysical Investigation Service",
    image: portfolio8,
    description:
      "Expert geophysical services tailored to explore groundwater, detect subsurface structures, and support infrastructure development.",
  },
  {
    title: "Groundwater Survey Service",
    image: portfolio9,
    description:
      "Systematic surveys conducted to locate optimal sites for groundwater extraction using advanced geophysical methods and hydrological analysis.",
  },
  {
    title: "Recharge Structure Construction",
    image: portfolio10,
    description:
      "Design and construction of effective groundwater recharge structures like recharge shafts, trenches, and percolation tanks to improve aquifer recharge.",
  },
  {
    title: "Ground Water Detection Services",
    image: portfolio11,
    description:
      "Reliable groundwater detection using geophysical techniques to ensure efficient borewell placement and sustainable resource extraction.",
  },
  {
    title: "Borewell Construction Service",
    image: portfolio12,
    description:
      "Turnkey borewell construction services including site selection, drilling, casing, and testing for domestic, agricultural, and industrial needs.",
  },
  {
    title: "Roof Water Rain Water Harvesting",
    image: portfolio13,
    description:
      "Customized rooftop rainwater harvesting systems designed to capture, filter, and recharge rainwater, promoting sustainable water use.",
  },
  {
    title: "Aquifer Recharge Structure",
    image: portfolio14,
    description:
      "Planning and development of aquifer recharge structures to enhance groundwater levels and ensure long-term water sustainability.",
  },
  {
    title: "Survey through Drone",
    image: portfolio15,
    description:
      "High-resolution drone surveys for topographical mapping, site monitoring, volumetric analysis, and environmental assessments.",
  },
  {
    title: "Groundwater Level Monitoring Surveys",
    image: portfolio16,
    description:
      "Continuous groundwater level monitoring using digital and manual methods to assess seasonal trends and evaluate recharge effectiveness.",
  },
  {
    title: "RWH by Latest Technology",
    image: portfolio17,
    description:
      "Advanced rainwater harvesting systems incorporating modern filtration, automation, and smart recharge technologies for maximum efficiency.",
  },
  {
    title: "Construction of Recharge Shaft",
    image: portfolio18,
    description:
      "Expert construction of deep recharge shafts for efficient and direct infiltration of surface water into groundwater aquifers.",
  },
];

// Utility function to create valid IDs from titles (replace spaces & special chars with dashes)
const createIdFromTitle = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const PortfolioDetails = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

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
    <div className="container py-5 text-light mt-5">
      <h1 className="text-center text-info mb-5">Our Services</h1>
      <div className="row">
        {portfolioData.map((item, index) => {
          const id = createIdFromTitle(item.title);
          return (
            <div className="col-md-6 col-lg-4 mb-4" key={index} id={id}>
              <div className="card h-100 bg-secondary text-light border-0 shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-info">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PortfolioDetails;
