import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './/PlantsProduction.css';

const ProductionPlantsCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const handleButtonClick = () => {
    // Aquí puedes implementar la navegación a la sección de plantas
    // Por ejemplo usando react-router o scroll a una sección con id
    const plantsSection = document.getElementById('plantas-produccion');
    if (plantsSection) {
      plantsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className="plants-card-container">
      <motion.div
        className="plants-card"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="plants-card-content">
          <div className="plants-text-container">
            <h2 className="plants-title">Conoce nuestras Centros de producción</h2>
            <p className="plants-description">
              Contamos con instalaciones modernas y tecnología de punta para garantizar 
              la más alta calidad en todos nuestros productos. Nuestras centros de producción están 
              diseñados para maximizar la eficiencia y minimizar el impacto ambiental.
            </p>
            <button 
              onClick={handleButtonClick}
              className="plants-button" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Ubicación
            </button>
          </div>
          <div className="plants-image-container">
            <motion.img
              src="/Card1.JPG" // Reemplaza con tu imagen
              alt="Planta de producción"
              className="plants-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductionPlantsCard;