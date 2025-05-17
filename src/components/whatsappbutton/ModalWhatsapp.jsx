import React, { useState, useEffect } from "react";
import "./ModalWhatsapp.css";

const ModalWhatsapp = ({ onClose, imageCompany, company }) => {
  const [message, setMessage] = useState("");
  const [whatsappURL, setWhatsappURL] = useState("");

  useEffect(() => {
    const phoneNumber = "51976865540"; // Reemplaza con tu número
    const text = message || "Hola, tengo una consulta";
    const encodedText = encodeURIComponent(text);
    
    setWhatsappURL(`https://wa.me/${phoneNumber}?text=${encodedText}`);
  }, [message]);

  const handleSend = () => {
    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="whatsapp-modal__content">
      <div className="whatsapp-modal__header">
        {imageCompany && (
          <img 
            src={imageCompany} 
            alt="Logo" 
            className="whatsapp-modal__company-img" 
          />
        )}
        
        <div className="whatsapp-modal__header-text">
          <h3>{company || "Soporte"}</h3>
          <p>Normalmente respondemos en minutos</p>
        </div>
        
        <button 
          onClick={onClose}
          className="whatsapp-modal__close-btn"
          aria-label="Cerrar chat"
        >
          &times;
        </button>
      </div>

      <div className="whatsapp-modal__body">
        <div className="whatsapp-modal__bubble">
          <div className="whatsapp-modal__bubble-title">
            {company || "Soporte"}
          </div>
          <p className="whatsapp-modal__bubble-text">
            ¡Hola! ¿En qué podemos ayudarte?
          </p>
          <div className="whatsapp-modal__bubble-time">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
      </div>

      <div className="whatsapp-modal__input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="whatsapp-modal__input"
        />
        <button 
          onClick={handleSend}
          className="whatsapp-modal__send-btn"
          aria-label="Enviar mensaje"
        >
          <svg 
            viewBox="0 0 30 25" 
            className="whatsapp-modal__send-icon"
          >
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalWhatsapp;