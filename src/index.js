import './styles/style.css';
import showMovies from './modules/api.js';
import { showPopup, comments } from './modules/commentPopup.js';

const shows = document.querySelector('.movie-container');
// @ts-ignore
shows.addEventListener('click', comments);

window.addEventListener('load', () => {
  showMovies();

  // @ts-ignore
  document.getElementById('popWindow').innerHTML = showPopup();
});
