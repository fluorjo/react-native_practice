import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

console.error = (error) => error.apply;

export default function App(){
  const textElement = React.createElement(Text, null, '히샬리소')
  return textElement

}