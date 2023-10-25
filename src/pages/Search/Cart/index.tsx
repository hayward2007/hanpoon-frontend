import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import Color from '../../../utils/color';
import {Icon} from '../../../utils/icon';
import Indicator from '../../../utils/indicator';
import {SearchResultType} from '../../../apis/search';
import border from '../../../utils/border';

type Count = {
  count: number;
};

type CartListType = Count & SearchResultType;

export const CartListData: CartListType[] = [
  {
    name: 'test',
    price: 1000,
    image: 'https://via.placeholder.com/150',
    category: [],
    link: '',
    count: 1,
  },
];
namespace Cart {
  export const App = ({navigation}: {navigation: any}) => {
    return <Index navigation={navigation} />;
  };

  const Index = ({navigation}: {navigation: any}) => {
    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <CartBar navigation={navigation} />
        <FlatList
          style={style.CartList}
          data={CartListData}
          keyExtractor={(item, index) => index.toString()}
          // ListFooterComponent={<Indicator />}
          // onEndReached={onEndReached}
          onEndReachedThreshold={0.9}
          renderItem={item => {
            return (
              <View style={[style.CartItem, border.default]}>
                <TouchableOpacity>
                  <Image
                    style={style.CartItemImage}
                    source={{uri: item.item.image}}
                  />
                </TouchableOpacity>
                <View style={style.CartItemInfo}>
                  <View>
                    <Text style={style.CartItemTitle}>{item.item.name}</Text>
                    <Text
                      style={
                        style.CartItemPrice
                      }>{`${item.item.price} ₩`}</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={[style.CartItemCount, border.default]}>
                      <Text style={style.CartItemCountText}>
                        {item.item.count}
                      </Text>
                      <Icon icon="arrow_drop_down" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <SafeAreaView edges={['bottom']} style={style.CartCheckOut}>
          <View style={style.CartCheckOutButton}>
            <TouchableOpacity>
              <View style={style.CartTotal}>
                <Text style={style.CartTotalText}>
                  총 {(100000).toLocaleString()}원 구매하기
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    );
  };

  const CartBar = ({navigation}: {navigation: any}) => {
    return (
      <View style={style.CartBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon icon="arrow_back" />
        </TouchableOpacity>
        <Text style={style.CartTitle}>장바구니</Text>
        <TouchableOpacity>
          <Icon icon="check_circle" />
        </TouchableOpacity>
      </View>
    );
  };
}

export default Cart.App;
