import React from "react";
import PropTypes from "prop-types";
import styles from "./BoothBadge.module.scss";

export const BoothBadge = ({ name }) => (
  <div className={styles.boothBadge}>{name}</div>
);

BoothBadge.propTypes = {
  name: PropTypes.string.isRequired
};
