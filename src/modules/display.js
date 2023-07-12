// @ts-nocheck
const taskContainer = document.querySelector('.movie-container');
const createTask = (info) => {
  const actionTask = info;
  actionTask.forEach((score) => {
    const mainDivision = document.createElement('div');
    mainDivision.classList.add('movie-card');
    const image = document.createElement('img');
    const heading = document.createElement('h3');
    const secondaryDivision = document.createElement('div');
    const commentButton = document.createElement('button');
    commentButton.classList.add('comments');
    commentButton.innerHTML = 'Comments';
    secondaryDivision.classList.add('interactions');
    heading.classList.add('movie-title');
    image.src = `${score.image.medium}`;
    image.alt = `${score.name}`;
    heading.innerHTML = `${score.name}`;
    mainDivision.appendChild(image);
    mainDivision.appendChild(heading);
    mainDivision.appendChild(secondaryDivision);
    secondaryDivision.appendChild(commentButton);
    taskContainer.appendChild(mainDivision);
  });
};
export default createTask;