import React from "react";
import { motion } from "framer-motion";

export default function ProductionPlants() {
  const plants = [
    {
      title: "Centro de Producción Cumbemayo",
      description: (
        <>
          Nuestra planta principal equipada con tecnología de punta, ubicada en Cumbe Mayo - Cajamarca dónde contamos con una cantera de carbón para abastecer los hornos de Cumbe Mayo y de Puylucana. Además de ubicarse nuestra concesión principal con <strong>97% carbonato de calcio</strong>.
          <br /><br />
           <strong>Ubicación:</strong> Paraje “Las Ventanillas” de Cumbe Mayo.<br />
          <strong>Distancias:</strong> Santa Apolonia Chetilla, altura del Km16, desvío hacia San Cristóbal, 05 Kms. Total, distancia Santa Apolonia y Hornos es de 21 Kms.<br />
          <strong>Número de Hornos:</strong> 04 unidades en estado operativo.<br />
          <strong>Producción:</strong> 2,288 Toneladas/Mes.
        </>
      ),
      image: "/Planta_Cumbemayo.PNG", // Asegúrate de tener esta imagen
    },
    {
      title: "Centro de Producción Puylucana",
      description: (
        <>
          Cuenta con amplias instalaciones que nos permiten expandir nuestra capacidad de alamcén y producción en el sur del país. Nuestro <strong>Almacen de Cal Molida nos permite almacenar 60 TM </strong>de cal viva molida, favoreciendo el carguío de bombonas y manipulación del producto.
          <br /><br />
          <strong>Ubicación:</strong> Caserío de Puylucana, distrito de Baños del Inca.<br />
          <strong>Distancias:</strong> Kilómetro 9KM de la carretera Baños del Inca-Celendín.<br />
          <strong>Número de Hornos:</strong>  02 unidades en estado operativo.<br />
          <strong>Producción:</strong> 650 Toneladas/Mes.
        </>
      ),
      image: "/Planta_Puyucana.JPG", // Asegúrate de tener esta imagen
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Nuestras Plantas de Producción
      </h2>

      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 px-4">
        {plants.map((plant, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={plant.image}
              alt={plant.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {plant.title}
              </h3>
              <p className="text-gray-600">{plant.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
