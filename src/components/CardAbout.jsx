import React from "react";

const AboutCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg gap-6">
      <img
        src="/Home1.JPG" // Asegúrate que la ruta es correcta desde /public
        alt="Sobre nosotros"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
        <p className="text-gray-600 text-lg">
          Desde nuestros inicios, nos hemos dedicado a brindar servicios de calidad, comprometidos con la excelencia y la satisfacción de nuestros clientes. Nuestro crecimiento refleja el esfuerzo y pasión que ponemos en cada proyecto.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
