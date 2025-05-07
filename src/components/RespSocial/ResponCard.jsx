import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ResponsabilidadCard.css";

const images = [
  "/Resp_Social7.JPG",
  "/resp_social9.jpg"
];

const INTERVAL_TIME = 3000; // Puedes modificar aquí el tiempo (en milisegundos)

const ResponsabilidadCard = () => {
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
        <h2>Construcción y Entrega de Módulos Educativos</h2>
        <p>
          Se hizo entrega de nuevos módulos educativos al director de la Institución Educativa N° 82206, 
          contribuyendo a mejorar el acceso a espacios de aprendizaje adecuados para los estudiantes de la zona rural.
        </p>
      </div>
    </motion.div>
  );
};

export default ResponsabilidadCard;
