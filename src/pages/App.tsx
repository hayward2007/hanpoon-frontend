import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// import React from 'react';
// import {Image, View, Text} from 'react-native';
// import {SvgXml} from 'react-native-svg';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import LogoSvg from './assets/images/HanPoon_logo.svg';
// import alarmSvg from './assets/images/alarm.svg';
// import profileSvg from './assets/images/profile.svg';

// const tap = createBottomTabNavigator();

// const App = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: '#f2f3f5'}}>
//       <View
//         style={{
//           flexDirection: 'row',
//           marginBottom: 15,
//           marginTop: 15,
//           marginLeft: 20,
//           marginRight: 20,
//           justifyContent: 'space-between',
//         }}>
//         <View style={{flexDirection: 'row', alignContent: 'center'}}>
//           <View style={{alignSelf: 'center'}}>
//             <SvgXml width="30" height="30" xml={LogoSvg} />
//           </View>
//           <View style={{width: 6}} />
//           <Text
//             style={{
//               alignSelf: 'center',
//               fontFamily: 'SUIT-Heavy',
//               fontSize: 18,
//               color: '#6E98C9',
//             }}>
//             한푼
//           </Text>
//         </View>

//         <View style={{flexDirection: 'row', alignContent: 'center'}}>
//           <View style={{alignSelf: 'center'}}>
//             <SvgXml width="30" height="30" xml={alarmSvg} />
//           </View>
//           <View style={{width: 16}} />
//           <View style={{alignSelf: 'center'}}>
//             <SvgXml width="30" height="30" xml={profileSvg} />
//           </View>
//         </View>
//       </View>

//       <View style={{flex: 1}} />
//       <tap.Navigator />
//     </View>
//   );
// };

// export default App;
