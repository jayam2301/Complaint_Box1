import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="wrapper-1">
        <div className="copy-right">© 2023 Copyright:cmpbox221.com</div>
        <div className="links">
          <Link to="" className="link-foot">
            Help center
          </Link>
          <Link to="https://github.com/jayam2301" className="link-foot">
            GitHub
          </Link>
          <Link to="https://twitter.com/" className="link-foot">
            Twitter
          </Link>
          <Link to="" className="link-foot">
            Privacy & Policy
          </Link>
          <Link to="mailto: jayam010223@gmail.com" className="link-foot">
            jayam010223@gmail.com
          </Link>
          <Link to="" className="link-foot">
            Terms & Conditions
          </Link>
        </div>
        <div className="country">
          <img src="/india.png" alt="image" className="india" />
          <div className="copy-right">India</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
