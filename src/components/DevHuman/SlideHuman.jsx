import React, { useState, useEffect } from "react";
import "./SlideHuman.css";

const slides = [
  {
    title: "Comprometidos con la Salud y el Deporte",
    description: "Realizamos programas deportivos de integración entre toda la familia Phuyuyuraq.",
    image: "/desarrollo1.JPG", // Cambia por la ruta  imagen
  },
  {
    title: "Compartiendo con nuestros trabajadores",
    description: "Promovemos un ambiente laboral acogedor por ello buscamos celebrar todo tipo de logro entre nuestros miembros.",
    image: "/resp_social1.JPG", // Cambia por la ruta imagen
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
