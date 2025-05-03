import React, { useState } from "react";
import ModalWhatsapp from "./ModalWhatsapp";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Whatsappbutton.css";

const WhatsAppButton = ({ imageCompany, companyName }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="whatsapp-btn__container">
        <button 
          onClick={toggleModal}
          className="whatsapp-btn__button"
          aria-label="Abrir chat de WhatsApp"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="whatsapp-btn__icon"
          />
        </button>
      </div>

      {showModal && (
        <div 
          className={`whatsapp-modal__container ${!showModal ? 'whatsapp-modal__container--closing' : ''}`}
        >
          <ModalWhatsapp
            onClose={toggleModal}
            imageCompany={imageCompany}
            company={companyName}
          />
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;