import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="py-4 nav-bg">
      <Container>
        <Navbar.Brand  href="#home">
          <img style={{width:'127px'}} src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fw-semibold">
            <Nav.Link className="me-4" href="#home">Home</Nav.Link>
            <Nav.Link className="me-4" href="#link">Our Portfolio</Nav.Link>
            <Nav.Link className="me-4" href="#link">Our Team</Nav.Link>
            <Nav.Link className="me-4" href="#link">Contact Us</Nav.Link>
            <Button
              style={{ backgroundColor: "#F73E7B", border: "0", padding: '10px 40px' }}
              variant="primary"
              Button
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
