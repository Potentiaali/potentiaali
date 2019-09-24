import React from "react";
import styles from "./AreaBadge.module.scss";
import PropTypes from "prop-types";
import className from "classnames";
import { Localized } from "fluent-react/compat";

const AreaBadge = ({ area }) => (
  <div
    className={className(
      {
        [styles.a]: area === "A",
        [styles.b]: area === "B",
        [styles.c]: area === "C"
      },
      styles.areabadge
    )}
  >
    <Localized id="area">Alue</Localized> {area}
  </div>
);

AreaBadge.propTypes = {
  area: PropTypes.string.isRequired
};

export default AreaBadge;
