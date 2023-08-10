import React from "react";
import { Container } from "react-bootstrap";

const VirtualCTO = () => {
  return (
    <div>
      <h1 className="text-center" style={{ color: "#48A2D9" }}>
        Virtual CTO
      </h1>

      <Container>
        <p className="text-center pb-5">
          Having a seasoned technology leader can be a game-changer, but not
          every business can afford a full-time Chief Technology Officer. Our
          Virtual CTO service bridges that gap, offering you strategic tech
          leadership on demand.
        </p>
      </Container>

      {/* Number 1 */}
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Expert Insights:</h3>
            <p>
              Gain access to a team of experienced technology professionals who
              bring a wealth of industry knowledge to the table. From strategic
              planning to technical guidance, we provide the insights needed to
              make informed decisions.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <img
              src="../../images/virtual-cto-images/expert-insights.jpg"
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
              src="../../images/virtual-cto-images/alignment-with-business-goals.jpg"
              alt="user centric design"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Alignment with Business Goals:</h3>
            <p>
              Technology should always serve your business objectives. Our
              Virtual CTOs work closely with you to align your technology
              strategy with your overarching goals, ensuring that every tech
              initiative contributes to your success.
            </p>
          </div>
        </div>
      </div>

      {/* Number 3 */}
      <div className="row pb-5">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>
              Flexibility and Cost-Efficiency:
            </h3>
            <p>
              Enjoy the benefits of having a CTO without the overhead costs. Our
              virtual model allows you to tap into top-tier expertise when you
              need it most, optimising your tech strategy without straining your
              resources.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="../../images/virtual-cto-images/flexibility-and-cost-efficiency.jpg"
            alt="responsive and scalable"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualCTO;
