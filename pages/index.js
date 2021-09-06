import React from "react";
// import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
function HomePage(props) {
  // const getAllEvents = getFeaturedEvents();
  // console.log(getAllEvents);
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  // const allProfiles = JSON.stringify(featuredEvents);

  return {
    props: {
      events: featuredEvents,
    },
  };
}
export default HomePage;
