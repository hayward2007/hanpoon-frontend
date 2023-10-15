import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Animated,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import Color from '../../utils/color';
import NavigationBar, {NaviagtionButton} from '../../components/navigation';
import {Icon} from '../../utils/icon';

const SearchBar = ({navigation}: {navigation: any}) => {
  const [SearchText, setSearchText] = useState('');

  return (
    <View style={style.SearchBar}>
      <View style={style.SearchText}>
        <Icon icon="search" color={Color.navigationBarColor.unselected} />
        <TextInput
          style={style.SearchTextInput}
          placeholder="검색어를 입력하세요"
          onChangeText={text => setSearchText(text)}
          value={SearchText}
        />
        {SearchText && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Icon icon="close" color={Color.navigationBarColor.unselected} />
          </TouchableOpacity>
        )}
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

        {/* <Text>{SearchText}</Text> */}
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Search;
