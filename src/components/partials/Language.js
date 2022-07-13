import React from "react";
import PropTypes from "prop-types";
import { Localized } from "@fluent/react";

export const Language = ({ lang }) => {
  switch (lang) {
    case "fi":
      return <Localized id="finnish-language-text">Suomi</Localized>;
    case "en":
      return (
        <Localized id="english-language-text">Englanti</Localized>
      );

    case "fi/en":
      return (
        <Localized id="english-finnish-language-text">Suomi / Englanti</Localized>
      );

    case "en/fi":
      return (
        <Localized id="english-finnish-language-text">Suomi / Englanti</Localized>
      );
    default:
      return <span />;
  }
};

Language.propTypes = {
  lang: PropTypes.string.isRequired
};
