import React, { Component } from 'react';
import './App.css';
import BallTracker from './components/BallTracker';
import Buttons from './components/Buttons';
import Scorecard from './components/Scorecard';
import TotalScore from './components/TotalScore';
import { scoreBowling } from './logic'

class App extends Component {
  state = {
    frame: 1,
    ball: 1,
    pinsRemaining: 10,
    scores: [],
    frameScores: [],
    totalScore: 0,
    gameCompleted: false,
  }

  knockdownPins = pins => {
    if (!this.state.gameCompleted) {
      if (this.state.frame < 10) {
        if (this.state.ball === 1) {
          const scores = [...this.state.scores, [pins]];
          this.setState({
            scores,
            totalScore: scoreBowling(scores)
          });
          if (pins < 10) {
            this.setState({
              ball: 2,
              pinsRemaining: 10 - pins
            });
          } else {
            this.setState({
              frame: this.state.frame + 1
            });
          }
        } else {
          const scores = [...this.state.scores];
          scores[scores.length - 1].push(pins);
          this.setState({
            scores,
            totalScore: scoreBowling(scores),
            frame: this.state.frame + 1,
            ball: 1,
            pinsRemaining: 10
          });
        }
      } else {
        if (this.state.ball === 1) {
          const scores = [...this.state.scores, [pins]];
          this.setState({
            scores,
            totalScore: scoreBowling(scores),
            ball: 2
          });
          if (pins < 10) {
            this.setState({
              pinsRemaining: 10 - pins
            });
          }
        } else {
          const scores = [...this.state.scores];
          scores[scores.length - 1].push(pins);
          this.setState({
            scores,
            totalScore: scoreBowling(scores),
          });
          if (this.state.ball === 2) {
            const lastFrame = scores[scores.length - 1];
            if (lastFrame[0] + lastFrame[1] >= 10) {
              this.setState({
                ball: 3,
                pinsRemaining: (lastFrame[0] + lastFrame[1]) % 10 !== 0 ? 10 - pins : 10
              });
            } else {
              this.setState({
                gameCompleted: true
              });
            }
          } else {
            this.setState({
              gameCompleted: true
            });
          }
        }
      }
    }
  }

  reset = () => {
    this.setState({
      frame: 1,
      ball: 1,
      pinsRemaining: 10,
      scores: [],
      totalScore: 0,
      gameCompleted: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Leandro's Bowling Scorecard</h1>
        <BallTracker 
          frame={this.state.frame}
          ball={this.state.ball}
          reset={this.reset}
        />
        <Buttons 
          pinsRemaining={this.state.pinsRemaining} 
          knockdownPins={this.knockdownPins} 
        />
        <Scorecard 
          scores={this.state.scores} 
          frameScores={this.state.frameScores} 
        />
        <TotalScore 
          totalScore={this.state.totalScore}
          gameCompleted={this.state.gameCompleted}
        />
      </div>
    );
  }
}

export default App;
