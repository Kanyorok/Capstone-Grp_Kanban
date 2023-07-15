const totalComments = (info) => {
  const counter = document.querySelector('.commentsCounter');
  counter.innerHTML = info.length > 0 ? info.length : 0;
  return info;
};

export default totalComments;