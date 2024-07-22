import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={require("../../assets/awslogo.png")} alt="AWS Logo" />
          <p>Welcome to the Advanced World Systems, Advanced World Solutions webpage, trusted IT offshore leader engaged in consulting, technology, and outsourcing solutions.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/servicesandsolutions">Services & Solutions</a></li>
            <li><a href="/contact">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Call Us</h3>
          <ul>
            <li>
              <a href="tel:+81(3)-5803-7339">Japan Head Office (Ubicom Holdings, Inc.)</a>
              <p>+81(3)-5803-7339</p>
            </li>
            <li>
              <a href="tel:+63(2)-8807-5521">Philippine Head Office (Manila)</a>
              <p>+63(2)-8807-5521</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2023 © All Rights Reserved.</p>
        <ul>
          <li><a href="https://www.awsys-i.com/en/qp.php">Quality Policy</a></li>
          <li><a href="https://www.awsys-i.com/en/isp.php">Information Security Policy</a></li>
          <li><a href="https://www.awsys-i.com/en/pipp.php">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;