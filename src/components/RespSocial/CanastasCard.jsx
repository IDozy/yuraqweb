import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CanastasCard.css";

const images = [
  "/resp_social1.JPG",
  "/resp_social3.png"
];

const INTERVAL_TIME = 3000; // Puedes modificar aquí el tiempo (en milisegundos)

const CanastasCard = () => {
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
            alt={`Imagen ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="card-img"
          />
        </AnimatePresence>
      </div>
      <div className="card-content">
        <h2>Entrega de canastas y víveres a familias </h2>
        <p>
          Se hizo entrega de víveres no perecibles para las familias que viven cerca a dónde desarrollamos nuestras operaciones con el fin de 
          compartir un granito de arena, buscamos brindar apoyo local.  
        
        </p>
      </div>
    </motion.div>
  );
};

export default CanastasCard;
