import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaHeadphones, FaPhoneAlt, FaBlackTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AiFillCustomerService from "react-icons";
import "./ContactStyle.css";

function Contact() {
  let navigate = useNavigate();
  return (
    <div style={{ padding: "2rem 7rem" }}>
      <center>
        <h3 style={{ color: "black" }}>Contact Us</h3>
        <p style={{ color: "black" }}>
          Do you have a question? A complaint? Or do you need help while
          completing a transaction on MyCollection.com?
        </p>
        <p style={{ color: "black" }}>
          For everything from your order, and your account to our site and our
          deals and services, call us on 90291 08282 or write to us using
          MyCollection Care page.
        </p>
        <div>
          <ButtonGroup
            // size="lgr"
            className="btnstyle"
          >
            <Button
              onClick={() => {
                return navigate("/constactus");
              }}
            >
              <FaPhoneAlt
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Contact Us
            </Button>
            <Button
              onClick={() => {
                return navigate("/aboutus");
              }}
            >
              <FaBlackTie
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              About Us
            </Button>
            <Button>
              <FaHeadphones
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Customer Care
            </Button>
          </ButtonGroup>
        </div>
      </center>
    </div>
  );
}

export default Contact;
