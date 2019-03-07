export const scrollTo = (selector, offset = 60) => {
  const yDist = document.querySelector(selector).offsetTop;
  window.scroll({ top: yDist - offset, left: 0, behavior: 'smooth' });
};

export const getScrollOffset = () => {
  return window.pageYOffset;
};
