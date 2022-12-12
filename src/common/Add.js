import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.378325388217!2d73.95281261416069!3d18.556974872904792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c66bcac4e1%3A0xbc5d5545fd13f407!2sThe%207A%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1670835867106!5m2!1sen!2sin"
        width="450"
        height="250"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default AddressMap;
