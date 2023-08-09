import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CenteredCarousel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel className="pb-5">
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="../../images/web-dev.jpg"
            alt="First slide"
            style={{ maxWidth: "1170px", maxHeight: "600px" }}
          />
          <h3 className="pt-3 text-light text-center">Web Development</h3>
          <p className="px-3 text-light text-center">
            Unleashing Creativity Through Innovative Web Solutions.<br></br>{" "}
            From Eye-Catching Designs to Seamless Functionality, We Build Your
            Online Presence.
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="../../images/tech-consultancy.jpg"
            alt="Second slide"
            style={{ maxWidth: "1170px", maxHeight: "600px" }}
          />
          <h3 className="pt-3 text-light text-center">Tech Consultancy</h3>
          <div className="container">
            <p className="px-3 text-light text-center">
              Navigating the Technological Landscape.<br></br> Our Consultancy
              Services Offer Expert Insights, Strategic Planning, and
              Cutting-Edge Solutions to Propel Your Business Forward.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="../../images/virtual-cto.jpg"
            alt="Third slide"
            style={{ maxWidth: "1170px", maxHeight: "600px" }}
          />
          <h3 className="pt-3 text-light text-center">Virtual CTO</h3>
          <p className="px-3 text-light text-center">
            Empowering Your Vision with Virtual CTO Expertise.<br></br> Let Us
            Be Your Technology Partner, Providing Leadership, Strategy, and
            Technical Excellence to Drive Success.
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CenteredCarousel;
