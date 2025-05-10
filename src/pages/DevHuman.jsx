import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SlideHuman from '../components/DevHuman/SlideHuman';


const DevHuman = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideHuman/>
      <Footer/>
    </>
  );
};

export default DevHuman;