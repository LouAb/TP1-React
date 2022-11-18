import React from "react";
import { TextField } from "@material-ui/core";

export class NewPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id === "nom") {
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        firstname: e.target.value
      });
    }
  }

  render() {
    return (
      <div id="Formulaire">
        <TextField
          id="nom"
          label="Nom"
          variant="filled"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextField
          id="prenom"
          label="Prénom"
          variant="filled"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <br />
        <p>{this.state.name + " " + this.state.firstname}</p>
      </div>
    );
  }
}
