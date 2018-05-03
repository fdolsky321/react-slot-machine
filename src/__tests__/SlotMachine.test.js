import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import SlotMachine from '../components/SlotMachine';

configure({adapter: new Adapter() });

const printPrize = (text)  => {
  
};
  
test('SlotMachine component working', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);  
  expect(symbol.instance().state.isGameOn).toEqual(false);  
});

test('SlotMachine starts after 5 seconds of inactivity and stops 10 seconds after start', () => {
  const symbol = shallow(<SlotMachine prize={printPrize} />); 
   setTimeout(() => {
     expect(symbol.instance().state.isGameOn).toEqual(true);
    setTimeout(() => {
      expect(symbol.instance().state.isGameOn).toEqual(false);
    }, 10000);
  }, 5000);
});

test('handleStart Function Should Start The Game', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  symbol.instance().handleStart();
   expect(symbol.instance().state.isGameOn).toEqual(true);
});

test('handleStop Function Should Stop The Game', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  symbol.instance().handleStop();
   expect(symbol.instance().state.isGameOn).toEqual(false);
});

test('checkPrize Function Should Return Correct Values', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  
   symbol.instance().results = ["Monkey", "Monkey", "Monkey"];
   expect(symbol.instance().checkPrize()).toEqual(100);
  
  symbol.instance().results = ["Banana", "Monkey", "Monkey"];
   expect(symbol.instance().checkPrize()).toEqual(20);
  
  symbol.instance().results = ["Monkey", "Banana", "Monkey"];
   expect(symbol.instance().checkPrize()).toEqual(10);
  
  symbol.instance().results = ["Monkey", "Banana", "Strawberry"];
   expect(symbol.instance().checkPrize()).toEqual(0);
});

