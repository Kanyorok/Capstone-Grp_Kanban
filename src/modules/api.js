import createTask from './display.js';

const apiData = 'https://api.tvmaze.com/shows';

const showMovies = async () => {
  try {
    const retrieveData = await fetch(apiData);
    const retrievedData = await retrieveData.json();
    createTask(retrievedData);
    return null;
  } catch (error) {
    return error;
  }
};

export default showMovies;