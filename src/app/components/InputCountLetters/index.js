import PropTypes from "prop-types";
import React, { Component } from "react";

class InputCountLetters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  static propTypes = {
    limitLength: PropTypes.string
  };

  static defaultProps = {
    limitLength: "120"
  };

  handleSave = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    let limitLength = parseFloat(this.props.limit);
    return (
      <div>
        <textarea
          maxlength={limitLength}
          value={this.state.text}
          onChange={this.handleSave}
        />

        {this.state.text.length <= limitLength - 5 ? (
          <p>
            {this.state.text.length}/{limitLength}
          </p>
        ) : (
          <p style={{ color: "red" }}>
            {this.state.text.length}/{limitLength}
          </p>
        )}
      </div>
    );
  }
}

export default InputCountLetters;
