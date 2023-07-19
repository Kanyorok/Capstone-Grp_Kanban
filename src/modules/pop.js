import closeSvg from '../assets/images/close.svg';

const popupWin = () => {
  const titleContent = document.createElement('div');
  titleContent.classList.add('titleContent');
  const titleClose = document.createElement('div');
  titleClose.classList.add('closeSection');

  const closeButton = document.createElement('img');
  closeButton.id = 'closeButton';
  closeButton.classList.add('closeFunction');
  closeButton.src = closeSvg;

  const popupImg = document.createElement('img');
  popupImg.id = 'popup-img';
  popupImg.alt = 'popup-img';
  titleContent.appendChild(popupImg);
  titleClose.appendChild(closeButton);
  titleContent.appendChild(titleClose);

  const movieDetails = document.createElement('div');
  movieDetails.classList.add('movieDetails');
  const headingSection = document.createElement('h2');
  headingSection.id = 'headingSection';

  const projectDesc = document.createElement('p');
  projectDesc.id = 'projectDesc';
  movieDetails.appendChild(headingSection);
  movieDetails.appendChild(projectDesc);

  const counters = document.createElement('div');
  counters.classList.add('counters');
  const commentHeading = document.createElement('h3');
  const spanned = document.createElement('span');
  spanned.classList.add('commentsCounter');
  commentHeading.appendChild(spanned);

  const counterDivision = document.createElement('div');
  counterDivision.classList.add('flexibleDiv');
  const reserveHeading = document.createElement('h3');
  reserveHeading.setAttribute('id', 'headerSect');
  reserveHeading.textContent = 'Reserve Now!';

  const commentSection = document.createElement('div');
  commentSection.classList.add('showComments');
  counters.appendChild(commentHeading);
  counters.appendChild(commentSection);

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
  formBtn.textContent = 'Comment';
  formBtnContainer.appendChild(formBtn);

  const reserveBtn = document.createElement('button');
  reserveBtn.classList.add('reserve_btn');
  reserveBtn.type = 'submit';
  reserveBtn.textContent = 'Reserve';
  formBtnContainer.appendChild(reserveBtn);

  const bottomSection = document.createElement('div');
  bottomSection.classList.add('bottom_section');
  bottomSection.appendChild(form);
  counterDivision.appendChild(reserveHeading);
  counterDivision.appendChild(bottomSection);

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup_content');

  popup.appendChild(popupContent);
  popupContent.appendChild(titleContent);
  popupContent.appendChild(movieDetails);
  popupContent.appendChild(counters);
  popupContent.appendChild(counterDivision);

  return popup;
};

export default popupWin;
