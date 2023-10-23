import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Color from './color';

const Indicator = () => (
  <View
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}>
    <ActivityIndicator size="large" color={Color.gray[700]} />
  </View>
);

export default Indicator;
