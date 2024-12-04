import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { teamMembers } from "../../../dummyData/Dummy";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1>About Pulse</h1>
            <p className="lead">
              A platform where ideas meet, stories unfold, and communities grow
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              We believe in the power of storytelling. Our platform empowers
              writers, thinkers, and creators to share their unique
              perspectives, connect with like-minded individuals, and build a
              vibrant, inclusive community.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Create and publish blog posts</li>
              <li>Engage through comments</li>
              <li>Like and share articles</li>
              <li>Personalized user profiles</li>
              <li>Moderated community environment</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src="https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blogger Community"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <h2>Our Team</h2>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              <Card className="border-0">
                <div className="d-flex justify-content-center mb-3">
                  <Image
                    src={member.image}
                    roundedCircle
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
