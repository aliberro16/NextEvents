import React, { Fragment } from "react";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import Search from "../../components/events/events-search";
import { useRouter } from "next/router";
function AllEventsPage(props) {
  // const allEvents = getAllEvents();
  const router = useRouter();
  const events = props.events;
  function SearchNavigation(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <Search onSubmit={SearchNavigation} />
      <EventList items={events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
  };
}

export default AllEventsPage;
