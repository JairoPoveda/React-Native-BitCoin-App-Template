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
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Navigator,
    Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView, {DefaultTabBar , } from 'react-native-scrollable-tab-view';
import { SmoothLine } from 'react-native-pathjs-charts';

import App13 from './App13';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const chartData = [
    [{
        "x": 0,
        "y": 47782
    }, {
        "x": 1,
        "y": 48497
    }, {
        "x": 2,
        "y": 77128
    }, {
        "x": 3,
        "y": 73413
    }, {
        "x": 4,
        "y": 58257
    }, {
        "x": 5,
        "y": 40579
    }, {
        "x": 6,
        "y": 72893
    }, {
        "x": 7,
        "y": 60663
    }, {
        "x": 8,
        "y": 15715
    }, {
        "x": 9,
        "y": 40305
    }, {
        "x": 10,
        "y": 68592
    }, {
        "x": 11,
        "y": 95664
    }, {
        "x": 12,
        "y": 17908
    }, {
        "x": 13,
        "y": 22838
    }, {
        "x": 14,
        "y": 32153
    }, {
        "x": 15,
        "y": 56594
    }, {
        "x": 16,
        "y": 76348
    }, {
        "x": 17,
        "y": 46222
    }, {
        "x": 18,
        "y": 59304
    }],
    [{
        "x": 0,
        "y": 132189
    }, {
        "x": 1,
        "y": 61705
    }, {
        "x": 2,
        "y": 154976
    }, {
        "x": 3,
        "y": 81304
    }, {
        "x": 4,
        "y": 172572
    }, {
        "x": 5,
        "y": 140656
    }, {
        "x": 6,
        "y": 148606
    }, {
        "x": 7,
        "y": 53010
    }, {
        "x": 8,
        "y": 110783
    }, {
        "x": 9,
        "y": 196446
    }, {
        "x": 10,
        "y": 117057
    }, {
        "x": 11,
        "y": 186765
    }, {
        "x": 12,
        "y": 174908
    }, {
        "x": 13,
        "y": 75247
    }, {
        "x": 14,
        "y": 192894
    }, {
        "x": 15,
        "y": 150356
    }, {
        "x": 16,
        "y": 180360
    }, {
        "x": 17,
        "y": 175697
    }, {
        "x": 18,
        "y": 114967
    }]
];

const chartOptions = {
    width: 260,
    height: 100,
    color: '#000000',
    margin: {
        top: 10,
        left: 20,
        bottom: 20,
        right: 10
    },
    animate: {
        type: 'delayed',
        duration: 200
    },
    axisX: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#ffffff'
        }
    },
    axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#ffffff'
        }
    }
};

type Props = {};

export default class App extends Component<Props> {

    render() {
        return (
            <LinearGradient
                start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
                colors={['#e66f3e', '#f3d362']}
                style = {{ flex:1, }}>

                <View style={styles.nav_Bar}>
                    <TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage1}>
                        <Image
                            style={styles.iconStyle}
                            source={require('./images/myarticle_list.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.nav_touchImage2}>
                        <Text style={{fontSize:18, color:'white'}}>PROFILE</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('App13')} style={styles.nav_touchImage3}>
                        <Image
                            style={styles.iconStyle}
                            source={require('./images/icon_wallet.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <ScrollableTabView
                        style={{marginTop: 20, }}
                        initialPage={0}
                        renderTabBar={() => <DefaultTabBar  />}
                        tabBarUnderlineColor = '#fff'
                        tabBarUnderlineStyle={{backgroundColor: '#000', height: 3, bottom: 0,}}
                        tabBarActiveTextColor='#fff'
                        tabBarInactiveTextColor ='#747474'
                        tabBarTextStyle = {{ fontSize: 15}}
                        tabBarBackgroundColor = 'transparent'>

                        <ScrollView tabLabel='General' style={{ flex: 1, paddingTop: 30,}}>
                            <View style={{ flex: 1, paddingLeft: 30,  }}>
                                <Text style={{fontSize:30, color:'#fff', fontWeight: 'bold', }}> $11,3330,00</Text>
                                <Text style={{fontSize:16, color:'black', paddingLeft: 10,  }}> -$79.10(-0.69%)</Text>
                            </View>
                            <View style={styles.generalContainer}>
                                <SmoothLine data={chartData} options={chartOptions} xKey='x' yKey='y' />
                            </View>
                            <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, }}>
                                <LinearGradient
                                    start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
                                    colors={['#eb964c', '#f1c05b']}
                                    style = { styles.containerStyle}>
                                    <View style={{height: 150, flexDirection: 'column', paddingLeft: 20, paddingRight: 20,  paddingTop: 20, }}>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:18, color:'#000', fontWeight:'bold', }}> Volume</Text>
                                            <Text style={{fontSize:18, color:'#000', fontWeight:'bold', }}> Market Cap </Text>
                                        </View>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:12, color:'#000', }}> $10,635,000,000</Text>
                                            <Text style={{fontSize:12, color:'#000', }}> $190,634,331,250 </Text>
                                        </View>
                                     </View>
                                </LinearGradient>
                            </View>
                        </ScrollView>

                        <ScrollView tabLabel='Transactions' style={{ flex: 1, paddingTop: 30,}}>
                            <ScrollView style={{ paddingLeft: 30, }}>
                                <View  style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity onPress={this._onPressButton}>
                                        <Image
                                            style={styles.ImageIconStyle}
                                            source={require('./images/icon_add.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{fontSize:16, color:'#fff', paddingLeft: 10, paddingTop: 5, }}> Add new transaction</Text>
                                </View>
                                <View  style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, }}>
                                    <Image
                                        style={styles.ImageIconStyle}
                                        source={require('./images/icon_eye.png')}
                                    />
                                    <Text style={{fontSize:16, color:'#fff', paddingLeft: 10, paddingTop: 5, }}>28 Jan 2018 at 18:47</Text>
                                </View>
                            </ScrollView>
                            <ScrollView style={{paddingTop: 50, paddingLeft: 10, paddingRight: 10, }}>
                                <LinearGradient
                                    start={{x: 1.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
                                    colors={['#eb964c', '#f1c05b']}
                                    style = { styles.containerStyle}>
                                    <View style={{height: 150, flexDirection: 'column', paddingLeft: 10, paddingRight: 10,  paddingTop: 20, }}>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:12, color:'#fff', }}> BTC Buy Price</Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> Due to sell of </Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> Amount Added </Text>
                                        </View>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:12, color:'#fff', }}> $11.247.79</Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> XMY </Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> 0.00 </Text>
                                        </View>
                                        <View style={{paddingTop: 10, }}/>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:12, color:'#fff', }}> Cost(incl.fee)</Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> Worth </Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> Delta </Text>
                                        </View>
                                        <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                                            <Text style={{fontSize:12, color:'#fff', }}> $0.00 </Text>
                                            <Text style={{fontSize:12, color:'#fff', }}> $0.00 </Text>
                                            <Text style={{fontSize:12, color:'#000', }}> NaN% </Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </ScrollView>
                        </ScrollView>
                        <ScrollView tabLabel='Alerts'>
                            <Text>Alerts</Text>
                        </ScrollView>
                    </ScrollableTabView>
                </View>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({

    nav_Bar:{
        width:'100%',
        height:'7%',
        flexDirection:'row',
        marginTop:'2%',
    },
    nav_touchImage1:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'10%',
        marginLeft:'5%',
    },
    nav_touchImage2:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'50%',
        marginLeft:'10%',
    },
    nav_touchImage3:{
        alignItems:'center',
        justifyContent:'center',
        height:'90%',
        width:'11%',
        marginLeft:'10%',
    },
    iconStyle:{
        width:'80%',
        height:'80%',
    },
    ImageIconStyle:{
        width:30,
        height:30,
    },

    body: {
        flex: 12,
    },

    label: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },

    generalContainer: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    chart: {
        width: 200,
        height: 200,
    },

    ImageIconStyle: {
        height: 35,
        width: 35,
    },

    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#F2994A',
        borderBottomWidth: 0,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
    }
});

