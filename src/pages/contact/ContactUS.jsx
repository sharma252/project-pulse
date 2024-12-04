import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { Send, Mail, User, MessageCircle, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Reset previous errors
    setFormStatus({ success: false, error: "" });

    // Validation checks
    if (!contactData.name.trim()) {
      setFormStatus({ success: false, error: "Name is required" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactData.email.trim() || !emailRegex.test(contactData.email)) {
      setFormStatus({
        success: false,
        error: "Please enter a valid email address",
      });
      return false;
    }

    if (!contactData.subject.trim()) {
      setFormStatus({ success: false, error: "Subject is required" });
      return false;
    }

    if (!contactData.message.trim()) {
      setFormStatus({ success: false, error: "Message is required" });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Simulate form submission (replace with actual API call)
    try {
      // Placeholder for actual submission logic
      console.log("Contact Form Submitted:", contactData);

      // Reset form and show success message
      setContactData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setFormStatus({
        success: true,
        error: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setFormStatus({ success: false, error: "" });
      }, 3000);
    } catch (error) {
      setFormStatus({
        success: false,
        error: "Failed to submit. Please try again.",
      });
    }
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Contact Form */}
        <Col md={8}>
          <Card>
            <Card.Header className="text-center">
              <Send size={40} className="mb-2 text-primary" />
              <h2>Contact Us</h2>
              <p className="text-muted">We'd love to hear from you!</p>
            </Card.Header>
            <Card.Body>
              {formStatus.error && (
                <Alert variant="danger">{formStatus.error}</Alert>
              )}
              {formStatus.success && (
                <Alert variant="success">
                  Your message has been sent successfully!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <User className="me-2" />
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={contactData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <Mail className="me-2" />
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <Phone className="me-2" />
                    Phone Number (Optional)
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={contactData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <MessageCircle className="me-2" />
                    Subject
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={contactData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject of your message"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={contactData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows={5}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="text-center">
              <MapPin size={40} className="mb-2 text-primary" />
              <h3>Contact Information</h3>
            </Card.Header>
            <Card.Body>
              <div className="mb-4">
                <h5>Pulse Headquarters</h5>
                <p className="text-muted">
                  123 Blog Street
                  <br />
                  Tech City, TC 54321
                  <br />
                  United States
                </p>
              </div>

              <div className="mb-4">
                <h5>Customer Support</h5>
                <p className="text-muted">
                  <Mail className="me-2" />
                  support@pulse.com
                  <br />
                  <Phone className="me-2" />
                  +1 (555) 123-4567
                </p>
              </div>

              <div>
                <h5>Business Hours</h5>
                <p className="text-muted">
                  Monday - Friday: 9 AM - 5 PM
                  <br />
                  Saturday: 10 AM - 2 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
