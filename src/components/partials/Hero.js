import React from "react";
import moment from "moment";
import Clock from "./Clock";
import config from "../../data/config.json";

const reviews = require("../../data/reviews.json");

export const Hero = () => {
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
          Työelämä- ja rekrytointitapahtuma Kumpulan kampuksella{" "}
          <b>
            {moment(config.eventDate, "DD.MM.YYYY")
              .locale("fi")
              .format("LL")}
          </b>
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
