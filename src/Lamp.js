// src/Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }
    handleClick = () => {
        // Négation de la valeur actuelle, et affectation comme nouvelle valeur
        this.setState({ on: !this.state.on });
      };
    render() {
        const light = this.state.on ? 'on' : 'off';
        return (
        <div className="Lamp">
            <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
            <figure className={light} />
        </div>
    );
  }
}

export default Lamp;