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


// Create 12 slides using 4 base images
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
        }

        .image-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
          border-right: 1px solid #fff;
        }

        .image-wrapper:last-child {
          border-right: none;
        }

        .image-wrapper img {
          width: 100%;
          height: 90vh;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .image-caption {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 1s ease;
          white-space: nowrap;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 30px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @media (max-width: 768px) {
          .image-wrapper {
            flex: 1 0 100%;
            border-right: none;
          }
          .image-group {
            flex-direction: column;
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
