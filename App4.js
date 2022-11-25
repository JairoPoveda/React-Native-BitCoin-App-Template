/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import App7 from './App7';

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
    return (
      <View style={styles.container}>
        <ImageBackground  source={require('./images/background.png')} style={{width:this.state.width,height:this.state.height}}>
            <TouchableOpacity onPress={this._onPressButton} style={{ height: 55,
                                                                           width:30,
                                                                           marginTop:'8%',
                                                                           marginLeft:'5%',
                                                                            justifyContent:'center'}}>
                  <Image source={require('./images/arrowleft.png')} style={{height:55, width:35,resizeMode:'stretch'}}></Image>
            </TouchableOpacity>
            <View style={{height:'31%'}}></View>
            <View style={{ height:60,flexDirection:'row'}}>
                <TextInput
                     style={styles.searchBar}
                     placeholder='Search Icon'
                     underlineColorAndroid='transparent'
                      />
                <Image source={require('./images/icon_search.png')} style={{width:30, height:30, marginLeft:'-72%', marginTop:'5%'}}></Image>

            </View>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('App7')} style={styles.touchImage}>
                <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/icon_add.png')}                 />
                <Text style={{fontSize:18, marginLeft:'2%', color:'#100a59'}}>
                    Or add a fiat deposit / withdrawal</Text>
            </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor:'white',
       justifyContent:'center'
      },
     ImageIconStyle: {
        marginLeft:'5%',
        height: 35,
        width: 35
     },
     touchImage: {
      flexDirection:'row',
         alignItems:'center',
       height: '8%',
       width:'100%',
       marginTop:'45%',
       paddingLeft:'1%',
    },
     searchBar:{
        fontSize:18,
        borderColor:'black',
        paddingLeft: '16%',
        paddingRight: '5%',
        borderWidth:1.5,
        width:'75%',
        marginLeft:'15%',
        borderRadius:30,
     }
});
