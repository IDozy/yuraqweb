import React from "react";
import HeadInfo from "../components/HeadInfo";
import HeadeIso from "../components/HeadIso";
import NavBar from "../components/NavBar";
import Slideshow from "../components/SlideShow";
import ExpeInfo from "../components/ExpeInfo";


const Home = () => {
  return (
    <>
      <HeadInfo />
      <HeadeIso />
      <NavBar/>
      <Slideshow/>
      <ExpeInfo/>
    </>
  );
};

export default Home;
