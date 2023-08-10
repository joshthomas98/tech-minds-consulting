import React from "react";
import { Container } from "react-bootstrap";

const TechConsultancy = () => {
  return (
    <div>
      <h1 className="text-center" style={{ color: "#48A2D9" }}>
        Tech Consultancy
      </h1>

      <Container>
        <p className="text-center pb-5">
          Navigating the ever-evolving tech landscape can be daunting. That's
          where our Tech Consultancy services come in. We partner with you to
          unravel complexities, implement innovative solutions, and empower your
          business for sustained growth.
        </p>
      </Container>

      {/* Number 1 */}
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Tailored Guidance:</h3>
            <p>
              Every business is unique, and so are its technology needs. Our
              experts work closely with you to understand your specific
              challenges and opportunities, crafting a customized strategy that
              aligns with your goals.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <img
              src="../../images/tech-consultancy-images/tailored-guidance.jpg"
              alt="tailored guidance"
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
              src="../../images/tech-consultancy-images/efficiency-and-optimisation.jpg"
              alt="efficiency and optimisation"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Efficiency and Optimisation:</h3>
            <p>
              Efficiency and Optimisation: Whether you're a startup seeking
              streamlined operations or an established enterprise aiming for
              process optimization, we provide actionable insights and
              recommendations that enhance efficiency across the board.
            </p>
          </div>
        </div>
      </div>

      {/* Number 3 */}
      <div className="row pb-5">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 style={{ color: "#48A2D9" }}>Embracing Innovation:</h3>
            <p>
              Technology is a driving force behind innovation. We help you
              leverage the latest trends and advancements to stay ahead of the
              competition, ensuring that your business remains at the forefront
              of your industry.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="../../images/tech-consultancy-images/embracing-innovation.jpg"
            alt="embracing innovation"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default TechConsultancy;
