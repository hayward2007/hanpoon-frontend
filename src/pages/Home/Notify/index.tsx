import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../../../utils/color';

namespace Notify {
  export const App = ({navigation}: {navigation: any}) => {
    return <Index navigation={navigation} />;
  };

  const Index = ({navigation}: {navigation: any}) => {
    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: Color.background}}>
          <Text>Notify</Text>
        </ScrollView>
      </SafeAreaView>
    );
  };
}

export default Notify.App;
