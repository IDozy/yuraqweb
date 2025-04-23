import React from "react";
import { Box, Button, Container, Typography, Grid, Stack } from "@mui/material";
import { Mail, Phone, Facebook, Twitter, Instagram } from "@mui/icons-material";

const HeadInfo = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#003366",
          color: "white",
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h6">MYCAL</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}
              >
                <Mail />
                <Typography variant="body2">
                  escribanos@ventas@mycal.com.pe
                </Typography>
                <Phone />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeadInfo;
