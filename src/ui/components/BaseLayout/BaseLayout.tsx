import React from "react";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { keyframes as emotionKeyframes } from "@emotion/react";

// Definindo a animação keyframes
const decrescendo = emotionKeyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`;

const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#f4f4f4",
        overflow: "hidden",
        zIndex: 0,

        "&:before": {
          content: '""',
          display: "block",
          width: "1400px",
          height: "1400px",
          position: "absolute",
          zIndex: 4,
          right: "-450px",
          bottom: "-700px",
          backgroundColor: "transparent",
          border: "30px solid #d19c47",
          borderRadius: "50%",
          animation: `${decrescendo} 2.5s alternate infinite ease-in`,
        },

        "&:after": {
          content: '""',
          display: "block",
          width: "900px",
          height: "900px",
          position: "absolute",
          zIndex: 5,
          right: "-200px",
          bottom: "-450px",
          backgroundColor: "#d19c47",
          borderRadius: "50%",
          animation: `${decrescendo} 2.5s alternate infinite ease-in`,
        },
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
