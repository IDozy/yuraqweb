// src/components/CertificationsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./CertifiHome.css"; // Importamos el CSS

const certifications = [
  {
    image: "/iso9001.webp",
    title: "ISO 9001",
    description: "Certificación en Sistemas de Gestión de Calidad.",
  },
  {
    image: "/iso14001.webp",
    title: "ISO 14001",
    description: "Certificación en Medio Ambiente. Por los cuidados rigurozos la momento de realizar nuestros trabajos.",
  },
  {
    image: "/iso45001.webp",
    title: "ISO 45001",
    description: "Gestión de Seguridad y Salud en el Trabajo.",
  },
  
 
];

const CertificationsSection = () => {
  return (
    <section className="certifications-section" >
      <motion.h2
        className="certifications-title"
        style={{ color: "var(--color-primary)" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Nuestras Certificaciones
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-description">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
