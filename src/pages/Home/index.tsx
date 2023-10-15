import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../../utils/color';
import NavigationBar from '../../components/navigation';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Color.backGroundColor}}>
        <Text>Home</Text>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
