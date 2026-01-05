import styles from "./BigBoothBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const BigBoothBadge = ({ value, blue }) => (
  <div className={className(styles.bigBoothBadge, blue && styles.blue)}>{value}</div>
);

BigBoothBadge.propTypes = {
  value: PropTypes.string.isRequired,
};

export default BigBoothBadge;
