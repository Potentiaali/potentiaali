import React from "react"
import Clock from "./Clock"
import config from "../../data/config.json"
import PropTypes from "prop-types"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import styles from "./Hero.module.scss"
import { Suspense } from "react"

export const Hero = () => {
  const { t } = useTranslation()
  const reviews = [
    {
      id: "review-1-text",
      defaultText: '"Ehdottomasti laadukas opiskelijatapahtuma!"'
    }
  ]

  return (
    <section className={styles.hero}>
      <Suspense fallback="Loading">
        <video poster="poster.png" muted loop autoPlay preload="true">
          <source src="poster_video.mp4" type="video/mp4" />
        </video>
      </Suspense>
      <div className={styles["hero-overlay"]} />
      <div className={styles["hero-container"]}>
        <h1>
          <img
            className={styles["hero-logo"]}
            src="/logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </h1>
        <div className={styles["hero-paragraph"]}>
          <p>{t("heroDescription")}</p>
          <b>
            {config.eventDate}
            {/*{t("heroTimePrefix")}
            {config.eventTime}*/}
          </b>

          {/*<br />*/}
          {/*reviews.map((review) => (
            <span key={review.id}>
              <br />
              <p>{t(review.id)}</p>
              <br />
            </span>
          ))*/}
        </div>
        <Clock eventDate={config.eventDate} />
      </div>
      <div className="languages" />
    </section>
  )
}

Hero.propTypes = {
  intl: PropTypes.any
}

export default Hero
