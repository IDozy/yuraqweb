import React, { useState, useEffect } from "react";
import "./SlideHuman.css";

const slides = [
  {
    title: "Comprometidos con la Comunidad",
    description: "Realizamos programas sociales que benefician a las zonas aledañas a nuestras operaciones.",
    image: "/desarrollo1.JPG", // Cambia por la ruta  imagen
  },
  {
    title: "Sostenibilidad en Acción",
    description: "Promovemos prácticas responsables para proteger el medio ambiente y el desarrollo local.",
    image: "/desarrollo2.JPG", // Cambia por la ruta imagen
  },
];

const SlideHuman = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // cambia cada 5 segundos

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

export default SlideHuman;
