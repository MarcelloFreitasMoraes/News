import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { TeamMember } from "../../ui/components";
import { sections, teamMembers } from "../../ui/utils/mock/about";
import { SectionText, SectionTitle } from "../../ui/utils/section-title-text";

const About: React.FC = () => {
  const { t } = useTranslation();  

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={3}
        sx={{ padding: { xs: 2, sm: 4 }, marginTop: { xs: 2, sm: 4 }, position: 'relative', zIndex: 10  }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("About The Wall Street Journal")}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {t(
              "Bringing you the latest news, insights, and analysis from around the world."
            )}
          </Typography>
        </Box>

        <Grid container spacing={4} mb={4}>
          {sections?.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <SectionTitle title={`${t(section?.title)}`} />
              <SectionText text={`${t(section?.text)}`} />
            </Grid>
          ))}
        </Grid>

        <Box mb={4}>
          <SectionTitle title={t("Meet Our Team")} />
          <Grid container spacing={4}>
            {teamMembers?.map((member, index) => (
              <TeamMember
                key={index}
                name={`${t(member.name)}`}
                role={`${t(member.role)}`}
                imageSrc={`${t(member.imageSrc)}`}
                altText={`${t(member.altText)}`}
              />
            ))}
          </Grid>
        </Box>

        <Box>
          <SectionTitle title={t("Contact Us")} />
          <SectionText
            text={t(
              "We would love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to reach out to us at "
            )}
          />
          <Typography variant="body1">
            <a href="mailto:contact@wallstreetjournal.com">
              contact@wallstreetjournal.com
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
