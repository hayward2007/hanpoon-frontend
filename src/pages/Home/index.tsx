import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackParamList} from './type';
import NavigationBar, {NaviagtionButton} from '../../components/navigation';
import style from './style';

import Logo from '../../../assets/images/logo.svg';

import Notify from './Notify';
import Profile from './Profile';
import {Icon} from '../../utils/icon';
import border from '../../utils/border';
import Space from '../../utils/space';

namespace Home {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  export const App = () => {
    return (
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 200,
        }}>
        <Stack.Screen name="home" component={Index} />
        <Stack.Screen name="notify" component={Notify} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    );
  };

  const Index = ({navigation}: {navigation: any}) => {
    return (
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <ScrollView style={style.Home} stickyHeaderIndices={[0]}>
          <HomeBar navigation={navigation} />
          <View style={style.HomeContent}>
            <Summary.SummaryView navigation={navigation} />
            <Card.CardView navigation={navigation} />
            <News.NewsView />
            <Space />
          </View>
        </ScrollView>
        <NavigationBar navigation={navigation} />
      </SafeAreaView>
    );
  };

  const HomeBar = ({navigation}: {navigation: any}) => {
    return (
      <View style={style.HomeBar}>
        <View style={style.HomeBarLogo}>
          <Logo />
          <Text style={style.HomeBarLogoText}>한푼</Text>
        </View>
        <View style={style.HomeBarIcon}>
          <NaviagtionButton
            navigation={navigation}
            icon={{icon: 'notifications'}}
            page={'notify'}
            color="#5D7999"
          />
          <NaviagtionButton
            navigation={navigation}
            icon={{icon: 'account_circle'}}
            page={'profile'}
            color="#5D7999"
          />
        </View>
      </View>
    );
  };

  namespace Summary {
    const SummaryList = [
      {
        name: '이번달 소비 금액',
        value: '10,000,000',
        icon: null,
      },
      {
        name: '지난 달 대비 소비 금액',
        value: '1,000%',
        icon: {icon: 'stat_3', color: '#FF8787'},
      },
      {
        name: '지난 달 대비 절약한 금액',
        value: '100%',
        icon: {icon: 'stat_minus_2', color: '#879AFF'},
      },
    ];
    export const SummaryView = ({navigation}: {navigation: any}) => {
      return (
        <View style={[style.SummaryView, border.default]}>
          <View style={style.SummaryViewTitle}>
            <Text style={style.SummaryViewTitleText}>소비</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Analysis')}>
              <View style={style.SummaryViewTittleButton}>
                <Text style={style.SummaryViewTittleButtonText}>
                  분석 페이지 바로가기
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {SummaryList.map((item, index) => {
            return (
              <View style={style.SummaryViewContent} key={index}>
                <Text style={style.SummaryViewContentItem}>{item.name}</Text>
                <View style={style.SummaryViewContentValue}>
                  {item.icon ? (
                    <Icon icon={item.icon.icon} color={item.icon.color} />
                  ) : null}
                  <Text style={style.SummaryViewContentText}>{item.value}</Text>
                </View>
              </View>
            );
          })}
        </View>
      );
    };
  }

  namespace Card {
    const CardUsage = {
      used: 571600,
      percent: 71.45,
      limit: 800000,
    };

    const Cards = [
      require('../../../assets/images/cards/card1.png'),
      require('../../../assets/images/cards/card2.png'),
      require('../../../assets/images/cards/card3.png'),
    ];

    export const CardView = ({navigation}: {navigation: any}) => {
      const [CardUsageBarPercentWidth, SetCardUsageBarPercentWidth] =
        useState(0);
      const [CardViewWidth, SetCardViewWidth] = useState(0);

      return (
        <View
          style={[style.CardView, border.default]}
          onLayout={event => {
            var {width} = event.nativeEvent.layout;
            console.log(width);
            SetCardViewWidth(width);
          }}>
          <Text style={style.CardViewTitle}>내 카드</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            {Cards.map((card, index) => (
              <Image
                key={index}
                source={card}
                style={[style.Card, {width: CardViewWidth}]}
              />
            ))}
          </ScrollView>
          <View style={style.CardViewUsage}>
            <View style={style.CardViewUsageTitle}>
              <Text style={style.CardViewUsageTitleText}>이번달 사용량</Text>
              <Text>{`${CardUsage.used.toLocaleString()} / ${CardUsage.limit.toLocaleString()}`}</Text>
            </View>
            <View style={style.CardViewUsageBar}>
              <View
                style={style.CardViewUsageBarBackground}
                onLayout={event => {
                  var {width} = event.nativeEvent.layout;
                  console.log(width);
                  SetCardUsageBarPercentWidth(
                    width * (CardUsage.percent / 100),
                  );
                }}>
                <View
                  style={[
                    style.CardViewUsageBarPercent,
                    {width: CardUsageBarPercentWidth},
                  ]}
                />
              </View>
              <Text
                style={
                  style.CardViewUsageBarText
                }>{`${CardUsage.percent}%`}</Text>
            </View>
          </View>
        </View>
      );
    };
  }

  namespace News {
    type NewsData = {
      title: string;
      date: string;
      url: string;
    };

    const NewsLink = (url: string) => {
      Linking.openURL(url);
    };

    const NewsList: NewsData[] = [
      {
        title: '카카오, 사법 리스크에 4만원선 붕괴...',
        date: '2023 10 20',
        url: 'https://n.news.naver.com/mnews/hotissue/article/119/0002760272?type=series&cid=2001203',
      },
      {
        title: '미국발 고금리 충격…일곱 달 만에 코스피 2400선 붕괴',
        date: '2023 10 20',
        url: 'https://n.news.naver.com/mnews/article/055/0001099079?sid=101',
      },
      {
        title: '무위험 5% 수익률 시대…"추세적 vs 일시적"',
        date: '2023 10 20',
        url: 'https://n.news.naver.com/mnews/article/215/0001130231?sid=101',
      },
    ];

    const NewsItem = ({title, date, url}: NewsData) => {
      return (
        <TouchableOpacity onPress={() => NewsLink(url)}>
          <View>
            <Text style={style.NewsItemTitle}>{title}</Text>
            <Text style={style.NewsItemDate}>{date}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    export const NewsView = () => {
      return (
        <View style={[style.NewsView, border.default]}>
          <View>
            <Text style={style.NewsViewTitle}>뉴스</Text>
            <Text style={style.NewsViewSubTitle}>한푼 PiCK</Text>
          </View>
          <View style={style.NewsViewList}>
            {NewsList.map((news, index) => (
              <>
                <NewsItem
                  title={news.title}
                  date={news.date}
                  url={news.url}
                  key={index + 'news'}
                />
                {index < NewsList.length - 1 && (
                  <View key={index} style={style.NewsItemBreakLine} />
                )}
              </>
            ))}
          </View>
        </View>
      );
    };
  }
}

export default Home.App;
