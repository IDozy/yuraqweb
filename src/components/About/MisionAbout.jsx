// src/components/MissionCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MissionCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // Esto asegura que el texto vaya primero (izquierda)
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
        padding: "2rem",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Texto de la Misión */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            color: "#E91E63",
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          MISIÓN
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: 1.6 }}>
          Producir, comercializar y transportar Óxido de calcio (Cal viva) e
          Hidróxido de calcio (Cal hidratada), brindando a nuestros clientes un
          producto de calidad y oportunidad de entrega; comprometidos con el
          cumplimiento de la legislación peruana vigente relacionada al área
          laboral, de seguridad y salud ocupacional, medio ambiente y programa
          de responsabilidad social.
        </p>
      </div>

      {/* Imagen Animada */}
      <motion.img
        src="/Mision.JPG" // Reemplaza esto con la ruta correcta de tu imagen
        alt="Misión"
        style={{ width: "600px", height: "auto", borderRadius: "12px" }}
        initial={{ rotate: -5, scale: 0.9 }}
        animate={{ rotate: [-5, 5, -5], scale: [0.9, 1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
