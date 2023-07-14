import getShows from "./api.js";
const movieContainer = document.querySelector(".movie-container");
const displayShows = () => {
  getShows().then((data) => {
    const shows = data
      .map(
        (show) => `
      <div class="movie-card">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments">Comments</button>
          <button class="reservations">Reservations</button>
        </div>
      </div>
    `
      )
      .join("");
    movieContainer.innerHTML = shows;
  });
};
export default displayShows;
