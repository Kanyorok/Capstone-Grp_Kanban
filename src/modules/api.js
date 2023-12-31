import axios from 'axios';
import createTask from './display.js';
import { countItems } from './countingMovies.js';

const baseAPI = 'https://api.tvmaze.com/shows';
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'fvEG8bcfusuKIAC9Au4g';

export const showMovies = async () => {
  try {
    const [dataResponse, likesResponse] = await Promise.all([
      fetch(baseAPI),
      fetch(`${involvementAPI}/${appID}/likes`),
    ]);

    const retrievedData = await dataResponse.json();
    const likesData = await likesResponse.json();

    const moviesWithLikes = retrievedData.map((movie) => {
      const like = likesData.find((like) => like.item_id === movie.id);
      return { ...movie, likes: like ? like.likes : 0 };
    });

    createTask(moviesWithLikes);
    return null;
  } catch (error) {
    return error;
  }
};

export const fetchItems = async () => {
  try {
    const response = await axios.get('https://api.tvmaze.com/shows');
    const retrievedData = response.data;
    countItems(retrievedData);
    return retrievedData;
  } catch (error) {
    countItems([]);
    return [];
  }
};

export const retrieveData = showMovies;
