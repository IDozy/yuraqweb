import React from "react";
import { motion } from "framer-motion";

export default function MissionCard() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    offscreen: {
      opacity: 0,
      x: 50
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
        padding: "2rem",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "2rem auto",
        textAlign: "center",
      }}
      variants={cardVariants}
    >
      {/* Título y texto */}
      <motion.div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "800px",
        }}
      >
        <h2
          style={{
            color: "#ffc300",
            fontSize: "2.2rem",
            marginBottom: "1rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          MISIÓN
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            color: "#444",
            lineHeight: 1.8,
            textAlign: "justify",
            margin: "0 auto"
          }}
        >
          Producir, comercializar y transportar Óxido de calcio (Cal viva) e
          Hidróxido de calcio (Cal hidratada), brindando a nuestros clientes un
          producto de calidad y oportunidad de entrega; comprometidos con el
          cumplimiento de la legislación peruana vigente relacionada al área
          laboral, de seguridad y salud ocupacional, medio ambiente y programa
          de responsabilidad social. Fomentamos la participación de nuestros
          colaboradores y seguimos la política de la mejora continua.
        </p>
      </motion.div>

      {/* Imagen animada */}
      <motion.img
        src="/Mision.JPG"
        alt="Misión"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "12px",
          flex: 1,
        }}
        variants={imageVariants}
      />
    </motion.div>
  );
}
