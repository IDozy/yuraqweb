import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact  from "./pages/Contact";
import Plants from "./pages/Plants";


const MycalPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/produccion" element={<Plants/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MycalPage;
