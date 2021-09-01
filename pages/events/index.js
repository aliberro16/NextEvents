import React, { Fragment } from 'react';
import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list';
import Search from '../../components/events/events-search';
import { useRouter } from 'next/router';
function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  function SearchNavigation(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <Search onSubmit ={SearchNavigation}/>
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
