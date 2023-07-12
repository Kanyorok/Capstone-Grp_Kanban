const taskContainer = document.querySelector('.movie-container');
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'fvEG8bcfusuKIAC9Au4g';

const createTask = (info) => {
  const actionTask = info;
  actionTask.forEach((score) => {
    const mainDivision = document.createElement('div');
    mainDivision.classList.add('movie-card');

    const image = document.createElement('img');
    const heading = document.createElement('h3');
    const secondaryDivision = document.createElement('div');
    const commentButton = document.createElement('button');
    const likeButton = document.createElement('button'); // New like button
    const heartIcon = document.createElement('i'); // Heart-shaped icon
    const likeCount = document.createElement('span'); // Span to display like count

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

    likeButton.classList.add('like-button'); // Add 'like-button' class to the like button
    heartIcon.classList.add('fas', 'fa-heart'); // Add classes for heart icon (Font Awesome)
    likeButton.appendChild(heartIcon);
    secondaryDivision.appendChild(likeButton); // Append like button to secondaryDivision

    likeCount.classList.add('like-count'); // Add 'like-count' class to the like count span
    likeCount.innerHTML = score.likes; // Set initial like count
    secondaryDivision.appendChild(likeCount); // Append like count to secondaryDivision

    likeButton.addEventListener('click', async () => {
      try {
        const response = await fetch(`${involvementAPI}/${appID}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item_id: score.id }),
        });
        if (response.ok) {
          score.likes++;
          likeCount.innerHTML = score.likes;
        } else {
          console.log('Failed to like the item.');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    });

    // @ts-ignore
    taskContainer.appendChild(mainDivision);
  });
};

export default createTask;
