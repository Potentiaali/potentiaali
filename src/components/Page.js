import React from "react";
import styles from "./Page.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Page = ({ children, fullWidth, usePadding, ...rest }) => (
  <div
    className={classNames({
      [styles.page]: true,
      [styles.fullWidthPage]: fullWidth,
      [styles.usePadding]: usePadding
    })}
    {...rest}
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  usePadding: PropTypes.bool
};

export { Page };
