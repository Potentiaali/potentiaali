import React from "react";
import PropTypes from "prop-types";
import styles from "./SpeedRekry.module.scss";
import { Localized } from "fluent-react/compat";
import { SpeedRekryItem } from "./SpeedRekryItem";

export const SpeedRekry = ({ ilmot, open }) => (
  <div>
    <h2>
      <Localized id="register-to-speed-rekry">
        Ilmoittaudu Speed rekryyn
      </Localized>
    </h2>
    <div className={styles.speedRekryGrid}>
      {ilmot &&
        ilmot.map((ilmo, i) => (
          <SpeedRekryItem key={i} {...ilmo} id={i + 1} open={open} />
        ))}
    </div>
  </div>
);

SpeedRekry.propTypes = {
  ilmot: PropTypes.array,
  open: PropTypes.bool.isRequired
};
