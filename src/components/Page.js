import React from "react";
import styles from "./Page.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Page = ({ children, fullWidth }) => (
  <div
    className={classNames({
      [styles.page]: true,
      [styles.fullWidthPage]: fullWidth
    })}
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  fullWidth: PropTypes.bool
};

export { Page };
