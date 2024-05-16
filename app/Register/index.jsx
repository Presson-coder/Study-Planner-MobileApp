import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Alert ,Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import registerpic from  '../../assets/register.png';
import { Link } from 'expo-router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Handle sign up logic here
  }

  return (
    <View style={styles.container}>
      {/* <View>
          <Image
            source={registerpic}
            style={styles.img }
          />
        </View> */}
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 , fontWeight:'bold' }}>Study Planner </Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'grey' : 'black'
        },
        styles.button
      ]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Text style={{color:'black', padding: 10}}>Already have an account? 
          <Link href="../" style={{color: 'blue'}}> Login</Link>
        </Text>
    </View>
  );
}

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
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  img:{
    height: 250,
    width: 250,
    top: 5,
    marginBottom: 10,
  }
});