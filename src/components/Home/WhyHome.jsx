// src/components/WhyUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa"; // ICONOS

export default function WhyUs() {
  const reasons = [
    {
      icon: <FaAward size={50} color="#E91E63" />,
      title: "Experiencia",
      description: "Más de 30 años ofreciendo calidad y compromiso.",
    },
    {
      icon: <FaHandshake size={50} color="#3F51B5" />,
      title: "Confianza",
      description: "Relaciones sólidas y clientes satisfechos.",
    },
    {
      icon: <FaLightbulb size={50} color="#FF9800" />,
      title: "Innovación",
      description: "Aplicamos soluciones creativas en cada proyecto.",
    },
    {
      icon: <FaShieldAlt size={50} color="#4CAF50" />,
      title: "Seguridad",
      description: "Garantizamos resultados seguros y confiables.",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "3.5rem", marginBottom: "3rem" }}>
        ¿Por qué trabajar con nosotros?
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "#f9f9f9",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ marginBottom: "1rem" }}
            >
              {reason.icon}
            </motion.div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{reason.title}</h3>
            <p style={{ color: "#555" }}>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
