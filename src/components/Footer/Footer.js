import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={require("../../assets/awslogo.png")} alt="AWS Logo" />
          <p>{t('footer_welcome')}</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="/about">{t('about')}</a></li>
            <li><a href="/servicesandsolutions">{t('serv_sol')}</a></li>
            <li><a href="/contact">{t('careers')}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="/contact">{t('contact')}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Call Us</h3>
          <ul>
            <li>
              <a href="tel:+81(3)-5803-7339">{t('jap_headoffice')}</a>
              <p>+81(3)-5803-7339</p>
            </li>
            <li>
              <a href="tel:+63(2)-8807-5521">{t('mnl_headoffice')}</a>
              <p>+63(2)-8807-5521</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2023 © All Rights Reserved.</p>
        <ul>
          <li><a href="https://www.awsys-i.com/en/qp.php">{t('qp')}</a></li>
          <li><a href="https://www.awsys-i.com/en/isp.php">{t('isp')}</a></li>
          <li><a href="https://www.awsys-i.com/en/pipp.php">{t('pp')}</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;