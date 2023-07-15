import axios from 'axios';
import { countItems } from './countingMovies.js';

export const fetchItems = async () => {
  try {
    const response = await axios.get('https://api.tvmaze.com/shows');
    const retrievedData = response.data;
    countItems(retrievedData);
    return retrievedData;
  } catch (error) {
    countItems([]);
    return error;
  }
};

export default fetchItems;
