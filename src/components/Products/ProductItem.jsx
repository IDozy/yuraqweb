import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ProductItem.css";

export default function ProductItem({ image, title, description, chemistry, identification, usage }) {
  return (
    <motion.div
      className="product-item-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      
      <section className="product-info-container">
        <h2 className="product-title">{title}</h2>

        <Accordion className="custom-accordion">
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon className="accordion-icon" />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">Descripción</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography className="accordion-content">{description}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="custom-accordion">
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon className="accordion-icon" />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">Información Química</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography className="accordion-content">{chemistry}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="custom-accordion">
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon className="accordion-icon" />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">Identificación del Producto</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography className="accordion-content">{identification}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="custom-accordion">
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon className="accordion-icon" />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">Ejemplos de Uso</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography className="accordion-content">{usage}</Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </motion.div>
  );
}