import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import icon from '../../assets/nav-icon-hover.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine if the current path is the contact page
  const isContactPage = location.pathname === '/contact';

  // Language toggle handler
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <header className={`App-header ${isScrolled ? 'scrolled' : 'transparent'} ${isContactPage ? 'contact-header' : ''}`}>
      <Link to="/" className="nav-icon-link">
        <div className="nav-icon">
          <img className="nav-icon-img" src={icon} alt="Icon" />
          <p>Member of Ubicom Group</p>
        </div>
      </Link>
      <nav>
        <Link to="/about">{t('about')}</Link>
        <Link to="/servicesandsolutions">{t('serv_sol')}</Link>
        <Link to="/careers">{t('careers')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </nav>
      <button onClick={toggleLanguage} className="language-toggle-button">
        {language === 'en' ? '日本語' : 'ENGLISH'}
      </button>
    </header>
  );
}

export default Header;
