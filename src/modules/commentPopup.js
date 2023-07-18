import closeSvg from '../assets/images/close.svg';

const baseAPI = 'https://api.tvmaze.com/shows';

const closed = () => {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
  return null;
};
const comments = async (e) => {
  const worksImg = document.getElementById('closeButton');
  worksImg.src = closeSvg;
  if (e && e.target && e.target.classList.contains('comments')) {
    const buttonId = parseInt(e.target.id, 10);
    const titleSelect = document.getElementById('headingSection');
    const imageSelect = document.getElementById('popup-img');
    const paragraphSelect = document.getElementById('projectDesc');
    const popWin = document.querySelector('.popup');
    const response = await fetch(baseAPI);
    const submitBtn = document.querySelector('.form_btn');
    const headValue = document.getElementById('headerSect');
    const tempCard1 = document.querySelector('.start-date');
    const tempCard2 = document.querySelector('.end-date');
    const tempCard3 = document.querySelector('.movieComment');
    const tempBtn = document.querySelector('.reserve_btn');
    const retrievedData = await response.json();
    retrievedData.forEach((show) => {
      if (show.id === buttonId) {
        headValue.innerHTML = 'Add A Comment';
        titleSelect.innerHTML = show.name;
        paragraphSelect.innerHTML = show.summary;
        submitBtn.setAttribute('data-id', show.id);
        submitBtn.style.display = 'block';
        imageSelect.src = show.image.medium;
        tempCard1.style.display = 'none';
        tempCard2.style.display = 'none';
        tempCard3.style.display = 'block';
        tempBtn.style.display = 'none';
        popWin.style.visibility = 'visible';
      }
    });
    worksImg.addEventListener('click', closed);
  }
};

export { comments as default };
