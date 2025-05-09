import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SlideSecu.css";

const slides = [
  {
    image: "/seguridad1.JPG",
    title: "Comprometidos con la Seguridad Ocupacional",
    description:
      "Protegemos la vida de cada colaborador mediante protocolos rigurosos y capacitaciones continuas.",
  },
  {
    image: "/seguridad2.JPG",
    title: "Prevención y Cultura de Seguridad",
    description:
      "Fomentamos una cultura preventiva con enfoque en riesgos laborales en toda la operación minera.",
  },
];

const SlideSecu = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slide-secu-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          className="slide-secu"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="slide-secu-img"
          />
          <div className="slide-secu-overlay">
            <h2>{slides[index].title}</h2>
            <p>{slides[index].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideSecu;
