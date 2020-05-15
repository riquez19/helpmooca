import React, { Component } from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/index';

class App extends Component {
  render() {
      const state= createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <Routes/>
      </Provider>
    );
  }
}

export default App; 
