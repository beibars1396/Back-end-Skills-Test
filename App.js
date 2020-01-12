import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Text } from 'react-native'

import TextInput from '@components/TextInput'
import LoginButton from '@components/LoginButton'

export default () => {

  const [login, setLogin] = useState()
  const [password, setPassword] = useState()

  const Login = () =>{
    console.log({login});
    console.log({password});
    
  }

  const handleLoginChange = ( login ) => {
    setLogin(login)
    console.log('login set: ' + login);
    
  }

  const handlePasswordChange = ( password ) => {
    setPassword(password)
    console.log('password set: ' + password)
    
  } 

  return (
    <KeyboardAvoidingView behavior="padding" style={{
      display: 'flex',
      flex: 1,
      // backgroundColor: 'blue'
    }}>
      <View style={{
        display: "flex",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
      }}>
        <Text style={{
          fontSize: 28,
          color: 'black',
          fontWeight: "300",
          marginBottom: 40,
          marginTop: 50
        }}>Login</Text>
        <TextInput
          labelText="Login"
          onChangeText={handleLoginChange}
          keyboardType="default"
          secureTextEntry={false}
        />
        <TextInput
          labelText="Password"
          onChangeText={handlePasswordChange}
          keyboardType="default"
          secureTextEntry={true}
        />
        <View style={{
          alignItems: "flex-end",
          right: 20,
          bottom: 50,
          marginTop: 100
        }}>
          <LoginButton handlePress={Login} />
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}
