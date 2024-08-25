import React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";

const Footer: React.FC = () => { 
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "auto",
        backgroundColor: "#000",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 768px)": {
          padding: "8px 0",
        },
      }}
      mt={2}
    >
      <Grid item xs={12} sm={6} md={5} paddingTop={'0!important'}>
        <Typography
          color="#FFF"
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          Copyright All Rights Reserved © 2024 |  Desenvolvido por Marcello Moraes
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
