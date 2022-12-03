import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import antiAge from "../../../assets/icons/Group 1373.png";
import hairColor from "../../../assets/icons/Group 1372.png";
import skin from "../../../assets/icons/Group 1374.png";

const Services = () => {
  return (
    <Container>
      <div
        style={{ fontSize: "34px", fontWeight: "700", textAlign: "center" }}
        className="my-5"
      >
        Our Awesome <span style={{ color: "#F73E7B" }}>Services</span>
      </div>
      <div className="d-lg-flex gap-5 my-5">
        <Card style={{ padding: "15px" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <img src={antiAge} alt="" width="80px" />
            <Card.Title>Anti Age Face Treatment</Card.Title>
            <Card.Subtitle
              style={{ color: "#F73E7B", fontWeight: "600", fontSize: "20px" }}
              className="mb-2"
            >
              $100
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "center" }}>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ padding: "15px" }} className="my-5 my-lg-0">
          <Card.Body className="d-flex flex-column align-items-center">
            <img src={hairColor} alt="" width="80px" />
            <Card.Title>Hair Color & Styleing</Card.Title>
            <Card.Subtitle
              style={{ color: "#F73E7B", fontWeight: "600", fontSize: "20px" }}
              className="mb-2"
            >
              $99
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "center" }}>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ padding: "15px" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <img src={skin} alt="" width="80px" />
            <Card.Title>Skin Care Treatment</Card.Title>
            <Card.Subtitle
              style={{ color: "#F73E7B", fontWeight: "600", fontSize: "20px" }}
              className="mb-2"
            >
              $299
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "center" }}>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
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
    </Container>
  );
};

export default Services;
