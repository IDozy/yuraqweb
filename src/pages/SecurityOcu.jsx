import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import SlideSecu from '../components/SecurityOcu/SlideSecu';
import Footer from "../components/Footer";


const SecurityOcu = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideSecu/>
      <Footer/>
    </>
  );
};

export default SecurityOcu;