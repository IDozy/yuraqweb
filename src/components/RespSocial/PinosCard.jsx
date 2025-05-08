import React from "react";
import { motion } from "framer-motion";
import "./AmautasCard.css"; // Usa el mismo CSS si ya maneja el estilo horizontal

const SembradioPinosCard = () => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="card-content">
        <h2>Sembradío de pinos</h2>
        <p>
          Como parte de nuestras acciones de sostenibilidad ambiental, llevamos a cabo campañas de sembrado de pinos 
          con el objetivo de reducir la huella de carbono y promover ecosistemas sostenibles. 
          Esta iniciativa contribuye a la captura de CO₂, la mejora del suelo y la conservación de la biodiversidad local.
        </p>
      </div>
      <div className="card-image">
        <img src="/pinos.png" alt="Sembradío de pinos" />
      </div>
    </motion.div>
  );
};

export default SembradioPinosCard;
