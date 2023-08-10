import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = ({ size }) => {
  return (
    <div
      className="d-flex pt-3 social-media-icons-container justify-content-center"
      style={{ color: "#000000" }}
    >
      <a
        target={"_blank"}
        href="https://www.facebook.com/PacificFitness"
        className="social-icon facebook-icon mr-3 h2 px-1"
      >
        <FaFacebook style={{ fontSize: size }} />
      </a>

      <a
        target={"_blank"}
        href="https://www.instagram.com/pacific_supergym/?hl=en"
        className="social-icon instagram-icon mr-3 h2 px-1"
      >
        <FaInstagram style={{ fontSize: size }} />
      </a>

      <a
        target={"_blank"}
        href="https://www.youtube.com/@pacificfitnessuk"
        className="social-icon youtube-icon mr-3 h2 px-1"
      >
        <FaYoutube style={{ fontSize: size }} />
      </a>

      <a
        target={"_blank"}
        href="https://www.twitter.com/pacificfitness"
        className="social-icon twitter-icon mr-3 h2 px-1"
      >
        <FaTwitter style={{ fontSize: size }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
