import React from "react";
import { motion } from "framer-motion";
import './CardCompanyHome.css'


export default function CardCompanyHome() {
  return (
    <div className="hero-empresa-container">
      <img
        src="/Home3.PNG"
        alt="Fondo de la empresa"
        className="hero-empresa-image"
      />

      <div className="hero-empresa-overlay"></div>

      <motion.div
        className="hero-empresa-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="hero-empresa-title">Conoce Minera P'huyu Yuraq II</h1>
        <p className="hero-empresa-text">
          La cual fue fundada con el objetivo de ofrecer soluciones de calidad,
          promoviendo la innovación y el compromiso con nuestros clientes.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hero-empresa-button"
        >
          NOSOTROS
        </motion.button>
      </motion.div>
    </div>
  );
}
