import closeSvg from '../assets/images/close.svg';

const popupWin = () => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup_content');

  const titleContent = document.createElement('div');
  titleContent.classList.add('titleContent');

  const heading = document.createElement('div');
  heading.classList.add('heading');

  const headingSection = document.createElement('h2');
  headingSection.id = 'headingSection';
  heading.appendChild(headingSection);

  const closeButton = document.createElement('img');
  closeButton.id = 'closeButton';
  closeButton.classList.add('closeFunction');
  closeButton.src = closeSvg;
  titleContent.appendChild(heading);
  titleContent.appendChild(closeButton);

  const desktopView = document.createElement('div');
  desktopView.classList.add('desktopView');

  const popupInfo = document.createElement('div');
  popupInfo.id = 'popup_info';

  const commentHeading = document.createElement('h3');
  const commentSection = document.createElement('div');
  commentSection.classList.add('showComments');

  const span = document.createElement('span');
  span.classList.add('commentsCounter');
  commentHeading.innerHTML = 'Comment ';
  commentHeading.appendChild(span);

  const popupImg = document.createElement('img');
  popupImg.id = 'popup-img';
  popupImg.alt = 'popup-img';
  popupInfo.appendChild(popupImg);
  popupInfo.appendChild(commentHeading);
  popupInfo.appendChild(commentSection);

  const allInfo = document.createElement('div');
  allInfo.classList.add('all_info');

  const summaryHeading = document.createElement('h3');
  summaryHeading.textContent = 'Summary';
  allInfo.appendChild(summaryHeading);

  const projectDesc = document.createElement('p');
  projectDesc.id = 'projectDesc';
  allInfo.appendChild(projectDesc);

  const bottomSection = document.createElement('div');
  bottomSection.classList.add('bottom_section');

  const reserveHeading = document.createElement('h3');
  reserveHeading.setAttribute('id', 'headerSect');
  reserveHeading.textContent = 'Reserve Now!';
  bottomSection.appendChild(reserveHeading);

  const form = document.createElement('form');
  form.action = '';
  form.id = 'form';
  form.classList.add('contact_form');

  const fullNameInput = document.createElement('input');
  fullNameInput.name = 'FullName';
  fullNameInput.type = 'text';
  fullNameInput.placeholder = 'User name';
  fullNameInput.required = true;
  fullNameInput.maxLength = 30;
  fullNameInput.classList.add('userName');
  form.appendChild(fullNameInput);

  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'Message';
  messageTextarea.rows = 4;
  messageTextarea.cols = 50;
  messageTextarea.placeholder = 'Your Insights....';
  messageTextarea.required = true;
  messageTextarea.maxLength = 500;
  messageTextarea.classList.add('movieComment');
  form.appendChild(messageTextarea);

  const reservationStartDateInput = document.createElement('input');
  reservationStartDateInput.type = 'text';
  reservationStartDateInput.classList.add('start-date');
  reservationStartDateInput.id = 'reservation-start-date';
  reservationStartDateInput.placeholder = 'Start Date (YYYY-MM-DD)';
  form.appendChild(reservationStartDateInput);

  const reservationEndDateInput = document.createElement('input');
  reservationEndDateInput.classList.add('end-date');
  reservationEndDateInput.type = 'text';
  reservationEndDateInput.id = 'reservation-end-date';
  reservationEndDateInput.placeholder = 'End Date (YYYY-MM-DD)';
  form.appendChild(reservationEndDateInput);

  const formBtnContainer = document.createElement('div');
  formBtnContainer.id = 'form-btn-container';
  form.appendChild(formBtnContainer);

  const formBtn = document.createElement('button');
  formBtn.classList.add('form_btn');
  formBtn.type = 'submit';
  formBtn.textContent = 'Reserve';
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

export default popupWin;
