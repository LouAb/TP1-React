import React from "react";

export class NewPeople2 extends React.Component {
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
        <input
          id="nom"
          label="Nom"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          id="prenom"
          label="Prénom"
          type="text"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <br />
        <p>{this.state.name + " " + this.state.firstname}</p>
      </div>
    );
  }
}
