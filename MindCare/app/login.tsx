import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { BASE_URL } from '@/constants/api';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { setToken, setProfile } from '@/store/authSlice'; // Import Redux actions

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useDispatch(); // Initialize dispatch for Redux

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid = email && password;

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: data.non_field_errors ? data.non_field_errors[0] : 'Invalid credentials',
        });
      } else {
        // Save token and profile in SecureStore
        await SecureStore.setItemAsync('userToken', data.token);
        await SecureStore.setItemAsync('userProfile', JSON.stringify(data.profile));

        // Dispatch Redux actions to set token and profile in Redux store
        dispatch(setToken(data.token));
        dispatch(setProfile(data.profile));

        // Show success toast and navigate to home screen
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
        });

        router.replace('/home');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerImageContainer}>
          <Image source={require('../assets/images/yoga_main.jpg')} style={styles.headerImage} />
        </View>

        <Text style={styles.title}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={[styles.loginButton, !isFormValid && styles.disabledButton]}
          onPress={handleLogin}
          disabled={!isFormValid || loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.loginButtonText}>LOGIN</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? <Link href="/signup" style={styles.linkText}>Sign Up</Link>
        </Text>

        <Toast />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F0E8',
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    marginHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 20,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  footerText: {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: 14,
  },
  linkText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
