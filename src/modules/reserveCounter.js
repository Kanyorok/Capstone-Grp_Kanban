const reservedCounterVal = (data) => {
  const reservationCount = document.querySelector('.commentsCounter');
  if (data > 0) {
    reservationCount.textContent = `Reservations (${data})`;
  } else {
    reservationCount.textContent = 'Reservations (0)';
  }

  return data;
};

export default reservedCounterVal;
