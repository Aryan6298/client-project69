import TopBar from "../components/TopBar";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import Services from "../components/services";
import EventBanner from "../components/EventBanner";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

      {/* Main Page Content */}
      <ImageCarousel />
      
      <Services />
      <Footer />
    </>
  );
};

export default Home;
