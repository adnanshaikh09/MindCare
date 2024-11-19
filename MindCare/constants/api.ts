// api.ts
import axios from 'axios';
import { YOUTUBE_API_KEY } from '@env';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchMentalHealthVideos = async () => {
  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        q: 'mental health',
        type: 'video',
        maxResults: 10,
        key: YOUTUBE_API_KEY,
      },
    });

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error('Error fetching mental health videos:', error.response ? error.response.data : error.message);
    return [];
  }
};
