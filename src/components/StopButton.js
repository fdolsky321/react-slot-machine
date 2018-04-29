import React, { Component } from 'react';

class StopButton extends Component {
  render() {
    return (
      <button className="StopButton" onClick={this.props.clicked}>Stop</button>
    )
  }
}

export default StopButton;