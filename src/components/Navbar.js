import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation, Link } from 'react-router-dom';
import logo from '../assets/final-main-logo.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar-custom {
          background: #0e3d59;
          transition: all 0.5s ease;
          z-index: 1040;
          position: absolute;
          top: -8px;
          width: 100%;
        }

        .navbar-fixed {
          position: fixed;
          top: 0;
          width: 100%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .nav-link {
          color: white !important;
          margin: 0 1rem;
          position: relative;
          opacity: 1;
          text-decoration: none !important;
          white-space: nowrap;
          transition: transform 1s ease, opacity 1s ease;
        }

        .active-link {
          font-weight: bold;
          color: #26c4bf !important;
        }

        .brand-box {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.8s ease;
        }

        .brand-box.scrolled {
          opacity: 1;
          transform: translateX(0);
        }

        .brand-box span {
          color: #26c4bf !important;
        }

        .nav-shifted-container .nav-link {
          opacity: 0;
          transform: translateX(-20px);
        }

        .nav-shifted-container .nav-link:nth-child(1) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.3s;
        }
        .nav-shifted-container .nav-link:nth-child(2) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.6s;
        }
        .nav-shifted-container .nav-link:nth-child(3) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.9s;
        }
        .nav-shifted-container .nav-link:nth-child(4) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 1.2s;
        }
        .nav-shifted-container .nav-link:nth-child(5),
        .nav-shifted-container .nav-link:nth-child(6),
        .nav-shifted-container .nav-link:nth-child(7) {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 1.5s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: #ffffff;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .active-link::after {
          width: 100%;
          background: #26c4bf;
        }

        /* Responsive Fix */
        @media (max-width: 991px) {
          .navbar-collapse {
            overflow-x: auto;
            max-width: 100%;
          }

          .navbar-collapse .nav {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .nav-link {
            margin: 0 0.5rem;
            font-size: 14px;
            flex-shrink: 0;
          }

          /* Hide scroll bar for better look */
          .navbar-collapse .nav::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>

      <Navbar
        expand="lg"
        className={`navbar-custom py-2 ${scrolled ? 'navbar-fixed' : ''}`}
      >
        <Container fluid className="d-flex justify-content-between align-items-center position-relative">
          <Link to="/" style={{ textDecoration: 'none' }} className={`brand-box ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="Logo" height="50" className="me-2" />
            <span className="fw-bold fs-5" style={{ marginTop: '-5px' }}>
              GEOCON SERVICES
            </span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`nav-shifted-container`}>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>
              <NavLink to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active-link' : ''}`}>Services</NavLink>
              <NavLink to="/instruments" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Instruments</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>About Us</NavLink>
              <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Projects</NavLink>
              <NavLink to="/client" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Clients</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
