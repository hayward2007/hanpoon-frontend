import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../../utils/color';
import NavigationBar from '../../components/navigation';

const All = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Color.backGroundColor}}>
        <Text>All</Text>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default All;
