import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return(
      <button className="StartButton" onClick={this.props.clicked}></button>
    )
  }
}

export default StartButton;