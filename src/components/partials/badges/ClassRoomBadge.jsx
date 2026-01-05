import styles from "./ClassRoomBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const ClassRoomBadge = ({ text, basement }) => (
  <div className={className(styles.classRoomBadge, basement && styles.basement )}><span>{text}</span></div>
);

ClassRoomBadge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassRoomBadge;
