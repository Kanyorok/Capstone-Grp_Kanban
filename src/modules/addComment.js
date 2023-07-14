let idVal = 0;

const showCommentsVals = async () => {
  try {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'fvEG8bcfusuKIAC9Au4g';
    const itemID = idVal;

    const endpoint = `/apps/${appID}/comments?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${endpoint}`);
    const commentsData = await response.json();

    const commentContainer = document.querySelector('.showComments');
    commentContainer.innerHTML = '';
    const counter = document.querySelector('.commentsCounter');
    counter.innerHTML = commentsData.length > 0 ? commentsData.length : 0;

    const tableDesign = document.createElement('table');
    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    tableDesign.append(tHead);

    const trow = document.createElement('tr');
    tHead.appendChild(trow);

    const tData1 = document.createElement('th');
    const tData2 = document.createElement('th');
    const tData3 = document.createElement('th');
    trow.appendChild(tData1);
    trow.appendChild(tData2);
    trow.appendChild(tData3);
    tData1.innerHTML = 'Date';
    tData2.innerHTML = 'UserName';
    tData3.innerHTML = 'Comments';

    tableDesign.append(tBody);

    commentsData.forEach((comment) => {
      const tBodyRow = document.createElement('tr');
      tBodyRow.classList.add('names_container');
      tBody.appendChild(tBodyRow);

      const tBodyData1 = document.createElement('td');
      const tBodyData2 = document.createElement('td');
      const tBodyData3 = document.createElement('td');
      tBodyRow.appendChild(tBodyData1);
      tBodyRow.appendChild(tBodyData2);
      tBodyRow.appendChild(tBodyData3);

      const paragraph = document.createElement('p');
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
      tBodyData1.appendChild(paragraph);
      paragraph.innerHTML = `${comment.creation_date}`;
      tBodyData2.appendChild(paragraph1);
      paragraph1.innerHTML = `${comment.username}`;
      tBodyData3.appendChild(paragraph2);
      paragraph2.innerHTML = `${comment.comment}`;

      commentContainer.appendChild(tableDesign);
    }); return null;
  } catch (error) {
    return error;
  }
};

const addComment = async (e) => {
  e.preventDefault();

  const valUser = document.querySelector('.userName');
  const valScore = document.querySelector('.movieComment');

  const commentId = e.target.getAttribute('data-id');
  idVal = commentId;
  const commentUser = valUser.value;
  const commentValue = valScore.value;

  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const appID = 'fvEG8bcfusuKIAC9Au4g';

  const endpoint = `/apps/${appID}/comments`;

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: commentId, username: commentUser, comment: commentValue }),
    });

    if (response.status === 201) {
      valUser.value = '';
      valScore.value = '';
      showCommentsVals();
    } else {
      const err = 'Failed to add comment.';
      return err;
    }
    return null;
  } catch (error) {
    return error;
  }
};

export default addComment;
