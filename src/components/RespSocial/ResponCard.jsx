import { motion } from "framer-motion";
import "./ResponsabilidadCard.css";

const ResponsabilidadCard = () => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="card-image">
        <img src="/Resp_Social7.JPG" alt="Proyecto Educativo" />
      </div>
      <div className="card-content">
        <h2>Construcción y Entrega de Módulos Educativos</h2>
        <p>
          Se hizo entrega de nuevos módulos educativos al director de la Institución Educativa N° 82206, 
          contribuyendo a mejorar el acceso a espacios de aprendizaje adecuados para los estudiantes de la zona rural.
        </p>
      </div>
    </motion.div>
  );
};

export default ResponsabilidadCard;
