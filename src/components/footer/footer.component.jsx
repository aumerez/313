import * as React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NavbarBrand  from "react-bootstrap/NavbarBrand";

import  Navbar from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';



const styles = {
  box: {
    left: 0,
    bottom: 0,
    right: 0,
  },
};

const Footer = () => {
  return(
    <div className="fixed-bottom">  
        <Navbar color="dark" dark>
            <Container className="container-fluid">
                <NavbarBrand>Footer</NavbarBrand>
            </Container>
        </Navbar>
    </div>)

}

export default Footer;

