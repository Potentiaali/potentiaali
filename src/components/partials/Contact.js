import React from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <section className="darker two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              {
                <FormattedMessage
                  id="hero.contactTitle"
                  defaultMessage="Kysyttävää?"
                />
              }
            </h2>
            <p>
              {
                <FormattedMessage
                  id="hero.contactDescription"
                  defaultMessage="Tavoitat meidät sähköpostilla osoitteesta"
                />
              }
              <br />
              <a href="mailto:info@potentiaali.com">info(at)potentiaali.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
