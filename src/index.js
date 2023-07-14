import "./styles/style.css";
import showMovies from "./modules/api.js";
import { showPopup, comments } from "./modules/commentPopup.js";
import { reservationPopup, reservations } from "./modules/reservationPopup.js";

window.addEventListener("load", () => {
  showMovies();
  document.addEventListener("click", comments);
  document.getElementById("popWindow").innerHTML = showPopup();

  document.addEventListener("click", reservations);
  document.getElementById("reservationWindow").innerHTML = reservationPopup();
});
