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
	TouchableHighlight,
	TextInput,
	Alert,
		Dimensions
} from 'react-native';
import App5_16 from './App5_16';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu', 
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
		state = Dimensions.get('window');
	ShowAlertDialog=() =>{
			Alert.alert(
				'Remove from Watchlist',
				'Are you sure you want to remove it from your Watchlist?',
				[
						{text: 'NO', onPress:()=>console.log('')},
						{text: 'YES', onPress:()=>console.log('')},
				]
			)
	 }

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('./images/background.png')} style={{width:this.state.width,height:this.state.height,}}>
						<View style={styles.nav_Bar}>
								<TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage1}>
										<Image
												style={styles.iconStyle}
												source={require('./images/myarticle_list.png')}
										/>
								</TouchableOpacity>
								<TouchableOpacity onPress={this._onPressButton} style={styles.nav_touchImage2}>
									<Text style={{fontSize:20, color:'white'}}>Binary</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={()=>this.props.navigation.navigate('App5_16')} style={styles.nav_touchImage3}>
										<Image
											 style={styles.iconStyle}
											 source={require('./images/setting_mark.png')}
										/>
								</TouchableOpacity>
						</View>

					<View style={{height:'4%'}}></View>
						<View style={styles.button}>
									<View style={styles.textContainer}>
											<TextInput 
												style={styles.mainText}
												placeholder="Exchange"
												underlineColorAndroid = "transparent"
												placeholderTextColor = "#aca7a1"
											/>
									</View>

									<TouchableOpacity onPress={this._onPressButton} style={styles.rightButton}>
										<View style={{width:'75%', alignItems:'center'}}>
												<Text style={styles.childText}>Global average</Text>
										</View>
										<Image  
												 style={styles.SmallImageIconStyle}
												 source={require('./images/icon_down_white.png')}
										/>
									</TouchableOpacity>
						</View>

						<View style={styles.button}>
									<View style={styles.textContainer}>
											<TextInput 
												style={styles.mainText}
												placeholder="Exchange"
												underlineColorAndroid = "transparent"
												placeholderTextColor = "#aca7a1"
											/>                  
									</View>
									<TouchableOpacity onPress={this._onPressButton} style={styles.rightButton}>
										 <View style={{width:'75%', alignItems:'center'}}>
												<Text style={styles.childText}>BTC/USD</Text>
										 </View>
										 <Image  
											 style={styles.SmallImageIconStyle}
											 source={require('./images/icon_down_white.png')}
										 />
									</TouchableOpacity>
						</View>

						<TouchableOpacity style={styles.button}>
										<View style={styles.textContainer}>
												<Text style={styles.mainText}>Trading Pair</Text>
										</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
										<View style={styles.textContainer}>
												<Text style={styles.mainText}>Add to Portfoio</Text>
										</View>
						</TouchableOpacity>


					<TouchableOpacity
						style={styles.alert_container}
						onPress={this.ShowAlertDialog}>
						<Image  
							style={styles.bell_icon}
							source={require('./images/alarm.png')}
						/>
					</TouchableOpacity>
					<View style={{width:'100%', alignItems:'center', marginTop:'7%'}}>
						<Text style={{fontSize:20,color:'white'}}>Add Your First Bitcoin</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'green',
	},
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
		width:'30%',
		marginLeft:'20%',
	},
	nav_touchImage3:{
		alignItems:'center',
		justifyContent:'center',
		height:'90%',
		width:'10%',
		marginLeft:'20%',
	},
	iconStyle:{
		width:'80%',
		height:'80%',
		resizeMode:'stretch',
	},
	button:{
			width:'95%',
			height: '7%',
			flexDirection:'row',
			backgroundColor:'#404041',
			overflow:'hidden',
			marginTop:'1%',
			marginLeft:'2.5%',
	},
	textContainer:{
				height:'100%',
				width:'40%',
				marginLeft:'8%',
				justifyContent:'center',
	},
	mainText:{
			fontSize:18,
			color:'white',
	},
	rightButton:{
		flexDirection:'row',
		height:'100%',
		width:'40%',
		marginLeft:'8%',
		justifyContent: 'center',
		alignItems:'center',	
	},
	childText:{
		 fontSize:12,
		 color:'#adb8ef',
	},
	SmallImageIconStyle:{
		marginLeft:'15%',
		height:'30%',
		width:'12%',
		resizeMode:'stretch',
	},
	alert_container:{
		marginLeft:'45%',
		marginTop:'7%',
		height:'7%',
		width:'8%',
		alignItems:'center',
	},
	bell_icon:{
		height:'100%',
		width:'100%',
		resizeMode:'stretch'
	}
});
