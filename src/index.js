import "./styles/style.css";
import showMovies from "./modules/api.js";
import popupWin from "./modules/pop";
import { comments } from "./modules/commentPopup.js";
import { reservations } from "./modules/reservationPopup.js";
import countItems from "./modules/addItemsCounter.js";

window.addEventListener("load", () => {
  showMovies();
  document.querySelector(".counter").innerHTML = countItems();

  const popData = document.getElementById("popWindow");
  popData.appendChild(popupWin());
  document.addEventListener("click", reservations);
  document.addEventListener("click", comments);
});
