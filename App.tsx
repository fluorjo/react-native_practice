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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {MD2Colors as Colors} from 'react-native-paper';

const text = `Queen.`;

const onIconPressed=()=>console.log('icon pressed')

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex]}
        source={require('./src/assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
          <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
        </View>
        <Icon name='home' size={50}color={Colors.black} onPress={onIconPressed}></Icon>
      </ImageBackground>
    </SafeAreaView>
  );
}
const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;
const styles = StyleSheet.create({
  flex: {flex: 1},
  ImageBackground: {padding: 10},
  padding10: {padding: 10},

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
