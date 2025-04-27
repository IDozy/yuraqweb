import React from "react";

const AboutCard = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center p-6 mt-20 rounded-lg gap-6">
      <img
        src="/Home1.JPG" 
        alt="Sobre nosotros"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
      />
      <div className="flex-1 bg-yellow-300 p-10 rounded-lg border-3">
        <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
        <p className="text-gray-700 text-lg">
          Desde nuestros inicios, nos hemos dedicado a brindar servicios de calidad, comprometidos con la excelencia y la satisfacción de nuestros clientes. Nuestro crecimiento refleja el esfuerzo y pasión que ponemos en cada proyecto.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;


