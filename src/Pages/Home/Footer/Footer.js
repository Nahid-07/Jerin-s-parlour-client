import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mapIcon from "../../../assets/icons/map-pin-2-fill.png";

const Footer = () => {
  return (
    <section style={{ backgroundColor: "#F63E7B" }}>
      <Container className="py-5">
        <Row style={{ color: "white" }}>
          <Col md={6} lg={3}>
            <div className="d-flex">
              <div className="me-2">
                <img src={mapIcon} alt="" width="24px" />
              </div>
              <div>
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <h4>Company</h4>

            <p>About</p>
            <p>Project</p>
            <p>Our Team</p>
            <p>Tearms and Conditions</p>
            <p>Submit lsting</p>
          </Col>
          <Col md={6} lg={3}>
            <h4>Company</h4>

            <p>About</p>
            <p>Project</p>
            <p>Our Team</p>
            <p>Tearms and Conditions</p>
            <p>Submit lsting</p>
          </Col>
          <Col md={6} lg={3}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
