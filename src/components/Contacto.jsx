import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { Room, Phone, Email } from "@mui/icons-material";

export default function Contacto() {
  return (
    <Box
      component="main"
      sx={{
        py: 5,
        px: 2,
        maxWidth: "1400px",
        mx: "auto",
        display: "flex",          // <- esto hace que estén al costado
        flexWrap: "wrap",          // <- que en celular baje
        gap: 4,                    // <- espacio entre columnas
      }}
    >
      {/* Sección de Información */}
      <Box
        component="section"
        sx={{
          flex: "1 1 500px",      // <- ocupa la mitad más o menos
          minWidth: "300px", 
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ¡Contáctanos!
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Room color="error" sx={{ mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Oficina</Typography>
            <Typography>Calle Coronel Andrés Reyes 360, San Isidro, Lima, Perú</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Room color="error" sx={{ mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Planta</Typography>
            <Typography>Pampa de fundición Urinsaya II, Callalli, Caylloma, Arequipa</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Phone color="error" sx={{ mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Teléfono:</Typography>
            <Typography>(01) 408–0214</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Email color="error" sx={{ mr: 2 }} />
          <Box>
            <Typography fontWeight="bold">Correo:</Typography>
            <Typography>ventascali@calidra.com.pe</Typography>
          </Box>
        </Box>
      </Box>

      {/* Sección de Formulario */}
      <Box
        component="section"
        sx={{
          flex: "1 1 500px",      // <- ocupa la mitad más o menos
          minWidth: "300px",
          backgroundColor: "#f0f4f8",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" fontWeight="medium" mb={3}>
          Completa el siguiente formulario y uno de nuestros asesores se comunicará contigo.
        </Typography>

        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Nombre y Apellido*" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Dirección*" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Correo*" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Teléfono*" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Mensaje" fullWidth variant="outlined" multiline rows={4} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" size="large" fullWidth>
                ENVIAR
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
