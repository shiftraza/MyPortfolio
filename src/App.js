import React, { Component } from "react";
import Header from "./Architectural_Design/Design/header";
import BodyMain from "./Architectural_Design/Body_Main/Body_Design";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyMain />
      </div>
    );
  }
}

export default App;
