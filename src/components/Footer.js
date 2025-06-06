import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import indiamartLogo from "../assets/indiamart-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: " #1C1F2A" }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

          {/* About Section */}
          <div className="col" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              About Us
            </h5>
            <p style={{ color: "white" }}>
              Geocon Services have skilled and talented professionals that include Engineers, Environmental Scientists, Geologists, Hydrogeologists, GIS analysts, Groundwater Experts, and Technicians.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Contact Us
            </h5>
            <p>
              <a href="tel:9669954433" className="footer-link">
                <FaPhone className="me-2" /> +91 96699-54433
              </a>
            </p>
            <p>
              <a href="tel:7693039555" className="footer-link">
                <FaPhone className="me-2" /> +91 76930-39555
              </a>
            </p>
            <p> <a href="tel:075557963840" className="footer-link">
              Landline: 075-557963840
            </a></p>
            <p>
              <a href="mailto:servicesgeocon@gmail.com" className="footer-link">
                <FaEnvelope className="me-2" /> servicesgeocon@gmail.com
              </a>
            </p>
          </div>

          {/* Social + Map Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Connect with Us
            </h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://www.instagram.com/geoconservices/" target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px', fontSize: '20px' }}>
                <FaInstagram />
              </a>

              <a href="https://youtube.com/@geoconservices3352?si=Ym13xzyEmM0xrUEc" target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px', fontSize: '20px' }}>
                <FaYoutube />
              </a>

              <a href="https://www.indiamart.com/geoconservices/" target="_blank" rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px' }}>
                <img src={indiamartLogo} alt="IndiaMART" style={{ width: "26px", height: "26px" }} />
              </a>
            </div>

            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7334.709203119248!2d77.44349640698731!3d23.193744315866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c438941ae25cb%3A0x7a27309f61f3b592!2sGeocon%20Services!5e0!3m2!1sen!2sin!4v1745213063170!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Address Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Our Address
            </h5>
            <p style={{ color: "white" }}>
              <FaMapMarkerAlt className="me-2" />
              84/3, NEAR KANKESHWARI INFOTECH GATE, NANDA NAGAR, <br />
              INDORE, Indore, Madhya Pradesh, 452019.
            </p>
            <p style={{ color: "white" }}>
              <FaMapMarkerAlt className="me-2" />
              Branch address: B61, <br />
              vidhyanagar Narmadapuram road Bhopal 462026
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-1" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Geocon Services. All rights reserved.
          </p>
         
          <Link to="/termsofservices" className="text-white">Terms of Service</Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .footer-heading {
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          }

          .footer-heading:hover {
            transform: translateY(-5px);
            color: #f8f9fa;
          }

          .footer-link {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #00d4ff;
            text-decoration: underline;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
