import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SaludCard.css"; // Asegúrate de importar esta hoja CSS

const images = [
  "/salud1.webp",
  "/salud2.webp",
  "/salud3.webp" // Cambia esta ruta por tu segunda imagen real
];

export default function SaludCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="card-campana"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Texto */}
      <div className="campana-content">
        <h2>Campañas de Salud Comunitarias</h2>
        <p>
          Organizamos jornadas médicas gratuitas para brindar atención básica,
          orientación en prevención de enfermedades y entrega de medicamentos
          a comunidades vulnerables.
        </p>
      </div>

      {/* Imagen animada */}
      <div className="campana-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Campaña salud ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="campana-img"
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
