import React from "react";
import { motion } from "framer-motion";

export default function HeroEmpresa() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <img
        src="/Home3.PNG" // Coloca tu imagen en /public o ajusta el path
        alt="Fondo de la empresa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura para mejorar la lectura del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido centrado */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
         Conoce Minera P'huyu Yuraq II
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
          La cual fue fundada con el objetivo de ofrecer soluciones de calidad,
          promoviendo la innovación y el compromiso con nuestros clientes.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-yellow-100/70 hover:bg-yellow-500/90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm"
        >
          NOSOTROS
        </motion.button>
      </motion.div>
    </div>
  );
}
