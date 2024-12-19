import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Link } from 'expo-router';

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
        <ScrollView className='p-6'>
          <View className="flex-1">
              <Text className="text-5xl font-bold my-16">Sign Up</Text>
              <View className="w-100 h-20 pl-5 mb-2 rounded-md p-1 bg-white border-none">
                <Text className='text-xl color-gray-500'>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  className="color-black text-xl"
                />                                                                                       
              </View>
              
              <View className="w-100 h-20 pl-5 mb-2 rounded-md p-1 bg-white border-none">
                <Text className='text-xl color-gray-500'>Password</Text>
                <TextInput
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <Link href={'/(auth)/sign-in'}>Already have an account</Link>

              <Button title="Sign Up" onPress={handleSignUp} />

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