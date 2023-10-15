import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Cart from './Cart';
import style from './style';
import Color from '../../utils/color';
import {Icon} from '../../utils/icon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationBar, {NaviagtionButton} from '../../components/navigation';
import Space from '../../utils/space';

const Stack = createNativeStackNavigator();
const Search = () => {
  return (
    <Stack.Navigator
      initialRouteName="search"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 200,
      }}>
      <Stack.Screen name="search" component={Index} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default Search;

const Index = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, backgroundColor: Color.background}}
        stickyHeaderIndices={[0]}>
        <SearchBar navigation={navigation} />
        <View style={style.Search}>
          <RecentSearch.RecentSearchView />
          <CategorySearch.CategorySearchView />
          <PopularSearch.PopularSearchView />
        </View>
        <Space />
      </ScrollView>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

const SearchBar = ({navigation}: {navigation: any}) => {
  const [SearchText, setSearchText] = useState('');

  return (
    <View style={style.SearchBar}>
      <View style={style.SearchText}>
        <Icon icon="search" color={Color.gray[600]} />
        <TextInput
          style={style.SearchTextInput}
          placeholder="검색어를 입력하세요"
          onChangeText={text => setSearchText(text)}
          value={SearchText}
        />
        {SearchText && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Icon icon="close" color={Color.gray[600]} />
          </TouchableOpacity>
        )}
      </View>
      <NaviagtionButton
        navigation={navigation}
        icon={{icon: 'shopping_cart'}}
        page={'cart'}
      />
    </View>
  );
};

namespace RecentSearch {
  export const RecentSearchList = [
    '후드티',
    '맨투맨',
    '반팔티',
    '긴팔티',
    '반바지',
    '청바지',
    '코트',
    '자켓',
  ];

  const RecentSearchItem = ({text}: {text: string}) => {
    return (
      <View style={style.RecentSearchItem}>
        <Text>{text}</Text>
      </View>
    );
  };

  export const RecentSearchView = () => {
    return (
      <View style={style.View}>
        <Text style={style.Title}>최근 검색어</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.ViewList}>
            {RecentSearchList.map((text, index) => (
              <RecentSearchItem text={text} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
}

namespace CategorySearch {
  export const CategorySearchList = [
    {
      name: '가구',
      icon: 'bed',
    },
    {
      name: '컴퓨터',
      icon: 'computer',
    },
    {
      name: '생활',
      icon: 'cooking',
    },
    {
      name: '패션',
      icon: 'styler',
    },
    {
      name: '가구',
      icon: 'bed',
    },
    {
      name: '가구',
      icon: 'bed',
    },
    {
      name: '가구',
      icon: 'bed',
    },
  ];

  const CategorySearchItem = ({text, icon}: {text: string; icon: string}) => {
    return (
      <View style={style.CategoryItem}>
        <View style={style.CatogoryIcon}>
          <Icon icon={icon} color={Color.white} size={31} />
        </View>
        <Text>{text}</Text>
      </View>
    );
  };

  export const CategorySearchView = () => {
    return (
      <View style={style.View}>
        <Text style={style.Title}>카테고리</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.ViewList}>
            {CategorySearchList.map((category, index) => (
              <CategorySearchItem
                text={category.name}
                key={index}
                icon={category.icon}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
}

namespace PopularSearch {
  export const RecentSearchList = [
    '후드티',
    '맨투맨',
    '반팔티',
    '긴팔티',
    '반바지',
    '청바지',
    '코트',
    '자켓',
    '컴퓨터',
  ];

  const PopularSearchItem = ({index, text}: {index: number; text: string}) => {
    return (
      <View style={style.PopularSearchItem}>
        <Text style={style.PopularSearchItemIndex}>{index + 1}</Text>
        <Text>{text}</Text>
      </View>
    );
  };

  export const PopularSearchView = () => {
    return (
      <View style={style.View}>
        <Text style={style.Title}>인기 검색어</Text>
        <View style={style.PopularViewList}>
          {RecentSearchList.map((text, index) => (
            <PopularSearchItem text={text} key={index} index={index} />
          ))}
        </View>
      </View>
    );
  };
}
