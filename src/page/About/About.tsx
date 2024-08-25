import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, sm: 4 }, marginTop: { xs: 2, sm: 4 } }}>
        
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t('About The Wall Street Journal')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {t('Bringing you the latest news, insights, and analysis from around the world.')}
          </Typography>
        </Box>

        {/* Seção de Missão e Visão */}
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {t('Our Mission')}
            </Typography>
            <Typography variant="body1">
              {t('At The Wall Street Journal, our mission is to deliver accurate, timely, and in-depth news coverage. We strive to be a trusted source of information for our readers, providing them with the insights they need to make informed decisions.')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {t('Our Vision')}
            </Typography>
            <Typography variant="body1">
              {t('Our vision is to be the leading news outlet globally, known for our commitment to integrity, quality journalism, and comprehensive reporting. We aim to shape the future of news by embracing innovation and adapting to the changing needs of our audience.')}
            </Typography>
          </Grid>
        </Grid>

        {/* Seção de História */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            {t('Our History')}
          </Typography>
          <Typography variant="body1">
            {t('The Wall Street Journal was founded with the goal of providing in-depth and reliable news to readers worldwide. Over the years, we have grown into a leading news organization, recognized for our thorough reporting, expert analysis, and balanced perspectives. Our history is rooted in a tradition of excellence, and we continue to build on that legacy today.')}
          </Typography>
        </Box>

        {/* Seção de Equipe */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            {t('Meet Our Team')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar 
                  src="path-to-avatar1.jpg" 
                  alt={t('Editor in Chief')} 
                  sx={{ width: 100, height: 100, margin: 'auto' }} 
                />
                <Typography variant="h6" mt={2}>
                  {t('John Doe')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('Editor in Chief')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar 
                  src="path-to-avatar2.jpg" 
                  alt={t('Senior Reporter')} 
                  sx={{ width: 100, height: 100, margin: 'auto' }} 
                />
                <Typography variant="h6" mt={2}>
                  {t('Jane Smith')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('Senior Reporter')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Avatar 
                  src="path-to-avatar3.jpg" 
                  alt={t('Lead Designer')} 
                  sx={{ width: 100, height: 100, margin: 'auto' }} 
                />
                <Typography variant="h6" mt={2}>
                  {t('Alice Johnson')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('Lead Designer')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Seção de Nossos Valores */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            {t('Our Core Values')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('Integrity, excellence, and responsibility are at the heart of everything we do at The Wall Street Journal. These values guide our work and ensure that we provide our readers with the highest standard of journalism.')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('We believe in the power of truth and the importance of delivering news that is not only accurate but also fair and balanced. Our commitment to these principles is unwavering, and it is what sets us apart in the world of journalism.')}
          </Typography>
        </Box>

        {/* Seção de Contato */}
        <Box>
          <Typography variant="h6" gutterBottom>
            {t('Contact Us')}
          </Typography>
          <Typography variant="body1">
            {t('We would love to hear from you! If you have any questions, comments, or feedback, please don\'t hesitate to reach out to us at ')}
            <a href="mailto:contact@wallstreetjournal.com">contact@wallstreetjournal.com</a>.
          </Typography>
        </Box>

      </Paper>
    </Container>
  );
};

export default About;
