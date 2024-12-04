import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{
        backgroundColor: "#1E3A8A",
        color: "#F0F4F8",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h6>Pulse</h6>
            <small>Where writers connect and share.</small>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <div>
              <a href="/" className="text-light me-2">
                Home
              </a>
              <a href="/blogs" className="text-light me-2">
                Blogs
              </a>
              <a href="/about" className="text-light me-2">
                About
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light me-3">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light me-3">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light">
                <Linkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 Pulse. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
