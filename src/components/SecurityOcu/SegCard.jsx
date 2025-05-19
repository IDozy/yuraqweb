import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SegCard.css";

const images = [
  "/segcard1.webp",
  "/segcard2.webp",
  "/segcard3.webp",
  "/segcard4.webp",
];

const INTERVAL_TIME = 3000; // Puedes modificar aquí el tiempo (en milisegundos)

const SegCard = () => {
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
        <h2>Comprometidos con la Seguridad</h2>
        <p>
          Nuestra empresa prioriza la seguridad de todos nuestros colaboradores
          y contratistas. Implementamos rigurosos protocolos de prevención,
          atención y capacitación constantes para mantener un entorno laboral
          seguro velando por el bien de los nuestros.
        </p>
      </div>
    </motion.div>
  );
};

export default SegCard;
