import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import * as D from '../data';

const title = 'Content';
export default function CopyMe() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <View style={[{flex: 0, backgroundColor: Colors.amber100}]}>
        <Text>flex 0</Text>
      </View>
      <View style={[{flex: 1, backgroundColor: Colors.amber300}]}>
        <Text>flex 1</Text>
      </View>
      <View style={[{flex: 2, backgroundColor: Colors.amber500}]}>
        <Text>flex 2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: Colors.blue900, flex: 1, height: '100%'},
  text: {fontSize: 20, color: 'white'},
});
