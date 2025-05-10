import React from "react";
import { useState, useEffect } from 'react';
import './SlideHome.css';

const carouselItems = [
  {
    src: '/Slide1.JPG',
    alt: 'Primera imagen',
    title: 'Un Nuevo Rostro',
    description: 'Somos conocidos por años y cada vez más queridos.',
  },
  {
    src: '/Slide2.JPG',
    alt: 'Segunda imagen',
    title: 'Operativilidad Continua',
    description: 'El largo camino en nuestro trabajo es reflejado en la confianza generada.',
  },
  {
    src: '/Home6.JPG',
    alt: 'Tercera imagen',
    title: 'Supervición Rigurosa',
    description: 'Cuidamos de nuestro trabajo como de nuestros operadores.',
  },
];

export default function SlideHome() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="slide-container">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`slide-item ${index === activeIndex ? 'active' : ''}`}
        >
          <img className="slide-image" src={item.src} alt={item.alt} />
          <div className="slide-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

      <button className="nav-button left" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="nav-button right" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}
