// src/components/VisionCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function VisionCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // <-- Ahora normal: imagen izquierda, texto derecha
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
        padding: "2rem",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "2rem auto",
      }}
    >
      {/* Imagen Animada */}
      <motion.img
        src="/Vision.JPG" // Cambia esta ruta por la de tu imagen de la visión
        alt="Visión"
        style={{ width: "600px", height: "auto", borderRadius: "12px" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Texto de la Visión */}
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2
          style={{
            color: "#3F51B5",
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          VISIÓN
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: 1.6 }}>
        Ser una empresa líder a nivel Nacional e Internacional en la producción, comercialización y transporte de Óxido de calcio (cal viva) e Hidróxido de calcio (Cal Hidratada).
        </p>
      </motion.div>
    </div>
  );
}
