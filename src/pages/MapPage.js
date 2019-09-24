import React from "react";
import { Page } from "./../components/Page";
import style from "./MapPage.module.scss";
import AreaBadge from "../components/partials/badges/AreaBadge";
import BigBoothBadge from "../components/partials/badges/BigBoothBadge";
import { Localized } from "fluent-react/compat";
import ClassRoomBadge from "../components/partials/badges/ClassRoomBadge";

const MapPage = () => (
  <Page>
    <div className={style.map}>
      <div className={style.mapInfo}>
        <div className={style.mapInfoEntry}>
          <AreaBadge area="A" />
        </div>
        <div className={style.mapInfoEntry}>
          <AreaBadge area="B" />
        </div>
        <div className={style.mapInfoEntry}>
          <AreaBadge area="C" />
        </div>
        <div className={style.mapInfoEntry}>
          <BigBoothBadge number={1} />
          <span>
            <Localized id="big-booth">Big booth</Localized> 1
          </span>
        </div>
        <div className={style.mapInfoEntry}>
          <BigBoothBadge number={2} />
          <span>
            <Localized id="big-booth">Big booth</Localized> 2
          </span>
        </div>
        <div className={style.mapInfoEntry}>
          <BigBoothBadge number={3} />
          <span>
            <Localized id="big-booth">Big booth</Localized> 3
          </span>
        </div>
        <div className={style.mapInfoEntry}>
          <BigBoothBadge number={4} />
          <span>
            <Localized id="big-booth">Big booth</Localized> 4
          </span>
        </div>
        <div className={style.mapInfoEntry}>
          <ClassRoomBadge text="D116" />
          <span>
            <Localized id="company-info">Company info</Localized>
          </span>
        </div>
      </div>
      <img alt="Event map" src="area.svg" />
    </div>
  </Page>
);

export default MapPage;
