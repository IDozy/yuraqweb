import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SlideSocial from '../components/RespSocial/SlideSocial';
import ResponCard from '../components/RespSocial/ResponCard';
import SaludCard from '../components/RespSocial/SaludCard';
import MantenimientoCard from '../components/RespSocial/MantCard';
import AmautasCard from '../components/RespSocial/AmautasCard';
import PinosCard from '../components/RespSocial/PinosCard';
import CanastasCard from '../components/RespSocial/CanastasCard';

const RespSocial = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideSocial/>
      <ResponCard/>
      <SaludCard/>
      <CanastasCard/>
      <AmautasCard/>
      <MantenimientoCard/>
      <PinosCard/>
      <Footer/>
    </>
  );
};

export default RespSocial;