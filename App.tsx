//JSX 구문이 있는 타입스크립트 코드는 확장자가 .tsx다.

//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';

import {Text, SafeAreaView} from 'react-native';

import {LogBox, View} from 'react-native';


console.error = error => error.apply;

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);


export default function App() {

  const array = new Array(11).fill(null).map((value, index) => (
    <Text>
      배열 {index} : {value}
    </Text>
  ));
  return <SafeAreaView>{array}</SafeAreaView>;
}
