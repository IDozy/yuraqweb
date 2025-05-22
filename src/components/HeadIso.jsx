import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Mail } from "lucide-react";

const HeadeIso = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Array con rutas de imágenes homologadas
  const homologadasImgs = ["/iso9001.webp", "/iso14001.webp", "/iso45001.webp"];

  return (
    <header>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: isVerySmallScreen ? "auto" : 200,
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
            flexDirection: isVerySmallScreen ? "column" : "row",
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
              src="/logo_phuyuyuraq.webp"
              alt="Logo empresa"
              sx={{
                height: isVerySmallScreen ? 120 : 170,
                maxWidth: "100%",
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
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              gap: isSmallScreen ? 2 : 4,
            }}
          >
            {/* Email */}
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{
                flexDirection: isVerySmallScreen ? "column" : "row",
                textAlign: isVerySmallScreen ? "center" : "left",
              }}
            >
              <Mail
                sx={{
                  color: "var(--color-primary)",
                  fontSize: 65,
                  strokeWidth: 0.8,
                  position: "relative",
                  top: isVerySmallScreen ? 0 : "-15px",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  top: isVerySmallScreen ? 0 : "-15px",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="var(--color-primary)"
                  sx={{ fontSize: isVerySmallScreen ? "0.9rem" : "1rem" }}
                >
                  ESCRÍBANOS
                </Typography>
                <Typography
                  variant="body1"
                  color="#37474F"
                  sx={{ fontSize: isVerySmallScreen ? "0.8rem" : "1rem" }}
                >
                  minphuyuii@yahoo.es
                </Typography>
              </Box>
            </Box>

            {/* Múltiples imágenes de Empresa Homologada */}
            {!isVerySmallScreen && (
              <Box
                display="flex"
                gap={2}
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                  maxWidth: "100%",
                }}
              >
                {homologadasImgs.map((src, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={src}
                    alt={`Certificaciones ISO ${index + 1}`}
                    sx={{
                      width: 100, // ancho fijo
                      height: 100, // alto fijo
                      objectFit: "contain", // asegura que la imagen se ajuste sin deformarse
                      display: "block",
                    }}
                  />
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </header>
  );
};

export default HeadeIso;
