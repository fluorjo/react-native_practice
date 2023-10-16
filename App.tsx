//에러 화면 방지
import {LogBox} from 'react-native';
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
LogBox.ignoreLogs(['The title']);
LogBox.ignoreLogs(['']);
//
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  //페이지 목록과 parameter를 넣는다. 넣을 거 없으면 undefined.
  Home: undefined;
  Details: undefined;
};
//밑에서 쓸 타입을 만들어준 것.
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

//{navigation}<-이게 매개변수. 이거의 타입이 :HomeScreenprops라고 선언.(타입스크립트라 필요한 것.)

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableHighlight onPress={onClick}>
          <Text>Home Screen</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
          {/* 스크린이 컴포넌트에게 네비게이션과 라우트를 전달한다. */}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
//{(props:{navigation:any,route:RouteProp<ParamListBase,RouteName})
//여기서 props:이후를 다 줄인 것.
//<DetailsScreen navigation={}route={}}
//navigation={}route={}<-이거를 줄여쓴 게 {...props}
//navigation, route를 넣어줘야 하는 걸 줄여쓴 것.
