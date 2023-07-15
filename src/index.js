import "./styles/style.css";
import showMovies from "./modules/api.js";
import { showPopup, comments } from "./modules/commentPopup.js";
import { createReservationPopup, reservations } from "./modules/reservationPopup.js";

window.addEventListener("load", () => {
  showMovies();
  const reservationWindow = document.getElementById("reservationWindow");
  reservationWindow.appendChild(createReservationPopup());
  
  document.addEventListener("click", reservations);
  document.getElementById('popWindow').innerHTML = showPopup();
  document.addEventListener("click", comments);
});
