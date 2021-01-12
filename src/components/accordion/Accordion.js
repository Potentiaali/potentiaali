import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Accordion.module.scss";
import classNames from "classnames";

export const Accordion = props => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={classNames(styles.accordion, {
        [styles.shadow]: !props.noShadow,
        [styles.imageAccordion]: props.imageTitle
      })}
      aria-expanded={isOpen}
      id={`accordion-${props.accordionId}`}
    >
      <div aria-controls={`accordion-${props.accordionId}`} className={styles["accordion-header"]} onClick={() => setOpen(!isOpen)}>
        {!props.imageTitle && (
          <div className={styles["accordion-button"]}>{isOpen ? "-" : "+"}</div>
        )}
        <div className={styles["accordion-title"]}>{props.title}</div>
      </div>
      <div
        className={classNames(styles["accordion-content"], {
          [styles["is-open"]]: isOpen,
          [styles["inner-shadow"]]: props.inner
        })}
      >
        <div className={styles.content} aria-hidden={!isOpen}>{props.children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  accordionId: PropTypes.any.isRequired,
  children: PropTypes.any,
  noShadow: PropTypes.bool,
  inner: PropTypes.bool,
  imageTitle: PropTypes.bool
};
