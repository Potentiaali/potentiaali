import React from "react";
import Clock from "./Clock";
import config from "../../data/config.json";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import styles from "./Hero.module.scss";

// TODO: Move translations to Fluent syntax

const heroMessages = defineMessages({
  scheduleTitle: {
    id: "hero.potentiaaliDescription",
    defaultMessage: "Työelämä- ja rekrytointitapahtuma Kumpulan kampuksella"
  },
  review1: {
    id: "hero.reviewMessage1",
    defaultMessage: "Default 1"
  },
  review2: {
    id: "hero.reviewMessage2",
    defaultMessage: "Default 2"
  }
});

const HeroComponent = ({ intl: { formatMessage } }) => {
  const reviews = [
    {
      text: formatMessage(heroMessages.review1)
    },
    {
      text: formatMessage(heroMessages.review2)
    }
  ];

  return (
    <section className={styles.hero}>
      <video poster="juku.png" muted loop autoPlay preload="true">
        <source src="DJI_0014.mp4" type="video/mp4" />
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
          {formatMessage(heroMessages.scheduleTitle) + " "}
          <b>
            {config.eventDate}{" "}
            <FormattedMessage id="hero.timePrefix" defaultMessage="klo" />{" "}
            {config.eventTime}
          </b>
          <br />
          {reviews.map(review => (
            <React.Fragment key={review.text}>
              <br />
              <br />
              <span>{review.text}</span>
            </React.Fragment>
          ))}
        </p>
        <Clock eventDate={config.eventDate} />
      </div>
      <div className="languages" />
    </section>
  );
};

HeroComponent.propTypes = {
  intl: PropTypes.any
};

const Hero = injectIntl(HeroComponent);

export { Hero };
