import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const HandleForm = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }} className="p-5">
      <Container>
        <div className="text-center mb-5">
          <h1>Let us handle your</h1>
          <h1>project, professionally.</h1>
        </div>
        <form action="">
          <Row className="mt-4">
            <Col md={6}>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Email">
                <Form.Control type="Email" placeholder="Password" />
              </FloatingLabel>
            </Col>
            <Col md={6} className="mt-3 mt-md-0">
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Phone Number">
                <Form.Control type="text" placeholder="Phone Number" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row
            className="mt-3"
            style={{ padding: "0 .75rem", borderRadius: ".375rem" }}
          >
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Row>
          <div className="mt-3">
        <Button
          className="mb-5"
          style={{
            backgroundColor: "#F73E7B",
            border: "0",
            padding: "13px 33px",
            display: "block",
            margin: "0 auto",
          }}
          variant="primary"
          Button
        >
          Explore More
        </Button>
      </div>
        </form>
      </Container>
    </div>
  );
};

export default HandleForm;
