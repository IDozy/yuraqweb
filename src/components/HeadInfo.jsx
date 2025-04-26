import React from "react";
import { Box, Button, Container, Typography, Grid, Stack } from "@mui/material";
import {
  MailOutline as MailIcon,
  PhoneOutlined as PhoneIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const HeadInfo = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          py: 0.5,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
              >
                <MailIcon />
                <Typography variant="body2">
                  escribanos: ventas@mphuyuyuraq.com
                </Typography>
                <PhoneIcon />
                +51 985632123
                <LocationOnIcon /> Jr. Sor Manuela Gil 2, Cajamarca
              
                <a
                  href="https://web.facebook.com/minphuyuii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ color: "white", fontSize: 28 }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/minera-phuyu-yuraq-ll-eirl-a6991064/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ color: "white", fontSize: 28 }} />
                </a>

              </Stack>
            
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeadInfo;
