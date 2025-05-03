import React, { useEffect, useState } from "react";
import camaraLogo from "/Clientes_CamaradeComercio.png";
import newmontLogo from "/Clientes_Newmont.png";
import shahuindoLogo from "/Clientes_Shahuindo.png";
import '../Home/ConfianHome.css';

const ConfianHome = () => {
  const logos = [camaraLogo, newmontLogo, shahuindoLogo];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="confian-container">
      <div className="confian-left text-center">
        <h2>
          CON LA<br />
          CONFIANZA<br />
          DE:
        </h2>
      </div>

      <div className="confian-right">
        <img
          src={logos[currentIndex]}
          alt={`Logo ${currentIndex + 1}`}
          className="confian-logo"
        />
      </div>
    </section>
  );
};

export default ConfianHome;
