import React from "react";

const ExpeInfo = () => {
  return (
    <div className="flex items-center justify-between p-8 space-x-8">
      {/* Imagen a la izquierda */}
      <div className="w-1/2">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="/path_to_your_image.jpg"
          alt="Imagen descriptiva"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">Título del texto</h2>
        <p className="text-lg text-gray-700">
          Este es un ejemplo de texto que va al lado de la imagen. Puedes poner
          una descripción aquí o cualquier otro tipo de contenido. Es ideal para
          mostrar información de productos, servicios, o cualquier cosa que
          desees.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Llamada a la acción
        </button>
      </div>
    </div>
  );
};

export default ExpeInfo;
