import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="nav">
        <Container>
            <Navbar.Brand as={Link} to="/">
                Premier League
            </Navbar.Brand>
        </Container>
    </Navbar>
);

export default Header;
