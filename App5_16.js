/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import App1 from './App1';


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
            <View style={styles.navBar}>
              <TextInput
                   style={styles.searchBar}
                   placeholder='Search Icon'
                   underlineColorAndroid='transparent'
              />
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('App1')}
                style={styles.cancel}>
                <View>
                  <Text style={{fontSize:22, color:'white'}}>cancel</Text>
                </View>
              </TouchableOpacity>
              <Image 
                style={styles.searchImg}
                source={require('./images/icon_search.png')} 
              />                                              
            </View>
            <ScrollView style={styles.main}>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin</Text>
                        <Text style={styles.childText}>BTC</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin Cash</Text>
                        <Text style={styles.childText}>BCH</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin Gold</Text>
                        <Text style={styles.childText}>BTG</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>RaiBlocks</Text>
                        <Text style={styles.childText}>XRB</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin</Text>
                        <Text style={styles.childText}>BTC</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin Cash</Text>
                        <Text style={styles.childText}>BCH</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>Bitcoin Gold</Text>
                        <Text style={styles.childText}>BTG</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                </View>    
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_container}>
                <View style={styles.seperateLine}></View>
                <View style={styles.button}>
                    <Image
                      source={require('./images/icon_search.png')}
                      style={styles.ImageIconStyle}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainText}>RaiBlocks</Text>
                        <Text style={styles.childText}>XRB</Text>
                    </View>
                    <Image
                        style={styles.arrowImg}
                        source={require('./images/arrowright.png')}
                    />
                    <View style={styles.seperateLine}></View>
                </View>    
              </TouchableOpacity>

                <TouchableOpacity style={styles.button_container}>
                    <View style={styles.seperateLine}></View>
                    <View style={styles.button}>
                        <Image
                            source={require('./images/icon_search.png')}
                            style={styles.ImageIconStyle}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.mainText}>RaiBlocks</Text>
                            <Text style={styles.childText}>XRB</Text>
                        </View>
                        <Image
                            style={styles.arrowImg}
                            source={require('./images/arrowright.png')}
                        />
                        <View style={styles.seperateLine}></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_container}>
                    <View style={styles.seperateLine}></View>
                    <View style={styles.button}>
                        <Image
                            source={require('./images/icon_search.png')}
                            style={styles.ImageIconStyle}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.mainText}>RaiBlocks</Text>
                            <Text style={styles.childText}>XRB</Text>
                        </View>
                        <Image
                            style={styles.arrowImg}
                            source={require('./images/arrowright.png')}
                        />
                        <View style={styles.seperateLine}></View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
      navBar:{
        height:'8%',
        flexDirection:'row',
        alignItems:'center',
        marginTop:'8%',
      },
     searchBar:{
        paddingLeft:'20%',
        borderColor:'black',
        marginLeft: '5%',
        borderWidth:1.5,
        color:'white',
        width:'70%',
        height:'100%',
        borderRadius:25,
         fontSize:18,
     },
     searchImg:{
      width:'7%',
      height:'68%',
      resizeMode:'stretch',
      left:'10%',
      position:'absolute'
    },
    cancel:{
      alignItems:'center',
      justifyContent:'center',
      width:'20%',
      height:'100%',
      marginLeft:'2.5%',
    },
    main:{
      marginTop:'5%',
    },
    button_container:{
      height:'14%',
      
    },
    button:{
      flexDirection:'row',
      alignItems:'center',
      height:'80%',
    },
    ImageIconStyle:{
      margin:'5%',
      height:'70%',
      width:'7%',
    },
    textContainer:{
      height:'100%',
      width:'70%',
    },
    mainText:{
      fontSize:18,
      color:'white',
    },
    childText:{
      fontSize:12,
      color:'white',
    },
    arrowImg:{
      width:'3%',
      height:'60%',
      resizeMode:'stretch',
    },
    seperateLine:{
      height:1,
      backgroundColor:'black',
      borderWidth: 1,
      borderRadius: 0,
      borderColor: 'black',
      borderBottomWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 15,      
      
    }

});
