import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductItem from "../components/Products/ProductItem";

const CalAgricola = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar />
      <div className="container mx-auto py-12">
        <ProductItem
          image="../../cal-hidratada.png"
          title="Hidróxido de Calcio - Cal Hidratada ( agricola) "
          description="El hidróxido de calcio, también conocido como cal hidratada o cal agrícola, es un compuesto blanco y fino obtenido al agregar agua al óxido de calcio. Se utiliza ampliamente en la agricultura para corregir la acidez del suelo, mejorar la absorción de nutrientes y optimizar el rendimiento de los cultivos. Su aplicación ayuda a regular el pH, controlar plagas del suelo y favorecer un ambiente microbiológico saludable. Es una opción ecológica y efectiva para el manejo sostenible del terreno agrícola."
          chemistry="CaO: 90% - MgO: 5% - Insolubles: <2%"
          identification="Polvo blanco fino, ligeramente higroscópico."
          usage="• Neutralización de suelos ácidos (corrección de pH).
         • Mejora de la absorción de nutrientes por las raíces.
         • Incremento de la actividad microbiana beneficiosa en el suelo.
         • Control de patógenos en suelos agrícolas.
         • Desinfección de establos y gallineros.
         • Tratamiento de aguas en canales y reservorios rurales.
         • Producción de compost y reducción de olores.
         • Clarificación de jugos en la industria alimentaria.
         • Control de acidez en procesos industriales.
         • Uso como fuente de calcio para cultivos deficientes en este mineral."
        />
      </div>
      <Footer />
    </>
  );
};

export default CalAgricola;
