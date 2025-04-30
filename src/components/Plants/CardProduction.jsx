import React from "react";
import { motion } from "framer-motion";

export default function ProductionPlants() {
  const plants = [
    {
      title: "Planta de Producción en Cumbe Mayo",
      description: "Nuestra planta principal equipada con tecnología de punta, ubicada estratégicamente para abastecer el mercado nacional.",
      image: "/Planta_Cumbemayo.PNG", // Asegúrate de tener esta imagen
    },
    {
      title: "Planta de Producción de Puyucana",
      description: "Instalaciones modernas que nos permiten expandir nuestra capacidad de producción en el sur del país.",
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
