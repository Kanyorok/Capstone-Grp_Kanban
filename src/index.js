import './styles/style.css';
import showMovies from './modules/api.js';
import { showPopup, comments } from './modules/commentPopup.js';
import countItems from './modules/addItemsCounter.js';
import { addComment } from './modules/addComment.js';
import showComments from './modules/showComments.js';

const shows = document.querySelector('.movie-container');
// @ts-ignore
shows.addEventListener('click', comments);

window.addEventListener('load', () => {
  showMovies();
  document.querySelector('.counter').innerHTML = countItems();
  document.getElementById('popWindow').innerHTML = showPopup();
  const form = document.querySelector('.form_btn');
  form.addEventListener('click', addComment);
  const commentMovie = document.querySelector('.movie-container');
  commentMovie.addEventListener('click', showComments);
});
