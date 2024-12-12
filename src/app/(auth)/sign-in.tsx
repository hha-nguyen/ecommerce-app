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
      <ScrollView>
        <View className="flex justify-center p-16">
          <Text className=''>Sign In</Text>

          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 24,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   forgotPassword: {
//     marginTop: 16,
//     textAlign: 'center',
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
// });