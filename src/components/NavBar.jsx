import React from "react";
import { Box, Button, Menu, MenuItem, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 1 }}>
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            backgroundColor: "#000",
            position: "relative",
            zIndex: 10,
            mt: -5,
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: "64px !important",
              height: "64px",

              justifyContent: "space-between",
              display: "flex",
            }}
          >
            {/* Sección izquierda: Menú de navegación */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",

                flexGrow: 1,
              }}
            >
              <NavButton to="/" label="INICIO" />
              <NavButton
                to="/nosotros"
                label="NUESTRA EMPRESA"
              />
              <Button
                sx={navButtonStyle("var(--color-primary)")}
                onClick={handleMenu}
              >
                PRODUCTOS
              </Button>
              <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                {[
                  ["MyCal Viva", "mycal-viva"],
                  ["MyCal Hydra", "mycal-hydra"],
                  ["MyCal de Obra", "mycal-de-obra"],
                  ["MyCal Agrícola", "mycal-agricola"],
                  ["MyCal Vial", "mycal-vial"],
                  ["MyCaliza", "mycaliza"],
                ].map(([name, slug]) => (
                  <MenuItem
                    key={slug}
                    onClick={handleClose}
                    component={Link}
                    to={`/${slug}/`}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Menu>
              <NavButton
                to="/produccion"
                label="CENTROS  "
              />
              <NavButton
                to="/"
                label="NUESTRO COMPROMISO"
              />
              <NavButton
                to="/contacto"
                label="CONTÁCTANOS"
              />
            </Box>

            {/* Sección derecha: Botón de WhatsApp */}
            <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  backgroundColor: "#8dc63f",
                  color: "#fff",
                  fontWeight: "bold",
                  px: 2,
                  height: "64px",
                  borderRadius: 0,
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  "&:hover": {
                    backgroundColor: "#76b82a",
                  },
                }}
                href="https://wa.me/51999999999"
                target="_blank"
                startIcon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="20"
                  />
                }
              >
                ¡CONSULTA AHORA!
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </Box>
  );
};

const navButtonStyle = (bgColor = "transparent") => ({
  color: "#fff",
  backgroundColor: bgColor,
  textTransform: "uppercase",
  fontWeight: 500,
  fontSize: "0.85rem",
  height: "64px",
  borderRadius: 0,
  px:3,
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "var(--color-primary)",
  },
});

const NavButton = ({ to, label }) => (
  <Button sx={navButtonStyle()} component={Link} to={to}>
    {label}
  </Button>
);

export default NavBar;
