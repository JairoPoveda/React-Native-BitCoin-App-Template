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
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
    Dimensions
} from 'react-native';

import App4 from './App4';

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
        <ImageBackground  source={require('./images/background.png')} style={{width:this.state.width,height:this.state.height, alignItems:'center'}}>
            <Text style={{fontSize:25, marginTop:'55%', color:'#fff'}}>Your Watchlist is empty!</Text>
            <Text style={{fontSize:15, marginTop:'5%',color:'#fff'}}>There is nothing to see here at the moment.</Text>
            <Text style={{fontSize:14, marginTop:'1%',color:'#fff'}}>Tap the big white + circle to add something to watch.</Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('App4')} style={styles.touchImage}>
                  <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/icon_add.png')}
                  />
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor:'white'
      },
     ImageIconStyle: {
        height: 35,
        width: 35,
     },
     touchImage: {
       alignItems: 'center',
       height: 40,
       marginTop:'10%'
     }
});
