import AppointmentsSection from "@/components/AppointmentsSection";
import ConcernsSection from "@/components/ConcernsSection";
import ProfileHeader from "@/components/ProfileHeader";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ProfileScreen: React.FC = () => {
  const { profile } = useLocalSearchParams(); // Access profile from redirect params
  const parsedProfile = profile ? JSON.parse(profile as string) : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader
        name={parsedProfile.user.first_name}
        gender={parsedProfile.gender || "Not specified"}
        age={parsedProfile.age || "N/A"} // Pass actual age if available
        email={parsedProfile.user.email}
      />
      <ConcernsSection />
      <AppointmentsSection />
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
});
