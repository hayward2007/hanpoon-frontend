import React from 'react';
import {View,Text} from 'react-native';
import { SvgXml } from 'react-native-svg';

import LogoSvg from './assets/images/HanPoon_logo.svg';
import alarmSvg from './assets/images/alarm.svg';
import profileSvg from './assets/images/profile.svg'

const header = () => { 
  return (
    <View style={{flexDirection:'row',marginBottom:15,marginTop:15,marginLeft:20,marginRight:20,justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',alignContent:"center"}}>
        <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={LogoSvg} /></View>
        <View style={{width:6}}></View>
        <Text style={{alignSelf:"center",fontFamily:"SUIT-Heavy",fontSize:18,color:'#6E98C9'}}>한푼</Text>
      </View>
      
      <View style={{flexDirection:'row',alignContent:"center"}}>
        <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={alarmSvg} /></View>
        <View style={{width:16}}></View>
        <View style={{alignSelf:'center'}}><SvgXml width="30" height="30" xml={profileSvg} /></View>
      </View>
    </View>
  );
};

export default header;