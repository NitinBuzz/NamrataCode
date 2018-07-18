import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Flexi from './components/app';
import reducers from './reducers';

const flexiConfig = {
  items: [
    {
      name: 'personname',
      label: "Person's Name",
      type: 'TextField'
    },
    {
      name: 'states',
      label: "Person's state",
      type: 'DropDown',
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    }
  ]
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Flexi config={flexiConfig} />
  </Provider>,
  document.querySelector('.container')
);
