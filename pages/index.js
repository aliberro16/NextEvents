import React from "react";
import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/event-list";
function HomePage() {
  const getAllEvents = getFeaturedEvents();
  console.log(getAllEvents);
  return (
    <div>
      <EventList items={getAllEvents} />
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {},
  };
}
export default HomePage;
