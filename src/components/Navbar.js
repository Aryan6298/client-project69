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
          color: #0D5D5B  !important;
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

        .dropdown-container {
          position: relative;
        }

        .dropdown-container:hover .dropdown-menu-custom {
          display: grid;
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .dropdown-menu-custom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 400px;
          background: #f9f9f9;
          color: #000;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          z-index: 999;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease-in-out;
          pointer-events: none;
          white-space: nowrap;
        }

        .dropdown-item-custom {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          transition: background 0.3s;
        }

        .dropdown-item-custom:hover {
          background-color: #e0f7fa;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: #0e3d59;
            overflow-x: auto;
            white-space: nowrap;
            padding: 0.5rem 1rem;
          }

         .nav-shifted-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
}


          .nav-shifted-container .nav-link {
            opacity: 1 !important;
            transform: none !important;
            transition: none;
            margin: 0;
            font-size: 1rem;
            padding: 0.5rem 0.75rem;
            white-space: nowrap;
          }

          .dropdown-menu-custom {
            min-width: 300px;
            position: absolute;
          }
        }
      `}</style>

      <Navbar
        expand="lg"
        className={`navbar-custom py-2 ${scrolled ? 'navbar-fixed' : ''}`}
      >
        <Container fluid className="d-flex justify-content-between align-items-center position-relative">
          <Link to="/" style={{ textDecoration: 'none' }} className={`brand-box ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="Logo" height="50" className="me-2" style={{marginTop: '5px'}} />
            <span className="fw-bold fs-3" style={{ marginTop: '-5px',marginLeft:'5px'}}>
  GEOCON SERVICES
</span>


          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={scrolled ? 'nav-shifted-container' : 'nav-initial-container'}>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>

              <div className="nav-item dropdown-container">
                <NavLink
                  to="/services"
                  className={`nav-link ${location.pathname.startsWith('/services') ? 'active-link' : ''}`}
                >
                  Services ⯆

                </NavLink>
                <div className="dropdown-menu-custom">
                  {Array.from({ length: 12 }, (_, i) => (
                    <NavLink key={i} to={`/services/service${i + 1}`} className="dropdown-item-custom">
                      Service {i + 1}
                    </NavLink>
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
    </>
  );
};

export default NavigationBar;
