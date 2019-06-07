import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";

export const Footer = ({ logos }) => (
  <footer className={styles.footer}>
    {logos.map(logo => (
      <img
        src={logo.src}
        alt={logo.alt}
        key={logo.alt}
        className={styles.footerImg}
      />
    ))}
  </footer>
);

Footer.propTypes = {
  logos: PropTypes.array
};
