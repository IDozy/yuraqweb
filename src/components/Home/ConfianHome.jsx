import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import camaraLogo from "/clientes_camaradecomercio.webp";
import newmontLogo from "/clientes_newmont.webp";
import shahuindoLogo from "/clientes_shahuindo.webp";
import sedacajLogo from '/sedacaj.webp';
import fusionLogo from '/fusionexpre.webp';
import './ConfianHome.css';

const ConfianHome = () => {
  const clients = [
    { logo: camaraLogo, name: "Cámara de Comercio" },
    { logo: newmontLogo, name: "Yanacocha" },
    { logo: shahuindoLogo, name: "Shahuindo" },
    { logo: sedacajLogo, name:"Sedacaj"},
    { logo: fusionLogo, name: "Fusion Express"}
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="confian-section">
      <div className="confian-content">
        <motion.div 
          className="confian-title-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="confian-title">
            <span>CON LA</span>
            <span>CONFIANZA</span>
            <span>DE:</span>
          </h2>
        </motion.div>

        <motion.div 
          className="confian-logo-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          key={currentIndex}
        >
          <div className="logo-wrapper">
            <img
              src={clients[currentIndex].logo}
              alt={clients[currentIndex].name}
              className="client-logo"
            />
            <p className="client-name">{clients[currentIndex].name}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConfianHome;