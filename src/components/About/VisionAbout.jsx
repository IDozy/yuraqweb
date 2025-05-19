import React from "react";
import { motion } from "framer-motion";

export default function VisionCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Móvil por defecto
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
        padding: "2rem",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "2rem auto",
        fontFamily: "'Poppins', sans-serif", // Fuente estilizada
      }}
    >
      {/* Imagen animada */}
      <motion.img
        src="/vision.webp"
        alt="Visión"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "12px",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Texto de visión */}
      <motion.div
        style={{
          flex: 1,
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2
          style={{
            color: "#ffc300",
            fontSize: "2rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          VISIÓN
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#555",
            lineHeight: 1.6,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Ser una empresa líder a nivel Nacional e Internacional en la producción,
          comercialización y transporte de Óxido de calcio (cal viva) e Hidróxido de calcio (Cal Hidratada).
        </p>
      </motion.div>

      {/* Estilos responsivos adicionales */}
      <style>
        {`
          @media (min-width: 768px) {
            div[style*="display: flex"] {
              flex-direction: row !important;
              text-align: left !important;
            }
          }

          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        `}
      </style>
    </div>
  );
}
