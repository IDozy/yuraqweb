import React from "react";
import PropTypes from "prop-types";
import WhatsAppButton from "./WhatsAppButton";
import defaultCompanyLogo from "/logo_phuyuyuraq.webp";

const Whatsapp = ({
  companyName = "Minera P'huyu Yuraq",
  logo = defaultCompanyLogo,
}) => {
  return <WhatsAppButton imageCompany={logo} companyName={companyName} />;
};

Whatsapp.propTypes = {
  companyName: PropTypes.string,
  logo: PropTypes.string,
};

export default Whatsapp;
