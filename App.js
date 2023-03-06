import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Signup() {
  const [emailaddress, setemailaddress] = useState('');

  const handleSignup = () => {
    // handle sign-up logic here
    console.log('Signing up...');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there, welcome to Charge</Text>
      <Text style={styles.subtitle}>Kindly key in your details to create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="What's your email address?"
        value={emailaddress}
        onChangeText={setemailaddress}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0E0E0E',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 100,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 200,
    width: '100%',
    height: 70,
    backgroundColor: '#262626',
    color: '#fff',
  },
});