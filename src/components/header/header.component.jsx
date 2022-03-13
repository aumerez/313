import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { List } from 'react-bootstrap-icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import MetamaskButton from '../metamask-button/metamask-button.component';

import './header.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../assets/imgs/logo_white.png';

const getPageBackground = (pathname) => {
  switch (pathname) {
    case '/mint':
      return 'header-background-mint';
    default: 
      return 'header-background-home';
  }
}

const Header = () => {
  const [ isNavCollapsed, setIsNavCollapsed ] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  let location = useLocation();

  const handleNavCollapse = () => {
    if (!matches) {
      setIsNavCollapsed(!isNavCollapsed);
    }
  }

  return (
  
    <Navbar expand="sm" fixed="top" 
      className={`header ${getPageBackground(location.pathname)}`}
      expanded={!isNavCollapsed} >
      <Container fluid className="navbar-container">
        <Navbar.Brand>
          <Link to='/'>
            <img src= { Logo } alt='The 313 Project' height="50"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          style={{
            borderColor: 'white',
            color: 'white',
          }}
          onClick={handleNavCollapse}
        ><List color="white" size='24'/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto options">
            <Nav.Link as={Link} className="option" to='/' onClick={handleNavCollapse}>Home</Nav.Link>
            <Nav.Link as={Link} className="option" to='/mint' onClick={handleNavCollapse}>Mint</Nav.Link>
          </Nav>
          <div onClick={handleNavCollapse}>
            <MetamaskButton className="d-flex option" />
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;