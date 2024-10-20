import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Link, useNavigation } from 'expo-router';

export default function SignupScreen() {
  const navigation = useNavigation();

  // Disable the automatic title on the page.
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [gender, setGender] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image source={require('../assets/images/yoga_main.jpg')} style={styles.headerImage} />
      </View>

      <Text style={styles.title}>SIGNUP</Text>

      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#999" />

      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#999" />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account? <Link href="/login" style={styles.linkText}>Login</Link>
      </Text>
    </SafeAreaView>
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
    width: '100%',      // Make the image full-width
    height: 200,        // Adjust the height accordingly
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
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  selectedGenderOption: {
    backgroundColor: '#C5E1A5',
    borderRadius: 20,
  },
  genderText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 5,
  },
  signupButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 20,
    width: 200,            // Set a fixed width for the button
    alignSelf: 'center',   // Center the button
    alignItems: 'center',
  },
  signupButtonText: {
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