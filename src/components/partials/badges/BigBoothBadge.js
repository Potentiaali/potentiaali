import React from "react";
import styles from "./BigBoothBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const BigBoothBadge = ({ number }) => (
  <div className={className(styles.bigBoothBadge)}>{number}</div>
);

BigBoothBadge.propTypes = {
  number: PropTypes.number.isRequired
};

export default BigBoothBadge;
