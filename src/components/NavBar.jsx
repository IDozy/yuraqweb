import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElProducts, setAnchorElProducts] = useState(null);
  const [anchorElCompromiso, setAnchorElCompromiso] = useState(null);

  const openProducts = Boolean(anchorElProducts);
  const openCompromiso = Boolean(anchorElCompromiso);

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navButtonStyle = (bgColor = "transparent") => ({
    color: "#fff",
    backgroundColor: bgColor,
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "0.7rem",
    height: "64px",
    borderRadius: 0,
    pl: 2.5,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "var(--color-primary)",
    },
    width: "100%",
    justifyContent: "flex-start",
  });

  const NavButton = ({ to, label }) => (
    <Button
      sx={navButtonStyle()}
      component={Link}
      to={to}
      onClick={toggleDrawer(false)}
    >
      {label}
    </Button>
  );

  const menuItems = [
    { label: "INICIO", to: "/" },
    { label: "NUESTRA EMPRESA", to: "/nosotros" },
    {
      label: "PRODUCTOS",
      subItems: [
        { label: "Cal Viva Granulada", to: "/cal-viva-granulada/" },
        { label: "Cal Viva Molida", to: "/cal-viva-molidada/" },
        { label: "Cal Hidratada Agrícola", to: "/cal-hidratada-agricola/" },
        { label: "Cal Hidratada Industrial", to: "/cal-hidratada-industrial/" },
      ],
    },
    { label: "CENTROS DE PRODUCCION", to: "/produccion" },
    {
      label: "NUESTRO COMPROMISO",
      subItems: [
        { label: "Responsabilidad Social", to: "/responsabilidad-social" },
        { label: "Seguridad", to: "/seguridad" },
        { label: "Desarrollo Humano", to: "/desarrollo-humano" },
      ],
    },
    { label: "CONTÁCTANOS", to: "/contacto" },
  ];

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
            {!isMobile ? (
              <>
                {/* Desktop Navigation */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    flexGrow: 1,
                  }}
                >
                  <NavButton to="/" label="INICIO" />
                  <NavButton to="/nosotros" label="NUESTRA EMPRESA" />

                  {/* Productos Menu */}
                  <Button
                    sx={navButtonStyle()}
                    onClick={handleMenuOpen(setAnchorElProducts)}
                  >
                    PRODUCTOS
                  </Button>
                  <Menu
                    anchorEl={anchorElProducts}
                    open={openProducts}
                    onClose={handleMenuClose(setAnchorElProducts)}
                  >
                    {menuItems[2].subItems.map((item) => (
                      <MenuItem
                        key={item.to}
                        onClick={handleMenuClose(setAnchorElProducts)}
                        component={Link}
                        to={item.to}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>

                  <NavButton to="/produccion" label="CENTROS DE PRODUCCION" />

                  {/* Compromiso Menu */}
                  <Button
                    sx={navButtonStyle()}
                    onClick={handleMenuOpen(setAnchorElCompromiso)}
                  >
                    NUESTRO COMPROMISO
                  </Button>
                  <Menu
                    anchorEl={anchorElCompromiso}
                    open={openCompromiso}
                    onClose={handleMenuClose(setAnchorElCompromiso)}
                  >
                    {menuItems[4].subItems.map((item) => (
                      <MenuItem
                        key={item.to}
                        onClick={handleMenuClose(setAnchorElCompromiso)}
                        component={Link}
                        to={item.to}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>

                  <NavButton to="/contacto" label="CONTÁCTANOS" />
                </Box>

                {/* WhatsApp Button */}
                <Box
                  sx={{ height: "100%", display: "flex", alignItems: "center" }}
                >
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
                    href="https://wa.me/51976865540"
                    target="_blank"
                    startIcon={<WhatsAppIcon sx={{ width: 20, height: 20 }} />}
                  >
                    ¡CONSULTA AHORA!
                  </Button>
                </Box>
              </>
            ) : (
              <>
                {/* Mobile Navigation */}
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ color: "#fff", mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>

                {/* WhatsApp Button Mobile */}
                <Button
                  sx={{
                    backgroundColor: "#8dc63f",
                    color: "#fff",
                    fontWeight: "bold",
                    px: 1,
                    height: "64px",
                    borderRadius: 0,
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "#76b82a",
                    },
                  }}
                  href="https://wa.me/51976865540"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ width: 20, height: 20 }} />
                </Button>
              </>
            )}
          </Toolbar>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#1e1e1e",
            color: "#fff",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.subItems ? (
                  <>
                    <ListItem
                      button
                      sx={{
                        "&:hover": {
                          backgroundColor: "#ffc300",
                          color: "#000",
                        },
                        px: 3,
                        fontWeight: 600,
                        transition: "all 0.3s",
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        button
                        key={subIndex}
                        component={Link}
                        to={subItem.to}
                        sx={{
                          pl: 5,
                          py: 1.2,
                          fontSize: "0.9rem",
                          color: "#ccc",
                          "&:hover": {
                            backgroundColor: "#ffc300",
                            color: "#000",
                          },
                          transition: "all 0.3s",
                        }}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                    <Divider sx={{ my: 1, borderColor: "#444" }} />
                  </>
                ) : (
                  <>
                    <ListItem
                      button
                      component={Link}
                      to={item.to}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#ffc300",
                          color: "#000",
                        },
                        px: 3,
                        transition: "all 0.3s",
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                    <Divider sx={{ my: 1, borderColor: "#444" }} />
                  </>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default NavBar;
