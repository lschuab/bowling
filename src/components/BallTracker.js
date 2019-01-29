import React, { Component } from 'react';

class BallTracker extends Component {

  render() {
    return (
      <div id="ball-tracker">
        <p>Frame: {this.props.frame}</p>
        <p>Ball: {this.props.ball}</p>
        <div id="reset" onClick={() => this.props.reset()}>RESET</div>
      </div>
    )
  }
}

export default BallTracker;