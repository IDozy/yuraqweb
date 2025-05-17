import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AmautasCard.css";

const imageList = [
  "/pinos.png",
  "/pinos2.JPG",
  "/pinos3.JPG",
];

const SembradioPinosCard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="card-content">
        <h2>Sembrío de pinos</h2>
        <p>
          Como parte de nuestras acciones de sostenibilidad ambiental, llevamos a cabo campañas de sembrado de pinos 
          con el objetivo de reducir la huella de carbono y promover ecosistemas sostenibles. 
          Esta iniciativa contribuye a la captura de CO₂, la mejora del suelo y la conservación de la biodiversidad local.
        </p>
      </div>

      <div className="card-image" style={{ position: "relative", width: "100%", height: "100%", maxWidth: "500px" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={imageList[currentImage]}
            src={imageList[currentImage]}
            alt="Sembradío de pinos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SembradioPinosCard;
