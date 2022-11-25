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

//import App13 from './App13';

import App11_12 from './App11_12';

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
            <View style={styles.main}>
                <Text style={styles.main_text}>
                  MAIN PORTFOLIO BALANCE
                </Text>
                <View style={styles.money_container}>
                  <Text style={styles.main_money}>
                    -764.50$
                  </Text>
                  <View style={styles.money_arrow}>
                    <Image
                      style={styles.updown_arrow}
                      source={require('./images/icon_up.png')}
                    />
                    <Image
                      style={styles.updown_arrow}
                      source={require('./images/icon_down.png')}
                    />
                  </View>
                </View>
                <View style={styles.time}>
                    <Text style={styles.alltime}>
                      All time
                    </Text>
                    <Image
                      style={styles.leftright_arrow}
                      source={require('./images/icon_left.png')}
                    />
                    <Image
                      style={styles.leftright_arrow}
                      source={require('./images/icon_right.png')}
                    />
                    <Text style={styles.lasttime}>
                      Last 24h
                    </Text>
                </View>
            </View>
            <View style={styles.bottom_container}>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.bottom_header_container}>
                      <View style={styles.bottom_header}>
                        <Image
                          style={styles.arrow_down}
                          source={require('./images/icon_triangle_down.png')}
                        />
                        <Text style={styles.header}>
                          HIGHEST HOLDINGS
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.touchItem}>
                      <View style={styles.item}>
                        <View style={styles.text_container}>
                          <Text style={styles.bigText}>
                            Myrid
                          </Text>
                          <Text style={styles.smallText}>
                            $0.020810
                          </Text>
                        </View>
                        <View style={styles.arrow_money}>
                          <Image
                            style={styles.downIcon}
                            source={require('./images/downIcon.png')}
                          />
                          <Text style={styles.money}>
                            $11,295.90
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.touchItem}>
                      <View style={styles.item}>
                        <View style={styles.text_container}>
                          <Text style={styles.bigText}>
                            Myrid
                          </Text>
                          <Text style={styles.smallText}>
                            $0.020810
                          </Text>
                        </View>
                        <View style={styles.arrow_money}>
                          <Image
                            style={styles.downIcon}
                            source={require('./images/downIcon.png')}
                          />
                          <Text style={styles.money}>
                            $11,295.90
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                </View>
              <View style={styles.navBar}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('App11_12')} style={styles.nav_touchImage1}>
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
            
            <TouchableOpacity onPress={this._onPressButton} style={styles.add_image_container}>
                    <Image
                      style={styles.add_image}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  icon_container:{
    flexDirection:'row',
    marginTop:'5%',
    height:'5%',
  },
  triangle_image:{
    marginLeft:'45%',
    width: '9%',
    height: '100%',
    resizeMode:'stretch',
  },
  wallet_image:{
    width:'8%',
    height:'100%',
    marginLeft:'30%',
    resizeMode:'stretch',
  },
  main:{
    height:'30%',
    width:'90%',
    flexDirection:'column',
    left:'5%',
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    alignItems:'center',
  },
  main_text:{
    color:'white',
    fontSize:20,
    marginTop:'12%',
  },
  money_container:{
    marginTop:'5%',
    flexDirection:'row',
  },
  main_money:{
    fontSize:35,
    color:'white',
  },
  money_arrow:{
    flexDirection:'column',
    marginLeft:10,
  },
  updown_arrow:{
    width:12,
    height:12,
    resizeMode:'stretch',
    marginTop:5,
  },
  time:{
    flexDirection:'row',
    marginTop:'3%',
    alignItems:'center',
  },
  alltime:{
    fontSize:15,
    color:'#2a477a'
  },
  leftright_arrow:{
    marginLeft:5,
    width:12,
    height:12,
    marginRight:5,
  },
  lasttime:{
    fontSize:15,
    color:'#2a477a',
  },
  add_image_container:{
    left:'75%',
    position:'absolute',
    height:40,
    width:40,
    top:'40%',
  },
  add_image:{
    width:'100%',
    height:'100%',
  },
  bottom_container:{
    flex:1,
    marginTop:'5%',
    width:'95%',
    left:'2.5%',
    flexDirection:'column',
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  bottom_header_container:{
    marginTop:'10%',
    height:'10%',
    
  },
  bottom_header:{
    alignItems:'center',
    flexDirection:'row',
  },
  arrow_down:{
    height:10,
    width:20,
    resizeMode:'stretch',
    marginLeft:25,
    marginRight:25,
  },
  header:{
    fontSize:22,
    color:'white',
  },
  touchItem:{
    width:'90%',
    marginTop:'5%',
    height:'15%',
    marginLeft:'5%',
  },
  item:{

    backgroundColor:'#404041',
    flexDirection:'row',
    height:'100%',
    alignItems:'center',
  },
  text_container:{
    marginLeft:'5%',
    flexDirection:'column',
    width:'50%',
  },
  bigText:{
    fontSize:15,
    color:'white',
  },
  smallText:{
    fontSize:10,
    color:'white',
  },
  arrow_money:{
    marginRight:'5%',
    flexDirection:'column',
    width:'35%',
    alignItems:'center',
    justifyContent:'center',
  },
  downIcon:{
    height:'20%',
    width:'15%',
    left:'60%',
    resizeMode:'stretch',
  },
  money:{
    marginTop:5,
    fontSize:10,
    color:'white',
    left:'45%'
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
