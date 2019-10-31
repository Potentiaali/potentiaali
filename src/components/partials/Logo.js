import React from "react";
import styles from "./Logo.module.scss";
import { Localized } from "fluent-react/compat";
import config from "../../data/config.json";

const Logo = () => (
  <svg viewBox="0 0 1440 230" className={styles["logo-container"]} height="230">
    <polygon
      points="0,230 1440,110 1440,0 0,0"
      className={styles["bottom-fill-orange-2"]}
    />
    <polygon
      points="0,170 1440,50 1440,0 0,0"
      className={styles["bottom-fill-orange-1"]}
    />
    <image
      xlinkHref="lamp_brightorange.svg"
      className={styles["logo-image"]}
      x="395"
      y="18"
      height="160"
    />
    <Localized id="kumpulas">
      <text x="25" y="162" className={styles["logo-1"]}>
        KUMPULAN
      </text>
    </Localized>
    <Localized id="potential">
      <text x="50" y="226" className={styles["logo-2"]}>
        POTENTIAALI
      </text>
    </Localized>
    <text x="750" y="221" className={styles["logo-3"]}>
      {config.eventDate} <Localized id="at-clock">at</Localized> {config.eventTime}
    </text>
  </svg>
);

export default Logo;
