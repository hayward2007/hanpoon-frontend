import {StyleSheet} from 'react-native';
import Color from '../../utils/color';

const style = StyleSheet.create({
  SearchBar: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 16,
  },
  SearchText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  SearchTextInput: {
    flex: 1,
  },
});

export default style;
