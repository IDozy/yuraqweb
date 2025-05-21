import React from "react";
import {
  Box,
  Divider,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material"; // Importar los iconos de MUI

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: 4,
        background: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%" }}>
        {" "}
        {/* Contenedor del contenido con el 80% de ancho */}
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item>
            <Box display="flex" alignItems="center">
              <img
                src="logo_phuyuyuraq.webp"
                alt="Logo"
                style={{
                  width: 120,
                  height: 120, // Aseguramos que la imagen sea cuadrada
                  borderRadius: "50%", // Hace que la imagen sea redonda
                }}
              />
            </Box>
          </Grid>

          <Grid item container spacing={4} xs={12} sm={6} md={4}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "var(--color-primary)" }}
              >
                Acerca
              </Typography>
              <Box>
                <Link href="/nosotros" sx={{ color: "#fff", textDecoration: "none" }}>
                  Nosotros
                </Link>
              </Box>
              <Box>
                <Link href="/cal-hidratada-agricola" sx={{ color: "#fff", textDecoration: "none" }}>
                  Productos
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "var(--color-primary)" }}
              >
                Síguenos
              </Typography>
              <Box>
                <Link href="/contacto" sx={{ color: "#fff", textDecoration: "none" }}>
                  Contacto
                </Link>
              </Box>
              <Box>
                <Link href="#" sx={{ color: "#fff", textDecoration: "none" }}>
                  Correo
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "var(--color-primary)" }}
              >
                Legal
              </Typography>
              <Box>
                <Link href="/politicas-privacidad" sx={{ color: "#fff", textDecoration: "none" }}>
                  Politicas de privacidad
                </Link>
              </Box>
              <Box>
                <Link href="/terminos-condiciones" sx={{ color: "#fff", textDecoration: "none" }}>
                  Terminos y condiciones
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{
            margin: "2rem 0",
            borderWidth: 2,
            backgroundColor: "var(--color-primary)",
            opacity: 1,
          }}
        />
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              © Phuyu Yuraq {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex" gap={2}>
              <IconButton href="https://web.facebook.com/minphuyuii" target="_blank" sx={{ color: "#fff" }}>
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/minera-phuyu-yuraq-ll-eirl-a6991064/" target="_blank" sx={{ color: "#fff" }}>
                <LinkedIn fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
