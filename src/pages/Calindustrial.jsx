import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductItem from "../components/Products/ProductItem";

const Calindustrial = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar />
      <div className="container mx-auto py-12">
        <ProductItem
          image="../../cal-industrial.webp"
          title="Hidróxido de Calcio - Cal Hidratada para uso Industrial "
          description="La cal hidratada industrial , también conocida como óxido de calcio, es un producto mineral de alta pureza obtenido mediante la calcinación de piedra caliza seleccionada. Su presentación en gránulos facilita la manipulación, transporte y aplicación en diversas superficies. Es ampliamente utilizada para neutralizar la acidez del suelo, mejorar su estructura física y aumentar la disponibilidad de nutrientes esenciales para las plantas. Además, su alto contenido de calcio la convierte en una fuente eficaz y rápida para corregir deficiencias nutricionales. También se emplea en el tratamiento de aguas, en la industria de la construcción, en procesos metalúrgicos y como insumo en la elaboración de fertilizantes compuestos."
          chemistry="Óxido de Calcio CaO: 64% - Hidróxido de Calcio (Ca(OH)2): 64% - Insolubles + SiO2: 0.9% - S: 0.2% - MgO: 0.5% - Perdida de calcinación: 1.5% - Humedad: 0%"
          identification="Cal hidratada para uso industrial, Óxido de calcio, Polvo blanco fino, ligeramente higroscópico."
          usage="• Corrección de acidez del suelo en la agricultura, elevando el pH para mejorar la absorción de nutrientes.
         • Mejora de la estructura del suelo, promoviendo una mayor aireación y retención de humedad.
         • Fuente de calcio de rápida asimilación para cultivos que requieren este nutriente esencial.
         • Reducción de toxicidad de metales pesados como aluminio y manganeso en suelos ácidos.
         • Acelerador en procesos de compostaje, ayudando a reducir olores y descomponer materia orgánica.
         • Desinfección de suelos y establos, útil en avicultura y ganadería para controlar patógenos.
         • Tratamiento de aguas residuales e industriales, neutralizando ácidos y eliminando impurezas.
         • Uso en la industria azucarera para clarificar jugos de caña mediante procesos de alcalinización.
         • Fabricación de morteros y mezclas de construcción, mejorando la trabajabilidad de los materiales.
         • Procesos metalúrgicos, como fundente en la producción de acero para eliminar impurezas."
        />
      </div>
      <Footer />
    </>
  );
};

export default Calindustrial;
