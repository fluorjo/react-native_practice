//에러 화면 방지
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
LogBox.ignoreLogs(['The title']);
LogBox.ignoreLogs(['']);
//
//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';
import {LogBox, View} from 'react-native';

import {Text, SafeAreaView, StyleSheet} from 'react-native';

import {MD2Colors as Colors} from 'react-native-paper';

import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green200,
    height: 40,
  },
  text: {fontSize: 20, color: Colors.blue900},
});

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>와 이제 좀 살 거 같다. </Text>
      <Text style={[styles.text]}>height:{height} </Text>
    </SafeAreaView>
  );
}
