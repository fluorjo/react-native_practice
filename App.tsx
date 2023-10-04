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

export default function App() {
  return;
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});
