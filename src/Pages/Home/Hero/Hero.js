import React from "react";
import { Button, Container } from "react-bootstrap";
import heroIMG from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#FFF8F5" }}>
      <Container>
        <div className="row d-flex align-items-center py-4">
        <div className="col-lg">
            <h1 className="display-3 fw-semibold">BEAUTY SALON</h1>
            <h1 className="display-3 fw-semibold">FOR EVERY WOMEN</h1>
            <div>
                <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>

            <Button
              style={{ backgroundColor: "#F73E7B", border: "0", padding:'12px 10px' }}
              variant="primary"
              Button
            >GET AN APPOINTMENT</Button>
            </div>
          </div>
          <div className="col-lg mt-3 mt-lg-0 d-none d-md-block py-4">
            <img src={heroIMG} alt="" className="img-fluid" />
          </div>
        </div>
         
      </Container>
    </div>
  );
};

export default Hero;
