import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import icon from '../../assets/nav-icon-hover.png';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header className={`App-header ${isScrolled ? 'scrolled' : 'transparent'} ${isContactPage ? 'contact-header' : ''}`}>
      <Link to="/" className="nav-icon-link">
        <div className="nav-icon">
          <img className="nav-icon-img" src={icon} alt="Icon" />
          <p>Member of Ubicom Group</p>
        </div>
      </Link>
      <nav>
        
        <Link to="/about">ABOUT</Link>
        <Link to="/servicesandsolutions">SERVICES & SOLUTIONS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
      <MenuIcon className='menu-icon'></MenuIcon>
    </header>
  );
}

export default Header;
