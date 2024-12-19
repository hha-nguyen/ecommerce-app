import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSignIn = async () => {
    setLoading(true);
      try {
        if (!email || !password) {
          Alert.alert('Error', 'Please enter both email and password.');
          return;
        }
        await auth().signInWithEmailAndPassword(email, password);
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
          <Text className="text-5xl font-bold my-16">Sign In</Text>
          <View className="relative w-100 h-20 pl-5 pt-8 mb-2 rounded-md p-1 bg-white border-none">
            <Text className='absolute text-2xl pl-5 top-1/2 translate-y-1/2 color-gray-500'>Email</Text>
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="color-black text-xl"
            />                                                                                       
          </View>
          
          <View className="border-2 rounded-md p-1 border-gray-300">
            <Text className='text-sm color-gray-400'>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Sign Up" onPress={() => router.push('/sign-up')} />

          <Text  onPress={() => Alert.alert('Forgot Password')}>
            Forgot Password?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;