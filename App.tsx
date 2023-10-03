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

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center',
  backgroundColor: Colors.blue600},
  text: {fontSize: 20, color: Colors.blue100}
  })
  

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style= {[styles.text]}>그리워하면 언젠가 만나게 되는 어느 영화와 같은 일들이 이뤄져 가기를</Text>
    </SafeAreaView>
  );
}
