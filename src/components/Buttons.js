import React, { Component } from 'react';

class Buttons extends Component {

  render() {
    const buttons = [];
    for (let i = 0; i <= this.props.pinsRemaining; i++) {
      buttons.push((
        <button key={i} onClick={() => this.props.knockdownPins(i)}>{i}</button>
      ))
    }

    return (
      <div id="buttons">
        <h2>Pins knocked down with current ball:</h2>
        {buttons}
      </div>
    )
  }
}

export default Buttons;