import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  SUIT: {
    fontFamily: 'SUIT',
  },
});

export default class SUIT extends Component<{style?: any; children: string}> {
  render() {
    return (
      <Text style={[styles.SUIT, this.props.style]}>{this.props.children}</Text>
    );
  }
}
