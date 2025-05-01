import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SlideSocial from '../components/RespSocial/SlideSocial';
import ResponCard from '../components/RespSocial/ResponCard';

const RespSocial = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideSocial/>
      <ResponCard/>
      <Footer/>
    </>
  );
};

export default RespSocial;