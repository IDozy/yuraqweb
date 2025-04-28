import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import CarrouselAbout from "../components/CarrouselAbout";
import CardAbout from "../components/CardAbout";
import ValoresCorporativos from "../components/ValoresCorporativos";
import MisionAbout from '../components/MisionAbout';
import VisionAbout from '../components/VisionAbout';
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
    </>
  );
};

export default About;