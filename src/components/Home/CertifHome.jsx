// src/components/CertificationsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    image: "/Certificacion_ISO9001.png", // Cambia por el nombre real de tu imagen
    title: "ISO 9001",
    description: "Certificación en sistemas de gestión de calidad.",
  },
  {
    image: "/Certificacion_Homologada.png",
    title: "Empresa Homologada",
    description: "Demostrando una capacidad excepcional.",
  },
  {
    image: "/Certificacion_OHSAS.png",
    title: "OHSAS 18001",
    description: "Certificación en seguridad y salud ocupacional.",
  },
];

const CertificationsSection = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Nuestras Certificaciones
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-40 h-40 object-cover rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">{cert.title}</h3>
            <p className="text-gray-600 text-base">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
