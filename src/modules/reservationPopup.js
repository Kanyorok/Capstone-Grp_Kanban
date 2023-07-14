import closeSvg from "../assets/images/close.svg";

const baseAPI = "https://api.tvmaze.com/shows";

export const reservationPopup = () => {
  const pop = `<div class="popup">
    <div class="popup_content">
      <div class="titleContent">
        <div class="heading">
          <h2 id="headingSection"></h2>
        </div>
        <img id="closeButton" class="closeFunction" src="" alt="">
      </div>
      <div class="desktopView">
        <div id="popup_info">
          <img id="popup-img" src="" alt="Portfolio">
        </div>
        <div class ="all_info">
          <h3>Summary</h3>
          <p id="projectDesc"></p>
          <div class="bottom_section">
            <h3>Reserve Now!</h3>
            <form action="" method="post" id="form" class="contact_form">
              <input name="FullName" type="text" placeholder="Full name" required maxlength="30" />
              <textarea name="Message" rows="4" cols="50" placeholder="Your Insights...." maxlength="500" required></textarea>
              <div class="centered_button" id="form-btn-container">
                <button id="form_btn" type="submit">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return pop;
};
const closed = () => {
  const popWin = document.querySelector(".popup");
  popWin.style.visibility = "hidden";
  return null;
};
export const reservations = async (e) => {
  const worksImg = document.getElementById("closeButton");
  worksImg.src = closeSvg;
  if (e && e.target && e.target.classList.contains("reservations")) {
    const buttonId = parseInt(e.target.id, 10);
    const titleSelect = document.getElementById("headingSection");
    const imageSelect = document.getElementById("popup-img");
    const paragraphSelect = document.getElementById("projectDesc");
    const popWin = document.querySelector(".popup");
    const response = await fetch(baseAPI);
    const retrievedData = await response.json();
    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        titleSelect.innerHTML = show.name;
        paragraphSelect.innerHTML = show.summary;
        imageSelect.src = show.image.medium;
        popWin.style.visibility = "visible";
      }
    });
    worksImg.addEventListener("click", closed);
  }
};
