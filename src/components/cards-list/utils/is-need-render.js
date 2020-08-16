function isNeedRender(numberOfStops, specificCheckboxes) {
  switch (numberOfStops) {
    case 0:
      return specificCheckboxes.without;
    case 1:
      return specificCheckboxes.one;
    case 2:
      return specificCheckboxes.two;
    case 3:
      return specificCheckboxes.three;
    default:
      return false;
  }
}

export default isNeedRender;
