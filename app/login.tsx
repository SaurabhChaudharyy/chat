import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { Link, useNavigate } from 'react-router-native';

export default function LoginView() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
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
        Login
      </Button>
      <Button icon="login-variant" mode="text" onPress={() => navigate("/signup")} style={{
          marginBottom: 20
        }}>
        Sign Up
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})