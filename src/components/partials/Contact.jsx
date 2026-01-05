import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="darker two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{t("any-questions-title-text")}</p>
            <p>
              <p>{t("any-questions-description-text")}</p>
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
