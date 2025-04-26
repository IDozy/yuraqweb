import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/About_Empresa.JPG",
    title: "Quiénes Somos",
    description: "Somos una empresa dedicada a brindar soluciones de calidad."
  },
  {
    image: "/About_Empresa1.JPG",
    title: "Nuestra Misión",
    description: "Ofrecer el mejor servicio, adaptándonos a las necesidades de nuestros clientes."
  },
  
];

const AboutCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: index === current ? 2 : 1
          }}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            style={styles.image} 
          />
          <div style={styles.textContainer}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  carousel: {
    position: "relative",
    width: "100%",
    height: "600px",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  slide: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // ⭐ muestra la imagen completa
  },
  textContainer: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "80%",
  }
};

export default AboutCarousel;
