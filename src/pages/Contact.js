import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

      {/* Custom styles */}
      <style>{`
        body {
          background: linear-gradient(to bottom right, #005c97, #28a745);
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .main-heading {
          font-size: 2.8rem;
          font-weight: bold;
          color: #ffffff;
          transition: all 0.4s ease;
        }

        .main-heading:hover {
          color: #f8f9fa;
          transform: scale(1.05);
          letter-spacing: 1px;
        }

        .subheading {
          color: #e2e2e2;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .subheading:hover {
          color: #d4edda;
          transform: scale(1.03);
        }

        .info-card {
          border-radius: 20px;
          background-color: #f8f9fa;
          padding: 30px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }

        .inner-box {
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
        }

        .contact-label {
          font-weight: 600;
          font-size: 1.1rem;
          color: #343a40;
        }

        .icon {
          color: #007bff;
          margin-right: 8px;
        }

        .contact-link {
          color: #007bff;
          text-decoration: none;
          display: inline-block;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .text-muted {
          color: #6c757d !important;
        }
      `}</style>

      <Container className="my-5 text-center" data-aos="fade-up">
        <h1 className="main-heading mb-2">Get In Touch</h1>
        <p className="subheading mb-4">
          We are here to assist you. Feel free to reach out anytime!
        </p>

        <Card className="info-card mx-auto" style={{ maxWidth: '700px' }}>
          <h4 className="text-primary mb-2">Contact Information</h4>
          <p className="mb-3 text-dark">We are available 7 days a week!</p>

          <div className="inner-box">
            <div className="mb-3">
              <span className="contact-label">
                <FaMapMarkerAlt className="icon" /> Address
              </span>
              <p className="text-muted mt-1 mb-3">
                84/3, NEAR KANKESHWARI INFOTECH GATE, NANDA NAGAR, INDORE,<br />
                Indore, Madhya Pradesh, 452019.
              </p>
            </div>

            <div className="mb-3">
              <span className="contact-label">
                <FaEnvelope className="icon" /> Mail ID
              </span>
              <p className="mt-1 mb-3">
                <a href="mailto:servicesgeocon@gmail.com" className="contact-link">
                  servicesgeocon@gmail.com
                </a>
              </p>
            </div>

            <div>
              <span className="contact-label">
                <FaPhoneAlt className="icon" /> Phone
              </span>
              <p className="mt-1 mb-0">
                <a href="tel:+919827788586" className="contact-link d-block">
                  +91 9827788586
                </a>
                <a href="tel:+919039363465" className="contact-link d-block">
                  +91 9039363465
                </a>
              </p>
            </div>
          </div>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
