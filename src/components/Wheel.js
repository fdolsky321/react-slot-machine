import React, { Component } from 'react';

import Symbol from './Symbol';

import Banana from '../assets/img/banana.png'; 
import Orange from '../assets/img/orange.png';
import Strawberry from '../assets/img/strawberry.png';
import Monkey from '../assets/img/monkey.png';

class Wheel extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      spinning: false,
      symbols: ["Strawberry", "Banana", "Orange", "Monkey"]
    }
  }
  componentWillMount() {
    this.shuffle();
  } 
  render() { 
    return(
    <div className="Wheel"> 
      <Symbol name="Strawberry" src={Strawberry} positionY={this.state.order[0]*128} />
      <Symbol name="Banana" src={Banana} positionY={this.state.order[1]*128} />
      <Symbol name="Orange" src={Orange} positionY={this.state.order[2]*128} />
      <Symbol name="Monkey" src={Monkey} positionY={this.state.order[3]*128} />
    </div>
      )
  }
  
  componentDidUpdate() {
    if(this.props.isSpinning) {
      if(!this.state.spinning){
      this.startSpinning();
      this.setState({
        spinning: true
      })
      }
    }else if(!this.props.isSpinning) {
      if(this.state.spinning) {
        this.stopSpinning();
        this.setState({
          spinning: false
        })
      }
    }
  }
  
  shuffle() {    
     
    let options = [0,1,2,3];
    let temp = [];
    for(let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * (4-i));
      temp.push(options[rand]);
      options.splice(rand, 1);
    }   
    this.setState({
      order: temp
    }) 
  }
  
  startSpinning() {
    let temp = [];
    let arr = this.state.order;
    let intervalId = setInterval(() => {  
      temp = [];
      temp[0] = arr[3];
      temp[1] = arr[0];
      temp[2] = arr[1];
      temp[3] = arr[2];
      arr = temp;
      this.setState({
        order: temp,
        interval: intervalId
      });
    },50)
  }
  
  stopSpinning() { 
    clearTimeout(this.state.interval);
    let selected = this.state.symbols[this.state.order.indexOf(0)];
    this.props.active(this.props.name, selected);
  }
}

export default Wheel;