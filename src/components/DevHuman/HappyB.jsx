import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HappyB.css"; // Asegúrate de crear este archivo o reutilizar uno

const images = [
  "/cumple1.JPG",  // Reemplaza con tus rutas reales
  "/cumple2.JPG",
  "/cumple3.JPG"
];

const INTERVAL_TIME = 3000;

const HappyB = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="card-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Cumpleaños ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="card-img"
          />
        </AnimatePresence>
      </div>
      <div className="card-content">
        <h2>Celebración de Cumpleaños</h2>
        <p>
          Reconocemos y celebramos a nuestros colaboradores en su día especial, promoviendo un ambiente de trabajo 
          saludable y fortaleciendo el espíritu de equipo dentro de la organización.
        </p>
      </div>
    </motion.div>
  );
};

export default HappyB;
