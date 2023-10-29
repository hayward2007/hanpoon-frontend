import {StyleSheet} from 'react-native';
import {SUITVariable} from '../../../utils/text';
import Color from '../../../utils/color';

const style = StyleSheet.create({
  CartTitle: {
    display: 'flex',
    gap: 8,
    paddingVertical: 32,
  },
  CartTitleText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
    textAlign: 'center',
  },
  DetailBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  DetailButton: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: 12,
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    marginVertical: 8,
    padding: 12,
  },
  DetailButtonText: {
    fontFamily: SUITVariable.Bold,
    fontSize: 16,
  },
  DetailItem: {
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  DetailItemContainer: {
    gap: 8,
    paddingHorizontal: 4,
  },
  DetailItemImage: {
    height: 96,
    width: 96,
  },
  DetailItemInfo: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  DetailItemPrice: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
  DetailItemTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  DetailList: {
    backgroundColor: Color.background,
    gap: 16,
    paddingHorizontal: 16,
  },
  DetailSummary: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    justifyContent: 'flex-start',
    padding: 12,
  },
  DetailSummaryImage: {
    borderRadius: 8,
  },
  DetailSummaryInfo: {
    alignItems: 'flex-start',
    display: 'flex',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  DetailSummaryPrice: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
  DetailSummaryTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  DetailTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 20,
  },
  ReviewContent: {
    fontFamily: SUITVariable.Medium,
    fontSize: 14,
  },
  ReviewList: {
    backgroundColor: Color.white,
    borderRadius: 12,
    gap: 4,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  ReviewerName: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 16,
  },
  SubTitle: {
    gap: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  SubTitleLine: {
    backgroundColor: Color.gray[600],
    borderRadius: 2,
    height: 2,
  },
  SubTitleText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
});

export default style;
