import AppointmentsSection from "@/components/AppointmentsSection";
import ConcernsSection from "@/components/ConcernsSection";
import ProfileHeader from "@/components/ProfileHeader";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

const ProfileScreen: React.FC = () => {
  const [profileData, setProfileData] = useState(null);
  const router = useRouter();

  // Fetch profile data from SecureStore
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedProfile = await SecureStore.getItemAsync("userProfile");
        if (storedProfile) {
          setProfileData(JSON.parse(storedProfile));
        }
      } catch (error) {
        console.error("Failed to load profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      // Delete user token from SecureStore
      await SecureStore.deleteItemAsync("userToken");
      router.replace("/signup");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {profileData && profileData.user ? (
        <ProfileHeader
          name={profileData.user.first_name}
          gender={profileData.gender || "Not specified"}
          age={profileData.age || "N/A"}
          email={profileData.user.email}
        />
      ) : (
        <Text style={styles.text}>Loading profile data...</Text>
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
