//에러 화면 방지
// console.error = error => error.apply;
// LogBox.ignoreAllLogs();
// LogBox.ignoreLogs(['Property ']);
// LogBox.ignoreLogs(['it is un']);
// LogBox.ignoreLogs(['The title']);
// LogBox.ignoreLogs(['']);
//
//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';

import {Text, SafeAreaView, Button, Alert} from 'react-native';
import {TouchableOpacity, TouchableHighlight} from 'react-native';
import {LogBox, View} from 'react-native';
import {TextInput} from 'react-native';

const onPress = () => Alert.alert('home pressed.', 'message');

export default function App() {
  return (
    <SafeAreaView>
      <Button title="home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <Text onPress={onPress}>text</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}
