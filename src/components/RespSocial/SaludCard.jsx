import React from "react";
import { motion } from "framer-motion";

export default function CardCampañaSalud() {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-lg max-w-[1100px] mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Texto */}
      <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4">
          Realización de campañas de salud
        </h2>
        <p className="text-[#555] text-base md:text-lg leading-relaxed">
          Organizamos jornadas médicas gratuitas para brindar atención básica, orientación en prevención de enfermedades y entrega de medicamentos a comunidades vulnerables.
        </p>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src="/Resp_Social5.png"
          alt="Campaña de salud"
          className="w-full h-full object-cover max-w-[500px] mx-auto md:mx-0"
        />
      </div>
    </motion.div>
  );
}
