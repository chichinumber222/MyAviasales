export function addZero(element) {
  if (String(element).length === 1) return `0${element}`;
  return element;
}

export function travelTime(date, duration) {
  const dateFrom = new Date(date);
  const hoursFrom = dateFrom.getUTCHours();
  const minsFrom = dateFrom.getUTCMinutes();

  const dateIn = new Date(dateFrom.getTime() + duration * 60 * 1000);
  const hoursIn = dateIn.getUTCHours();
  const minsIn = dateIn.getUTCMinutes();

  return `${addZero(hoursFrom)}:${addZero(minsFrom)} - ${addZero(hoursIn)}:${addZero(minsIn)}`;
}

export function minutesToHours(min) {
  return `${Math.floor(min / 60)}ч ${min % 60}м`;
}

export function calculateStops(stops) {
  if (stops.length === 0) return 'БЕЗ ПЕРЕСАДОК';
  if (stops.length === 1) return '1 ПЕРЕСАДКА';
  if (stops.length < 5) return `${stops.length} ПЕРЕСАДКИ`;
  return `${stops.length} ПЕРЕСАДОК`;
}
