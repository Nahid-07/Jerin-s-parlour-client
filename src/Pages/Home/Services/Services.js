import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Services.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleBooked = ()=>{
      
  }
  return (
    <Container>
      <div
        style={{ fontSize: "34px", fontWeight: "700", textAlign: "center" }}
        className="my-5"
      >
        Our Awesome <span style={{ color: "#F73E7B" }}>Services</span>
      </div>
      <div className="d-lg-flex gap-5 my-5">
        {services.map((service) => <Service key={service._id} service={service} ></Service>)}
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
