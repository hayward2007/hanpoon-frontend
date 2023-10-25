import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import Color from '../../../utils/color';
import {Icon} from '../../../utils/icon';
import Indicator from '../../../utils/indicator';
import {SearchResultType} from '../../../apis/search';
import border from '../../../utils/border';
import {NaviagtionButton} from '../../../components/navigation';

namespace Detail {
  export const App = ({route, navigation}: {route: any; navigation: any}) => {
    return <Index navigation={navigation} item={route.params} />;
  };

  const Index = ({
    navigation,
    item,
  }: {
    navigation: any;
    item: SearchResultType;
  }) => {
    const {name, price, image} = item;
    const [imageWidth, setImageWidth] = React.useState(0);
    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <DetailBar navigation={navigation} />
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
            {/* <View>

            </View> */}
            <View style={style.SubTitle}>
              <Text style={style.SubTitleText}>대체재</Text>
              <View style={style.SubTitleLine} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  const DetailBar = ({navigation}: {navigation: any}) => {
    return (
      <View style={style.DetailBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon icon="arrow_back" />
        </TouchableOpacity>
        <Text style={style.DetailTitle}>제품 상세</Text>
        <NaviagtionButton
          page="cart"
          icon={{icon: 'shopping_cart', fill: false}}
          navigation={navigation}
        />
      </View>
    );
  };

  const Item = ({
    name,
    price,
    image,
  }: {
    name: string;
    price: number;
    image: string;
  }) => {
    return (
      <View style={[style.DetailItem, border.default]}>
        <TouchableOpacity>
          <Image style={style.DetailItemImage} source={{uri: image}} />
        </TouchableOpacity>
        <View style={style.DetailItemInfo}>
          <View>
            <Text style={style.DetailItemTitle}>{name}</Text>
            <Text style={style.DetailItemPrice}>{`${price} ₩`}</Text>
          </View>
        </View>
      </View>
    );
  };
}

export default Detail.App;
