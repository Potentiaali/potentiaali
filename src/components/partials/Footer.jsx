import PropTypes from "prop-types";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <svg
      viewBox="0 0 1440 60"
      className={styles["footer__top-triangle"]}
      preserveAspectRatio="none"
    >
      <polygon
        points="0,60 1440,60 0,0"
        className={styles["footer__top-triangle-fill"]}
      />
    </svg>
    <div className={styles["footer-links"]}>
      <a
        href="https://www.facebook.com/KumpulanPotentiaali/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="View our Facebook page"
        aria-label="View our Facebook page"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/kumpulan-potentiaali/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="View our LinkedIn profile"
        aria-label="View our LinkedIn profile"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://instagram.com/kumpulanpotentiaali"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="View our Instagram profile"
        aria-label="View our Instagram profile"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://t.me/potentiaali"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="Join the official Telegram channel"
        aria-label="Join the official Telegram channel"
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        href="mailto:info@potentiaali.com"
        alt="Contact us via email"
        className={styles["footer-icon"]}
        aria-label="Contact us via email"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  logos: PropTypes.array,
};

export default Footer;
