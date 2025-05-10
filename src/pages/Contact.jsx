import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Contacto from "../components/Contact/Contacto";
import MapEmbed from '../components/Contact/MapEmbed';
import Footer from '../components/Footer';



const Contact = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <Contacto/>
      <MapEmbed/>
      <Footer/>
    </>
  );
};

export default Contact;