import './styles/style.css';
import showMovies from './modules/api.js';
import { showPopup, comments, closed } from './modules/commentPopup';

const shows = document.querySelector('.movie-container');

window.addEventListener('load', () => {
  showMovies();
  document.getElementById('popWindow').innerHTML = showPopup();
  shows.addEventListener('click', comments);
});


