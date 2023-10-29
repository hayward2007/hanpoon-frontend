import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import SearchAPI, {SearchResultType} from '@apis/search';
import {Icon} from '@utils/icon';
import border from '@utils/border';
import Indicator from '@utils/indicator';
import {NaviagtionButton} from '@components/navigation';
import {DetailProps} from '../Detail';

const api = new SearchAPI();

const Goods = ({navigation, route}: {navigation: any; route: any}) => {
  const goods: DetailProps = route.params;
  const [complementary, setComplementary] = useState<SearchResultType[]>([]);
  const [substitute, setSubstitute] = useState<SearchResultType[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'substitute' | 'complementary'>(
    'complementary',
  );

  const fetch = async () => {
    let complementaryList: SearchResultType[] = [];
    for (let i = 0; i < goods.complementary.length; i++) {
      const result: SearchResultType[] | 'error' | undefined = await api.search(
        goods.complementary[i],
      );
      if (typeof result === 'object') {
        complementaryList = [...complementaryList, ...result];
      }
      if (i < 2) await new Promise(resolve => setTimeout(resolve, 10));
      else {
        complementaryList = complementaryList.sort((a, b) =>
          a.price < b.price ? -1 : 1,
        );
        setComplementary(complementaryList);
      }
    }
    setLoading(false);
    let substituteList: SearchResultType[] = [];
    for (let i = 0; i < goods.substitute.length; i++) {
      const result: SearchResultType[] | 'error' | undefined = await api.search(
        goods.substitute[i],
      );
      if (typeof result === 'object') {
        substituteList = [...substituteList, ...result];
      }
      if (i < 2) await new Promise(resolve => setTimeout(resolve, 10));
      else {
        substituteList = substituteList.sort((a, b) =>
          a.price < b.price ? -1 : 1,
        );
        setSubstitute(substituteList);
      }
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <View style={style.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon icon="arrow_back" />
        </TouchableOpacity>
        <Text style={style.HeaderTitle}>제품 상세</Text>
        <NaviagtionButton
          page="cart"
          icon={{icon: 'shopping_cart', fill: false}}
          navigation={navigation}
        />
      </View>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          style={style.Grid}
          data={mode === 'complementary' ? complementary : substitute}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={style.GridContent}
                onPress={() => navigation.push('detail', item.item)}>
                <View style={[style.GridItem, border.default]}>
                  <Image
                    style={style.GridImage}
                    source={{uri: item.item.image}}
                  />
                  <View>
                    <Text style={style.GridTitle}>{item.item.name}</Text>
                    <Text
                      style={style.GridValue}>{`${item.item.price} ₩`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
      <SafeAreaView edges={['bottom']} style={style.SlideArea}>
        <View style={style.SlideContainer}>
          <View style={[style.Slide, border.default]}>
            <TouchableOpacity onPress={() => setMode('complementary')}>
              <View
                style={
                  mode === 'complementary'
                    ? style.SlideButton
                    : style.SlideButtonOff
                }>
                <Text style={style.SlideButtonText}>대체재</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode('substitute')}>
              <View
                style={
                  mode === 'substitute'
                    ? style.SlideButton
                    : style.SlideButtonOff
                }>
                <Text style={style.SlideButtonText}>보완재</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Goods;
