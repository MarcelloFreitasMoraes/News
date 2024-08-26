import React from "react";
import { Typography } from "@mui/material";
import { contactInfo } from "../mock/contact-info";
import { useTranslation } from "react-i18next";

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t("Contact Information")}
      </Typography>
      {contactInfo?.map((info, index) => (
        <Typography variant="body1" paragraph key={index}>
          {t(info.label)}:
          {info.link ? <a href={info.link}>{info.value}</a> : info.value}
        </Typography>
      ))}
    </>
  );
};

export default ContactInfo;
