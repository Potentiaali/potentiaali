import React from "react";
import { Localized } from "@fluent/react";

const Contact = () => {
  return (
    <section className="darker two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Localized id="any-questions-title-text">
              <h2>Kysyttävää?</h2>
            </Localized>
            <p>
              <Localized id="any-questions-description-text">
                Tavoitat meidät sähköpostilla osoitteesta
              </Localized>
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
