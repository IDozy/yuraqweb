import React, { useState, useEffect } from "react";
import "./CarrouselAbout.css";

const slides = [
  {
    image: "/about_carrousel.webp",
    title: "¿Quiénes Somos?",
    description: "Somos una empresa minera dedicada a brindar soluciones en la producción de CAL de calidad.",
  },
  {
    image: "/about_carrousel1.webp",
    title: "Nuestro Valor",
    description: "Es ofrecer el mejor servicio en abastecimiento, producción de CAL adaptándonos a las necesidades de nuestros clientes.",
  },
];

const AboutCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCarousel;
