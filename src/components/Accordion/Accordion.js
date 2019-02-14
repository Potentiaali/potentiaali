import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Accordion.scss";
import classNames from "classnames";

export const Accordion = props => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={classNames("accordion", {
        shadow: !props.noShadow,
        imageAccordion: props.imageTitle
      })}
    >
      <div className="accordion-header" onClick={() => setOpen(!isOpen)}>
        {!props.imageTitle && (
          <div className="accordion-button">{isOpen ? "-" : "+"}</div>
        )}
        <div className="accordion-title">{props.title}</div>
      </div>
      <div
        className={classNames("accordion-content", {
          "is-open": isOpen,
          "inner-shadow": props.inner
        })}
      >
        <div className="content">{props.children}</div>
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
