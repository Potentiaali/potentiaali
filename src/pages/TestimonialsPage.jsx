import { useTranslation } from "react-i18next";
import LanguageString from "../components/LanguageString";
import testimonials from "../data/testimonials.json";
import styles from "./TestimonialsPage.module.scss";

const TestimonialsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="app-section" style={{ marginTop: '2rem' }}>
        <h1>{t('testimonials.header')}</h1>
        <p>{t('testimonials.body')}</p>
      </section>
      {
        Object.entries(testimonials)
          .sort(([a], [b]) => b - a)
          .map(([ year, { testimonials, stats } ]) => (
            <section className="app-section" key={year}>
              <h3>{year}</h3>
              {
                testimonials.map((text) => (
                  <blockquote className={styles.testimonialQuote}>{text}</blockquote>
                ))
              }
              { stats?.length > 0 && <p style={{ marginLeft: '20px' }}>{t('testimonials.statsSnippet')}</p> }
              <div className={styles.statContainer}>
                {
                  (stats ?? []).map(({ value, label }) => (
                    <div className={styles.statBlock} key="label">
                      <div className={styles.statValue}>{value}</div>
                      <div className={styles.statLabel}><LanguageString languageObject={label} /></div>
                    </div>
                  ))
                }
              </div>
            </section>
          ))
      }
    </>
  );
};

export default TestimonialsPage;
