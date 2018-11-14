import React from "react";
import { FormattedMessage } from "react-intl";

export const Language = ({ lang }) => {
  switch (lang) {
    case "fi":
      return <FormattedMessage id="language.finnish" defaultMessage="Suomi" />;
    case "en":
      return (
        <FormattedMessage id="language.english" defaultMessage="Englanti" />
      );

    case "fi/en":
      return (
        <FormattedMessage
          id="language.englishFinnish"
          defaultMessage="Suomi / Englanti"
        />
      );

    case "en/fi":
      return (
        <FormattedMessage
          id="language.englishFinnish"
          defaultMessage="Suomi / Englanti"
        />
      );
    default:
      return <span />;
  }
};
