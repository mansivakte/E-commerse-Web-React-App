import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaMailBulk,
  FaHome,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaLocationArrow,
} from "react-icons/fa";
import { color } from "@mui/system";
import AddressMap from "./Add";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-side">
          <div className="location">
            <h4>
              <FaLocationArrow
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Location
              <AddressMap />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6730423334334!2d73.96776071415975!3d18.498463474679664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c27747b4827d%3A0xa0fbb47ff6618e7!2sNandini%20Bellus!5e0!3m2!1sen!2sin!4v1667808934299!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2342-343-32
            </h4>
          </div>
          <div className="email">
            <p style={{ color: "#fff" }}>
              For Any Query Please Email Us questions?
            </p>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              customercare@mycollection.com
            </h4>
          </div>
        </div>

        <div className="right-side">
          <h3 className="h3">Let's get social</h3>
          <p style={{ color: "#fff" }}>Follow us on</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
      <div className="copy">
        <span className="bar"></span>
        <p>© 2022 MY Collection Ltd. All rights reserved!</p>
        <p>Terms of Use | Cookie & Privacy Policy</p>
      </div>
    </div>
  );
};
