import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialPic_1 from "../../../assets/images/Ellipse 91.png";
import { BsFillStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <Container className="mb-5">
      <h1 style={{ fontSize: "34px", textAlign: "center" }} className="mb-5">
        Testimonials
      </h1>
      <Row>
        <Col lg={4}>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <img src={TestimonialPic_1} alt="" width={"62px"} />
            </div>
            <div>
              <small className="fw-bold">Nash Patrik</small>
              <br />
              <small>CEO, Manpol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <p style={{ color: "orange" }}>
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill />
          </p>
        </Col>
        <Col lg={4} className="my-3 my-lg-0">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <img src={TestimonialPic_1} alt="" width={"62px"} />
            </div>
            <div>
              <small className="fw-bold">Nash Patrik</small>
              <br />
              <small>CEO, Manpol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <p style={{ color: "orange" }}>
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill />
          </p>
        </Col>
        <Col lg={4}>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <img src={TestimonialPic_1} alt="" width={"62px"} />
            </div>
            <div>
              <small className="fw-bold">Nash Patrik</small>
              <br />
              <small>CEO, Manpol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <p style={{ color: "orange" }}>
            <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
            <BsFillStarFill /> <BsFillStarFill />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
