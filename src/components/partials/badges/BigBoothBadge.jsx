import styles from "./BigBoothBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const BigBoothBadge = ({ value, marker }) => (
  <div className={className(styles.bigBoothBadge, marker && styles.marker)}>{value}</div>
);

BigBoothBadge.propTypes = {
  value: PropTypes.string.isRequired,
  marker: PropTypes.bool,
};

export default BigBoothBadge;
