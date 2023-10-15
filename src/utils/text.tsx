import React, {Component} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

export class SUITVariable {
  static Thin = 'SUITVariable-Thin';
  static ExtraLight = 'SUITVariable-ExtraLight';
  static Light = 'SUITVariable-Light';
  static Regular = 'SUITVariable-Regular';
  static Medium = 'SUITVariable-Medium';
  static SemiBold = 'SUITVariable-SemiBold';
  static Bold = 'SUITVariable-Bold';
  static ExtraBold = 'SUITVariable-ExtraBold';
  static Black = 'SUITVariable-Black';
}

export default class SUIT extends Component<{
  style?: StyleProp<TextStyle>;
  font?: string;
  children: string;
}> {
  render() {
    const style = StyleSheet.create({
      SUIT: {
        fontFamily: this.props.font || SUITVariable.Regular,
      },
    });
    return (
      <Text style={[style.SUIT, this.props.style]}>{this.props.children}</Text>
    );
  }
}
