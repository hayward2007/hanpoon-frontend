import React from "react";
import {View,Text,StyleSheet} from "react-native";

import { SvgXml } from 'react-native-svg';

import UpSvg from './assets/images/stat_3.svg';
import DownSvg from './assets/images/stat_minus_2.svg';

function ConsumePattern(disc:string,amount:number):any
{
    return(
        <View style={style.box}>
            <Text style={style.text}>{disc}</Text>
            
            <View style={{flexDirection:'row',gap:4}}>
                {(()=>
                {
                    if(disc==='지난 달 대비 소비 금액') return(<View style={{alignSelf:'center'}}><SvgXml width="24" height="24" xml={UpSvg} /></View>);
                    else if(disc==='지난 달 대비 절약한 금액') return (<View style={{alignSelf:'center'}}><SvgXml width="24" height="24" xml={DownSvg} /></View>)
                })()}
                
                <Text style={{color:'black',fontSize:20,fontFamily:'SUIT-Semibold'}}>{amount}%</Text>
            </View>
        </View>
    );

};

export default function consume(){
    return(
        <View
        style={{borderWidth:2,borderColor:'#EAEBED',borderRadius:16,
                flexDirection:'column',alignContent:'center',paddingBottom:16,paddingTop:16,paddingRight:20,paddingLeft:20,
                backgroundColor:'white',
                gap:16}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{alignSelf:"center",fontFamily:"SUIT-Bold",fontSize:24,color:'black'}}>소비</Text>
                <View style={{alignContent:'center',alignSelf:'center',paddingLeft:12,paddingRight:12,paddingTop:6,paddingBottom:6,backgroundColor:'#eaebed',borderRadius:24}}>
                <Text style={{alignSelf:'center',fontFamily:"SUIT-SemiBold",fontSize:12,color:"#AFAFAF"}}>분석 페이지 바로가기</Text>
                </View>
            </View>

            <View style={style.box}>
                <Text style={style.text}>이번달 소비 금액</Text>
                <Text style={{color:'black',fontSize:20,fontFamily:'SUIT-Semibold'}}>10,000,000원</Text>
            </View>
            
            {ConsumePattern('지난 달 대비 소비 금액',1000)}
            {ConsumePattern('지난 달 대비 절약한 금액',100)}
        </View>
    );
};

const style=StyleSheet.create(
    {
        box:
        {
            paddingLeft:6,
            paddingRight:6,
            gap:4,
        },
        text:
        {
            color:'#8E8E8E',
            fontFamily:'SUIT-Medium',
            fontSize:12,
        }
    }
);