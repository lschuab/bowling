import React, { Component } from 'react';

class Frame extends Component {

  render() {
    return (
      <div className="frame">
          <div className="frame-number">
            {this.props.number}
          </div>
          <div className="ball-scores">
            <div className="ball1-score">
              {this.props.scores ? this.props.scores[0] : ''}
            </div>
            <div className="ball2-score">
              {this.props.scores ? this.props.scores[1] : ''}
            </div>
            {this.props.number === 10 && 
              <div className="ball2-score">
                {this.props.scores ? this.props.scores[2] : ''}
              </div>
            }
          </div>
          <div className="frame-score">
            {this.props.frameScore}
          </div>
        </div>
    )
  }
}

export default Frame;