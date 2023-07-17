const reservedCounterVal = (data) => {
  const reservationCount = document.querySelector('.commentsCounter');
  if (data > 0) {
    reservationCount.textContent = `(${data})`;
  } else {
    reservationCount.textContent = '(0)';
  }

  return data;
};

export default reservedCounterVal;
