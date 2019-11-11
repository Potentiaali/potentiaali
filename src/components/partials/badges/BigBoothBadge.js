import React from "react";
import styles from "./BigBoothBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const BigBoothBadge = ({ value }) => (
  <div className={className(styles.bigBoothBadge)}>{value}</div>
);

BigBoothBadge.propTypes = {
  value: PropTypes.string.isRequired
};

export default BigBoothBadge;
