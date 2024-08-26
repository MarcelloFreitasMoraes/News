import { Typography } from "@mui/material";

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
  );
  
 export const SectionText: React.FC<{ text: string }> = ({ text }) => (
    <Typography variant="body1" paragraph>
      {text}
    </Typography>
  );