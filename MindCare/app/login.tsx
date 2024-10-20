import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, useNavigation } from 'expo-router';

export default function LoginScreen() {
  const navigation = useNavigation();

  // Disable the automatic title on the page.
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    // Dismiss keyboard when clicking outside of inputs
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerImageContainer}>
          <Image source={require('../assets/images/yoga_main.jpg')} style={styles.headerImage} />
        </View>

        <Text style={styles.title}>LOGIN</Text>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? <Link href="/signup" style={styles.linkText}>Sign Up</Link>
        </Text>
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
    marginHorizontal: 20, // Adjust input field margins
  },
  loginButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 20,
    width: 200,            // Set a fixed width for the button
    alignSelf: 'center',   // Center the button
    alignItems: 'center',
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