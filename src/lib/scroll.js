export const scrollTo = (selector, delta) => {
  const offset = delta || 40;
  const yDist = document.querySelector(selector).offsetTop;
  window.scroll({ top: yDist - offset, left: 0, behavior: 'smooth' });
};
