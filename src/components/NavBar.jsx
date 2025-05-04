import React from "react";
import { Box, Button, Menu, MenuItem, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElCompromiso, setAnchorElCompromiso] = React.useState(null);

  const openProducts = Boolean(anchorElProducts);
  const openCompromiso = Boolean(anchorElCompromiso);

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 1 }}>
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ backgroundColor: "#000", position: "relative", zIndex: 10, mt: -5 }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: "64px !important",
              height: "64px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            {/* Sección izquierda */}
            <Box sx={{ display: "flex", alignItems: "center", height: "100%", flexGrow: 1 }}>
              <NavButton to="/" label="INICIO" />
              <NavButton to="/nosotros" label="NUESTRA EMPRESA" />

              {/* Productos Menu */}
              <Button sx={navButtonStyle("var(--color-primary)")} onClick={handleMenuOpen(setAnchorElProducts)}>
                PRODUCTOS
              </Button>
              <Menu anchorEl={anchorElProducts} open={openProducts} onClose={handleMenuClose(setAnchorElProducts)}>
                {[
                  ["Cal Viva Molida", "cal-viva-molida"],
                  ["Cal Viva Granulada", "cal-viva-granulada"],
                  ["Cal Hidratada Industrial", "cal-hidratada-industrial"],
                  ["Cal Hidratada Agrícola", "cal-hidratada-agricola"],
                  
                ].map(([name, slug]) => (
                  <MenuItem key={slug} onClick={handleMenuClose(setAnchorElProducts)} component={Link} to={`/${slug}/`}>
                    {name}
                  </MenuItem>
                ))}
              </Menu>

              <NavButton to="/produccion" label="CENTROS DE PRODUCCION" />

              {/* Compromiso Menu */}
              <Button sx={navButtonStyle("")} onClick={handleMenuOpen(setAnchorElCompromiso)}>
                NUESTRO COMPROMISO
              </Button>
              <Menu anchorEl={anchorElCompromiso} open={openCompromiso} onClose={handleMenuClose(setAnchorElCompromiso)}>
                {[
                  ["Responsabilidad Social", "responsabilidad-social"],
                  ["Seguridad", "seguridad"],
                  ["Desarrollo Humano", "desarrollo-humano"],
                ].map(([name, slug]) => (
                  <MenuItem key={slug} onClick={handleMenuClose(setAnchorElCompromiso)} component={Link} to={`/${slug}/`}>
                    {name}
                  </MenuItem>
                ))}
              </Menu>

              <NavButton to="/contacto" label="CONTÁCTANOS" />
            </Box>

            {/* Botón de WhatsApp */}
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
  px: 3,
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
