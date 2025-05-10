import { motion } from "framer-motion";
import "./SecCard.css";

const SecCard = () => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Texto a la izquierda */}
      <div className="card-content">
        <h2>Promovemos la conciencia Operacional Responsable</h2>
        <p>
          Como parte de nuestro compromiso en seguridad, promovemos las charlas supervisadas procurando mantener en constante capacitación a 
          nuestro personal con respecto al manejo de equipos críticos para su uso en todo tipo de operaciones.
          
        </p>
      </div>

      {/* Imagen a la derecha */}
      <div className="card-image">
        <img src="/seccard1.JPG" alt="Seguridad Ocupacional" />
      </div>
    </motion.div>
  );
};

export default SecCard;
