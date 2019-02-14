import PropTypes from "prop-types";
import React from "react";

import styles from "./Footer.module.scss";


const Footer = props => {
  return (
    <footer className={styles.footer}>
      {props.logos.map(logo => (
        <img src={logo.src} alt={logo.alt} key={logo.alt} className={styles.footerImg}/>
      ))}
    </footer>
  );
};

Footer.propTypes = {
  logos: PropTypes.array
};

export default Footer;
