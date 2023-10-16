import React, {useCallback, useState} from 'react'
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '버튼 클릭')
  }, [])
  const onChangeEmail = useCallback((text: React.SetStateAction<string>) => {
    setEmail(text)
  }, [])
  const onChangePassword = useCallback((text: React.SetStateAction<string>) => {
    setPassword(text)
  }, [])
  const canGoNext = email && password

  return (
    <>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          onChangeText={onChangeEmail}></TextInput>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}></TextInput>
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
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </>
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
