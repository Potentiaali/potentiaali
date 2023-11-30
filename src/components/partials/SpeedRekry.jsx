import React, { useEffect, useState } from "react";
import config from "../../data/config.json";
import PropTypes from "prop-types";
import styles from "./SpeedRekry.module.scss";
import { useTranslation } from "react-i18next";
import { SpeedRekryItem } from "./SpeedRekryItem";
import { Textfit } from "@aw-web-design/react-textfit";

const rekryFilter = (rekryItem) => ({
  ...rekryItem,
  open: rekryItem.open === "TRUE" ? true : false,
  full: rekryItem.full === "TRUE" ? true : false,
});

const fetchSpeedRekry = async () => {
  const rekries = await axios.get(config.speedRekryApi);
  const filteredData = rekries.data.map(rekryFilter);
  return filteredData;
};

export const SpeedRekry = () => {
  const [ilmot, setIlmot] = useState([]);
  useEffect(() => {
    const f = async () => {
      const res = await fetchSpeedRekry();
      setIlmot(res);
    };
    f();
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <Textfit mode="single" max={20}>
        <h1>{t("register-to-speed-rekry")}</h1>
      </Textfit>
      <div className={styles.speedRekryGrid}>
        {ilmot &&
          ilmot.map((ilmo, i) => (
            <SpeedRekryItem
              key={i}
              full={ilmo.full}
              companies={ilmo.companies}
              link={ilmo.link}
              open={ilmo.open}
              id={i + 1}
            />
          ))}
      </div>
    </>
  );
};

export default SpeedRekry;

SpeedRekry.propTypes = {
  ilmot: PropTypes.array,
  open: PropTypes.bool.isRequired,
  fetchSpeedRekry: PropTypes.func,
};
