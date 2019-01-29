import React, { Component } from 'react';

class TotalScore extends Component {

  render() {

    const msg = this.props.gameCompleted ? 'Final Score' : 'Curent Score'

    return (
      <p id="total-score">
        {msg}: {this.props.totalScore}
      </p>
    )
  }
}

export default TotalScore;