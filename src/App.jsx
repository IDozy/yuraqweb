import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact  from "./pages/Contact";
import Plants from "./pages/Plants";
import DevHuman from "./pages/DevHuman";
import RespSocial from "./pages/RespSocial";
import SecurityOcu from "./pages/SecurityOcu";


const MycalPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/produccion" element={<Plants/>}/>
        <Route path="/responsabilidad-social" element={<RespSocial/>} />
        <Route path="/seguridad" element={<SecurityOcu/>} />
        <Route path="/desarrollo-humano" element={<DevHuman/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default MycalPage;
