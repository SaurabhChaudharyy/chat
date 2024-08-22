import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { Link, useNavigate } from 'react-router-native';

export default function SignUpView() {

  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        mode='outlined'
        style={{
          marginBottom: 20
        }}
      />
      <TextInput
        label="Email"
        mode='outlined'
        style={{
          marginBottom: 20
        }}
      />
      <TextInput
        label="password"
        mode='outlined'
        style={{
          marginBottom: 20
        }}
      />
      <Button icon="login" mode="contained" onPress={() => console.log('Pressed')} style={{
          marginBottom: 20
        }}>
        SignUp
      </Button>
      <Button icon="login-variant" mode="text" onPress={() => navigate("/login")} style={{
          marginBottom: 20
        }}>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})