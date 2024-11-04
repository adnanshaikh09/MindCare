import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  return (
    <>
      {/* Set the status bar to match the green background */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          
          {/* Green Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Hello! Test</Text>
            <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
          </View>

          {/* Chatbot Section */}
          <View style={styles.chatbotSection}>
            <Image source={require('../../assets/images/chatbot.png')} style={styles.chatbotImage} />
            <Text style={styles.chatbotText}>I'm Tink</Text>
            <TouchableOpacity style={styles.chatbotButton}>
              <Text style={styles.chatbotButtonText}>LET'S TALK</Text>
            </TouchableOpacity>
          </View>

          {/* Quote of the Day Section */}
          <View style={styles.quoteSection}>
            <Text style={styles.quoteTitle}>QUOTE OF THE DAY</Text>
            <TouchableOpacity style={styles.quoteButton}>
              <Text style={styles.quoteText}>Be yourself no matter what they say!</Text>
            </TouchableOpacity>
          </View>

          {/* Tracks to Refresh Your Mood */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TRACKS TO REFRESH YOUR MOOD!</Text>
            <View style={styles.tracksContainer}>
              <View style={styles.trackItem}>
                <Image source={require('../../assets/images/yoga.webp')} style={styles.trackImage} />
                <Text style={styles.trackText}>Yoga & Meditation</Text>
              </View>
              <View style={styles.trackItem}>
                <Image source={require('../../assets/images/mind.jpg')} style={styles.trackImage} />
                <Text style={styles.trackText}>Mind & Body</Text>
              </View>
            </View>
          </View>

          {/* Games Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>GAMES TO RELAX YOUR MIND!</Text>
            <View style={styles.gamesContainer}>
              <View style={styles.gameItem}>
                <Text style={styles.gameText}>Let's Play!</Text>
              </View>
              <View style={styles.gameItem}>
                <Text style={styles.gameText}>Let's Play!</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#8bc34a',
    height: 250, // Increased height to extend to the top
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,  // Padding to push content below the status bar
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatbotSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  chatbotImage: {
    width: 100,
    height: 100,
  },
  chatbotText: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  chatbotButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
  chatbotButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quoteSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quoteButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 35,
    marginTop: 10,
  },
  quoteText: {
    color: '#333',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tracksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  trackItem: {
    width: '48%',
    alignItems: 'center',
  },
  trackImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  trackText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  gamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  gameItem: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gameText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
