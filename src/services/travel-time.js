function TravelTime(date, duration) {
  const index = date.findIndex('T');
  const result = date.slice(index + 1, index + 6);
}