import closeSvg from "../assets/images/close.svg";

const baseAPI = "https://api.tvmaze.com/shows";

export const createReservationPopup = () => {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup_content");

  const titleContent = document.createElement("div");
  titleContent.classList.add("titleContent");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  const headingSection = document.createElement("h2");
  headingSection.id = "headingSection";
  heading.appendChild(headingSection);

  const closeButton = document.createElement("img");
  closeButton.id = "closeButton";
  closeButton.classList.add("closeFunction");
  closeButton.src = closeSvg;
  heading.appendChild(closeButton);

  titleContent.appendChild(heading);

  const desktopView = document.createElement("div");
  desktopView.classList.add("desktopView");

  const popupInfo = document.createElement("div");
  popupInfo.id = "popup_info";

  const popupImg = document.createElement("img");
  popupImg.id = "popup-img";
  popupImg.alt = "Portfolio";
  popupInfo.appendChild(popupImg);

  const allInfo = document.createElement("div");
  allInfo.classList.add("all_info");

  const summaryHeading = document.createElement("h3");
  summaryHeading.textContent = "Summary";
  allInfo.appendChild(summaryHeading);

  const projectDesc = document.createElement("p");
  projectDesc.id = "projectDesc";
  allInfo.appendChild(projectDesc);

  const bottomSection = document.createElement("div");
  bottomSection.classList.add("bottom_section");

  const reserveHeading = document.createElement("h3");
  reserveHeading.textContent = "Reserve Now!";
  bottomSection.appendChild(reserveHeading);

  const form = document.createElement("form");
  form.action = "";
  form.method = "post";
  form.id = "form";
  form.classList.add("contact_form");

  const fullNameInput = document.createElement("input");
  fullNameInput.name = "FullName";
  fullNameInput.type = "text";
  fullNameInput.placeholder = "Full name";
  fullNameInput.required = true;
  fullNameInput.maxLength = 30;
  form.appendChild(fullNameInput);

  const messageTextarea = document.createElement("textarea");
  messageTextarea.name = "Message";
  messageTextarea.rows = 4;
  messageTextarea.cols = 50;
  messageTextarea.placeholder = "Your Insights....";
  messageTextarea.required = true;
  messageTextarea.maxLength = 500;
  form.appendChild(messageTextarea);

  const formBtnContainer = document.createElement("div");
  formBtnContainer.id = "form-btn-container";
  form.appendChild(formBtnContainer);

  const formBtn = document.createElement("button");
  formBtn.id = "form_btn";
  formBtn.type = "submit";
  formBtn.textContent = "Comment";
  formBtnContainer.appendChild(formBtn);

  bottomSection.appendChild(form);

  allInfo.appendChild(bottomSection);
  desktopView.appendChild(popupInfo);
  desktopView.appendChild(allInfo);
  popupContent.appendChild(titleContent);
  popupContent.appendChild(desktopView);
  popup.appendChild(popupContent);

  return popup;
};

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
    const popup = document.querySelector(".popup");

    const response = await fetch(baseAPI);
    const retrievedData = await response.json();

    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        headingSection.innerHTML = show.name;
        projectDesc.innerHTML = show.summary;
        popupImg.src = show.image.medium;
        popup.style.visibility = "visible";
      }
    });

    closeButton.addEventListener("click", closePopup);
  }
};
