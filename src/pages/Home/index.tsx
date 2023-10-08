import React from 'react';
import {Text, View,SafeAreaView} from 'react-native';
import Header from './header';

const Home = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#f2f3f5'}}>
      <Header></Header>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;


// import React from 'react';
// import {ScrollView,SafeAreaView,View,Text} from 'react-native';
// import { SvgXml } from 'react-native-svg';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import LogoSvg from './assets/images/HanPoon_logo.svg';
// import alarmSvg from './assets/images/alarm.svg';
// import profileSvg from './assets/images/profile.svg'

// const Tab=createBottomTabNavigator();

// const YourApp = () => { 
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:'#f2f3f5'}}>
//       <View style={{flexDirection:'row',marginBottom:15,marginTop:15,marginLeft:20,marginRight:20,justifyContent:'space-between'}}>
      
//         <View style={{flexDirection:'row',alignContent:"center"}}>
//           <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={LogoSvg} /></View>
//           <View style={{width:6}}></View>
//           <Text style={{alignSelf:"center",fontFamily:"SUIT-Heavy",fontSize:18,color:'#6E98C9'}}>한푼</Text>
//         </View>
        
//         <View style={{flexDirection:'row',alignContent:"center"}}>
//           <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={alarmSvg} /></View>
//           <View style={{width:16}}></View>
//           <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={profileSvg} /></View>
//         </View>
//       </View>

//       <ScrollView style={{flex:1,paddingLeft:16,paddingRight:16,borderRadius:24}}>
//         <View style={{flexDirection:'column',alignContent:'center',paddingBottom:16,paddingTop:16,paddingRight:20,paddingLeft:20,backgroundColor:'white'}}>
//           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//             <Text style={{alignSelf:"center",fontFamily:"SUIT-Bold",fontSize:24,color:'black'}}>소비</Text>
//             <View style={{alignContent:'center',alignSelf:'center',paddingLeft:12,paddingRight:12,paddingTop:6,paddingBottom:6,backgroundColor:'#eaebed',borderRadius:24}}>
//               <Text style={{alignSelf:'center',fontFamily:"SUIT-SemiBold",fontSize:12,color:"#AFAFAF"}}>분석 페이지 바로가기</Text>
//             </View>
//           </View>
//         </View>

//       </ScrollView>
      
//     </SafeAreaView>
//   );
// };

// export default YourApp;
