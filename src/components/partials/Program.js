import React from "react"
import styles from "./Program.module.scss"
import { Accordion } from "../accordion/Accordion"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
export const Program = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h4>{t("click-picture-for-instructions")}</h4>
      <br />
      <div className={styles.program}>
        <Accordion
          imageTitle={true}
          title={<Image src="rekry_speed_dating.png" alt="Speed dates" />}
          accordionId={"speed-dates"}
        >
          {/*}
          <Textfit mode="single" max={20}>
             <span>{t("rekry-speed-dating-title-text")}</span>
          </Textfit>
  */}
          <p>{t("rekry-speed-dating-info-1")}</p>
          {/*
          <br />
            <p>{t("rekry-speed-dating-info-2")}</p>
          <br />
            <p>{t("rekry-speed-dating-info-3")}</p>*/}
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<Image src="workshop.png" alt="Workshops" />}
          accordionId={"workshops"}
        >
          <p>{t("workshop-info")}</p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<Image src="keynote.png" alt="Keynotes" />}
          accordionId={"keynotes"}
        >
          <span>{t("keynote-info-text")}</span>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<Image src="cocktail.png" alt="Kokkarit" />}
          accordionId={"cocktail"}
        >
          <p>{t("cocktail-hour-info-text")}</p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<Image src="panel.png" alt="Paneeli" />}
          accordionId={"panel"}
        >
          <p>{t("panel-discussion-info-text-1")}</p>
          <br />
          <p>{t("panel-discussion-info-text-2")}</p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<Image src="after_party.png" alt="Jatkot" />}
          accordionId={"afterparty"}
        >
          <p>{t("afterparty-info-text-1")}</p>
          <br />
          <p>{t("afterparty-info-text-2")}</p>
        </Accordion>
      </div>
    </div>
  )
}
