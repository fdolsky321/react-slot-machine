import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter() });

test('App component working', () => {
  
  const symbol = shallow(<App />);  
  expect(symbol.instance().state.text).toEqual('Slot A Lot');  
});

test('printPrize function is working', () => {
  const symbol = shallow(<App />);
  symbol.instance().printPrize('You won 20$');
  expect(symbol.instance().state.text).toEqual('You won 20$');
});