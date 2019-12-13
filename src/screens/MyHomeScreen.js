import React, { Component } from 'react';
import { Text,View,Image } from  'react-native'

export default class MyHomeScreen extends Component {
       static navigationOptions = {
           drawerLabel: "Home",
           drawerIcon: ({ tintColor }) =>{
               return (
                   <Image source={require('../../assets/icon.png')} style={{height:24,width:24,tintColor:tintColor}} />
               )
           }
       }
       render(){
           return (
               <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                   <Text style={{color:'#fff'}}> Text Component</Text>
               </View>
           )
       }
}