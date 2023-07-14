const taskContainer = document.querySelector(".movie-container");
const involvementAPI =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const appID = "fvEG8bcfusuKIAC9Au4g";

const createTask = (info) => {
  const actionTask = info;
  actionTask.forEach((score) => {
    const mainDivision = document.createElement("div");
    mainDivision.classList.add("movie-card");
    const image = document.createElement("img");
    const heading = document.createElement("h3");
    const secondaryDivision = document.createElement("div");
    const commentButton = document.createElement("button");
    const reserveButton = document.createElement("button");
    const likeButton = document.createElement("button");
    const heartIcon = document.createElement("i");
    const likeCountContainer = document.createElement("div");
    const likeCount = document.createElement("span");
    const dislikeButton = document.createElement("button");
    const dislikeIcon = document.createElement("i");

    commentButton.classList.add("comments");
    commentButton.setAttribute("id", `${score.id}`);
    commentButton.innerHTML = "Comments";

    reserveButton.classList.add("reservations");
    reserveButton.setAttribute("id", `${score.id}`);
    reserveButton.innerHTML = "Reservations";

    secondaryDivision.classList.add("interactions");
    heading.classList.add("movie-title");

    image.src = `${score.image.medium}`;
    image.alt = `${score.name}`;
    heading.innerHTML = `${score.name}`;

    mainDivision.appendChild(image);
    mainDivision.appendChild(heading);
    mainDivision.appendChild(secondaryDivision);
    secondaryDivision.appendChild(commentButton);
    secondaryDivision.appendChild(reserveButton);

    likeButton.classList.add("like-button");
    heartIcon.classList.add("fas", "fa-heart");
    likeButton.appendChild(heartIcon);
    secondaryDivision.appendChild(likeButton);

    likeCountContainer.classList.add("like-count-container");
    likeCountContainer.innerHTML = "Likes: ";
    likeCount.classList.add("like-count");
    likeCount.textContent = score.likes.toString();
    likeCountContainer.appendChild(likeCount);
    secondaryDivision.appendChild(likeCountContainer);

    dislikeButton.classList.add("dislike-button");
    dislikeIcon.classList.add("fas", "fa-thumbs-down");
    dislikeButton.appendChild(dislikeIcon);
    likeCountContainer.appendChild(dislikeButton);

    likeButton.addEventListener("click", async () => {
      try {
        const response = await fetch(`${involvementAPI}/${appID}/likes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item_id: score.id }),
        });
        if (response.ok) {
          score.likes += 1; // Increment likes value
          likeCount.textContent = score.likes.toString();
          return null;
        }
        const message = "Failed to like the item.";
        return message;
      } catch (error) {
        return error;
      }
    });

    dislikeButton.addEventListener("click", () => {
      if (score.likes > 0) {
        score.likes -= 1; // Decrease likes value by one
        likeCount.textContent = score.likes.toString();
      }
    });

    // @ts-ignore
    taskContainer.appendChild(mainDivision);
  });
};

export default createTask;
