import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import CarrouselAbout from "../components/CarrouselAbout";
import CardAbout from "../components/CardAbout";


const About = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <CarrouselAbout/>
      <CardAbout/>
    </>
  );
};

export default About;