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
import { ForwardToInbox } from "@mui/icons-material";
import { Mail } from "lucide-react";

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
      <Box component="img" src="/Logo_Phuyuyuraq.jpg" alt="Logo Mycal" height={170} />
    </Grid>

    
   

    {/* ISO */}
    <Grid item xs={12} md={4} display="flex" justifyContent="flex-end">
    <Box display="flex" alignItems="center" gap={2}>
    <Mail className="relative -top-[15px]" color="var(--color-primary)" size={65} strokeWidth={.8} />
          <Box position="relative" top="-15px">
          <Typography variant="body1" fontWeight="bold" color="var(--color-primary)">
            ESCRÍBANOS
          </Typography>
          <Typography variant="body1" color="#37474F">
            minphuyuii@yahoo.es
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src="/iso14001.png" alt="Certificado ISO" height={110} mx={2}/>
        
        
      </Box>
    </Grid>
  </Grid>
</Box>


      
    </header>
  );
};

export default HeadeIso;
