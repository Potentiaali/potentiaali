import React from "react";
import Clock from "./Clock";
import config from "../../data/config.json";
import PropTypes from "prop-types";
import { Localized } from "fluent-react/compat";

import styles from "./Hero.module.scss";

export const Hero = () => {
  const reviews = [
    {
      id: "review-1-text",
      defaultText: '"Ehdottomasti laadukas opiskelijatapahtuma!"'
    }
  ];

  return (
    <section className={styles.hero}>
      <video poster="poster.png" muted loop autoPlay preload="true">
        <source src="poster_video.mp4" type="video/mp4" />
      </video>
      <div className={styles["hero-overlay"]} />
      <div className={styles["hero-container"]}>
        <h1>
          <img
            className={styles["hero-logo"]}
            src="logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </h1>
        <p className={styles["hero-paragraph"]}>
          <Localized id="heroDescription">
            Työelämä- ja rekrytointitapahtuma Kumpulan kampuksella
          </Localized>{" "}
          <b>
            {config.eventDate} <Localized id="heroTimePrefix">klo</Localized>{" "}
            {config.eventTime}
          </b>
          <br />
          {reviews.map(review => (
            <span key={review.id}>
              <br />
              <Localized id={review.id}>
                <i>{review.defaultText}</i>
              </Localized>
              <br />
            </span>
          ))}
        </p>
        <Clock eventDate={config.eventDate} />
      </div>
      <div className="languages" />
    </section>
  );
};

Hero.propTypes = {
  intl: PropTypes.any
};

export default Hero;
