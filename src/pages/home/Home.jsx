import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Heart, Share2, MessageCircle } from "lucide-react";
import { blogPosts } from "../../../dummyData/Dummy";

const Home = () => {
  const [posts, setPosts] = useState(blogPosts.slice(0, 5));

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="home-page">
      <div className="hero-section bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Pulse</h1>
          <p className="lead">Share Your Story, Connect Your World</p>
          <Button variant="light" className="mt-3">
            Start Writing
          </Button>
        </Container>
      </div>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Latest Posts</h2>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={post.imageUrl} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleLike(post.id)}
                      >
                        <Heart size={16} /> {post.likes}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                      >
                        <MessageCircle size={16} /> {post.comments}
                      </Button>
                      <Button variant="outline-info" size="sm">
                        <Share2 size={16} />
                      </Button>
                    </div>
                    <small className="text-muted">By {post.author}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
