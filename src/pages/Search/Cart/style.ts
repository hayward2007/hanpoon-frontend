import {StyleSheet} from 'react-native';
import {SUITVariable} from '../../../utils/text';
import Color from '../../../utils/color';

const style = StyleSheet.create({
  CartBar: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  CartTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 20,
  },
  CartList: {
    gap: 8,
    paddingHorizontal: 16,
    backgroundColor: Color.background,
  },
  CartItemImage: {
    width: 96,
    height: 96,
  },
  CartItem: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
  },
  CartItemInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  CartItemTitle: {
    fontFamily: SUITVariable.SemiBold,
    fontSize: 18,
  },
  CartItemPrice: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
  },
  CartItemCount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: 8,
  },
  CartItemCountText: {
    fontFamily: SUITVariable.Medium,
    fontSize: 16,
    width: 24,
    textAlign: 'right',
  },
  CartTotal: {
    backgroundColor: Color.brand,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  CartTotalText: {
    fontFamily: SUITVariable.Medium,
    fontSize: 20,
    color: Color.white,
  },
  CartCheckOut: {
    paddingHorizontal: 32,
  },
  CartCheckOutButton: {
    height: 60,
    display: 'flex',
    justifyContent: 'flex-start',
  },
});

export default style;
