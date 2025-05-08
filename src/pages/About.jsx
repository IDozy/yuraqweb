import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import CarrouselAbout from "../components/About/CarrouselAbout";
import CardAbout from "../components/About/CardAbout";
import ValoresCorporativos from "../components/About/ValoresCorporativos";
import MisionAbout from '../components/About/MisionAbout';
import VisionAbout from '../components/About/VisionAbout';
import PremiacionSlide from '../components/About/PremiacionSlide';
import Reconocimientos from '../components/About/Reconocimientos';
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <CarrouselAbout/>
      <CardAbout/>
      <ValoresCorporativos/>
      <MisionAbout/>
      <VisionAbout/>
      <PremiacionSlide/>
      <Reconocimientos/>
      <Footer/>
    </>
  );
};

export default About;