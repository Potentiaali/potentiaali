import React from "react";

const Footer = props => {
  return (
    <footer>
      {props.logos.map(logo => (
        <img src={logo.src} alt={logo.alt} key={logo.alt} />
      ))}
    </footer>
  );
};

export default Footer;
