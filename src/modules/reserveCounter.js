const reservedCounterVal = (data) => {
  const reservationCount = document.querySelector('.commentsCounter');
    if (data > 0){
        reservationCount.textContent = `(${data})`;
        console.log(data);
    } else {
        reservationCount.textContent = `(0)`;
        console.log(data);
    }

  
  return data;
};

export default reservedCounterVal;
