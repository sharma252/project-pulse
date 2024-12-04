import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { PenTool, ImagePlus, Save, X } from "lucide-react";

const WriteBlog = () => {
  const [blogPost, setBlogPost] = useState({
    title: "",
    category: "",
    content: "",
    imageUrl: "",
    likes: 0,
    comments: 0,
  });

  const [validation, setValidation] = useState({
    title: true,
    category: true,
    content: true,
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogPost((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim()) {
      setValidation((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };

  const validateForm = () => {
    const newValidation = {
      title: blogPost.title.trim() !== "",
      category: blogPost.category.trim() !== "",
      content: blogPost.content.trim() !== "",
    };

    setValidation(newValidation);

    return Object.values(newValidation).every((v) => v === true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newPost = {
        ...blogPost,
        id: Date.now(),
        imageUrl:
          blogPost.imageUrl ||
          `https://picsum.photos/800/400?random=${Math.floor(
            Math.random() * 100
          )}`,
      };

      console.log("New Blog Post:", newPost);

      setShowSuccessAlert(true);

      setBlogPost({
        title: "",
        category: "",
        content: "",
        imageUrl: "",
        likes: 0,
        comments: 0,
      });

      setTimeout(() => setShowSuccessAlert(false), 3000);
    }
  };

  const handleReset = () => {
    setBlogPost({
      title: "",
      category: "",
      content: "",
      imageUrl: "",
      likes: 0,
      comments: 0,
    });
    setValidation({
      title: true,
      category: true,
      content: true,
    });
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header as="h2" className="text-center">
          <PenTool className="me-2" /> Write a New Blog Post
        </Card.Header>
        <Card.Body>
          {showSuccessAlert && (
            <Alert
              variant="success"
              onClose={() => setShowSuccessAlert(false)}
              dismissible
            >
              Blog post created successfully!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={blogPost.title}
                onChange={handleInputChange}
                placeholder="Enter blog post title"
                isInvalid={!validation.title}
              />
              <Form.Control.Feedback type="invalid">
                Title is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={blogPost.category}
                onChange={handleInputChange}
                isInvalid={!validation.category}
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Personal">Personal</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Category is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={blogPost.content}
                onChange={handleInputChange}
                placeholder="Write your blog post here..."
                rows={5}
                isInvalid={!validation.content}
              />
              <Form.Control.Feedback type="invalid">
                Content is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <ImagePlus className="me-2" />
                Image URL (Optional)
              </Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={blogPost.imageUrl}
                onChange={handleInputChange}
                placeholder="Enter image URL or leave blank for a random image"
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                <Save className="me-2" /> Publish Post
              </Button>
              <Button variant="secondary" type="button" onClick={handleReset}>
                <X className="me-2" /> Clear
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WriteBlog;
