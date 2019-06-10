import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "intl-pluralrules";

import { LocalizationProvider } from "fluent-react/compat";

import { changeLocales } from "./reducers/LocalizationReducer";

class AppLocalizationProvider extends Component {
  componentWillMount() {
    this.props.changeLocales(navigator.languages);
  }

  render() {
    const { bundles, children } = this.props;

    if (!bundles) {
      return <div />;
    }

    return (
      <LocalizationProvider bundles={bundles}>{children}</LocalizationProvider>
    );
  }
}

AppLocalizationProvider.propTypes = {
  bundles: PropTypes.any,
  children: PropTypes.any,
  changeLocales: PropTypes.func
};

const mapStateToProps = state => ({ bundles: state.localization.bundles });
const mapDispatchToProps = { changeLocales };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLocalizationProvider);
