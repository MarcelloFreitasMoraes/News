import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
