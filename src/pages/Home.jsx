import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import SlideHome from '../components/Home/SlideHome.jsx';
import ExpeInfo from "../components/ExpeInfo";
import Footer from "../components/Footer";
import WhyHome from "../components/Home/WhyHome";
import CertifHome from '../components/Home/CertifHome';
import CardCompanyHome from '../components/Home/CardCompanyHome.jsx';
import PlantsProductionHome from '../components/Home/PlantsProductionHome';
import Whatsapp from "../components/whatsappbutton/Whatsapp.jsx";
import ConfianHome from '../components/Home/ConfianHome.jsx';
import Segmentos from '../components/Home/Segmentos.jsx';
import HuellaCarbono from '../components/Home/HuellaCarbono.jsx';

const Home = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideHome/>
      <ExpeInfo/>
      <WhyHome/>
      <HuellaCarbono/>
      <CertifHome/>
      <CardCompanyHome/>
      <PlantsProductionHome/>
      <Segmentos/>
      <ConfianHome/>
      <Footer/>
      <Whatsapp />
    </>
  );
};

export default Home;
