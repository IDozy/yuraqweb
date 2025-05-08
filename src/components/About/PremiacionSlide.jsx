import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PremiacionSlide.css";
import premiacionImg from "/Premiacion1.jpg";

const PremiacionSlide = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="premiacion-container"
    >
      <div className="premiacion-image">
        <img src={premiacionImg} alt="Premiación" />
      </div>
      <div className="premiacion-text">
        <h3>Somos asociados de la Cámara de Comercio de Cajamarca</h3>
        <p>
          Esta afiliación nos permite fortalecer lazos con el sector empresarial,
          participando en iniciativas que promueven el desarrollo económico sostenible
          en la región.
        </p>
      </div>
    </motion.div>
  );
};

export default PremiacionSlide;
