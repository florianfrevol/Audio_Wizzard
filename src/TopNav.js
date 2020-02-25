import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from './audio-wizard-logo.png'

function TopNav() {
    return (
        <div>
        <Navbar expand="lg" variant="dark" bg="dark">
        <Container fluid>
            <Navbar.Brand href="#"><div><img alt="" src={img} style={{maxWidth: '3' + 'em'}}></img></div></Navbar.Brand>
            <Button variant="secondary">Mon Compte</Button>
        </Container>
        </Navbar>
        </div>
    );
  }

  export default TopNav;
