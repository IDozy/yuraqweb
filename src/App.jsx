import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plants from "./pages/Plants";
import DevHuman from "./pages/DevHuman";
import RespSocial from "./pages/RespSocial";
import SecurityOcu from "./pages/SecurityOcu";
import CalAgricola from "./pages/CalAgricola";
import Calindustrial from "./pages/Calindustrial";
import CalGranulada from "./pages/CalGranulada";
import CalMolida from "./pages/CalMolida";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Whatsapp from "./components/whatsappbutton/Whatsapp";

const MycalPage = () => {
  return (
    <>
      <Whatsapp />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/produccion" element={<Plants />} />
          <Route path="/responsabilidad-social" element={<RespSocial />} />
          <Route path="/seguridad" element={<SecurityOcu />} />
          <Route path="/desarrollo-humano" element={<DevHuman />} />
          <Route path="/cal-hidratada-agricola" element={<CalAgricola />} />
          <Route path="/cal-hidratada-industrial" element={<Calindustrial/>} />
          <Route path="/cal-viva-granulada" element={<CalGranulada />} />
          <Route path="/cal-viva-molida" element={<CalMolida/>} />
          <Route path="/politicas-privacidad" element={<PoliticasPrivacidad/>} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MycalPage;
