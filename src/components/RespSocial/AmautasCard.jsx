import React from "react";
import { motion } from "framer-motion";
import "./AmautasCard.css";

const AmautasCard = () => {
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
        <h2>Visita guiada para "Amautas Mineros"</h2>
        <p>
          Como parte de nuestro compromiso social, promovemos las visitas guiadas para cualquier
          agrupación estudiantil interesada en conocer nuestras instalaciones. El grupo Amautas Mineros visitó nuestras instalaciones del centro de producción ubicado en "INGRESAR LUGAR", 
          donde conocieron el funcionamiento y parte de la producción principal del lugar.
        </p>
      </div>

      {/* Imagen a la derecha */}
      <div className="card-image">
        <img src="/amautas_mineros.png" alt="Amautas mineros" />
      </div>
    </motion.div>
  );
};

export default AmautasCard;
