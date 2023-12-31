import reservedCounterVal from './reserveCounter.js';
import { baseURL, appID } from './constants.js';

const renderReservations = async (info) => {
  try {
    const buttonId = info;

    if (!buttonId) {
      const button = 'Invalid event or missing target ID.';
      return button;
    }

    const itemID = buttonId;

    const endpoint = `/apps/${appID}/reservations?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${endpoint}`);
    const reservationInfo = await response.json();

    const reservationsList = document.querySelector('.showComments');
    const reservationCount = document.querySelector('.commentsCounter');
    reservationsList.innerHTML = '<li>Loading reservations...</li>';
    try {
      reservationsList.innerHTML = '';
      reservedCounterVal(reservationInfo.length);
      if (reservationInfo.length > 0) {
        reservationInfo.forEach((reservation) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${reservation.username} - ${reservation.date_start} to ${reservation.date_end}`;
          reservationsList.appendChild(listItem);
        });
      } else {
        reservationsList.innerHTML = '<li>No reservations found</li>';
      }
      return null;
    } catch (error) {
      reservationsList.innerHTML = '<li>Error loading reservations</li>';
      reservationCount.textContent = '';
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default renderReservations;
