import React, { Suspense } from "react";
import Clock from "./Clock";
import config from "../../data/config.json";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";
import dayjs from "dayjs";
import lozad from "lozad";

export const Hero = () => {
  const { t } = useTranslation();
  const date = dayjs(config.eventDate).format("DD.MM.YYYY");
  const observer = lozad("#lozad", {
    rootMargin: "10px 0px", // syntax similar to that of CSS Margin
    threshold: 0.1, // ratio of element convergence
    enableAutoReload: true, // it will reload the new image when validating attributes changes
  });
  observer.observe();
  /*
  const reviews = [
    {
      id: 'review-1-text',
      defaultText: '"Ehdottomasti laadukas opiskelijatapahtuma!"'
    }
  ]
*/
  return (
    <section className={styles.hero}>
      {/* <video poster="assets/poster.webp" muted loop autoPlay>
          <source src="assets/poster_video.mp4" type="video/mp4" />
  </video >*/}
      <div className={styles["hero-overlay"]} />
      <div className={styles["hero-container"]}>
        <h1>
          <img
            id="lozad"
            className={styles["hero-logo"]}
            src="/logos/potentiaali-black.webp"
            alt="Kumpulan Potentiaali"
          />
        </h1>
        <div className={styles["hero-paragraph"]}>
          <p>{t("heroDescription")}</p>
          <b>
            {date} {t("heroTimePrefix")} {config.eventStartTime} -{" "}
            {config.eventEndTime}
          </b>

          {/* <br />*/}
          {/* reviews.map((review) => (
            <span key={review.id}>
              <br />
              <p>{t(review.id)}</p>
              <br />
            </span>
          ))*/}
        </div>
        <Suspense fallback={<div>Loading clock</div>}>
          <Clock eventDate={`${config.eventDate} ${config.eventStartTime}`} />
        </Suspense>
      </div>
      <div className="languages" />
    </section>
  );
};

Hero.propTypes = {
  intl: PropTypes.any,
};

export default Hero;
