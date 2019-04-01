// src/App.js
import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg"
import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: false,
        atome : 'App-logo-speed'
    };
  }
  handleClick = (working) => {
    this.setState({ working: !this.state.working });
    this.state.working
      ? this.setState({ atome: 'App-logo' })
      : this.setState({ atome: 'App-logo-speed' });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className={this.state.atome} alt="logo"/>
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>Is working?</button>
        </header>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Lamp />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Lamp />
      </div>
    );
  }
}

export default App;