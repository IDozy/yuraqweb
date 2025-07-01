import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CountSeguridad.css';

const CountSeguridad = () => {
  // Fecha de inicio de la pandemia (1 de marzo de 2022)
  const pandemicStartDate = new Date('2022-03-1');
  const [daysWithoutAccidents, setDaysWithoutAccidents] = useState(0);

  // Calcular días desde la pandemia
  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const differenceInTime = today.getTime() - pandemicStartDate.getTime();
      const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
      setDaysWithoutAccidents(differenceInDays);
    };

    calculateDays();
    // Actualizar cada día (opcional)
    const interval = setInterval(calculateDays, 86400000); // 24 horas

    return () => clearInterval(interval);
  }, []);

  // Animación para los números
  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="seguridad-container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="seguridad-card"
      >
        <h2 className="seguridad-title">Seguridad Industrial</h2>
        
        <div className="seguridad-stats">
          <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stat-item"
          >
            <div className="stat-number">9424</div>
            <div className="stat-label">Horas Hombre Sin Tiempo Perdido</div>
          </motion.div>

           <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="stat-item"
          >
            <div className="stat-number">0</div>
            <div className="stat-label">Accidentes Graves </div>
          </motion.div>

          <motion.div
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="stat-item"
          >
            <div className="stat-number">{daysWithoutAccidents}</div>
            <div className="stat-label">Días útiles</div>
          </motion.div>
        </div>

        <motion.p 
          className="seguridad-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          En Minera P'huyu Yuraq II, la seguridad de nuestro equipo es nuestra máxima prioridad. 
          Trabajamos cada día para mantener un ambiente laboral seguro y saludable.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CountSeguridad;