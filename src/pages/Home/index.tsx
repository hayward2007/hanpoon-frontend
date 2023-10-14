import React from 'react';
import Color from '../../utils/color';
import {Text, View, ScrollView} from 'react-native';
import NavigationBar from '../../components/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

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
