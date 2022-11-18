import React from "react";

export class DisablableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      disabled: true
    });
  }

  render() {
    return (
      <button
        className="pure-material-button"
        disabled={this.state.disabled}
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}
