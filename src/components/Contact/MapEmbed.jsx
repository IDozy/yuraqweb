import React from "react";
import "./MapEmbed.css";

const MapComponent = () => {
  return (
    <div className="map-section">
      <h2 className="map-title">Ubica Nuestras Oficinas</h2>
      <div className="map-container">
        <iframe
          title="Mapa de ubicación Oficinas Minera Phuyuyuraq II"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.7044151292316!2d-78.51016300165546!3d-7.147071781817587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25af21a43b0cf%3A0xe07af8ffbe9129d5!2sJr.%20Sor%20Manuela%20Gil%20341-325%2C%20Cajamarca%2006001!5e0!3m2!1ses!2spe!4v1746901105955!5m2!1ses!2spe"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
    </div>
  );
};

export default MapComponent;

