import React from 'react';
import {Text} from 'react-native';

console.error = error => error.apply;

//DOM 객체를 네이티브로 넘긴다.
export default function App() {

//가상 DOM 객체 생성
  const textElement = React.createElement(
    Text,
    null,
    '가상 DOM 객체의 텍스트',
  );
  return textElement;
}
