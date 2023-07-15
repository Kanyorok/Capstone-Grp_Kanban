import totalComments from './commentCounter.js';
const showComments = async (e) => {
  try {
    const buttonId = e?.target?.id;

    if (!buttonId) {
      const button = 'Invalid event or missing target ID.';
      return button;
    }

    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'fvEG8bcfusuKIAC9Au4g';
    const itemID = buttonId;

    const endpoint = `/apps/${appID}/comments?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${endpoint}`);
    const commentsData = await response.json();

    const commentContainer = document.querySelector('.showComments');
    commentContainer.innerHTML = '';
    totalComments(commentsData);

    const tableDesign = document.createElement('table');
    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    tableDesign.append(tHead);

    const tableRow = document.createElement('tr');
    tHead.appendChild(tableRow);

    const tData1 = document.createElement('th');
    const tData2 = document.createElement('th');
    const tData3 = document.createElement('th');
    tableRow.appendChild(tData1);
    tableRow.appendChild(tData2);
    tableRow.appendChild(tData3);
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

export default showComments;
