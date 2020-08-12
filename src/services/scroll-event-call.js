function scrollEventCall() {
  window.dispatchEvent(new CustomEvent('scroll'));
}

export default scrollEventCall;
