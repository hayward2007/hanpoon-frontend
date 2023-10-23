import {StyleSheet} from 'react-native';
import Color from './color';

const border = StyleSheet.create({
  default: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Color.gray[300],
  },
});

export default border;
