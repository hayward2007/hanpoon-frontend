import {StyleSheet} from 'react-native';
import {SUITVariable} from '@utils/text';
import Color from '@utils/color';

const style = StyleSheet.create({
  Grid: {
    flex: 1,
    paddingHorizontal: 8,
  },
  GridContent: {
    flex: 1,
  },
  GridImage: {
    backgroundColor: Color.gray[600],
    borderRadius: 6,
    flex: 1,
    height: 128,
    objectFit: 'cover',
    width: '100%',
  },
  GridItem: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: 12,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 12,
    justifyContent: 'center',
    margin: 8,
    padding: 12,
  },
  GridTitle: {
    fontFamily: SUITVariable.Bold,
    fontSize: 16,
  },
  GridValue: {
    fontFamily: SUITVariable.Medium,
    fontSize: 14,
    paddingBottom: 8,
  },
  Header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  HeaderTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 20,
  },
  Slide: {
    backgroundColor: Color.gray[600],
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  SlideArea: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  SlideButton: {
    backgroundColor: Color.white,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  SlideButtonOff: {
    backgroundColor: Color.gray[600],
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  SlideButtonText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 16,
  },
  SlideContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 60,
    justifyContent: 'flex-start',
  },
});

export default style;
