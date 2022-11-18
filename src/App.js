import React from "react";

import "./styles.css";
import { CustomButton } from "./CustomButton";
import { DisablableButton } from "./DisablableButton";
import { TextInput } from "./TextInput";
import { Button } from "@material-ui/core";
import { NewPeople } from "./NewPeople";
import { NewPeople2 } from "./NewPeople2";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TP React</h1>
        <p>Start editing to see some magic happen!</p>
        <CustomButton
          text="Click-me !"
          action={() => alert("You just click me :o")}
        />
        <br />
        <br />
        <TextInput />
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Material UI !
        </Button>
        <br />
        <br />
        <DisablableButton text="Bouton 1" />
        <DisablableButton text="Bouton 2" />
        <DisablableButton text="Bouton 3" />
        <br />
        <br />
        <NewPeople />
        <br />
        <br />
        <NewPeople2 />
      </div>
    );
  }
}

export default App;
