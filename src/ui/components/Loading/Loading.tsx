import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <CircularProgress sx={{ position: "relative", top: "30vh" }} />
    </Box>
  );
};
export default Loading;
