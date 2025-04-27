import React from "react";

const ExpeInfo = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center p-6 my-20 rounded-lg gap-6">
      {/* Imagen a la izquierda */}
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full h-auto object-cover  -ml-5 shadow-[-25px_25px_rgba(255,195,0,1)]"
          src="/Home2.JPG"
          alt="Imagen descriptiva"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-full md:w-1/2 ">
        <p className="font-bold mb-4 text-5xl lato-bold ">
          Minera P'huyu Yuraq II
        </p>
        <p className="text-lg mb-6 lato-ligth">
          <span className="lato-regular-italic">Minera P'huyu Yuraq II </span>
          es una empresa industrial dedicada a la producción y comercialización
          de óxido de calcio o cal viva y derivados con una gran experiencia por
          más de 15 años.
          <br />
          <br />
          <span className="lato-regular-italic">Minera P'huyu Yuraq II </span>es una empresa que se ubica en la periferia de
          los principales proyectos corporativos mineros y metalúrgicos,
          cumpliendo con los estándares en calidad, seguridad, salud,
          medioambiente y respeto al entorno social.
        </p>
        <button className="mt-4 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#00A9B7] transition">
          Más de Nosotros
        </button>
      </div>
    </div>
  );
};

export default ExpeInfo;
