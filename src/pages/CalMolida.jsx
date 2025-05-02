import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardProduction from "../components/Plants/CardProduction";

const CalMolida = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <CardProduction/>
      <Footer/>
    </>
  );
};

export default CalMolida;