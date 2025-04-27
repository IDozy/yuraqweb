import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Slideshow from "../components/SlideShow";
import ExpeInfo from "../components/ExpeInfo";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <Slideshow/>
      <ExpeInfo/>
      <Footer/>
    </>
  );
};

export default Home;
