import React from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import Color from '../../utils/color';
import NavigationBar, {NaviagtionButton} from '../../components/navigation';
import {Icon} from '../../utils/icon';

const SearchBar = ({navigation}: {navigation: any}) => {
  return (
    <View style={style.SearchBar}>
      <View style={style.SearchText}>
        <Icon icon="search" color={Color.navigationBarColor.unselected} />
        <TextInput
          style={style.SearchTextInput}
          placeholder="검색어를 입력하세요"
        />
        <Icon icon="close" color={Color.navigationBarColor.unselected} />
      </View>
      <NaviagtionButton
        navigation={navigation}
        icon={{icon: 'shopping_cart'}}
        page={'All'}
      />
    </View>
  );
};

const Search = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Color.backGroundColor}}>
        <SearchBar navigation={navigation} />

        <Text>Search</Text>
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Search;
