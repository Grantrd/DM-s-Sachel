import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation' /*react-navigation mut have been installed*/
import { createStackNavigator } from 'react-navigation-stack'


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
        <View   style={{alignItems: 'center', backgroundColor: '#3F47CC' }}>
          <Image
            source={require('./images/logomin.png')}
            style={{ width: 110, height: 220 }}
         
          />
        </View>
        <TouchableOpacity style=
          {{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink'
          }} onPress={() => {
            console.log('does not work');
          }
          }>
          <Text style={{ fontWeight: "bold", fontFamily: 'serif' }}>Map Maker</Text>
        </TouchableOpacity>
        <TouchableOpacity style=
          {{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green'
          }} onPress={() => {
            console.log('does not work');
          }
          }>
          <Text style={{ fontWeight: "bold", fontFamily: 'serif' }}>Map editor</Text>
        </TouchableOpacity>
        <TouchableOpacity style=
          {{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow'
          }} onPress={() => this.props.navigation.navigate('Screen1')}
        >
          <Text style={{ fontWeight: "bold", fontFamily: 'serif' }}>Map generator</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

class Screen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c8e98b' }}>
        <Text style={{ fontSize: 25 }}>Screen1</Text>
      </View>
    );
  }
}

class Screen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#87b3d2' }}>
        <Text style={{ fontSize: 25 }}>Screen2</Text>
      </View>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <YourAppContainer />);
  }
}

const OurNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
});
const YourAppContainer = createAppContainer(OurNavigator);/*We need this to Wrap our new Navigator*/