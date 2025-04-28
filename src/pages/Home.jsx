import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Slideshow from "../components/SlideShow";
import ExpeInfo from "../components/ExpeInfo";
import Footer from "../components/Footer";
import CounterHome from "../components/Home/CounterHOme";
import WhyHome from "../components/Home/WhyHome";
import CertifHome from '../components/Home/CertifHome';

const Home = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <Slideshow/>
      <ExpeInfo/>
      <CounterHome/>
      <WhyHome/>
      <CertifHome/>
      <Footer/>
    
    </>
  );
};

export default Home;
