function imitationScroll() {
  window.scrollTo(window.scrollX, window.scrollY - 1);
  window.scrollTo(window.scrollX, window.scrollY + 1);
}

export default imitationScroll;