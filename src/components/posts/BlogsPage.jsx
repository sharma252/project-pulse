import React, { useState } from "react";
import { blogPosts } from "../../../dummyData/Dummy";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";
import { Heart, MessageCircle, Share2, Filter } from "lucide-react";

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["All", "Technology", "Lifestyle", "Career", "Food"];

  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === null ||
        selectedCategory === "All" ||
        blog.category === selectedCategory) &&
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleLike = (blogId) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6} className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary">
              <Filter size={18} className="me-2" />
              {selectedCategory || "Categories"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        {filteredBlogs.map((blog) => (
          <Col key={blog.id} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={blog.imageUrl} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.author} | {blog.category}
                </Card.Subtitle>
                <Card.Text>{blog.content}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleLike(blog.id)}
                    >
                      <Heart size={16} /> {blog.likes}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                    >
                      <MessageCircle size={16} /> {blog.comments}
                    </Button>
                    <Button variant="outline-info" size="sm">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogsPage;
