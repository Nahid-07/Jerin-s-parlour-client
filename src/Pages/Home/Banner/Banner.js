import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BannerIMg from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }} className="my-5">
      <Container className="py-5">
        <Row className="d-flex justify-items-center align-items-center">
          <Col lg={6}>
            <Image src={BannerIMg} className="img-fluid"></Image>
          </Col>

          <Col className="p-lg-5 mt-3 mt-lg-0" lg={6}>
            <h1 style={{fontSize:'34px', fontweigth:'600'}} className=''>Let us handle your </h1>
            <h1 style={{fontSize:'34px', fontweigth:'600'}}>screen <span style={{color:'#F63E7B'}}>Professionally</span>.</h1>
            <p className="mt-5">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="d-flex justify-content-between mt-5">
            <div >
              <span style={{color:'#F63E7B', fontWeight:'700', fontSize:'42px'}}>500+</span>
              <p>Happy Customer</p>
            </div>
            <div>
              <span style={{color:'#F63E7B', fontWeight:'700', fontSize:'42px'}}>16+</span>
              <p>Total service</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
