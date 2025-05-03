import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import SlideHome from '../components/Home/SlideHome.jsx';
import ExpeInfo from "../components/ExpeInfo";
import Footer from "../components/Footer";
import CounterHome from "../components/Home/CounterHome";
import WhyHome from "../components/Home/WhyHome";
import CertifHome from '../components/Home/CertifHome';
import CardCompanyHome from '../components/Home/CardCompanyHome.jsx';
import PlantsProductionHome from '../components/Home/PlantsProductionHome';
import Whatsapp from "../components/whatsappbutton/Whatsapp.jsx";
import ConfianHome from '../components/Home/ConfianHome.jsx';

const Home = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <SlideHome/>
      <ExpeInfo/>
      <CounterHome/>
      <WhyHome/>
      <CardCompanyHome/>
      <CertifHome/>
      <PlantsProductionHome/>
      <ConfianHome/>
      <Footer/>
      <Whatsapp />
    </>
  );
};

export default Home;
