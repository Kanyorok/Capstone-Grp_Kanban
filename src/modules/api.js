import { render } from "sass";
import createTask from "./display.js";
import showComments from "./showComments.js";
import renderReservations from "./showreservations.js";

const baseAPI = "https://api.tvmaze.com/shows";
const involvementAPI =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const appID = "fvEG8bcfusuKIAC9Au4g";

const showMovies = async () => {
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

    const allMovies = document.querySelector(".movie-container");
    allMovies.append(createTask(moviesWithLikes));
  } catch (error) {
    return error;
  }
};

export const retrieveData = showMovies;
export default showMovies;
