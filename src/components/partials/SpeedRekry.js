import React, { useEffect } from "react";
import { fetchSpeedRekry } from "./../../reducers/SpeedRekryReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./SpeedRekry.module.scss";
import { Localized } from "fluent-react/compat";
import { SpeedRekryItem } from "./SpeedRekryItem";
import { Textfit } from "react-textfit";

export const SpeedRekry = ({ ilmot, open, fetchSpeedRekry }) => {
  useEffect(() => {
    fetchSpeedRekry();
  }, [fetchSpeedRekry]);
  return (
    <>
      <Textfit mode="single" max={20}>
        <h1>
          <Localized id="register-to-speed-rekry">
            Ilmoittaudu Speed rekryyn
          </Localized>
        </h1>
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

const mapStateToProps = state => {
  return {
    ilmot: state.speedRekry.SpeedRekryItems
  };
};

const mapDispatchToProps = {
  fetchSpeedRekry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedRekry);

SpeedRekry.propTypes = {
  ilmot: PropTypes.array,
  open: PropTypes.bool.isRequired,
  fetchSpeedRekry: PropTypes.func
};
