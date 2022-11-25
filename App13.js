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
  TouchableHighlight,
  TextInput,
    Dimensions
} from 'react-native';

import App14 from './App14';


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
        <ImageBackground source={require('./images/background.png')} style={{width:this.state.width,height:this.state.height}}>
            <Image
              style={styles.image}
              source={require('./images/icon_white_triangle.png')}
            />
            <Text style={styles.header}>
              Your Porfolio stars here!        
            </Text>
            <Text style={styles.text1}>
              There's nothing to see here at the moment.         
            </Text>
            <Text style={styles.text2}>
              Tap the big white + circle to add something to watch.        
            </Text>
            <TouchableOpacity onPress={this._onPressButton} style={styles.touchImage}>
                  <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/icon_add.png')}
                  />
            </TouchableOpacity>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('App14')} style={styles.nav_touchImage1}>
                  <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/icon_triangle.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage2}>
                  <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/icon_eye.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage3}>
                  <Image
                    style={styles.ImageIconStyle}
                    source={require('./images/ico_settings.png')}
                  />
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  image:{
    marginTop:'5%',
    left:'45%',
    width: '10%',
    height: '7%',
    resizeMode:'stretch',
  },
  header: {
    textAlign:'center',
    fontSize : 23,
    marginTop:'38%',
    color : 'white',
  },
  text1:{
    color: 'white',
    marginTop:'10%',
    textAlign: 'center',
  },
  text2:{
    textAlign: 'center',
    color: 'white',
    marginTop:'1%',
  },
  ImageIconStyle: {
    height: 40, 
    width: 40,
    resizeMode:'stretch',
  },
  touchImage: {
    alignItems: 'center',
    height: 40,
    marginTop:'15%',
  },
  navBar:{
    height:'7%',
    width:'100%',
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    top:'90%',
  },
  nav_touchImage1:{
    justifyContent:'center',
    left:'10%',
    height:'100%',
    position:'absolute',
  },
  nav_touchImage2:{
    justifyContent:'center',
    position:'absolute',
    left:'50%',
    height:'100%',
  },
  nav_touchImage3:{
    justifyContent:'center',
    position:'absolute',
    height:'100%',
    left:'90%',
  }

});
