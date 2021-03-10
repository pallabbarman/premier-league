import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <Navbar bg="dark" expand="lg" variant="dark" className="nav d-flex justify-content-center">
        <Navbar.Brand as={Link} to="/">
            Premier League
        </Navbar.Brand>
    </Navbar>
);

export default Header;
