import {NativeStackScreenProps} from '@react-navigation/native-stack'
import EncryptedStorage from 'react-native-encrypted-storage'

import React, {useCallback, useRef, useState} from 'react'
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {RootStackParamList} from '../../AppInner'
import DismissKeyboardView from '../components/DismissKeyboardView'
import axios, {AxiosError, AxiosResponse} from 'axios'
import Config from 'react-native-config'
import {useAppDispatch} from '../store'

import userSlice from '../slices/user'

//app.tsx에서 paramlist를 한정하고 여기서 타입을 지정해줬기 때문에 허용된 곳으로만 갈 수 있게 설정 가능.
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>

function SignIn({navigation}: SignInScreenProps) {
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = useCallback((text: React.SetStateAction<string>) => {
    setEmail(text)
  }, [])
  const onChangePassword = useCallback((text: React.SetStateAction<string>) => {
    setPassword(text)
  }, [])

  const onSubmit = useCallback(async () => {
    if (loading) {
      return
    }
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요')
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요')
    }
    try {
      setLoading(true)
      const response = await axios.post(`${Config.API_URL}/login`, {
        email,
        password,
      })
      console.log(response.data)
      Alert.alert('알림', '로그인 되었습니다.')
      dispatch(
        userSlice.actions.setUser({
          name: response.data.data.name,
          email: response.data.data.email,
          accessToken: response.data.data.accessToken,
        }),
      )
      await EncryptedStorage.setItem(
        'refreshToken',
        response.data.data.refreshToken,
      )
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error
        const errorResponse = axiosError.response as AxiosResponse<{
          message: string
        }>

        console.error(errorResponse)
        if (errorResponse) {
          Alert.alert('알림', errorResponse.data.message)
        }
      }
    } finally {
      setLoading(false)
    }
  }, [loading, dispatch, email, password])

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp')
  }, [navigation])

  const canGoNext = email && password
  const emailRef = useRef<TextInput | null>(null)
  const passwordRef = useRef<TextInput | null>(null)

  return (
    <DismissKeyboardView>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          onChangeText={onChangeEmail}
          value={email}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus()
          }}
          blurOnSubmit={false}
          ref={emailRef}
          clearButtonMode="while-editing" //아이폰. 클리어 버튼.
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
          value={password}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          ref={passwordRef}
          onSubmitEditing={() => {
            onSubmit
          }}
          keyboardType="email-address"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          disabled={!canGoNext}
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </DismissKeyboardView>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },

  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonZone: {
    alignItems: 'center',
  },
})

export default SignIn
