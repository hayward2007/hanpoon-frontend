import {StyleSheet} from 'react-native';
import {SUITVariable} from '../../utils/text';
import Color from '../../utils/color';

const style = StyleSheet.create({
  Home: {
    flex: 1,
    backgroundColor: Color.background,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingHorizontal: 16,
  },
  HomeContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  HomeBar: {
    backgroundColor: Color.background,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  HomeBarLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  HomeBarLogoText: {
    fontFamily: SUITVariable.Heavy,
    fontSize: 18,
    color: '#6E98C9',
  },
  HomeBarIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  SummaryView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: Color.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  SummaryViewTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SummaryViewTitleText: {
    fontFamily: SUITVariable.Bold,
    fontSize: 24,
  },
  SummaryViewTittleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: Color.gray[300],
    borderRadius: 8,
  },
  SummaryViewTittleButtonText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 12,
    color: Color.gray[600],
  },
  SummaryViewContent: {
    gap: 4,
    paddingHorizontal: 6,
  },
  SummaryViewContentItem: {
    fontFamily: SUITVariable.Medium,
    fontSize: 12,
    color: Color.gray[700],
  },
  SummaryViewContentValue: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SummaryViewContentText: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 20,
  },
  CardView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: Color.white,
    borderRadius: 16,
    paddingVertical: 16,
  },
  CardViewTitle: {
    paddingHorizontal: 20,
    fontFamily: SUITVariable.Bold,
    fontSize: 24,
  },
  CardViewUsage: {
    difplay: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    gap: 8,
  },
  CardViewUsageTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardViewUsageTitleText: {
    fontFamily: SUITVariable.Bold,
    fontSize: 14,
  },
  CardViewUsageBarText: {
    fontFamily: SUITVariable.Bold,
    fontSize: 8,
    color: '#5B5B5B',
  },
  CardViewUsageBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  CardViewUsageBarBackground: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    height: 6,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
  },
  CardViewUsageBarPercent: {
    backgroundColor: Color.brand,
    height: 6,
    borderRadius: 6,
  },
  Card: {
    objectFit: 'contain',
    height: 120 * 1.25,
  },
  NewsView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: Color.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  NewsViewTitle: {
    fontFamily: SUITVariable.Bold,
    fontSize: 24,
  },
  NewsViewSubTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 12,
    color: Color.gray[700],
  },
  NewsViewList: {
    gap: 12,
    paddingHorizontal: 6,
  },
  NewsItemBreakLine: {
    height: 1,
    borderRadius: 1,
    backgroundColor: Color.gray[300],
  },
  NewsItemTitle: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
  NewsItemDate: {
    fontFamily: SUITVariable.Medium,
    fontSize: 12,
    color: Color.gray[700],
  },
});

export default style;
