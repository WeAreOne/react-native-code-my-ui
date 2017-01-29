/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// App
import BookAFlight from './app/pages/BookAFlight';

export default class codemyui extends Component {
  render() {
    return (
      <BookAFlight />
    );
  }
}

AppRegistry.registerComponent('codemyui', () => codemyui);
