import React from 'react';
import { Carousel } from 'react-bootstrap';
import img01 from '../assets/image01.png';
import img02 from '../assets/about-image.jpg';
import img03 from '../assets/image03.jpg';
import img04 from '../assets/image04.jpeg';
import img05 from '../assets/gallery08.jpg';
import img06 from '../assets/gallery10.jpg';
import img07 from '../assets/image07.jpg';
import img08 from '../assets/image08.jpg';
import img09 from '../assets/image09.jpg';
import img10 from '../assets/image10.jpg';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image04.jpeg';

const baseImages = [
  { src: img01, heading: 'Save Water, Save Earth' },
  { src: img02, heading: 'Go Green, Live Clean' },
  { src: img03, heading: 'Protect Our Planet' },
  { src: img04, heading: 'Every Drop Matters' },
  { src: img05, heading: 'Think Green' },
  { src: img06, heading: 'Reduce, Reuse, Recycle' },
  { src: img07, heading: 'Be the Change' },
  { src: img08, heading: 'Love the Earth' },
  { src: img09, heading: 'Green Is the New Black' },
  { src: img10, heading: 'Act for Nature' },
  { src: img11, heading: 'Small Acts, Big Impact' },
  { src: img12, heading: 'Clean Water, Bright Future' },
];

// Create 12 slides using base images
const allSlides = Array.from({ length: 12 }, (_, i) => ({
  ...baseImages[i % baseImages.length],
  key: i,
}));

// Group into chunks of 3
const groupedSlides = [];
for (let i = 0; i < allSlides.length; i += 3) {
  groupedSlides.push(allSlides.slice(i, i + 3));
}

const ImageCarousel = () => {
  return (
    <>
      <style>{`
        .carousel-item {
          padding: 0;
        }

        .image-group {
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
          border-right: 1px solid #fff;
          max-width: 33.33%;
        }

        .image-wrapper:last-child {
          border-right: none;
        }

        .image-wrapper img {
          width: 100%;
          height: 90vh; /* Desktop height */
          object-fit: cover;
          filter: brightness(0.7);
          transition: height 0.3s ease;
          display: block;
        }

        .image-caption {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-weight: 600;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 1s ease;
          white-space: nowrap;
          text-align: center;
          width: 90%;
          font-size: 1.5rem; /* base desktop size */
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 30px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        /* Medium screens */
        @media (max-width: 1024px) {
          .image-wrapper img {
            height: 60vh;
          }
          .image-caption {
            font-size: 1.3rem;
          }
        }

        /* Smaller tablets and large phones */
        @media (max-width: 768px) {
          .image-wrapper img {
            height: 50vh;
          }
          .image-caption {
            font-size: 1.1rem;
            white-space: normal;
            padding: 0 5px;
          }
        }

        /* Small phones and very narrow screens */
        @media (max-width: 80px) {
          .image-group {
            flex-direction: column;
          }
          .image-wrapper {
            max-width: 100%;
            border-right: none;
            margin-bottom: 10px;
          }
          .image-wrapper img {
            height: 40vh;
          }
          .image-caption {
            font-size: 0.9rem;
            white-space: normal;
            padding: 0 10px;
          }
        }
      `}</style>

      <Carousel interval={4000} fade pause={false}>
        {groupedSlides.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="image-group">
              {group.map((slide) => (
                <div className="image-wrapper" key={slide.key}>
                  <img src={slide.src} alt={slide.heading} />
                  <div className="image-caption">{slide.heading}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
