import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon, IconProps} from '../utils/icon';
import Color from '../utils/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigationState} from '@react-navigation/native';
import SUIT from '../utils/text';

export const NaviagtionButton = ({
  navigation,
  name,
  page,
  color,
  icon,
}: {
  navigation: any;
  name: string;
  page: string;
  color: string;
  icon: IconProps;
}) => {
  const buttonStyles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: 48,
      width: 48,
      fontSize: 12,
      gap: 4,
    },
  });
  return (
    <TouchableOpacity onPressOut={() => navigation.navigate(page)}>
      <View style={buttonStyles.button}>
        <Icon
          icon={icon.icon}
          fill={icon.fill}
          size={icon.size}
          weight={icon.weight}
          color={color || icon.color}
        />
        <SUIT style={{color: color, fontWeight: '700', fontSize: 12}}>
          {name}
        </SUIT>
      </View>
    </TouchableOpacity>
  );
};

const NavigationBar = ({navigation}: {navigation: any}) => {
  const currentPage = useNavigationState(
    state => state.routes[state.index].name,
  );

  const pages = [
    {
      name: '홈',
      page: 'Home',
      icon: 'home',
    },
    {
      name: '분석',
      page: 'Analysis',
      icon: 'bar_chart',
    },
    {
      name: '검색',
      page: 'Search',
      icon: 'search',
    },
    {
      name: '전체',
      page: 'All',
      icon: 'dehaze',
    },
  ];

  const barStyles = StyleSheet.create({
    navigationBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: Color.navigationBarColor.background,
      height: 60,
      width: '100%',
      paddingLeft: 36,
      paddingRight: 36,
      borderStartStartRadius: 24,
      borderStartEndRadius: 24,
      borderStyle: 'solid',
      borderWidth: 2,
      borderBottomWidth: 0,
      borderColor: Color.navigationBarColor.border,
    },
  });

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        backgroundColor: Color.navigationBarColor.background,
        borderRadius: 24,
      }}>
      <View style={barStyles.navigationBar}>
        {pages.map(page => (
          <NaviagtionButton
            key={page.name}
            navigation={navigation}
            name={page.name}
            page={page.page}
            color={
              currentPage === page.page
                ? Color.navigationBarColor.selected
                : Color.navigationBarColor.unselected
            }
            icon={{
              icon: page.icon,
              fill: true,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NavigationBar;
