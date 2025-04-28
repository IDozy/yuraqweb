// src/components/ValoresCorporativos.jsx
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Security, Favorite, VerifiedUser, Lightbulb, AssignmentTurnedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

const valores = [
  { nombre: "Seguridad",descripcion:"Comprometidos con la seguridad.", icono: Security, color: "primary" },
  { nombre: "Compromiso",descripcion:"Con la sociedad.", icono: Favorite, color: "error" },
  { nombre: "Integridad",descripcion:"asegurada.", icono: VerifiedUser, color: "success" },
  { nombre: "Lealtad",descripcion:"Con nuestros clientes", icono: Lightbulb, color: "warning" },
  { nombre: "Responsabilidad",descripcion:"Con la sociedad.", icono: AssignmentTurnedIn, color: "secondary" },
];

// animación de bounce para el hover
const bounceTransition = {
  type: "spring",
  stiffness: 500,
  damping: 15,
};

const ValoresCorporativos = () => {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        Valores Corporativos
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {valores.map((valor, index) => {
          const Icono = valor.icono;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "250px",
                    textAlign: "center",
                    padding: 2,
                    borderRadius: "20px",
                    boxShadow: 3,
                    backgroundColor: "#fff",
                    cursor: "pointer",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={bounceTransition}
                  >
                    <Icono fontSize="large" color={valor.color} />
                  </motion.div>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {valor.nombre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {valor.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ValoresCorporativos;
