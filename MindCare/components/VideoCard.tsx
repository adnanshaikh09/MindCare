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
    marginVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  coverImage: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default VideoCard;
