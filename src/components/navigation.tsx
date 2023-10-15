import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon, IconProps} from '../utils/icon';
import Color from '../utils/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigationState} from '@react-navigation/native';
import SUIT, {SUITVariable} from '../utils/text';

export const NaviagtionButton = ({
  navigation,
  page,
  icon,
  name,
  size,
  color = Color.navigationbar.unselected,
}: {
  navigation: any;
  page: string;
  icon: IconProps;
  name?: string;
  size?: number;
  color?: string;
}) => {
  const buttonStyles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: size || 24,
      width: size || 24,
      fontSize: 12,
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
        {name && (
          <SUIT
            style={{color: color, fontSize: 12}}
            font={SUITVariable.SemiBold}>
            {name}
          </SUIT>
        )}
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
      backgroundColor: Color.navigationbar.background,
      height: 60,
      width: '100%',
      paddingLeft: 36,
      paddingRight: 36,
      borderStartStartRadius: 24,
      borderStartEndRadius: 24,
      borderStyle: 'solid',
      borderWidth: 2,
      borderBottomWidth: 0,
      borderColor: Color.navigationbar.border,
    },
  });

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        backgroundColor: Color.navigationbar.background,
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
              currentPage.toLocaleLowerCase() === page.page.toLocaleLowerCase()
                ? Color.navigationbar.selected
                : Color.navigationbar.unselected
            }
            icon={{
              icon: page.icon,
              fill: true,
            }}
            size={48}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NavigationBar;
