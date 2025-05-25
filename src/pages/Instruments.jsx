import React, { useEffect } from 'react';
import { Container, Table, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ambientImg from '../assets/instruments/Ambient.jpg';
import automaticWeatherImg from '../assets/instruments/automatic-weather-monitoring-system.png';
import BEN from '../assets/instruments/BENZENE-SAMPLER.jpg';
import CEMS from '../assets/instruments/CEMS.avif';
import COMBO from '../assets/instruments/COMBO-SAMPLER.jpg';
import DISSOLVED from '../assets/instruments/dissolved-oxygen-meter.jpg';
import FLOW from '../assets/instruments/Flow-Meter.jpg';
import FLU from '../assets/instruments/FLUEGAS-ANALYSER.jpg';
import GROUND from '../assets/instruments/ground-water-level-recorder.jpg';
import LUTRON from '../assets/instruments/LUTRON-NOISE-DOSI-METER.jpg';
import MANUAL from '../assets/instruments/manual-water-analyzer.jpg';
import ONLINE from '../assets/instruments/online-water-analyser.png';
import PIEZOMETER from '../assets/instruments/PIEZOMETER.jpg';
import REPIRABLE from '../assets/instruments/RESPIRABLE-DUST-SAMPLER.jpg';
import ULTRASONIC from '../assets/instruments/ultrasonic-flow-meter.png';
import ultrasonic from '../assets/instruments/ultrasonic-weather-station.jpg';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';

const surveyMachines = [
  {
    name: 'Ambient Air Quality Monitoring System',
    image: ambientImg,
    price: '₹1,50,000',
    description: 'Measures pollutants like PM10, PM2.5, NOx, and SO2 in the ambient air to assess environmental quality.',
    length: '120 cm',
  },
  {
    name: 'Automatic Weather Station',
    image: automaticWeatherImg,
    price: '₹90,000',
    description: 'Monitors weather parameters including temperature, humidity, wind speed, and rainfall automatically.',
    length: '100 cm',
  },
  {
    name: 'Piezometer',
    image: PIEZOMETER,
    price: '₹40,000',
    description: 'Measures pore water pressure in soil and rock, widely used in geotechnical investigations.',
    length: '50 cm',
  },
  {
    name: 'Benzene Sampler',
    image: BEN,
    price: '₹70,000',
    description: 'Used to monitor and analyze airborne benzene concentrations for industrial and environmental applications.',
    length: '75 cm',
  },
  {
    name: 'Continuous Emission Monitoring System',
    image: CEMS,
    price: '₹3,20,000',
    description: 'Continuously measures stack emissions such as CO2, NOx, and SOx from industrial exhaust.',
    length: '150 cm',
  },
  {
    name: 'Combination Sampler',
    image: COMBO,
    price: '₹85,000',
    description: 'Multi-pollutant sampler that can simultaneously monitor several air contaminants for research or compliance.',
    length: '95 cm',
  },
  {
    name: 'Dissolved Oxygen Meter',
    image: DISSOLVED,
    price: '₹22,000',
    description: 'Portable meter for measuring dissolved oxygen levels in water samples, critical for aquatic life studies.',
    length: '30 cm',
  },
  {
    name: 'Electromagnetic Flow Meter',
    image: FLOW,
    price: '₹1,10,000',
    description: 'Non-intrusive flow measurement device, commonly the FE-01 model used in industrial pipelines.',
    length: '60 cm',
  },
  {
    name: 'Flue Gas Analyser',
    image: FLU,
    price: '₹1,80,000',
    description: 'Analyzes combustion gases from boilers and engines for parameters like CO, CO2, and O2.',
    length: '65 cm',
  },
  {
    name: 'Groundwater Level Recorder',
    image: GROUND,
    price: '₹50,000',
    description: 'Monitors fluctuations in groundwater levels over time for hydrogeological studies.',
    length: '90 cm',
  },
  {
    name: 'Lutron Noise Dosimeter',
    image: LUTRON,
    price: '₹35,000',
    description: 'Measures occupational and environmental noise exposure over time to assess noise hazards.',
    length: '20 cm',
  },
  {
    name: 'Manual Water Analyser',
    image: MANUAL,
    price: '₹15,000',
    description: 'Basic water quality testing kit used for manual measurement of pH, turbidity, and conductivity.',
    length: '25 cm',
  },
  {
    name: 'Online Water Analyser',
    image: ONLINE,
    price: '₹95,000',
    description: 'Continuously monitors multiple water quality parameters remotely in real-time.',
    length: '55 cm',
  },
  {
    name: 'Respirable Dust Sampler',
    image: REPIRABLE,
    price: '₹60,000',
    description: 'Used to sample PM10 and PM2.5 particles in ambient air for regulatory or health studies.',
    length: '85 cm',
  },
  {
    name: 'Ultrasonic Flow Meter',
    image: ULTRASONIC,
    price: '₹1,25,000',
    description: 'Uses ultrasound to measure flow velocity in liquids, ideal for closed pipes.',
    length: '65 cm',
  },
  {
    name: 'Ultrasonic Weather Station',
    image: ultrasonic,
    price: '₹1,40,000',
    description: 'Modern weather monitoring station using ultrasonic sensors for wind and temperature data.',
    length: '105 cm',
  },
];

const SurveyMachines = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ position: "relative", zIndex: 1030 }}>
        <TopBar />
      </div>

      <div style={{ position: "relative", zIndex: 1040 }}>
        <NavigationBar />
      </div>

      <div className="mt-5 text-white py-5">
        <style>{`
          .hover-scale {
            transition: transform 0.4s ease;
          }
          .hover-scale:hover {
            transform: scale(1.1);
          }
          .table th, .table td {
            vertical-align: middle;
          }
          .light-grey-table {
            background-color: #f8f9fa !important;
          }
        `}</style>

        <Container>
          <h2 className="mb-5 text-center fw-bold" data-aos="fade-down">
            Survey Machines Overview
          </h2>
          <Table bordered hover responsive className="table rounded shadow-lg light-grey-table">
            <thead>
              <tr className="text-center">
                <th data-aos="fade-up">Image</th>
                <th data-aos="fade-up" data-aos-delay="100">Machine Name</th>
                <th data-aos="fade-up" data-aos-delay="200">Pricing</th>
                <th data-aos="fade-up" data-aos-delay="300">Description</th>
                <th data-aos="fade-up" data-aos-delay="400">Length</th>
              </tr>
            </thead>
            <tbody>
              {surveyMachines.map((machine, index) => (
                <tr key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <td className="text-center">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      thumbnail
                      className="hover-scale"
                      style={{ width: '100px', borderRadius: '8px' }}
                    />
                  </td>
                  <td>{machine.name}</td>
                  <td>{machine.price}</td>
                  <td>{machine.description}</td>
                  <td>{machine.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SurveyMachines;
