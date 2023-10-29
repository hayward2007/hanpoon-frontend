import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import Space from '@utils/space';
import {Icon} from '@utils/icon';
import border from '@utils/border';
import Indicator from '@utils/indicator';
import Item from '@components/item';
import {NaviagtionButton} from '@components/navigation';
import GPT from '@apis/gpt';
import {SearchResultType} from '@apis/search';

export type DetailProps = {
  complementary: [];
  substitute: [];
};

type ReviewProps = {
  name: string;
  content: string;
  rating: number;
};
export const review: ReviewProps[] = [
  {
    name: '임지훈',
    content: '매우 만족스러워요, 강하게 추천드립니다!',
    rating: 5,
  },
  {name: '김형석', content: '별로 추천하고 싶지 않은 상품이네요', rating: 1},
];

const Detail = ({route, navigation}: {route: any; navigation: any}) => {
  const gpt = new GPT();
  const item: SearchResultType = route.params;
  const [itemGoods, setItemGoods] = useState({
    complementary: [],
    substitute: [],
  });

  useEffect(() => {
    const fetchItemGoods = async () => {
      const goods = await gpt.goods(item);
      setItemGoods(goods);
      console.log(goods);
    };
    fetchItemGoods();
  }, [item]);

  const {name, price, image} = item;

  const [imageWidth, setImageWidth] = React.useState(0);
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <View style={style.DetailBar}>
        <TouchableOpacity
          onPress={() => {
            gpt.cancel();
            navigation.goBack();
          }}>
          <Icon icon="arrow_back" />
        </TouchableOpacity>
        <Text style={style.DetailTitle}>제품 상세</Text>
        <NaviagtionButton
          page="cart"
          icon={{icon: 'shopping_cart', fill: false}}
          navigation={navigation}
        />
      </View>
      <ScrollView>
        <View style={style.DetailList}>
          <View
            style={[style.DetailSummary, border.default]}
            onLayout={event =>
              setImageWidth(event.nativeEvent.layout.width - 24)
            }>
            <Image
              source={{uri: image}}
              style={[
                style.DetailSummaryImage,
                {width: imageWidth, height: imageWidth},
              ]}
            />
            <View style={[style.DetailSummaryInfo, {width: imageWidth}]}>
              <Text style={style.DetailSummaryTitle}>{name}</Text>
              <Text style={style.DetailSummaryPrice}>{price} ₩</Text>
            </View>
          </View>
          <View style={style.SubTitle}>
            <Text style={style.SubTitleText}>보완재</Text>
            <View style={style.SubTitleLine} />
          </View>
          <View style={style.DetailItemContainer}>
            {itemGoods.complementary.length ? (
              itemGoods?.complementary.map(
                (complementary, index) =>
                  index < 3 && (
                    <Item
                      key={index}
                      name={complementary}
                      price={0}
                      image="https://via.placeholder.com/96"
                    />
                  ),
              )
            ) : (
              <Indicator />
            )}
          </View>
          <View style={style.SubTitle}>
            <Text style={style.SubTitleText}>대체재</Text>
            <View style={style.SubTitleLine} />
          </View>
          <View style={style.DetailItemContainer}>
            {itemGoods.substitute.length ? (
              itemGoods?.substitute.map(
                (substitute, index) =>
                  index < 3 && (
                    <Item
                      key={index}
                      name={substitute}
                      price={0}
                      image="https://via.placeholder.com/96"
                    />
                  ),
              )
            ) : (
              <Indicator />
            )}
          </View>
          {/* 보완재 & 대체재 더보기 */}
          {itemGoods.substitute.length !== 0 && (
            <TouchableOpacity
              onPress={() => navigation.navigate('goods', itemGoods)}>
              <View style={[style.DetailButton, border.default]}>
                <Text style={style.DetailButtonText}>
                  보완재 & 대체재 더보기
                </Text>
              </View>
            </TouchableOpacity>
          )}
          {/* 상품평 제목 */}
          <View style={style.SubTitle}>
            <Text style={style.SubTitleText}>상품평</Text>
            <View style={style.SubTitleLine} />
          </View>
          {/* 상품평 */}
          <View style={style.DetailItemContainer}>
            {review.map((prop, index) => (
              <View key={index} style={[style.ReviewList, border.default]}>
                <Text style={style.ReviewerName}>{prop.name}</Text>
                <Text style={style.ReviewContent}>{prop.content}</Text>
              </View>
            ))}
          </View>
          {/* 상품평 더보기 */}
          <TouchableOpacity>
            <View style={[style.DetailButton, border.default]}>
              <Text style={style.DetailButtonText}>상품평 더보기</Text>
            </View>
          </TouchableOpacity>
          <Space />
          {/* 장바구니 제목 */}
          <View style={style.CartTitle}>
            <Text style={style.CartTitleText}>
              상품에 대하여 충분히 알아보셨나요?
            </Text>
            {/* 장바구니로 담기 */}
            <TouchableOpacity>
              <View style={[style.DetailButton, border.default]}>
                <Text style={style.DetailButtonText}>장바구니에 담기</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Space />
          <Space />
          <Space />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
