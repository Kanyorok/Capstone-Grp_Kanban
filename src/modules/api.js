import createTask from './display.js';

const baseAPI = 'https://api.tvmaze.com/shows';
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'fvEG8bcfusuKIAC9Au4g';
const retrieveData = await fetch(baseAPI);
export const retrievedData = await retrieveData.json();

const showMovies = async () => {
  try {
    const likes = await fetch(`${involvementAPI}/${appID}/likes`);
    const likesData = await likes.json();
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

export default showMovies;
