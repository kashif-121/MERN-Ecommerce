import React from 'react'
import 
{
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TheHeader.css';
const TheHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar-wrapper">
        <Link to="/" className="navbar-brand">MINISHOP</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navbar-nav">
            <Link to="/">Shop</Link>
            <Link to="/">Categories</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TheHeader