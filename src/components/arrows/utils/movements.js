export const moveUp = () => window.scrollTo(window.scrollX, 0);
export const moveDown = () => {
  const maxDown = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo(window.scrollX, maxDown);
};
