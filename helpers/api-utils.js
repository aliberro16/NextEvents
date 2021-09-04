export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
