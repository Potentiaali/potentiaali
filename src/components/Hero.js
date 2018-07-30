import React from "react";
import moment from "moment";

export default props => {
  return (
    <section className="hero">
      <video poster="juku.png" muted loop autoPlay>
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
          {moment(props.eventDate, "DD.MM.YYYY")
            .locale("fi")
            .format("LL")}
          <br />
          <br />
          <br />“Ehdottomasti laadukas opiskelijatapahtuma!”
          <br />
          <br /> “Hyvät keskustelut, paljon porukkaa, mukavat yhteyshenkilöt ja
          muutenkin järjestelyt toimivat. Jatkot olivat loistavat.”
        </p>
        <p className="clock">
          {props.daysUntil} päivää {props.hoursUntil} tuntia{" "}
          {props.minutesUntil} minuuttia {props.secondsUntil} sekuntia
        </p>
      </div>
      <div className="languages">
        <a href="/en/index.html">In English</a>
      </div>
    </section>
  );
};
