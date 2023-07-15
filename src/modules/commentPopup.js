const baseAPI = "https://api.tvmaze.com/shows";
import closeSvg from "../assets/images/close.svg";

const closed = () => {
  const popWin = document.querySelector(".popup");
  popWin.style.visibility = "hidden";
  return null;
};
export const comments = async (e) => {
  const worksImg = document.getElementById("closeButton");
  worksImg.src = closeSvg;
  if (e && e.target && e.target.classList.contains("comments")) {
    const buttonId = parseInt(e.target.id, 10);
    const titleSelect = document.getElementById("headingSection");
    const imageSelect = document.getElementById("popup-img");
    const paragraphSelect = document.getElementById("projectDesc");
    const popWin = document.querySelector(".popup");
    const response = await fetch(baseAPI);
    const retrievedData = await response.json();
    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        headValue.innerHTML = "Add A Comment";
        titleSelect.innerHTML = show.name;
        paragraphSelect.innerHTML = show.summary;
        submitBtn.setAttribute("data-id", show.id);
        imageSelect.src = show.image.medium;
        popWin.style.visibility = "visible";
      }
    });
    worksImg.addEventListener("click", closed);
  }
};
