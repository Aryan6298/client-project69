import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // for routing to homepage
import logo from '../../src/assets/final-main-logo.png';

const TopBar = () => {
  return (
    <div className=" py-2 border-bottom" style={{background:'white'}}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: '60px', marginTop: '5px' }} />
              <div className="ms-2" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="fw-bold fs-3" style={{ color: '#0D5D5B' }}>
                  GEOCON SERVICES
                </span>
                <span style={{ color: '#1f604b', fontSize: '0.9rem', marginTop: '-5px' }}>
                  We Are Environment Friendly...
                </span>
              </div>
            </Link>
          </Col>
          <Col md={6} style={{ color: 'black' }}>
            <a href="tel:7693039555" className="topbar-link">
              <FaPhoneAlt className="me-2" /> 76930-39555
            </a>
            ,{' '}
            <a href="tel:9669954433" className="topbar-link">
              96699-54433
            </a>
            <span className="mx-3">|</span>
            <a href="mailto:servicesgeocon@gmail.com" className="topbar-link">
              <FaEnvelope className="me-2" /> servicesgeocon@gmail.com
            </a>
          </Col>
        </Row>
      </Container>

      {/* Hover Styles */}
      <style>
        {`
          .topbar-link {
            color: black;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .topbar-link:hover {
            color: green;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default TopBar;
