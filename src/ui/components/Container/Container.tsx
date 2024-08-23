import { Container as MUIContainer } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <MUIContainer sx={{margin:'0 auto'}}>{children}</MUIContainer>;
};

export default Container;
