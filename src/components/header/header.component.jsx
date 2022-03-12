import React from 'react';
import { Link } from 'react-router-dom';
import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import MetamaskButton from '../metamask-button/metamask-button.component';
import { List } from 'react-bootstrap-icons';

import './header.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../assets/imgs/logo_white.png';

const Header = () => (

  <Navbar collapseOnSelect expand="lg" fixed="top" className='header' bg="transparent">
    <Container>
      <Navbar.Brand>
        <Link to='/'>
          <img src= { Logo } alt='The 313 Project' height="50"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{
        borderColor: 'white',
        color: 'white',
        caretColor: 'white',
        outlineColor: 'white',
        colorScheme:'white',
        scrollbarColor: 'white'
        }}
      ><List color="white" size='24'/></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto options">
          <Nav.Link as={Link} className="option" to='/'>Home</Nav.Link>
          <Nav.Link as={Link} className="option" to='/mint'>Mint</Nav.Link>
        </Nav>
        <MetamaskButton className="d-flex option"/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;