//JSX 구문이 있는 타입스크립트 코드는 확장자가 .tsx다.

//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';

import {Text, SafeAreaView} from 'react-native';

import {LogBox} from 'react-native';

export default function App() {
  console.error = error => error.apply;
  LogBox.ignoreAllLogs();

  const textElement = React.createElement(Text, null, '가상 DOM 객체');

  const virtualDOM = (
    <SafeAreaView>
      <Text>DOM 자체를 변수로 만들 수도 있다.</Text>
    </SafeAreaView>
  );

  const isLoading = true;
  const children = isLoading ? (
    <Text>is Loading이 true...</Text>
  ) : (
    <Text>is Loading이 false</Text>
  );

  return <SafeAreaView>{children}</SafeAreaView>;
}
