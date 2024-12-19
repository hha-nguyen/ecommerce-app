import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
      setLoading(true);
      try {
        if (!email || !password) {
          Alert.alert('Error', 'Please enter both email and password.');
          return;
        }
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }

    };

return (
    <SafeAreaView className="flex-1">
        <ScrollView>
          
          <View className="flex-1">
              <Text style={styles.title}>Sign Up</Text>

              <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              />

              <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              />

              <Button title="Sign Up" onPress={handleSignUp} />

              <Text style={styles.forgotPassword} onPress={() => Alert.alert('Forgot Password')}>
              Forgot Password?
              </Text>
          </View>
        </ScrollView>
    </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  forgotPassword: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});