import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AmautasCard.css";

const images = [
  "/amautas_mineros.webp",
  "/amautas2.webp",
  "/amautas3.webp", // Cambia estas rutas según tus imágenes reales
];

const AmautasCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
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
      {/* Texto a la izquierda */}
      <div className="card-content">
        <h2>Visitas guiadas para Grupos Estudiantiles</h2>
        <p>
          Extendemos una cordial invitación a todas las universidades e
          institutos de formación minera, tanto a nivel local como nacional, a
          participar en nuestras visitas guiadas. Como parte de nuestro
          compromiso social y educativo, abrimos las puertas de nuestras
          instalaciones para que agrupaciones estudiantiles conozcan de cerca
          los procesos productivos y operativos de una empresa calera. Estas
          visitas ofrecen una valiosa oportunidad para recorrer nuestras
          plantas, interactuar con profesionales del sector y comprender el
          funcionamiento real de la industria.
        </p>
      </div>

      {/* Imagen rotativa a la derecha */}
      <div className="card-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Amautas Mineros ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AmautasCard;
