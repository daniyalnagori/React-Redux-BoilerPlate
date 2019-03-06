import React, { Component } from 'react';
import AppRoutes from "./Config/AppRoutes";
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
