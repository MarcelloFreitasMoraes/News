import { Link } from 'react-router-dom';
import { AppBar, Button, MenuItem, Select, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/I18n/i18n';

const Header: React.FC = () => {    
    const languageContext = useContext(LanguageContext);
    if (!languageContext) {
      throw new Error('LanguageContext must be used within a LanguageProvider');
    }
  
    const { changeLanguage } = languageContext;
    const { t } = useTranslation();
  
  return (
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">{t('home')}</Button>
      <Button color="inherit" component={Link} to="/about">{t('about')}</Button>
      <Button color="inherit" component={Link} to="/contact">{t('contact')}</Button>
      <Select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        style={{ marginLeft: 'auto' }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="pt">Português</MenuItem>
      </Select>
    </Toolbar>
  </AppBar>
  )
}

export default Header;