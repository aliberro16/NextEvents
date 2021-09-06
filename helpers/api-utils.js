export async function getAllEvents() {
  const response = await fetch(
    "https://react-perender-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];
  for (const Key in data) {
    events.push({
      id: Key,
      ...data[Key],
    });
  }
  //   console.log(events);
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  //   console.log(events);
  const eventsresult = events.filter((event) => {
    return event.isFeatured;
  });
  return eventsresult;
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const events = await getAllEvents();
  const { year, month } = dateFilter;
  console.log("this is the year " + dateFilter.year);

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
