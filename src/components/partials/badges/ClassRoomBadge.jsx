import styles from "./ClassRoomBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";

const ClassRoomBadge = ({ text, basement, library }) => (
  <div
    className={className(
      styles.classRoomBadge,
      basement && styles.basement,
      library && styles.library,
    )}
  >
    <span>{text}</span>
  </div>
);

ClassRoomBadge.propTypes = {
  text: PropTypes.node.isRequired,
  basement: PropTypes.bool,
  library: PropTypes.bool,
};

export default ClassRoomBadge;
