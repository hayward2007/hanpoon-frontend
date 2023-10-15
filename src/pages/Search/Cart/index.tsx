import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../../../utils/color';

namespace Cart {
  export const App = ({navigation}: {navigation: any}) => {
    return <Index navigation={navigation} />;
  };

  const Index = ({navigation}: {navigation: any}) => {
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
}
export default Cart.App;
