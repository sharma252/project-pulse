import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { LogIn, Mail, Lock } from "lucide-react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Clear any previous errors
    setError("");

    // Here you would typically make an API call to authenticate
    console.log("Login Attempted:", loginData);

    // Simulated login (replace with actual authentication logic)
    try {
      // Placeholder for authentication logic
      // In a real app, this would involve calling a backend service
      const isAuthenticated = true;

      if (isAuthenticated) {
        // Redirect or update app state
        console.log("Login Successful");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Header className="text-center">
          <LogIn size={40} className="mb-2" />
          <h2>Login to Pulse</h2>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <Mail className="me-2" />
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginData.email}
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
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <div className="text-center mt-3">
              <a href="/register" className="text-muted">
                Don't have an account? Register
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
