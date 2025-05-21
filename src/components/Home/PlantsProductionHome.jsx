import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './PlantsProduction.css';

const ProductionPlantsCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const handleButtonClick = () => {
    navigate("/produccion");
    window.scrollTo(0, 0); // 🔝 Scroll manual al tope de la nueva página
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
            <h2 className="plants-title">Conoce nuestros Centros de Producción</h2>
            <p className="plants-description">
              Contamos con instalaciones modernas y tecnología de punta para garantizar 
              la más alta calidad en todos nuestros productos. Nuestras centros de producción están 
              diseñados para maximizar la eficiencia y minimizar el impacto ambiental.
            </p>
            <motion.button 
              onClick={handleButtonClick}
              className="plants-button" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Ubicación
            </motion.button>
          </div>
          <div className="plants-image-container">
            <motion.img
              src="/card_plantas.webp"
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
