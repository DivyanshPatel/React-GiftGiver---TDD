import React from 'react';
import {shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initialize `state` with empty list of gifts',() => {
    expect(app.state().gifts).toEqual([]);
  })

  describe('when clicking the Add gift button', () => {

    beforeEach(() => {
      app.find('.btn_add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts : []});
    });


    it('add a new gift to `state`',() => {
      expect(app.state().gifts).toEqual([{id: 1}]);
    });

    it('adds new gift to the renderer list ',() => {
      expect(app.find('.gift-list').children().length).toEqual(1);

    })

  })


});
