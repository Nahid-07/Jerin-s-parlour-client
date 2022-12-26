import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Services.css";
import { useState } from "react";
import { useEffect } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <div
        style={{ fontSize: "34px", fontWeight: "700", textAlign: "center" }}
        className="my-5"
      >
        Our Awesome <span style={{ color: "#F73E7B" }}>Services</span>
      </div>
      <div className="d-lg-flex gap-5 my-5">
        {services.map((service) => (
          <Card className="shadows position-relative" style={{ padding: "15px" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={service.img} alt="" width="80px" />
              <Card.Title>{service.serviceName}</Card.Title>
              <Card.Subtitle
                style={{
                  color: "#F73E7B",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
                className="mb-2"
              >
                {service.price}
              </Card.Subtitle>
              <Card.Text style={{ textAlign: "center" }}>
                {service.details}
              </Card.Text>
              <div className="bookbtnDiv">
                <button>Book now</button>
              </div>
            </Card.Body>
          </Card>
        ))}
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
