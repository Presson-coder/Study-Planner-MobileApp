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
    navigation.navigate('Register'); // Navigate to Register screen
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 0 , fontWeight:'bold' }}>Study Planner </Text>
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
      <Link  href="./Dashboard" style={styles.button}>
        <Button  mode="contained" style={styles.button} >
         <Text >Log In  </Text>
        </Button>
        
      </Link>
       
        <Text style={{color:'black', padding: 10}}>Don't have an account? 
          <Link href="./Register" style={{color: 'blue'}}> Register</Link>
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
    padding: 14,
    margin: 10,
  },
  input: {
    marginVertical: 10,
    
  },
  button:{
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
},
  img:{
    height: 250,
    width: 250,
    top: 20,
    marginBottom: 10,
  }
});