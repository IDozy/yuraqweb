import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './CardCompanyHome.css';

export default function CardCompanyHome() {
  const navigate = useNavigate();

  const handleNosotrosClick = () => {
    navigate("/nosotros");
    // Scroll al inicio de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
          onClick={handleNosotrosClick}
        >
          NOSOTROS
        </motion.button>
      </motion.div>
    </div>
  );
}