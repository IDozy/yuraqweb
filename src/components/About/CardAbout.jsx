// src/components/AboutCard.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <motion.div
      className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6 mt-20 rounded-lg gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <motion.img
        src="/card_historia.webp" // Reemplaza por tu ruta real
        alt="Sobre nosotros"
        className="w-full md:w-1/2 max-h-96 object-contain rounded-lg shadow-lg"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Texto */}
      <motion.div
        className="flex-1 bg-yellow-300 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-gray-800">
          Conoce Nuestra Historia
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
          Teniendo como base el Centro de Producción de Cal Apan Alto, la Sra.
          Julia Edith Urrutia Cubas, en el año 1994, crea la EMPRESA MINERA
          P'HUYU YURAQ II EIRL. Luego se proyecta a Cajamarca donde la Empresa
          cuenta con un centro de producción de Cal en el centro poblado
          Puylucana, Baños del Inca y otro centro de producción de Cal en Cumbe
          Mayo, Cajamarca.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
