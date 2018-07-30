import React from "react";

export default props => {
  return (
    <footer>
      {props.logos.map(logo => (
        <img src={logo.src} alt={logo.alt} key={logo.alt} />
      ))}
    </footer>
  );
};
