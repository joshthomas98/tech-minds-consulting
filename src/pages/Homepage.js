import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const navigate = useNavigate(); // Use useNavigate

  const handleBoxClick = (page) => {
    if (page === "web-development") {
      navigate("/web-development");
    } else if (page === "tech-consultancy") {
      navigate("/tech-consultancy");
    } else if (page === "virtual-cto") {
      navigate("/virtual-cto");
    }

    // Scroll to the top of the new page with smooth scrolling
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Container>
        {/* Carousel section */}
        <section>
          <Carousel />
        </section>

        <section
          className="about-section text-center lead"
          style={{
            backgroundColor: "#DCEFFB",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative", // Make the container positioned
              backgroundColor: "#DCEFFB", // Set the background color
              zIndex: 1, // Set a higher z-index to place it behind the text
              padding: "20px", // Add padding for spacing
              borderRadius: "10px", // Add border radius for styling
              color: "#000000", // Set text color to white for contrast
            }}
          >
            <p style={{ backgroundColor: "#DCEFFB" }}>
              Welcome to Tech Minds Consulting, your partner in unlocking
              strategic success through our proven expertise in the realm of
              technology. Specializing in web development, tech consultancy, and
              virtual CTO services, we empower businesses to achieve
              unparalleled results in today's era of digital evolution.
            </p>

            <p style={{ backgroundColor: "#DCEFFB" }}>
              Boasting a rich background across diverse industries and
              collaborating with some of the UK's most renowned brands, we craft
              tailor-made enterprise solutions that seamlessly fuse technology
              with innovation. With a legacy spanning over three decades in the
              IT sector, we possess the knowledge to seamlessly integrate
              existing legacy systems into cutting-edge cloud-based software
              services. Furthermore, our capability extends to the creation of
              bespoke solutions meticulously tailored to address your unique
              requirements.
            </p>

            <p style={{ backgroundColor: "#DCEFFB" }}>
              At Tech Minds Consulting, we transcend mere consultation; we are
              architects of transformation. Join us in propelling your business
              towards a future where digital capability is not just an
              advantage, but a necessity.
            </p>
          </div>
        </section>

        {/* Info boxes section */}
        <section id="functionality-boxes" className="card-1 p-5">
          <h2 className="text-center pb-4 pt-2">
            Our primary services include...
          </h2>
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md">
                <div
                  className="homepage-card bg-secondary border"
                  onClick={() => handleBoxClick("web-development")}
                >
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h3 className="card-title mb-3">Web Development</h3>
                    <p className="card-text">
                      Unlock a dynamic online presence through our Web
                      Development prowess. We specialize in crafting engaging
                      websites that seamlessly connect you with your audience.
                      From e-commerce platforms to interactive portfolios, we
                      turn your digital aspirations into impactful realities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div
                  className="homepage-card bg-secondary border"
                  onClick={() => handleBoxClick("tech-consultancy")}
                >
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <h3 className="card-title mb-3">Tech Consultancy</h3>
                    <p className="card-text">
                      Navigate the complexities of technology with confidence
                      through our Tech Consultancy services. Whether you're a
                      startup or an established enterprise, we provide expert
                      guidance tailored to your needs. Streamline operations,
                      optimize systems, and harness the power of tech to drive
                      your success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div
                  className="homepage-card bg-secondary border"
                  onClick={() => handleBoxClick("virtual-cto")}
                >
                  <div className="card-body text-center p-3">
                    <div className="h1 mb-3">
                      <i className="bi bi-globe"></i>
                    </div>
                    <h3 className="card-title mb-3">Virtual CTO</h3>
                    <p className="card-text">
                      Experience strategic tech leadership without overhead with
                      our Virtual CTO offering. Access seasoned professionals
                      for insights, planning, and guidance to align your
                      technology strategy with your business goals. Achieve
                      innovation and growth through expert virtual leadership.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Interested in our services? Click one of them to find out more.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
