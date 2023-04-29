import React, { useState } from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import EmailSignUp from './EmailSignUp.js';
import Reservation from '../pages/Reservations';

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isEmailSignUpVisible, setIsEmailSignUpVisible] = useState(false);
  const [isReservationsVisible, setIsReservationsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsNavbarVisible(window.innerWidth > 990);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const toggleEmailSignUp = () => {
    setIsEmailSignUpVisible(!isEmailSignUpVisible);

    if (!isEmailSignUpVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  const toggleReservations = () => {
    setIsReservationsVisible(!isReservationsVisible);

    if (!isReservationsVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  return (
    <div className={`navbar ${isScrolled && isNavbarVisible ? 'scrolled' : ''}`}>
      <div className='navbar-logo'>RESTA</div>
      <button onClick={toggleNavbar} className='toggle-button'>
        {isNavbarVisible ? (
          <ion-icon name="close-outline" size="large"></ion-icon>
        ) : (
          <ion-icon name="menu-outline" size="large"></ion-icon>
        )}
      </button>
      <div className={`navbar-menu ${isNavbarVisible ? '' : 'navbar-menu-hidden'}`}>
        <ul className={isNavbarVisible ? '' : 'navbar-menu-vertical'}>
          <li><Link to="/hours-and-location" className='my-link'>HOURS & LOCATION</Link></li>
          <li><Link to="/menus" className='my-link'>MENUS</Link></li>
          <li><Link to="/about" className='my-link'>ABOUT</Link></li>
          <li><Link to="/catering" className='my-link'>CATERING</Link></li>
          <li><Link to="/shop" className='my-link'>SHOP</Link></li>
          <li><Link to="/work-wth-us" className='my-link'>WORK WITH US</Link></li>
          <li
            onClick={toggleEmailSignUp}
            onMouseOver={(e) => {
              e.target.style.cursor = 'pointer';
              e.target.style.opacity = 0.8;
            }}
            onMouseOut={(e) => {
              e.target.style.cursor = 'default';
              e.target.style.opacity = 1;
            }}
          >
            EMAIL SIGN UP
          </li>

          <li
            onClick={toggleReservations}
            onMouseOver={(e) => {
              e.target.style.cursor = 'pointer';
              e.target.style.opacity = 0.8;
            }}
            onMouseOut={(e) => {
              e.target.style.cursor = 'default';
              e.target.style.opacity = 1;
            }}
          >
            RESERVATIONS
          </li>
        </ul>
      </div>
      {isReservationsVisible && <Reservation onClose={toggleReservations}/>}
      {isEmailSignUpVisible && <EmailSignUp onClose={toggleEmailSignUp} />}
    </div>
  );
}

export default Navbar;
