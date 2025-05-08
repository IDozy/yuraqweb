import { motion } from "framer-motion";
import "./MantCard.css";

const MantenimientoCard = () => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Imagen al lado izquierdo */}
      <div className="card-image">
        <img src="/mantenimiento_4km.png" alt="Mantenimiento vial" />
      </div>

      {/* Texto al lado derecho */}
      <div className="card-content">
        <h2>
          Mantenimiento de 4kms. de vía, desde el cruce a Chetilla hasta nuestro
          Centro de producción Cumbe Mayo
        </h2>
        <p>
          Realizamos mantenimiento a la vía de comunicación entre el distrito
          de Chetilla con la ciudad de Cajamarca, contribuyendo a mejorar el
          acceso entre ambas ciudades.
        </p>
      </div>
    </motion.div>
  );
};

export default MantenimientoCard;
