import React from "react";
import { Container } from "react-bootstrap";

const WebDevelopment = () => {
  return (
    <div>
      <h1 className="text-center" style={{ color: "#48A2D9" }}>
        Web Development
      </h1>

      <Container>
        <p className="text-center pb-5">
          At Tech Minds Consulting, we understand that a powerful online
          presence is paramount in today's digital landscape. Our Web
          Development services are designed to elevate your brand, engage your
          audience, and drive meaningful interactions.
        </p>
      </Container>

      {/* Number 1 */}
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Crafting Engaging Websites</h3>
            <p>
              Our team of skilled developers takes your vision and transforms it
              into a captivating digital platform. Whether you need an
              e-commerce site to boost sales or an interactive portfolio to
              showcase your work, we ensure your website speaks directly to your
              target audience.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <img
              src="../../images/web-development-images/engaging-website.jpg"
              alt="engaging website"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Number 2 */}
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-start">
            <img
              src="../../images/web-development-images/user-centric-design.jpg"
              alt="user centric design"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>User-Centric Design</h3>
            <p>
              User experience is at the core of our design philosophy. We create
              intuitive interfaces that guide visitors seamlessly through your
              content, enhancing their engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Number 3 */}
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Responsive and Scalable:</h3>
            <p>
              In a world dominated by mobile devices, responsive design is
              non-negotiable. We build websites that adapt flawlessly to various
              screen sizes, ensuring your content looks stunning on every
              device.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="../../images/web-development-images/responsive-and-scalable.jpg"
            alt="responsive and scalable"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Number 4 */}
      <div className="row pb-5">
        <div className="col-md-6">
          <div className="d-flex justify-content-start">
            <img
              src="../../images/web-development-images/optimised-performance.jpg"
              alt="optimised performance"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Optimised Performance:</h3>
            <p>
              Slow-loading websites are a thing of the past. Our development
              process includes optimizing every aspect of your site for speed,
              delivering a smooth browsing experience that keeps visitors coming
              back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
