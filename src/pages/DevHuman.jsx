import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import HappyB from '../components/DevHuman/HappyB';
import SlideHuman from '../components/DevHuman/SlideHuman';
import Navidad from '../components/DevHuman/Navidad';
import Footer from "../components/Footer";



const DevHuman = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideHuman/>
      <HappyB/>
      <Navidad/>
      <Footer/>
    </>
  );
};

export default DevHuman;