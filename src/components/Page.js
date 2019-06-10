import React from "react";
import styles from "./Page.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Page = ({
  children,
  fullWidth,
  usePadding,
  noTopPadding,
  noBottomPadding,
  alignText,
  ...rest
}) => (
  <div
    style={{ textAlign: alignText ? alignText : "left" }}
    className={classNames({
      [styles.page]: true,
      [styles.fullWidthPage]: fullWidth,
      [styles.usePadding]: usePadding,
      [styles.noTopPadding]: noTopPadding,
      [styles.noBottomPadding]: noBottomPadding
    })}
    {...rest}
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  usePadding: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  alignText: PropTypes.string
};

export { Page };
