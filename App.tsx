//에러 화면 방지
import {LogBox} from 'react-native'
console.error = error => error.apply
LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Property '])
LogBox.ignoreLogs(['it is un'])
LogBox.ignoreLogs(['The title'])
LogBox.ignoreLogs([''])
//
import {NavigationContainer} from '@react-navigation/native'

import * as React from 'react'
import {Provider, useSelector} from 'react-redux'
import store from './src/store'
import AppInner from './AppInner'

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  )
}

export default App
