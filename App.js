/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

  <View style={styles.container}>

    <View style={styles.viewStyleOne}>
      <Text style={styles.textStyle}> 1 </Text>
    </View>

    <View style={styles.viewStyleTwo}>
      <Text style={styles.textStyle}> 2 </Text>
    </View>

    <View style={styles.viewStyleThree}>
      <Text style={styles.textStyle}> 3 </Text>
    </View>

  </View>

    );
  }
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#4286f4',
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'

    // justifyContent: 'flex-end',
    // alignItems:'flex-start'

    },

  textStyle:{
    textAlign:'center'
  },

  viewStyleOne: {
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'red',
    flex:10,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },
  viewStyleTwo: {
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#b642f4',
    flex:1,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },
  viewStyleThree: {
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'green',
    flex:1,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },

});
