import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { User, PenTool } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

  // Function to check if the current link matches the current path
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="shadow-sm"
      style={{}}
    >
      <Container>
        <Navbar.Brand href="/" className="brand-styled">
          <span className="brand-highlight">Pulse</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={`nav-link ${isActive("/")}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${isActive("/blogs")}`} to="/blogs">
              Blogs
            </Link>
            <Link className={`nav-link ${isActive("/about")}`} to="/about">
              About
            </Link>
            <Link className={`nav-link ${isActive("/contact")}`} to="/contact">
              Contact
            </Link>
          </Nav>
          <div className="d-flex">
            <Button variant="outline-primary" className="me-2">
              <User size={18} /> Login
            </Button>
            <Button variant="primary">
              <PenTool size={18} className="me-2" /> Write
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
