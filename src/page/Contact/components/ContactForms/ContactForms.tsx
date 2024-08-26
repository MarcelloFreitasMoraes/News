import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


const ContactForms: React.FC = () => {
    const { t } = useTranslation();
  return (
    <form noValidate autoComplete="off">
    <TextField
      label={t("Name")}
      variant="outlined"
      fullWidth
      margin="normal"
      required
    />
    <TextField
      label={t("E-mail")}
      variant="outlined"
      fullWidth
      margin="normal"
      required
      type="email"
    />
    <TextField
      label={t("Subject")}
      variant="outlined"
      fullWidth
      margin="normal"
      required
    />
    <TextField
      label={t("Message")}
      variant="outlined"
      fullWidth
      margin="normal"
      required
      multiline
      rows={4}
    />
    <Box textAlign="center" mt={2}>
      <Button variant="contained" color="primary" type="submit">
      {t('Send')}
      </Button>
    </Box>
  </form>
  )
}

export default ContactForms;