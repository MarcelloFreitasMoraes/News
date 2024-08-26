import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const ContactIcons: React.FC = () => {
  return (
    <>
      <IconButton
        color="primary"
        href="https://www.instagram.com/wallstreetjournal"
      >
        <Instagram />
      </IconButton>
      <IconButton
        color="primary"
        href="https://www.facebook.com/wallstreetjournal"
      >
        <Facebook />
      </IconButton>
      <IconButton color="primary" href="https://wa.me/5511999998888">
        <WhatsApp />
      </IconButton>
    </>
  );
};

export default ContactIcons;
