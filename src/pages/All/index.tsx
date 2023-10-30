import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SUITVariable} from '../../utils/text';

import {Icon} from '../../utils/icon';
import Color from '../../utils/color';
import NavigationBar from '../../components/navigation';

const All = ({navigation}: {navigation: any}) => {
  type content = {
    title: string;
    icon: string;
  };
  const contents: content[] = [
    {
      title: '내 정보',
      icon: 'account_circle',
    },
    {
      title: '알림',
      icon: 'notifications',
    },
    {
      title: '설정',
      icon: 'settings',
    },
    {
      title: '어플리케이션 정보',
      icon: 'contact_support',
    },
  ];
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Color.backGroundColor}}>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: SUITVariable.SemiBold,
              fontSize: 20,
              color: 'black',
            }}>
            전체
          </Text>
        </View>
        <View
          style={{gap: 8, paddingLeft: 20, paddingRight: 20, borderRadius: 12}}>
          {contents.map((x, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                height: 48,
                gap: 12,
                padding: 12,
                borderWidth: 2,
                borderColor: '#EAEBED',
                backgroundColor: 'white',
                borderRadius: 12,
                alignItems: 'center',
              }}>
              <Icon icon={x.icon} color={'#ADADAD'} />
              <Text
                style={{
                  fontFamily: SUITVariable.SemiBold,
                  fontSize: 16,
                  color: 'black',
                }}>
                {x.title}
              </Text>
            </View>
          ))}
          <View
            style={{
              flexDirection: 'row',
              height: 48,
              gap: 12,
              padding: 12,
              borderWidth: 2,
              borderColor: '#EAEBED',
              backgroundColor: 'white',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: SUITVariable.SemiBold,
                fontSize: 16,
                color: '#FF7F7F',
              }}>
              로그아웃
            </Text>
            <Icon icon={'logout'} color={'#FF7F7F'} />
          </View>
        </View>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default All;
