import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App.js';

export default class wondays extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('wondays', () => wondays);
