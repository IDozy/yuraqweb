import React from "react";
import { useState, useEffect } from 'react';
import './SlideHome.css';

const carouselItems = [
  {
    src: '/slide_home1.webp',
    alt: 'Primera imagen',
    title: 'Nuestra Esencia, Grabada en la Solidez',
    description: 'Somos conocidos por años y cada vez más queridos, brindando lo que la comunidad merece en soluciones de cal.',
  },
  {
    src: '/slide_home2.webp',
    alt: 'Segunda imagen',
    title: 'Operatividad Continua',
    description: 'El largo camino en nuestro trabajo es reflejado en la confianza generada por los años que venimos trabajando.',
  },
  {
    src: '/slide_home3.webp',
    alt: 'Tercera imagen',
    title: 'Supervisión Rigurosa',
    description: 'Cuidamos de nuestro trabajo como de nuestros operadores, nuestra salud es la prioridad.',
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
