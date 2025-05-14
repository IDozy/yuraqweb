import React from "react";
import { motion } from "framer-motion";
import "./Reconocimientos.css";

const reconocimientos = [
  {
    id: 1,
    imagen: "/reconocimiento3.JPG",
    titulo: "Reconocimiento por promover el Desarrollo Sostenible",
    descripcion: "Otorgado por la empresa Newmont Yanacocha siendo fruto de aplicar buenas prácticas en sostenibilidad y responsabilidad social con las comunidades en nuestra área de operaciones.",
  },
  {
    id: 2,
    imagen: "/reconocimiento2.JPG",
    titulo: "Reconocimiento al Buen gobierno Corporativo",
    descripcion: "Reconocimiento por el uso de tecnología en procesos mineros sostenibles.",
  },
];

const Reconocimientos = () => {
  return (
    <section className="reconocimientos-container">
      <h2 className="reconocimientos-title">Reconocimientos</h2>
      <div className="reconocimientos-grid">
        {reconocimientos.map((item) => (
          <motion.div
            key={item.id}
            className="reconocimiento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={item.imagen} alt={item.titulo} />
            <div className="reconocimiento-info">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reconocimientos;
