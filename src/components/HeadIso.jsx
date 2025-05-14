import React from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Mail } from "lucide-react";

const HeadeIso = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <header>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: isVerySmallScreen ? 'auto' : 200,
          py: isVerySmallScreen ? 2 : 0,
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
          sx={{ 
            maxWidth: "1200px", 
            width: "100%", 
            px: isVerySmallScreen ? 2 : 3,
            flexDirection: isVerySmallScreen ? 'column' : 'row'
          }}
        >
          {/* Logo - Centrado en móviles */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            display="flex" 
            justifyContent={isVerySmallScreen ? "center" : "flex-start"}
            order={isVerySmallScreen ? 2 : 1}
          >
            <Box 
              component="img" 
              src="/Logo_Phuyuyuraq.jpg" 
              alt="Logo Mycal" 
              sx={{
                height: isVerySmallScreen ? 120 : 170,
                maxWidth: '100%'
              }} 
            />
          </Grid>

          {/* ISO y Email - Reorganizado para móviles */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            display="flex" 
            justifyContent={isVerySmallScreen ? "center" : "flex-end"}
            order={isVerySmallScreen ? 1 : 2}
            sx={{
              flexDirection: isSmallScreen ? 'column' : 'row',
              alignItems: 'center',
              gap: isSmallScreen ? 2 : 4
            }}
          >
            {/* Email */}
            <Box 
              display="flex" 
              alignItems="center" 
              gap={2}
              sx={{
                flexDirection: isVerySmallScreen ? 'column' : 'row',
                textAlign: isVerySmallScreen ? 'center' : 'left'
              }}
            >
              <Mail 
                sx={{ 
                  color: "var(--color-primary)", 
                  fontSize: 65,
                  strokeWidth: 0.8,
                  position: 'relative',
                  top: isVerySmallScreen ? 0 : '-15px'
                }} 
              />
              <Box sx={{ 
                position: 'relative',
                top: isVerySmallScreen ? 0 : '-15px'
              }}>
                <Typography 
                  variant="body1" 
                  fontWeight="bold" 
                  color="var(--color-primary)"
                  sx={{ fontSize: isVerySmallScreen ? '0.9rem' : '1rem' }}
                >
                  ESCRÍBANOS
                </Typography>
                <Typography 
                  variant="body1" 
                  color="#37474F"
                  sx={{ fontSize: isVerySmallScreen ? '0.8rem' : '1rem' }}
                >
                  minphuyuii@yahoo.es
                </Typography>
              </Box>
            </Box>

            {/* Certificado ISO */}
            {!isVerySmallScreen && (
              <Box 
                component="img" 
                src="/homologada.png" 
                alt="Certificado ISO" 
                sx={{
                  height: 110,
                  mx: isSmallScreen ? 0 : 2,
                  display: isVerySmallScreen ? 'none' : 'block'
                }}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </header>
  );
};

export default HeadeIso;