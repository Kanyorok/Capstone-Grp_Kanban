import './styles/style.css';
import showMovies from './modules/api.js';
import { showPopup, comments } from './modules/commentPopup.js';
import countItems from './modules/addItemsCounter.js';
import { addComment } from './modules/addComment';
import showComments from './modules/showComments.js';

const shows = document.querySelector('.movie-container');
// @ts-ignore
shows.addEventListener('click', comments);

window.addEventListener('load', () => {
  showMovies();
  // @ts-ignore
  document.querySelector('.counter').innerHTML = countItems();
  // @ts-ignore
  document.getElementById('popWindow').innerHTML = showPopup();
});
