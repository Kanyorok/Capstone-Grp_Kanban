import { baseURL, appID, endpointReserve } from './constants.js';
import totalComments from './commentCounter.js';

let tempID;

const renderReservations = async () => {
  try {
    const itemID = tempID;

    const reserveData = `/apps/${appID}/reservations?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${reserveData}`);
    const reservationInfo = await response.json();
    totalComments(reservationInfo);

    const reservationsList = document.querySelector('.showComments');
    const reservationCount = document.querySelector('.commentsCounter');

    reservationsList.innerHTML = '<li>Loading reservations...</li>';
    try {
      reservationsList.innerHTML = '';
      if (reservationInfo.length > 0) {
        reservationInfo.forEach((reservation) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${reservation.username} - ${reservation.date_start} to ${reservation.date_end}`;
          reservationsList.appendChild(listItem);
        });
      } else {
        reservationsList.innerHTML = '<li>No reservations found</li>';
      }
    } catch (error) {
      reservationsList.innerHTML = '<li>Error loading reservations</li>';
      reservationCount.textContent = '';
    }

    return null;
  } catch (error) {
    return null;
  }
};

const reserved = async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('.userName');
  const startDateInput = document.querySelector('.start-date');
  const endDateInput = document.querySelector('.end-date');
  const rId = e.target.getAttribute('data-id');
  tempID = rId;
  const name = nameInput.value.trim();
  const startDate = startDateInput.value.trim();
  const endDate = endDateInput.value.trim();
  if (name !== '' && startDate !== '' && endDate !== '') {
    try {
      const response = await fetch(`${baseURL}${endpointReserve}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: rId,
          username: name,
          date_start: startDate,
          date_end: endDate,
        }),
      });

      if (response.status === 201) {
        nameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        renderReservations();
      }
    } catch (error) {
      return null;
    }
  }
  return null;
};

export default reserved;