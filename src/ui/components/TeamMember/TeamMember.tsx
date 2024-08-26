import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

type Props = {
    name: string;
    role: string;
    imageSrc: string;
    altText: string;
  }

const TeamMember: React.FC<Props> = ({name, role, imageSrc, altText}) => {
  return (
    <Grid item xs={12} sm={4}>
    <Box textAlign="center">
      <Avatar
        src={imageSrc}
        alt={altText}
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <Typography variant="h6" mt={2}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {role}
      </Typography>
    </Box>
  </Grid>
  )
}

export default TeamMember;