import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [playing, setPlaying] = useState(true);

  // Specify `state` as a string type
  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <YouTubeIframe
        height={Dimensions.get('window').width * 0.56} // 16:9 ratio
        width={Dimensions.get('window').width}
        videoId={videoId}
        play={playing}
        onChangeState={onStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').width * 0.56, // 16:9 ratio height
    backgroundColor: '#000', // Helps make the video frame visible
  },
});

export default VideoPlayer;
