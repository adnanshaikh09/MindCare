import AppointmentsSection from "@/components/AppointmentsSection";
import ConcernsSection from "@/components/ConcernsSection";
import ProfileHeader from "@/components/ProfileHeader";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

const ProfileScreen: React.FC = () => {
  const { profile } = useLocalSearchParams(); // Access profile from redirect params
  const parsedProfile = profile ? JSON.parse(profile as string) : null;
  const router = useRouter();

  // Logout function
  const handleLogout = async () => {
    try {
      // Delete user token from SecureStore
      await SecureStore.deleteItemAsync("userToken"); // Assuming "userToken" is the key for stored token
      router.replace("/signup"); // Replace "/signup" with the actual path to your signup screen
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {parsedProfile && parsedProfile.user ? (
        <ProfileHeader
          name={parsedProfile.user.first_name}
          gender={parsedProfile.gender || "Not specified"}
          age={parsedProfile.age || "N/A"} 
          email={parsedProfile.user.email}
        />
      ) : (
        <Text style={styles.text}>Loading profile data...</Text> // Placeholder while loading
      )}
      <ConcernsSection />
      <AppointmentsSection />

      {/* Logout button */}
      <View style={styles.logoutContainer}>
        <Button title="Log Out" onPress={handleLogout} color="#FF3B30" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutContainer: {
    marginTop: 20,
    marginBottom: 40,
    width: "80%",
  },
});
