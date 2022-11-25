/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App2 from "./App2";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Navigator,
    Dimensions,
} from 'react-native';

import KeyboardSpacer from './KeyboardSpacer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu', 
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

   state = Dimensions.get('window');

   render() {

      const mode = this.state.width > this.state.height ? 'portrait' : 'landscape';
      return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/background.png')} style={{width:this.state.width, height:this.state.height, alignItems:'center'}}>
            <View style={{marginTop:'20%',height:'32%', width:'100%', alignItems:'center'}}>
                <Image source={require('./images/ico_logo.png')} style={{height:'100%',width:'50%', resizeMode:'stretch'}}/>
            </View>
            <View style={{height:'2%'}}/>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid = "white"
                placeholder = "Email"
                autoCapitalize = "none"
                //onChangeText={}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                underlineColorAndroid = "white"
                placeholder = "Password"
                autoCapitalize = "none"
                //onChangeText={}
            />
            <KeyboardSpacer />
            <TouchableOpacity
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('App2')}
                >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
                <Text style={{width:'50%', fontSize:20, color:'#5574B8', lineHeight:42, alignItems:'center', marginTop:'4%' }}>Forget Password?</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor:'white',
     justifyContent:'center'
  },
  button:{
    width:'75%',
    height: 50,
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    borderRadius:25,
    marginTop:'7%'
  },
  text:{
    fontSize:20,
    color:'white',
    lineHeight:40
  },
  textInput:{
      width:'77%',
      height:40,
      borderColor:'white',
      borderWidth:0,
      marginTop:'5%',

  }

});
