import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SecCard.css"; // Asegúrate de importar esta hoja CSS

const images = [
  "/seccard1.JPG",
  "/seccard2.JPG",
  "/seccard3.JPG" // Cambia esta ruta por tu segunda imagen real
];

export default function SecCard() {
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
        <h2>Realizamos campañas de Consietización</h2>
        <p>
          Nuestras charlas de seguridad en operaciones son vitales para la protección de nuestros colaboradores, aprenden procedimientos clave y cómo identificar riesgos específicos participan activamente para un trabajo seguro su bienestar es primordial en cada tarea y juntos construimos un ambiente laboral más seguro.
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
