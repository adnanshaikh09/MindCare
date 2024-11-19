import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface VideoCardProps {
  title: string;
  coverImage: string;
  tag: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, coverImage, tag }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: coverImage }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.tag}>{tag}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },
  coverImage: {
    width: 120,
    height: 70,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tag: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default VideoCard;
