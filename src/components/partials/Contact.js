import React from "react";
import { injectIntl, defineMessages } from "react-intl";

const contactMessages = defineMessages({
  contactTitle: {
    id: "hero.contactTitle",
    defaultMessage: "Kysyttävää?"
  },
  contactDescription: {
    id: "hero.contactDescription",
    defaultMessage: "Tavoitat meidät sähköpostilla osoitteesta"
  }
});

const Contact = ({ intl: { formatMessage } }) => {
  return (
    <section className="darker two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{formatMessage(contactMessages.contactTitle)}</h2>
            <p>
              {formatMessage(contactMessages.contactDescription)}
              <br />
              <a href="mailto:info@potentiaali.com">info(at)potentiaali.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default injectIntl(Contact);
