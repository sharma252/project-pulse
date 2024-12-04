import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { UserPlus, Mail, Lock, User } from "lucide-react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous messages
    setError("");
    setSuccess(false);

    // Validation
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Here you would typically make an API call to register
    console.log("Registration Attempted:", {
      username: registerData.username,
      email: registerData.email,
    });

    try {
      // Simulated registration (replace with actual registration logic)
      const isRegistered = true;

      if (isRegistered) {
        setSuccess(true);

        // Reset form
        setRegisterData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during registration");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Header className="text-center">
          <UserPlus size={40} className="mb-2" />
          <h2>Create an Account</h2>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && (
            <Alert variant="success">
              Registration successful! You can now log in.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <User className="me-2" />
                Username
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <Mail className="me-2" />
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <Lock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <Lock className="me-2" />
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>

            <div className="text-center mt-3">
              <a href="/login" className="text-muted">
                Already have an account? Login
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
