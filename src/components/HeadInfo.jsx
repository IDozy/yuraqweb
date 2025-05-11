import React from "react";
import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import {
  MailOutline as MailIcon,
  PhoneOutlined as PhoneIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HeadInfo = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{ backgroundColor: "var(--color-primary)", color: "white", py: 0.5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={isSmallScreen ? 1 : 2}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
              sx={{
                flexWrap: 'wrap',
                '& > *': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: isSmallScreen ? '0.75rem' : '0.875rem',
                  whiteSpace: isMediumScreen ? 'nowrap' : 'normal'
                }
              }}
            >
              <Box>
                <AccessTimeIcon fontSize={isSmallScreen ? "small" : "medium"} />
                <span>Lun-Vie: 8am-1pm & 2pm-5pm</span>
              </Box>
              
              <Box>
                <PhoneIcon fontSize={isSmallScreen ? "small" : "medium"} />
                <span>976 865 540 / 978 199 469</span>
              </Box>
              
              {!isSmallScreen && (
                <Box>
                  <LocationOnIcon fontSize={isSmallScreen ? "small" : "medium"} />
                  <span>Jr. Sor Manuela Gil K-2, Cajamarca</span>
                </Box>
              )}

              <Box sx={{ display: 'flex', gap: isSmallScreen ? '12px' : '8px' }}>
                <a href="https://web.facebook.com/minphuyuii" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon sx={{ color: "white", fontSize: isSmallScreen ? 20 : 28 }} />
                </a>
                <a href="https://www.linkedin.com/in/minera-phuyu-yuraq-ll-eirl-a6991064/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: "white", fontSize: isSmallScreen ? 20 : 28 }} />
                </a>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeadInfo;