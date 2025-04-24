import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedIcon from "@mui/icons-material/Verified";

const HeadeIso = () => {
 

  return (
    <header>
      {/* Barra superior de contacto */}
      <Box
  sx={{
    backgroundColor: "#ffffff",
  
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Grid
    container
    spacing={2}
    alignItems="center"
    justifyContent="space-between"
    sx={{ maxWidth: "1200px", width: "100%", px: 3 }}
  >
    {/* Logo */}
    <Grid item xs={12} md={4} display="flex" justifyContent="flex-start">
      <Box component="img" src="/logo.png" alt="Logo Mycal" height={80} />
    </Grid>

    
   

    {/* ISO */}
    <Grid item xs={12} md={4} display="flex" justifyContent="flex-end">
    <Box display="flex" alignItems="center" gap={2}>
        <EmailIcon sx={{ color: "#00ACC1", fontSize: 40 }} />
        <Box>
          <Typography variant="body1" fontWeight="bold" color="#00ACC1">
            ESCRÍBANOS
          </Typography>
          <Typography variant="body1" color="#37474F">
            ventas@mycal.com.pe
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src="/iso.png" alt="Certificado ISO" height={60} />
        <Box>
          <Typography variant="body1" fontWeight="bold" color="#00ACC1">
            RUMBO AL
          </Typography>
          <Typography variant="body1" color="#37474F">
            ISO
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>


      
    </header>
  );
};

export default HeadeIso;
