import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SlideSocial from '../components/RespSocial/SlideSocial';
import ResponCard from '../components/RespSocial/ResponCard';
import SaludCard from '../components/RespSocial/SaludCard';
import MantenimientoCard from '../components/RespSocial/MantCard';


const RespSocial = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideSocial/>
      <ResponCard/>
      <SaludCard/>
      <MantenimientoCard/>
      <Footer/>
    </>
  );
};

export default RespSocial;