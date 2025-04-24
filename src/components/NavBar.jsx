import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 1 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#002f6c",
            px: 2,
            py: 1,
            mt: -5, // 👈 Subir el navbar
            position: "relative",
            zIndex: 10,
           
          }}
        >
          <Toolbar disableGutters sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
           

            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
              <Button sx={{ color: "#fff" }} component={Link} to="https://mycal.com.pe/">
                INICIO
              </Button>
              <Button sx={{ color: "#fff" }} component={Link} to="https://mycal.com.pe/la-empresa/">
                LA EMPRESA
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#00e0dd",
                  "&:hover": { backgroundColor: "#00bfbf" },
                }}
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
                    to={`https://mycal.com.pe/productos/${slug}/`}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Menu>
              <Button sx={{ color: "#fff" }} component={Link} to="https://mycal.com.pe/nuestros-clientes/">
                NUESTROS CLIENTES
              </Button>
              <Button sx={{ color: "#fff" }} component={Link} to="https://mycal.com.pe/gestion-de-seguridad/">
                GESTIÓN DE SEGURIDAD
              </Button>
              <Button sx={{ color: "#fff" }} component={Link} to="https://mycal.com.pe/tu-despacho/">
                TU DESPACHO
              </Button>
              <Button
                sx={{
                  backgroundColor: "#8dc63f",
                  color: "#fff",
                  fontWeight: "bold",
                  ml: 1,
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
                ¡CONSULTAR AHORA!
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
