import React, { Component } from 'react';
import {Platform, StyleSheet, View, Text, Image, ImageBackground,TouchableOpacity, Dimensions} from 'react-native';

import App15_6 from './App15_6';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Button_kind extends Component {
  render() {
    return (
              <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                 <Text style={styles.TextStyle}> {this.props.name}</Text>
                 <Image style={styles.icon} source={require('./images/nextpageIcon.png')}  />
              </TouchableOpacity>
    )
  }
}

export default class App extends Component<Props> {
    state = Dimensions.get('window');
   render() {
       return (
         <View style={styles.MainContainer}>
         <ImageBackground source={require('./images/background.png')} style={{width:this.state.width,height:this.state.height}}>
            <View style={styles.icon_container}>
              <Image
                style={styles.triangle_image}
                source={require('./images/icon_white_triangle.png')}
              />
              <Image
                style={styles.wallet_image}
                source={require('./images/icon_wallet.png')}
              />
            </View>
            <Text style={{fontSize:30, color:'white', left:'5%', marginTop:'2%' }}>Settings</Text>
            <View style={styles.contentContainer}>
                <Text style={{fontSize:20, color:'black',left:'10%',}}>Devices</Text>
                
                <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <View style={styles.textContainer}>
                            <Text style={{fontSize:10, color:'white'}}>Default Currency</Text>
                            <Text style={{fontSize:15, color:'white'}}>Device name</Text> 
                        </View>
                        <Image style={styles.icon} source={require('./images/nextpageIcon.png')} />
                </TouchableOpacity>
                <Button_kind name="Trander data"/>
                <Button_kind name="sync data"/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={{fontSize:20, color:'black',left:'10%',}}>Data Recovery</Text>

                <Button_kind name="Generate Recovery code" />
                <Button_kind name="Restore from recovery" />
                <Button_kind name="Restore from recovery" />
            </View>
            <View style={styles.contentContainer_modify}>
                <Text style={{fontSize:20, color:'black',left:'10%',}}>Community</Text>

                <TouchableOpacity style={styles.button_modify} activeOpacity={0.5}>
                 <Text style={styles.TextStyle}>Telegram</Text>
                 <Image style={styles.icon} source={require('./images/nextpageIcon.png')}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_modify} activeOpacity={0.5}>
                  <Text style={styles.TextStyle}>Slack</Text>
                  <Image style={styles.icon} source={require('./images/nextpageIcon.png')}  />
                </TouchableOpacity>
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('App15_6')} style={styles.nav_touchImage1}>
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
 
 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 icon_container:{
    flexDirection:'row',
    marginTop:'5%',
    height:'7%',
  },
triangle_image:{
    marginLeft:'45%',
    width: '10%',
    height: '100%',
    resizeMode:'stretch',
  },
wallet_image:{
   width:'9%',
   height:'76%',
   marginLeft:'30%',
   resizeMode:'stretch',
 },
contentContainer:{
  width:'100%',
  flexDirection:'column',
  marginTop:'0%',
  height:'25%',
},
contentContainer_modify:{
  width:'100%',
  flexDirection:'column',
  marginTop:'0%',
  height:'20%',
},
button: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#404041',
  height: '22%',
  marginLeft:'5%',
  marginTop: '1%',
  width:'90%',
},
button_modify: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#404041',
  height: '27.5%',
  marginLeft:'5%',
  marginTop: '1%',
  width:'90%',
},
textContainer:{
  marginLeft:20,
  marginRight:5,
  width:280,
},
icon: {
   height: 15,
   width: 10,
},
 
TextStyle :{
  marginLeft:20,
  color: "#fff",
  marginRight :5,
  width: 280 
},
navBar:{
    height:'7%',
    width:'100%',
    paddingHorizontal:15,
    flexDirection:'row',
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
  },
  ImageIconStyle: {
    height: 40, 
    width: 40,
    resizeMode:'stretch',
  },
});