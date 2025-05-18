import React from 'react';
import { Carousel } from 'react-bootstrap';
import img01 from '../assets/image01.png';
import img02 from '../assets/about-image.jpg';
import img03 from '../assets/image03.jpg';
import img04 from '../assets/image04.jpg';

const ImageCarousel = () => {
  const slides = [
    {
      src: img01,
      heading: 'Saving Water, Saving Life',
      animation: 'fadeSlide',
    },
    {
      src: img02,
      heading: 'Eco-Friendly Solutions',
      animation: 'zoomIn',
    },
    {
      src: img03,
      heading: 'Nature Needs Your Help',
      animation: 'slideRight',
    },
    {
      src: img04,
      heading: 'Every Drop Counts',
      animation: 'rotateIn',
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes rotateIn {
            0% { opacity: 0; transform: rotate(-10deg) scale(0.9); }
            100% { opacity: 1; transform: rotate(0deg) scale(1); }
          }

          .carousel-caption {
            bottom: 20%;
          }

          .carousel-item img {
            height: 90vh;
            object-fit: cover;
            filter: brightness(0.6);
          }

          .animated-heading {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ffffff;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
          }

          .fadeSlide { animation: fadeSlide 1.5s ease-out; }
          .zoomIn { animation: zoomIn 1.5s ease-out; }
          .slideRight { animation: slideRight 1.5s ease-out; }
          .rotateIn { animation: rotateIn 1.5s ease-out; }
        `}
      </style>

      <Carousel fade interval={4000} pause={false} ride="carousel">

        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h2 className={`animated-heading ${slide.animation}`}>
                {slide.heading}
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
