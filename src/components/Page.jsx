import styles from "./Page.module.scss";
import PropTypes from "prop-types";

const Page = ({ children }) => <div className={styles.page}>{children}</div>;

Page.propTypes = {
  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  usePadding: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
};

export { Page };
