import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';
import './SejarahKampus.css';

const Contact = () => {
  return (
    <section className="sejarah-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up">
            <h2 className="text-center mb-4">Hubungi Kami</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Kirim Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
