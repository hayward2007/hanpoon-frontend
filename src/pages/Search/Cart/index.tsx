import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import {Icon} from '@utils/icon';
import Item from '@components/item';
import {SearchResultType} from '@apis/search';

type Count = {
  count: number;
};

type CartListType = Count & SearchResultType;

export const CartListData: CartListType[] = [
  {
    name: 'test',
    price: 1000,
    image: 'https://via.placeholder.com/96',
    category: [],
    link: '',
    count: 1,
  },
];

const Cart = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <View style={style.CartBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon icon="arrow_back" />
        </TouchableOpacity>
        <Text style={style.CartTitle}>장바구니</Text>
        <TouchableOpacity>
          <Icon icon="check_circle" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={style.CartList}
        data={CartListData}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.9}
        renderItem={cart => {
          const item = cart.item;
          return (
            <Item
              name={item.name}
              price={item.price}
              image={item.image}
              counter={true}
              count={item.count}
            />
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

export default Cart;
