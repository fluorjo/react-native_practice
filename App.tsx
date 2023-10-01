//JSX 구문이 있는 타입스크립트 코드는 확장자가 .tsx다.

//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';

import {Text, SafeAreaView} from 'react-native';

console.error = error => error.apply;

//DOM 객체를 네이티브로 넘긴다.
export default function App() {
  //가상 DOM 객체 생성
  const textElement = React.createElement(Text, null, '가상 DOM 객체');
  const virtualDOM = (
    <SafeAreaView>
      <Text>DOM 자체를 변수로 만들 수도 있다.</Text>
    </SafeAreaView>
  );
  const isLoading = true;
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>이 부분은 isLoading이 true일 때만 나온다. </Text>
        <Text>이렇게 바로 적어줄 수도 있고</Text>
        <Text>{textElement}를 변수처럼 불러올 수도 있다.</Text>
        {virtualDOM}
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>이 부분은 isLoading이 false일 때만 나온다. </Text>
    </SafeAreaView>
  );
}
