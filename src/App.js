import React, { Component } from 'react'; 
import SlotMachine from './components/SlotMachine';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Slot A Lot'
    }
    this.printPrize = this.printPrize.bind(this);
  }
  render() {
    return (
      <div className="App"> 
        <h1>{this.state.text}</h1>
        <SlotMachine prize={this.printPrize} />
      </div>
    );
  }
  printPrize(text) {
    this.setState({
      text: text
    })
  }
  
}

export default App;
