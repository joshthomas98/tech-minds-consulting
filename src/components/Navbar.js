import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const hamburgerIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="transparent" fillOpacity="0" />
    <rect
      x="4"
      y="12"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
    <rect
      x="4"
      y="6"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
    <rect
      x="4"
      y="18"
      width="16"
      height="2"
      rx="1"
      fill="#FFFFFF" // White color for the bars
    />
  </svg>
);

const NavbarComponent = () => {
  return (
    <>
      <style>
        {`
          /* Custom CSS for medium screens and below (<= 991px) */
          @media (max-width: 991px) {
            .gold-text-navbar .navbar-nav {
              display: none; /* Hide the nav links */
            }

            .gold-text-navbar .navbar-collapse.collapse.show .navbar-nav {
              display: flex; /* Show the nav links when the hamburger menu is open */
            }

            /* Change the color of the hamburger icon to transparent */
            .gold-text-navbar .navbar-toggler {
              background-color: transparent;
              border-color: transparent;
            }
          }

          /* Custom CSS to push the search bar further right */
          @media (min-width: 992px) {
            .ml-auto {
              margin-left: auto; /* This will push the search bar further right */
            }
          }
        `}
      </style>
      <Navbar className="gold-text-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../../images/tech-minds-consulting-logo.png"
              width="250"
              height="250"
              className="d-inline-block align-top mb-5 mt-3"
              alt="Tech Minds Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav">
            {hamburgerIcon}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link style={{ fontSize: "22px", color: "#fff" }} href="/">
                Home
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: "22px", color: "#fff" }}
                href="/aboutus"
              >
                About Us
              </Nav.Link>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  style={{ fontSize: "22px", color: "#fff" }}
                >
                  Our Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/webdesignanddevelopment">
                    Web Design and Development
                  </Dropdown.Item>
                  <Dropdown.Item href="/techconsultancy">
                    Tech Consultancy
                  </Dropdown.Item>
                  <Dropdown.Item href="/virtualcto">Virtual CTO</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link
                style={{ fontSize: "22px", color: "#fff" }}
                href="/contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form inline className="ml-auto">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <BsSearch
                    type="submit"
                    size={24}
                    className="text-white mt-2"
                  />
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
