const totalComments = (info) => {
  const counter = document.querySelector('.commentsCounter');
  if (info.length > 0) {
    counter.textContent = `Comments (${info.length})`;
  } else {
    counter.textContent = 'Comments (0)';
  }
  return info;
};

export default totalComments;