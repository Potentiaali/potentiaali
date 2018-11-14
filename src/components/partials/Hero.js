import React from "react";
import Clock from "./Clock";
import config from "../../data/config.json";
import { injectIntl, defineMessages } from "react-intl";

const heroMessages = defineMessages({
  scheduleTitle: {
    id: "hero.potentiaaliDescription",
    defaultMessage: "Työelämä- ja rekrytointitapahtuma Kumpulan kampuksella"
  },
  review1: {
    id: "hero.reviewMessage1",
    defaultMessage: "Ehdottomasti laadukas opiskelijatapahtuma!"
  },
  review2: {
    id: "hero.reviewMessage2",
    defaultMessage:
      "Hyvät keskustelut, paljon porukkaa, mukavat yhteyshenkilöt ja muutenkin järjestelyt toimivat. Jatkot olivat loistavat."
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
    <section className="hero">
      <video poster="juku.png" muted loop autoPlay preload="true">
        <source src="DJI_0014.mp4" type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="container">
        <h1>
          <img
            className="hero-logo"
            src="logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </h1>
        <p>
          {formatMessage(heroMessages.scheduleTitle) + " "}
          <b>{config.eventDate}</b>
          <br />
          <br />
          <br />
          {reviews.map(review => (
            <React.Fragment key={review.text}>
              <br />
              <br />
              <span>“{review.text}“</span>
            </React.Fragment>
          ))}
        </p>
        <Clock eventDate={config.eventDate} />
      </div>
      <div className="languages" />
    </section>
  );
};

const Hero = injectIntl(HeroComponent);

export { Hero };