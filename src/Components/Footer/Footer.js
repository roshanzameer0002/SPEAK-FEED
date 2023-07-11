import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">
        Here you can find All the Commands{" "}
        <a
          href="https://drive.google.com/file/d/1JzrhvC1VklYJXy8d2RTPdkQGFJxzpp9U/view?usp=drive_link"
          target="_blank"
          id="document"
        >
          DOC
        </a>
      </div>
      <div className="contact">
        <a
          rel="no opener noreferrer"
          href="https://www.instagram.com/zameer_.mohammed/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/Roshanzameern"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/roshanzameer0002"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohammed-roshan-zameer-n-m-9b1b83210/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
