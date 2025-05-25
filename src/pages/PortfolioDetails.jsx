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
      "We offer precise resistivity surveys for mapping subsurface formations. This technique is especially effective for groundwater exploration, geotechnical investigations, and contamination mapping.",
  },
  {
    title: "Electromagnetic Surveys",
    image: portfolio2,
    description:
      "Our electromagnetic surveys use cutting-edge instruments to detect subsurface conductivity variations, supporting fast and efficient groundwater and mineral exploration.",
  },
  {
    title: "Geophysical Investigations",
    image: portfolio3,
    description:
      "We conduct integrated geophysical investigations using seismic, resistivity, and electromagnetic methods for detailed understanding of subsurface conditions.",
  },
  {
    title: "Hydrogeological Studies",
    image: portfolio4,
    description:
      "We perform hydrogeological studies to assess aquifer behavior, groundwater flow, recharge potential, and water quality for sustainable water resource management.",
  },
  {
    title: "3D Lithological Modeling",
    image: portfolio5,
    description:
      "Our 3D lithological models provide a clear visual of subsurface geology using GIS and borehole data, supporting drilling and construction decisions.",
  },
  {
    title: "Groundwater Surveys",
    image: portfolio6,
    description:
      "We identify potential zones for groundwater extraction through geophysical methods, ensuring optimal borewell placement and water yield.",
  },
  {
    title: "Aquifer Recharge Services",
    image: portfolio7,
    description:
      "We offer design and implementation of aquifer recharge structures including trenches and wells to promote groundwater sustainability.",
  },
  {
    title: "Rainwater Harvesting",
    image: portfolio8,
    description:
      "Our rainwater harvesting solutions include rooftop collection, filtration, and recharge systems designed for both residential and commercial use.",
  },
  {
    title: "ETP/STP Consulting & Works",
    image: portfolio9,
    description:
      "We consult and construct Effluent and Sewage Treatment Plants with custom designs for industrial and municipal applications, ensuring compliance and efficiency.",
  },
  {
    title: "Drone-Based Surveys",
    image: portfolio10,
    description:
      "Our drone-based surveys deliver high-resolution imagery for topographic mapping, environmental studies, and infrastructure monitoring using photogrammetry and LiDAR.",
  },
  {
    title: "Borewell Services",
    image: portfolio11,
    description:
      "We provide complete borewell solutions including drilling, casing, development, and maintenance for domestic and industrial applications.",
  },
  {
    title: "Construction & Monitoring Services",
    image: portfolio12,
    description:
      "We manage construction and performance monitoring of groundwater structures, ensuring longevity, safety, and regulatory compliance.",
  },
  {
    title: "Remote Sensing & GIS Mapping",
    image: portfolio13,
    description:
      "We utilize satellite imagery and GIS tools for land use classification, resource mapping, and environmental impact assessments.",
  },
  {
    title: "Slope Stability Analysis",
    image: portfolio14,
    description:
      "Our slope stability analysis uses geotechnical and geophysical data to assess landslide risk and ensure safe construction practices in hilly terrains.",
  },
  {
    title: "Water Quality Analysis",
    image: portfolio15,
    description:
      "We conduct comprehensive water quality testing to assess physical, chemical, and biological parameters for drinking, irrigation, and industrial use.",
  },
  {
    title: "Pipeline Detection & Mapping",
    image: portfolio16,
    description:
      "We detect and map underground pipelines using GPR and EM methods, supporting urban planning and infrastructure safety.",
  },
  {
    title: "Soil Resistivity Testing",
    image: portfolio17,
    description:
      "Our soil resistivity tests are used for earthing design, corrosion risk evaluation, and understanding soil behavior for construction planning.",
  },
  {
    title: "Mine Planning & Exploration",
    image: portfolio18,
    description:
      "We assist in mine planning through geophysical surveys and geological mapping, helping clients identify mineral zones and ensure safe extraction.",
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
