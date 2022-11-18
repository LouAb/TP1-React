import React from "react";

export class CustomButton extends React.Component {
  render() {
    return (
      <button className="pure-material-button" onClick={this.props.action}>
        {this.props.text}
      </button>
    );
  }
}
