import React from "react";
import style from "./MapPage.module.scss";
import AreaBadge from "../components/partials/badges/AreaBadge";
import BigBoothBadge from "../components/partials/badges/BigBoothBadge";
import { Localized } from "@fluent/react";
import ClassRoomBadge from "../components/partials/badges/ClassRoomBadge";

const MapPage = () => {
  const showFullScreen = () => {
    const elem = document.getElementById("map");
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen();
    } else {
      elem.requestFullscreen();
    }
  };
  return (
    <>
      <div className={style.map}>
        <div className={style.mapInfo}>
          <button
            className={style.fullScreenButton}
            onClick={() => showFullScreen()}
          >
            <i className="fas fa-expand-arrows-alt"></i>{" "}
            <Localized id="fullscreen">Fullscreen</Localized>
          </button>
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
            <BigBoothBadge value="A1" />
            <span>
              <Localized id="big-booth">Big booth</Localized>
            </span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="A2" />
            <span>
              <Localized id="big-booth">Big booth</Localized>
            </span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="C1" />
            <span>
              <Localized id="big-booth">Big booth</Localized>
            </span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="C2" />
            <span>
              <Localized id="big-booth">Big booth</Localized>
            </span>
          </div>
          <div className={style.mapInfoEntry}>
            <ClassRoomBadge text="D114" />
            <span>
              <Localized id="company-info">Company info</Localized>
            </span>
          </div>
        </div>
        <img
          alt="Event map"
          src="campus-area-with-stands.png"
          className={style.mapImage}
          id="map"
        />
      </div>
    </>
  );
};

export default MapPage;
