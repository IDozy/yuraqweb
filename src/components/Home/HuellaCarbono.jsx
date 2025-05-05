import React from "react";
import { motion } from "framer-motion";
import "./HuellaCarbono.css"; // Crea un archivo CSS o usa Tailwind si prefieres

export default function HuellaCarbono() {
  return (
    <section className="huella-container">
      <motion.div
        className="huella-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="huella-title">Comprometidos con el Medio Ambiente</h2>
        <p className="huella-description">
          Nuestra empresa ha recibido el certificado oficial de huella de carbono, que reconoce nuestro esfuerzo en reducir emisiones y aplicar procesos sostenibles. Estamos comprometidos con un futuro más verde y responsable.
        </p>
      </motion.div>

      <motion.div
        className="huella-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="huella-card">
          <img
            src="/certificado-carbono.png"
            alt="Certificado de Huella de Carbono"
            className="huella-img"
          />
        </div>
      </motion.div>
    </section>
  );
}
