const baseAPI = "https://api.tvmaze.com/shows";
import closeSvg from "../assets/images/close.svg";

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.style.visibility = "hidden";
};

export const reservations = async (e) => {
  const closeButton = document.getElementById("closeButton");
  closeButton.src = closeSvg;
  if (e && e.target && e.target.classList.contains("reservations")) {
    const buttonId = parseInt(e.target.id, 10);
    const headingSection = document.getElementById("headingSection");
    const popupImg = document.getElementById("popup-img");
    const projectDesc = document.getElementById("projectDesc");
    const headValue = document.getElementById("headerSect");
    const reserveBtn = document.getElementById("form_btn");
    const popup = document.querySelector(".popup");
    console.log(popup);

    const response = await fetch(baseAPI);
    const retrievedData = await response.json();

    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        headValue.innerHTML = "Reserve Now!";
        headingSection.innerHTML = show.name;
        projectDesc.innerHTML = show.summary;
        popupImg.src = show.image.medium;
        reserveBtn.innerHTML = "Reserve";
        popup.style.visibility = "visible";
      }
    });

    closeButton.addEventListener("click", closePopup);
  }
};
