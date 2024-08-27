import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native'
import { Button, TextInput } from 'react-native-paper';

export default function ChatView(){
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
        </View>
        )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})