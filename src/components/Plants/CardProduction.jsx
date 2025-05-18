import React from "react";
import { motion } from "framer-motion";
import "./CardProduction.css";

export default function CardProduction() {
  const plants = [
    {
      title: "Centro de Producción Cumbemayo",
      description: (
        <>
          Nuestra planta principal equipada con tecnología de punta, ubicada en Cumbe Mayo - Cajamarca dónde contamos con una cantera de carbón para abastecer los hornos de Cumbe Mayo y de Puylucana. Además de ubicarse nuestra concesión principal con <strong>97% carbonato de calcio</strong>.
          <br /><br />
          <strong>Ubicación:</strong> Paraje "Las Ventanillas" de Cumbe Mayo.<br />
          <strong>Distancias:</strong> Santa Apolonia Chetilla, altura del Km16, desvío hacia San Cristóbal, 05 Kms. Total, distancia Santa Apolonia y Hornos es de 21 Kms.<br />
          <strong>Número de Hornos:</strong> 04 unidades en estado operativo.<br />
          <strong>Producción:</strong> 2,288 Toneladas/Mes.
        </>
      ),
      image: "/centroCumbemayo.PNG",
    },
    {
      title: "Centro de Producción Puylucana",
      description: (
        <>
          Cuenta con amplias instalaciones que nos permiten expandir nuestra capacidad de almacén y producción en el sur del país. Nuestro <strong>Almacen de Cal Molida nos permite almacenar 60 TM </strong>de cal viva molida, favoreciendo el carguío de bombonas y manipulación del producto.
          <br /><br />
          <strong>Ubicación:</strong> Caserío de Puylucana, distrito de Baños del Inca.<br />
          <strong>Distancias:</strong> Kilómetro 9KM de la carretera Baños del Inca-Celendín.<br />
          <strong>Número de Hornos:</strong> 02 unidades en estado operativo.<br />
          <strong>Producción:</strong> 650 Toneladas/Mes.
        </>
      ),
      image: "/centro_puyllucana.JPG",
    },
    {
      title: "Centro de Producción Apan Alto",
      description: (
        <>
          Nuestra principal planta estratégicamente ubicada para atender la demanda creciente en la región. Equipada con tecnología moderna para garantizar la más alta calidad en nuestros productos.
          <br /><br />
          <strong>Ubicación:</strong> Caserío de Apan Alto, Distrito de Hualgayoc, Cajamarca.<br />
          <strong>Distancias:</strong>  Kilómetro 97 de la carretera Cajamarca - Bambamarca.<br />
          <strong>Número de Hornos:</strong> 02 unidades en estado operativo.<br />
          <strong>Producción:</strong> 650 Toneladas/Mes.
        </>
      ),
      image: "/centroapanalto.jpeg",
    }
  ];

  return (
    <section className="production-plants-section">
      <h2 className="section-title">Nuestros Centros de Producción</h2>

      <div className="plants-container">
        {plants.map((plant, index) => (
          <motion.article
            key={index}
            className="plant-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="plant-image-container">
              <img
                src={plant.image}
                alt={plant.title}
                className="plant-image"
              />
            </div>
            <div className="plant-content">
              <h3 className="plant-title">{plant.title}</h3>
              <div className="plant-description">{plant.description}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}