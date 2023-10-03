//JSX 구문이 있는 타입스크립트 코드는 확장자가 .tsx다.

//JSX 구문을 쓰려면 이 import가 필요.
import React from 'react';

import {Text, SafeAreaView} from 'react-native';

import {LogBox, View} from 'react-native';

import * as D from './src/data';

//에러 화면 방지
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
//

const person = D.createRandomPerson();

export default function App() {
  return (
    <SafeAreaView>
      {/* null, 2는 공백 문자 두 개 넣는다는 뜻. */}
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>
  );
}
