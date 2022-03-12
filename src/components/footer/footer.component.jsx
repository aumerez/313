import * as React from "react";

import Stack from 'react-bootstrap/Stack';
import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Instagram, Twitter } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import './footer.styles.scss';


const Footer = () => {
  return(
    <div className="fixed-bottom">  
        <Navbar >
            <Container className="d-flex justify-content-center text-center">
              <Stack gap={1}>
                <Stack gap={1} direction="horizontal" className="d-flex justify-content-center text-center">
                  <Nav.Link href='https://www.instagram.com/the313project/' target="_blank">
                    <Instagram color="white" size='20'/>
                  </Nav.Link>
                  <Nav.Link href='https://twitter.com/313_Project' target="_blank">
                    <Twitter color="white" size='20'/>
                  </Nav.Link>
                </Stack>
                <div className="footer-text">
                  2022 - 313 Project. All rights reserved
                </div>  
              </Stack>
            </Container>
        </Navbar>
    </div>)

}

export default Footer;

