import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../../../utils/color';
import NavigationBar from '../../../components/navigation';

const Cart = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, backgroundColor: Color.background}}
        stickyHeaderIndices={[0]}>
        <View>
          <Text>Cart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
