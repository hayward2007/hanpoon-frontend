import React, {Component} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export default class SUIT extends Component<{
  style?: StyleProp<TextStyle>;
  font?: 'SemiBold' | 'Bold' | 'Regular';
  children: string;
}> {
  render() {
    const style = StyleSheet.create({
      SUIT: {
        fontFamily: 'SUITVariable-' + (this.props.font || 'Regular'),
      },
    });
    return (
      <Text style={[style.SUIT, this.props.style]}>{this.props.children}</Text>
    );
  }
}
