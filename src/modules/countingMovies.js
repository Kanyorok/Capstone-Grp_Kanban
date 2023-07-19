export const countItems = (items) => {
  const counter = document.querySelector('.counter');
  if (items.length === 0) {
    counter.textContent = '0';
    return;
  }
  counter.textContent = items.length;
};
export default countItems;