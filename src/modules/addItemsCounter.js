import axios from 'axios';

const countItems = (items) => {
  const counter = document.querySelector('.counter');
  if (items.length === 0) {
    counter.textContent = '0';
    return;
  }
  counter.textContent = items.length;
};

const fetchItems = async () => {
  try {
    const response = await axios.get('https://api.tvmaze.com/shows');
    const retrievedData = response.data;
    countItems(retrievedData);
    return retrievedData;
  } catch (error) {
    countItems([]);
    return [];
  }
};

export default fetchItems;
