import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";

import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import { ContactForms, ContactIcons, ContactInfo, LocationMap } from "./components";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, sm: 4 }, position: 'relative', zIndex: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {t("Contact Us")}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          {t(
            "We are here to help! Get in touch with us using the form below or through our contact information."
          )}
        </Typography>

        <Box mt={4} mb={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ContactInfo />
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  {t("Follow Us")}
                </Typography>
                <Box>
                  <ContactIcons />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {t("Contact Form")}
              </Typography>
              <ContactForms />
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            {t("Our Location")}
          </Typography>
         <LocationMap />
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
