import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./SocialMediaIcons";

export default function App() {
  return (
    <div>
      <MDBFooter className="text-center">
        <MDBContainer className="p-4">
          <MDBRow className="justify-content-between align-items-center">
            <MDBCol md="4">
              <p className="pt-3" style={{ color: "#48A2D9" }}>
                <i
                  className="bi-telephone-fill"
                  style={{ color: "#48A2D9" }}
                ></i>{" "}
                07970 194666
              </p>
            </MDBCol>
            <MDBCol md="4">
              <SocialMediaIcons />
            </MDBCol>
            <MDBCol md="4">
              <p className="pt-3" style={{ color: "#48A2D9" }}>
                <i className="bi bi-envelope" style={{ color: "#48A2D9" }}></i>{" "}
                info@techminds.co.uk
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="text-center pb-2" style={{ color: "#48A2D9" }}>
          © 2023 Copyright {""}
          <a href="http://localhost:3000/" style={{ color: "#48A2D9" }}>
            Tech Minds Consulting
          </a>
          <p className="pt-1">
            Designed and Developed by Tech Minds Consulting
          </p>
        </div>
      </MDBFooter>
    </div>
  );
}
