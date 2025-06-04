import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Collapse,
} from 'react-bootstrap';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/final-main-logo.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
          background: #1C1F2A;
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
          margin-left: 1rem;
          position: relative;
          opacity: 1;
          transition: transform 1.5s ease, opacity 1.5s ease;
          text-decoration: none !important;
          white-space: nowrap;
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
          color: white !important;
        }

        .nav-initial-container {
          position: absolute;
          left: 0;
          display: flex;
          gap: 1rem;
        }

        .nav-shifted-container {
          position: static;
          margin-left: auto;
          display: flex;
          gap: 1rem;
        }

        .nav-shifted-container .nav-link {
          opacity: 0;
          transform: translateX(-20px);
        }

        .nav-shifted-container .nav-link:nth-child(1) { opacity: 1; transform: translateX(0); transition-delay: 0.4s; }
        .nav-shifted-container .nav-link:nth-child(2) { opacity: 1; transform: translateX(0); transition-delay: 0.8s; }
        .nav-shifted-container .nav-link:nth-child(3) { opacity: 1; transform: translateX(0); transition-delay: 1.2s; }
        .nav-shifted-container .nav-link:nth-child(4) { opacity: 1; transform: translateX(0); transition-delay: 1.6s; }
        .nav-shifted-container .nav-link:nth-child(5) { opacity: 1; transform: translateX(0); transition-delay: 2s; }
        .nav-shifted-container .nav-link:nth-child(6) { opacity: 1; transform: translateX(0); transition-delay: 2.4s; }
        .nav-shifted-container .nav-link:nth-child(7) { opacity: 1; transform: translateX(0); transition-delay: 2.8s; }

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

        .dropdown-item-custom {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          transition: background 0.3s;
          display: block;
        }

        .dropdown-item-custom:hover {
          background-color: #e0f7fa;
        }

        .services-dropdown-menu {
          position: absolute;
          background: white;
          top: 100%;
          left: 0;
          z-index: 1050;
          min-width: 250px;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
          display: none;
        }

        .services-hover:hover .services-dropdown-menu {
          display: block;
        }

        @media (max-width: 991px) {
          .services-dropdown-menu {
            display: none !important;
          }
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>

      <Navbar expand="lg" className={`navbar-custom py-2 ${scrolled ? 'navbar-fixed' : ''}`}>
        <Container fluid className="d-flex justify-content-between align-items-center position-relative">
          <Link to="/" style={{ textDecoration: 'none' }} className={`brand-box ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="Logo" height="50" className="me-2" />
            <span className="fw-bold fs-3 ms-2">GEOCON SERVICES</span>
          </Link>

          <Navbar.Toggle
            aria-controls="offcanvas-navbar"
            className="ms-auto"
            onClick={() => setShowOffcanvas(true)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={scrolled ? 'nav-shifted-container' : 'nav-initial-container'}>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>

              <div
                className="nav-item services-hover position-relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <NavLink
                  to="/services"
                  className={`nav-link ${location.pathname.startsWith('/services') ? 'active-link' : ''}`}
                >
                  Services ⯆
                </NavLink>
                <div className="services-dropdown-menu">
                  {[
                    'Resistivity-Surveys',
                    'Electromagnetic-Surveys',
                    'Geophysical-Investigations',
                    'Hydrogeological-Studies',
                    '3D-Lithological-Modeling',
                    'Groundwater-Surveys',
                    'Aquifer-Recharge-Services',
                    'Rainwater-Harvesting',
                    'ETP-STP-Consulting-&-Works',
                    'Drone-Based-Surveys',
                    'Borewell-Services',
                    'Construction-&-Monitoring-Services',
                  ].map((item, index) => (
                    <HashLink
                      key={index}
                      smooth
                      to={`/portfolio#${item}`}
                      className="dropdown-item-custom"
                    >
                      {item.replace(/-/g, ' ')}
                    </HashLink>
                  ))}
                </div>
              </div>

              <NavLink to="/instruments" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Instruments</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>About Us</NavLink>
              <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Projects</NavLink>
              <NavLink to="/client" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Clients</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        style={{ width: '60%', background: '#0e3d59', color: 'white' }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className="nav-link" onClick={() => setShowOffcanvas(false)}>Home</NavLink>
            <Button
              variant="link"
              className="nav-link text-start"
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Services {servicesOpen ? '⯅' : '⯆'}
            </Button>
            <Collapse in={servicesOpen}>
              <div className="ps-3">
                {[ 
                  'Resistivity-Surveys',
                  'Electromagnetic-Surveys',
                  'Geophysical-Investigations',
                  'Hydrogeological-Studies',
                  '3D-Lithological-Modeling',
                  'Groundwater-Surveys',
                  'Aquifer-Recharge-Services',
                  'Rainwater-Harvesting',
                  'ETP-STP-Consulting-&-Works',
                  'Drone-Based-Surveys',
                  'Borewell-Services',
                  'Construction-&-Monitoring-Services',
                ].map((item, index) => (
                  <HashLink
                    key={index}
                    smooth
                    to={`/portfolio#${item}`}
                    className="dropdown-item-custom"
                    onClick={() => {
                      setShowOffcanvas(false);
                      setServicesOpen(false);
                    }}
                  >
                    {item.replace(/-/g, ' ')}
                  </HashLink>
                ))}
              </div>
            </Collapse>
            <NavLink to="/instruments" className="nav-link" onClick={() => setShowOffcanvas(false)}>Instruments</NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setShowOffcanvas(false)}>About Us</NavLink>
            <NavLink to="/project" className="nav-link" onClick={() => setShowOffcanvas(false)}>Projects</NavLink>
            <NavLink to="/client" className="nav-link" onClick={() => setShowOffcanvas(false)}>Clients</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setShowOffcanvas(false)}>Contact</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
