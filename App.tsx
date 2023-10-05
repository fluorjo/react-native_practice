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
import {LogBox, Platform, View} from 'react-native';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

import * as D from './src/data';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {MD2Colors as Colors} from 'react-native-paper';

import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  flex: {flex: 1},
});
