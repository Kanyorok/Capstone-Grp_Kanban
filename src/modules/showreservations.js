const renderReservations = async (info) => {
  try {
    const buttonId = info;

    if (!buttonId) {
      const button = 'Invalid event or missing target ID.';
      return button;
    }
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    const appID = 'fvEG8bcfusuKIAC9Au4g';
    const itemID = buttonId;

    const endpoint = `/apps/${appID}/reservations?item_id=${itemID}`;

    const response = await fetch(`${baseURL}${endpoint}`);
    const reservationInfo = await response.json();

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
        reservationCount.textContent = `(${reservationInfo.length})`;
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
