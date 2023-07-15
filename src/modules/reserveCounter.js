const reservedCounterVal = (data) => {
  const reservationCount = document.querySelector('.commentsCounter');

  reservationCount.textContent = data.length > 0 ? data.length : 0;
  return data;
};

export default reservedCounterVal;
