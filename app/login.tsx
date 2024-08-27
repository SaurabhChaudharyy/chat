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
        label="Username"
        mode='outlined'
        style={{
          marginBottom: 20,
        }}
        outlineStyle={{
          borderRadius: 20, 
        }}
        cursorColor='purple'
        textColor='purple'
      />
      <TextInput
        label="Password"
        mode='outlined'
        style={{
          marginBottom: 20,
        }}
        outlineStyle={{
          borderRadius: 20, 
        }}
        cursorColor='purple'
        textColor='purple'
        secureTextEntry={true}
      />
      <Button icon="home-variant" mode="contained-tonal" onPress={() => console.log('Login Button Pressed')} style={{
          marginBottom: 20
        }}>
        Login
      </Button>
      <Button icon="arrow-up-bold-circle" mode="contained-tonal" onPress={() => navigate("/signup")} style={{
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