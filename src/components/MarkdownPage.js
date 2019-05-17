import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

// TODO: Deprecate this?

class MarkdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount = async () => {
    try {
      const res = await fetch(this.props.markdownFile);
      const contents = await res.text();
      this.setState({
        content: contents
      });
    } catch (ex) {
      this.setState({
        content: "There was an error loading the content for this page"
      });
    }
  };

  render() {
    return (
      <div className="markdownPage">
        <ReactMarkdown source={this.state.content} />
      </div>
    );
  }
}

MarkdownPage.propTypes = {
  markdownFile: PropTypes.any.isRequired
};

export default MarkdownPage;
