import "./styles/style.css";
import { showMovies, fetchItems } from "./modules/api.js";
import popupWin from "./modules/pop.js";
import comments from "./modules/commentPopup.js";
import reservations from "./modules/reservationPopup.js";
import countItems from "./modules/addItemsCounter.js";
import { addComment } from "./modules/addComment.js";
import showComments from "./modules/showComments.js";

window.addEventListener("load", () => {
  showMovies();
  fetchItems();
  document.querySelector(".counter").innerHTML = countItems();

  const popData = document.getElementById("popWindow");
  popData.appendChild(popupWin());
  document.addEventListener("click", reservations);
  document.addEventListener("click", comments);
  const form = document.querySelector(".form_btn");
  form.addEventListener("click", addComment);
  const commentMovie = document.querySelector(".movie-container");
  commentMovie.addEventListener("click", showComments);
});
