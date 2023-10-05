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

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex]}
        source={require('./src/assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
      </ImageBackground>
    </SafeAreaView>
  );
}
const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;
const styles = StyleSheet.create({
  flex: {flex: 1},
  ImageBackground: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {
    fontFamily: 'DancingScript-Bold',
    fontWeight: Platform.select({ios: '700', android: '600'}),
  },
});
