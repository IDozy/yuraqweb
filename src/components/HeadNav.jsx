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
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      {/* Barra superior de contacto */}
      <Box sx={{ backgroundColor: "#f1f1f1", padding: "8px 0" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4} textAlign="center">
            <Typography variant="body2" fontWeight="bold">
              ESCRÍBANOS
            </Typography>
            <Typography variant="body2">ventas@mycal.com.pe</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography variant="body2" fontWeight="bold">
              LLÁMENOS
            </Typography>
            <Typography variant="body2">
              (01) 226-9668 <br /> anexo 105
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography variant="body2" fontWeight="bold">
              RUMBO AL
            </Typography>
            <Typography variant="body2">ISO</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Barra de navegación principal */}
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 0 }}>
        <Toolbar>
          {/* Logo y enlace a la página principal */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="https://mycal.com.pe/">
              <img
                src="https://mycal.com.pe/wp-content/uploads/2019/05/logo2.png"
                alt="MYCAL"
                width="200"
                height="150"
              />
            </Link>
          </Box>

          {/* Menú de navegación */}
          <Box sx={{ display: "flex" }}>
            <Button color="inherit" component={Link} to="https://mycal.com.pe/">
              Inicio
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="https://mycal.com.pe/la-empresa/"
            >
              La empresa
            </Button>

            {/* Menú desplegable de productos */}
            <Button color="inherit" onClick={handleMenu}>
              Productos
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycal-viva/"
              >
                MyCal Viva
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycal-hydra/"
              >
                MyCal Hydra
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycal-de-obra/"
              >
                MyCal de Obra
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycal-agricola/"
              >
                MyCal Agrícola
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycal-vial/"
              >
                MyCal Vial
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="https://mycal.com.pe/productos/mycaliza/"
              >
                MyCaliza
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
