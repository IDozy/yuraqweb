import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ProductItem.css"; // para los estilos

export default function ProductItem({ image, title, description, chemistry, identification, usage }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="rounded-xl w-full" />
      </div>
      <section className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold">{title}</h2>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">Descripción</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">Información Química</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{chemistry}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">Identificación del Producto</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{identification}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">Ejemplos de Uso</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{usage}</Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </motion.div>
  );
}