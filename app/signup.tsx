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
        label="Email"
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
      <Button icon="arrow-up-bold-circle" mode="contained-tonal" onPress={() => console.log("SignUp Button Pressed")} style={{
          marginBottom: 20
        }}>
        Sign Up
      </Button>
      <Button icon="home-variant" mode="contained-tonal" onPress={() => navigate("/")} style={{
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