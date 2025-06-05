import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/final-main-logo.png';

const TopBar = () => {
  return (
    <div className="py-2 border-bottom" style={{ background: '#FDF9F3' }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: '60px', marginTop: '5px' }} />
              <div className="ms-2" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="fw-bold fs-3" style={{ color: '#0D5D5B' }}>
                  GEOCON SERVICES
                </span>
                <span
                  style={{
                    color: 'blue',
                    fontSize: '0.9rem',
                    marginTop: '-5px',
                    fontStyle: 'italic',
                    marginLeft: '60px'
                  }}
                >
                  We Are Environment Friendly...
                </span>
              </div>
            </Link>
          </Col>
          <Col md={6} style={{ color: 'black' }}>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-end gap-2">
              <span>
                <a href="tel:9669954433" className="topbar-link">
                  <FaPhoneAlt className="me-1" />+91 96699-54433
                </a>
                ,{' '}
                <a href="tel:7693039555" className="topbar-link">
                  +91 76930-39555
                </a>
              </span>
              <span className="mx-2">|</span>
              <a
                href="mailto:servicesgeocon@gmail.com"
                className="topbar-link d-inline-flex align-items-center"
              >
                <FaEnvelope className="me-1" />
                <span>servicesgeocon@gmail.com</span>
              </a>
            </div>
            <div className="text-center text-md-end">
              <a href="tel:075557963840" className="topbar-link" style={{marginRight:'330px'}}>
                Landline: 075-557963840
              </a>
            </div>
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
