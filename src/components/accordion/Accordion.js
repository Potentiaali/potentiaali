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
    >
      <div className={styles["accordion-header"]} onClick={() => setOpen(!isOpen)} data-testid="AccordionHeader">
        {!props.imageTitle && (
          <div className={styles["accordion-button"]}>{isOpen ? "-" : "+"}</div>
        )}
        <div className={styles["accordion-title"]}>{props.title}</div>
      </div>
      <div
        className={classNames(styles["accordion-content"], {
          [styles["is-open"]]: isOpen,
          [styles["inner-shadow"]]: props.inner
        })} data-testid="AccordionContent">
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  noShadow: PropTypes.bool,
  inner: PropTypes.bool,
  imageTitle: PropTypes.bool
};
