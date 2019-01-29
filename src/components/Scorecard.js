import React, { Component } from 'react';
import Frame from './Frame';

class Scorecard extends Component {
  
  render() {
    const frameComponents = [];
    for (let i = 1; i < 11; i++) {
      frameComponents.push((
        <Frame key={i} number={i} scores={this.props.scores[i - 1]} frameScore={this.props.frameScores[i - 1]} />
      ))
    }

    return (
      <div id="scorecard">
        {frameComponents}
      </div>
    )
  }

}

export default Scorecard;