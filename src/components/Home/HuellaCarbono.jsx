import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./HuellaCarbono.css";

export default function HuellaCarbono() {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.5 });

  return (
    <section className="huella-container">
      <motion.div
        className="huella-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="">
          <span className="huella-title-yellow">Comprometidos con el</span>{" "}
          <span className="huella-title">Medio Ambiente</span>
        </h2>

        <p className="huella-description">
          Nuestra empresa ha recibido el certificado oficial de huella de
          carbono, que reconoce nuestro esfuerzo en reducir emisiones y aplicar
          procesos sostenibles. Estamos comprometidos con un futuro más verde y
          responsable.
        </p>
      </motion.div>

      <div ref={imageRef}>
        {isInView && (
          <motion.div
            className="huella-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
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
        )}
      </div>
    </section>
  );
}
