import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {  
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          We are here to help! Get in touch with us using the form below or through our contact information.
        </Typography>

        <Box mt={4} mb={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Email: <a href="mailto:contact@wallstreetjournal.com">contact@wallstreetjournal.com</a>
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: <a href="tel:+551112345678">+55 11 1234-5678</a>
              </Typography>
              <Typography variant="body1" paragraph>
                WhatsApp: <a href="https://wa.me/5511999998888">+55 11 99999-8888</a>
              </Typography>
              <Typography variant="body1" paragraph>
                Address: 1000 Paulista Avenue, São Paulo - SP, 01310-000
              </Typography>

              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box>
                  <IconButton color="primary" href="https://www.instagram.com/wallstreetjournal">
                    <Instagram />
                  </IconButton>
                  <IconButton color="primary" href="https://www.facebook.com/wallstreetjournal">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary" href="https://wa.me/5511999998888">
                    <WhatsApp />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact Form
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Box textAlign="center" mt={2}>
                  <Button variant="contained" color="primary" type="submit">
                    Send
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>

        {/* Map Section */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Our Location
          </Typography>
          <MapContainer center={[-23.561684, -46.655881]} zoom={14} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-23.561684, -46.655881]}>
              <Popup>
                1000 Paulista Avenue, São Paulo - SP, 01310-000
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
