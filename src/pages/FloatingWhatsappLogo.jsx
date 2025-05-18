import React from 'react';

const FloatingWhatsAppButton = () => {
  return (
    <>
      <a
        href="https://wa.me/917693039555"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: '60px', height: '60px' }}
        />
      </a>

      <style>
        {`
          .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
          }

          .whatsapp-float:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default FloatingWhatsAppButton;
