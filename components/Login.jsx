import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import studying from '../assets/studypic.png';
import { Link } from 'expo-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement login logic here
  }

  return (
    <View style={styles.container}>
      <View style={{ flex:2, alignItems: 'center' }}>
        <View>
          <Image
            source={studying}
            style={styles.img }
          />
        </View>
      </View>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={{ flex:1 }}>
        <Button style={styles.button} mode="contained" onPress={handleSignUp}>
          Log In
        </Button>
        <Text style={{color:'black'}}>Don't have an account? 
          <Link href="/register" style={{color: 'blue'}}> Register</Link>
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    margin: 15,
  },
  input: {
    marginBottom: 16,
  },
  button:{
    borderRadius: 5,
  },
  img:{
    height: 250,
    width: 250,
    top: 30,
  }
});