import closeSvg from '../assets/images/close.svg';
const apiData = 'https://api.tvmaze.com/shows';
const retrieveData = await fetch(apiData);
const retrievedData = await retrieveData.json();

export const showPopup = () =>{
  const pop = 
  `<div class="popup">
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
          <p id="projectDesc"></p>
          <div class="bottom_section">
            
          </div>
        </div>
      </div>
    </div>
  </div>`;

  return pop;
}

// close popup window
const closed =() => {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
return null;
}

export const comments = (e) => {
  const worksImg = document.getElementById('closeButton');
  worksImg.src = closeSvg;
  if (e && e.target && e.target.classList.contains('comments')) {
      const buttonId = parseInt(e.target.id, 10);
      const titleSelect = document.getElementById('headingSection');
      const imageSelect = document.getElementById('popup-img');
      const paragraphSelect = document.getElementById('projectDesc');
      const popWin = document.querySelector('.popup');
      retrievedData.forEach((show) => {
          if (show.id === buttonId) {
              titleSelect.innerHTML = show.name;
              paragraphSelect.innerHTML = show.summary;
              imageSelect.src = show.image.medium;
              popWin.style.visibility = 'visible';
            }
      });
    worksImg.addEventListener('click', closed);
  }
}






