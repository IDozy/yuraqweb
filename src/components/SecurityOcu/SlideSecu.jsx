import React, { useState, useEffect } from "react";
import "./SlideSecu.css";

const slides = [
  {
    title: "Comprometidos con la Seguridad",
    description: "Promovemos prácticas de seguridad continuas para proteger la salud de todos los que trabajan en nuestro entorno local.",
    image: "/seguridad1.webp", 
  },
  {
    title: "Responsabilidad en Acción",
    description: "Realizamos charlas de seguridad para todos los trabajadores siempre antes de iniciar nuestras operaciones. ",
    image: "/seguridad2.webp", 
  },
];

const SlideSecu = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // cambia cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="slider-container">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === index ? "active" : ""}`}>
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <button className="arrow left" onClick={prevSlide}>‹</button>
      <button className="arrow right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default SlideSecu;
