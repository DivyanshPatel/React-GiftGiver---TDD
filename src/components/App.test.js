import React from 'react';
import {shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initialize `state` with empty list of gifts',() => {
  expect(app.state().gifts).toEqual([]);
})

it('add a new gift to `state` when clicking the `add gift` button',() => {
  app.find('.btn_add').simulate('click');

  expect(app.state().gifts).toEqual([{id: 1}]);
});

it('adds new gift to the renderer list when clicking the `add gift` button',() => {
  app.find('.btn_add').simulate('click');

  expect(app.find('.gift-list').children().length).toEqual(2);
  
})
