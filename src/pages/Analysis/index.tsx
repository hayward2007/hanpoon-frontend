import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SUITVariable} from '../../utils/text';

import Color from '../../utils/color';
import NavigationBar from '../../components/navigation';

import Graph from '../../../assets/images/graph.svg';
import Pattern from '../../../assets/images/pattern.svg';

const Analysis = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Color.backGroundColor}}>
        <View
          style={{
            gap: 4,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: SUITVariable.SemiBold,
              fontSize: 14,
              color: '#79797a',
            }}>
            김형석님의 9월 소비
          </Text>
          <Text
            style={{
              fontFamily: SUITVariable.SemiBold,
              fontSize: 20,
              color: 'black',
            }}>
            소비를 조금 아껴봐요!
          </Text>
        </View>

        <View
          style={{
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
          }}>
          <Graph />
          <Pattern />
        </View>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Analysis;
