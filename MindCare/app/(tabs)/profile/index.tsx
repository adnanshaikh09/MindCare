import React from 'react';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import ConcernsSection from '@/components/ConcernsSection';
import AppointmentsSection from '@/components/AppointmentsSection';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { logout } from '@/store/authSlice';

const ProfileScreen: React.FC = () => {
  const profile = useSelector((state: RootState) => state.auth.profile);
  const router = useRouter();
  const dispatch = useDispatch();

  // Fallbacks
  const firstName = profile?.user?.first_name || 'Unknown';
  const gender = profile?.gender || 'Not specified';
  const age = profile?.age || 'N/A';
  const email = profile?.user?.email || 'No email';

  // Logout handler
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('token'); // Delete token
    await SecureStore.deleteItemAsync('profile'); // Delete user profile if stored
    dispatch(logout()); // Dispatch the logout action to clear Redux state
    router.replace('/Login'); // Redirect to login screen
  };

  // Loading state
  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8bc34a" />
        <Text>Loading Profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerBackground}>
        <ProfileHeader
          name={firstName}
          gender={gender}
          age={age}
          email={email}
        />
      </View>
      <ConcernsSection />
      <AppointmentsSection />

      {/* Logout Button at the bottom of ScrollView */}
      <View style={styles.logoutButtonContainer}>
        <Button title="Log Out" onPress={handleLogout} color="#d9534f" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Extra padding to ensure button is above bottom navigation
    flexGrow: 1,
    justifyContent: 'center', // This centers content if it's small enough, otherwise it will scroll
  },
  headerBackground: {
    backgroundColor: '#8bc34a',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonContainer: {
    marginTop: 20,
    marginHorizontal: 16,
  },
});

export default ProfileScreen;
