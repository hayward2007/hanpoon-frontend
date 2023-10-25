import {StyleSheet} from 'react-native';
import {SUITVariable} from '../../../utils/text';
import Color from '../../../utils/color';

const style = StyleSheet.create({
  DetailBar: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  DetailTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 20,
  },
  DetailList: {
    gap: 16,
    paddingHorizontal: 16,
    backgroundColor: Color.background,
  },
  DetailSummary: {
    padding: 12,
    borderRadius: 12,
    gap: 12,
    backgroundColor: Color.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  DetailSummaryImage: {
    borderRadius: 8,
  },
  DetailSummaryInfo: {
    paddingBottom: 8,
    paddingHorizontal: 8,
    display: 'flex',
    alignItems: 'flex-start',
  },
  DetailSummaryTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  DetailSummaryPrice: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
  SubTitle: {
    gap: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  SubTitleLine: {
    height: 2,
    borderRadius: 2,
    backgroundColor: Color.gray[600],
  },
  SubTitleText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  DetailItemImage: {
    width: 96,
    height: 96,
  },
  DetailItem: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
  },
  DetailItemInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  DetailItemTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  DetailItemPrice: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
});

export default style;
