import React from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";
import classNames from "classnames";

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  handleAccordion = event => {
    event.preventDefault();
    this.setState(prev => {
      return {
        isOpen: !prev.isOpen
      };
    });
  };
  render() {
    return (
      <div
        className={classNames("accordion", {
          shadow: !this.props.noShadow,
          imageAccordion: this.props.imageTitle
        })}
      >
        <div className="accordion-header" onClick={this.handleAccordion}>
          {!this.props.imageTitle && (
            <div className="accordion-button">
              {this.state.isOpen ? "-" : "+"}
            </div>
          )}
          <div className="accordion-title">{this.props.title}</div>
        </div>
        <div
          className={classNames("accordion-content", {
            "is-open": this.state.isOpen,
            "inner-shadow": this.props.inner
          })}
        >
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  noShadow: PropTypes.bool,
  inner: PropTypes.bool,
  imageTitle: PropTypes.bool
};
