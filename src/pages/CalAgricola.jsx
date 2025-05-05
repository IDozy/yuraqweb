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
          image="../../calagricola.png"
          title="Cal Agrícola"
          description="La cal agrícola es utilizada para corregir la acidez del suelo..."
          chemistry="CaO: 90% - MgO: 5% - Insolubles: <2%"
          identification="Polvo blanco fino, ligeramente higroscópico."
          usage="Corrección de la acidez del suelo (aumento del pH).
                Mejora de la estructura del suelo (agregación de partículas).
                  Aumento de la disponibilidad de nutrientes para las plantas.
                  Reducción de la toxicidad de elementos como el aluminio y el manganeso.
                  Mejora de la actividad microbiana beneficiosa en el suelo. 
                  Corrección de la acidez del suelo (aumento del pH).
                  Mejora de la estructura del suelo (agregación de partículas).
                  Aumento de la disponibilidad de nutrientes para las plantas.
                  Reducción de la toxicidad de elementos como el aluminio y el manganeso.
                  Mejora de la actividad microbiana beneficiosa en el suelo.
                  Aporte de calcio y magnesio, nutrientes esenciales para el crecimiento de las plantas (especialmente con cal dolomítica).
                  Adición a pilas de compost para acelerar la descomposición y reducir olores.
                  Utilizada en la desinfección de suelos y estructuras agrícolas (establos, gallineros).
                  Control de ciertas plagas y enfermedades en algunos cultivos.
                  Al corregir el pH, facilita la absorción de otros fertilizantes."
        />
      </div>
      <Footer />
    </>
  );
};

export default CalAgricola;
