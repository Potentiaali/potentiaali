import React, { useEffect } from "react";
import { fetchSpeedRekry } from "./../../reducers/SpeedRekryReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./SpeedRekry.module.scss";
import { Localized } from "fluent-react/compat";
import { SpeedRekryItem } from "./SpeedRekryItem";

export const SpeedRekry = ({ ilmot, open, fetchSpeedRekry }) => {
  useEffect(() => {
    fetchSpeedRekry();
  }, [fetchSpeedRekry]);
  return (
    <div>
      <h2>
        <Localized id="register-to-speed-rekry">
          Ilmoittaudu Speed rekryyn
        </Localized>
      </h2>
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
    </div>
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
