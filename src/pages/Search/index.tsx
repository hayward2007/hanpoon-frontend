import React, {useState} from 'react';
import {
  Text,
  View,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cart from './Cart';
import Detail from './Detail';

import style from './style';
import SearchStackParamList from './type';
import SearchAPI from '@apis/search';
import Color from '@utils/color';
import Space from '@utils/space';
import {Icon} from '@utils/icon';
import border from '@utils/border';
import Indicator from '@utils/indicator';
import Goods from '@pages/Search/Goods';
import NavigationBar, {NaviagtionButton} from '@components/navigation';

namespace Search {
  const Stack = createNativeStackNavigator<SearchStackParamList>();
  const api = new SearchAPI();

  type SearchProps = {
    navigation?: any;
    SearchText?: string;
    setSearchText?: any;
    Typing?: boolean;
    setTyping?: any;
  };

  export const App = () => {
    return (
      <Stack.Navigator
        initialRouteName="search"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 200,
        }}>
        <Stack.Screen name="search" component={Index} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="goods" component={Goods} />
      </Stack.Navigator>
    );
  };

  const Index = ({navigation}: {navigation: any}) => {
    const [SearchText, setSearchText] = useState('');
    const [Typing, setTyping] = useState(false);

    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <SearchBar
          navigation={navigation}
          SearchText={SearchText}
          setSearchText={setSearchText}
          setTyping={setTyping}
        />
        {SearchText ? (
          <SearchResult.SearchResultView
            navigation={navigation}
            SearchText={SearchText}
            Typing={Typing}
          />
        ) : (
          <ScrollView
            style={{flex: 1, backgroundColor: Color.background}}
            showsVerticalScrollIndicator={false}>
            <View style={style.Search}>
              <RecentSearch.RecentSearchView setSearchText={setSearchText} />
              <CategorySearch.CategorySearchView
                setSearchText={setSearchText}
              />
              <PopularSearch.PopularSearchView setSearchText={setSearchText} />
            </View>
            <Space />
          </ScrollView>
        )}
        <NavigationBar navigation={navigation} />
      </SafeAreaView>
    );
  };

  const SearchBar = ({
    navigation,
    SearchText,
    setSearchText,
    setTyping,
  }: SearchProps) => {
    return (
      <View style={style.SearchBar}>
        <View style={style.SearchText}>
          <Icon icon="search" color={Color.gray[600]} />
          <TextInput
            style={style.SearchTextInput}
            placeholder="검색어를 입력하세요"
            placeholderTextColor={Color.gray[600]}
            onChangeText={text => {
              setSearchText(text);
              setTyping(true);
            }}
            onSubmitEditing={() => {
              setTyping(false);
              Keyboard.dismiss();
              if (SearchText) {
                api.search(SearchText);
              }
            }}
            value={SearchText}
            returnKeyType="search"
          />
          {SearchText && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Icon icon="close" color={Color.gray[600]} />
            </TouchableOpacity>
          )}
        </View>
        <NaviagtionButton
          navigation={navigation}
          icon={{icon: 'shopping_cart', fill: false}}
          page={'cart'}
        />
      </View>
    );
  };
  namespace SearchResult {
    export const SearchResultView = ({
      navigation,
      SearchText,
      Typing,
    }: SearchProps) => {
      const [loading, setLoading] = useState(false);
      const onEndReached = async () => {
        if (loading || Typing) {
          return;
        } else {
          if (SearchText) {
            setLoading(true);
            await api.search(SearchText);
            setLoading(false);
          }
        }
      };
      return (
        <FlatList
          style={style.SearchResultView}
          data={api.data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<Indicator />}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.9}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={style.SearchResultContent}
                onPress={() => navigation.push('detail', item.item)}>
                <View style={[style.SearchResultItem, border.default]}>
                  <Image
                    style={style.SearchResultImage}
                    source={{uri: item.item.image}}
                  />
                  <View>
                    <Text style={style.SearchResultTitle}>
                      {item.item.name}
                    </Text>
                    <Text
                      style={
                        style.SearchResultValue
                      }>{`${item.item.price} ₩`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      );
    };
  }

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

    type RecentSearchItemProps = {
      text: string;
      SearchText?: SearchProps['SearchText'];
      setSearchText?: SearchProps['setSearchText'];
    };

    const RecentSearchItem = ({text, setSearchText}: RecentSearchItemProps) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setSearchText(text);
            api.search(text);
          }}>
          <View style={style.RecentSearchItem}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    export const RecentSearchView = ({setSearchText}: SearchProps) => {
      return (
        <View style={style.View}>
          <Text style={style.Title}>최근 검색어</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={style.ViewList}>
              {RecentSearchList.map((text, index) => (
                <RecentSearchItem
                  text={text}
                  key={index}
                  setSearchText={setSearchText}
                />
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

    const CategorySearchItem = ({
      text,
      icon,
      setSearchText,
    }: {
      text: string;
      icon: string;
      setSearchText: any;
    }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setSearchText(text);
            api.search(text);
          }}>
          <View style={style.CategoryItem}>
            <View style={style.CatogoryIcon}>
              <Icon icon={icon} color={Color.white} size={31} />
            </View>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    export const CategorySearchView = ({setSearchText}: SearchProps) => {
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
                  setSearchText={setSearchText}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      );
    };
  }

  namespace PopularSearch {
    export const PopularSearchList = [
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

    type PopularSearchItemProps = {
      index: number;
      text: string;
      SearchText?: SearchProps['SearchText'];
      setSearchText?: SearchProps['setSearchText'];
    };

    const PopularSearchItem = ({
      index,
      text,
      setSearchText,
    }: PopularSearchItemProps) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setSearchText(text);
            api.search(text);
          }}>
          <View style={style.PopularSearchItem}>
            <Text style={style.PopularSearchItemIndex}>{index + 1}</Text>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    export const PopularSearchView = ({setSearchText}: SearchProps) => {
      return (
        <View style={style.View}>
          <Text style={style.Title}>인기 검색어</Text>
          <View style={style.PopularViewList}>
            {PopularSearchList.map((text, index) => (
              <PopularSearchItem
                text={text}
                key={index}
                index={index}
                setSearchText={setSearchText}
              />
            ))}
          </View>
        </View>
      );
    };
  }
}

export default Search.App;
