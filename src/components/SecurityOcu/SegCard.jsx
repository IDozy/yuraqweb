import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SegCard.css";

const images = [
  "/segcard1.JPG",
  "/segcard2.JPG",
 
];

const SegCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="segcard-container">
      <div className="segcard-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Imagen de seguridad"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <div className="segcard-text">
        <h2>Compromiso con la Seguridad</h2>
        <p>
          Nuestra empresa prioriza la seguridad de todos los colaboradores y contratistas.
          Implementamos rigurosos protocolos de prevención y capacitaciones constantes para mantener un entorno laboral seguro.
        </p>
      </div>
    </section>
  );
};

export default SegCard;
